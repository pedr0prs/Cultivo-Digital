# O cenário

A empresa em que você trabalha configurou o dnsmasq para gerenciar a demanda de DNS e DHCP da rede.

Atualmente, quase todo o intervalo do DHCP é usado para exibir IPs dinâmicos. Vários servidores serão adicionados à rede e precisam ser configurados com IPs conhecidos.

Sua tarefa neste laboratório é modificar a configuração do dnsmasq para que os servidores sempre tenham os mesmos IPs. Para fazer isso, além de atribuir os IPs solicitados a esses servidores, você também vai reduzir o intervalo dos IPs dinâmicos.

## Configuração da rede

Como você respeita a regra de nunca testar no ambiente de produção, primeiro fará as mudanças necessárias em uma máquina que simula a rede. Não teste os comandos no servidor DNS real.

Na prática, depois de terminar os testes, você aplicaria as mesmas mudanças ao ambiente de produção que executa o dnsmasq na rede.

Veja a configuração da rede simulada.

Na instância de teste, configuramos uma interface de rede virtual chamada eth_srv. O servidor DNS e DHCP vai focar nessa interface para detectar o que for necessário. Podemos ver o estado dessa interface com o comando ip. O comando a seguir exibe informações sobre a configuração da rede:

`ip address show eth_srv`

<!--
3: eth_srv@eth_cli: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 76:67:c9:a1:59:55 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.1/24 scope global eth_srv
       valid_lft forever preferred_lft forever
-->

A interface está configurada com o endereço IPv4 192.168.1.1 em uma rede com máscara de rede /24 ou 255.255.255.0.

Além disso, temos outra interface de rede virtual. Ela vai ser usada para simular um cliente que se comunica com o servidor e solicita tráfego DNS ou DHCP. Essa interface se chama eth_cli. Para ver o estado dela, use um comando equivalente ao exemplo acima:

`ip address show eth_cli`

<!--
2: eth_cli@eth_srv: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc 
noqueue state UP group default qlen 1000
    link/ether aa:fd:16:47:4a:cf brd ff:ff:ff:ff:ff:ff
-->

Nesse caso, a interface ainda não tem um endereço IPv4.

### Configuração atual

Como vimos, sua empresa já tem o dnsmasq implementado na rede. Neste laboratório, vamos alterar as configurações atuais. Primeiro vejamos como as coisas estão agora.

A configuração atual está armazenada em /etc/dnsmasq.d/mycompany.conf. Vamos conferir o conteúdo com o comando cat:

`cat /etc/dnsmasq.d/mycompany.conf`

<!--
# É nesta interface que o servidor DHCP vai detectar o que for necessário.
interface=eth_srv
 
# Esse comando avisa ao dnsmasq para operar apenas naquela interface e não em
# outras, para não interferir em outros
# processos dnsmasq em execução.
bind-interfaces
 
# O nome de domínio que vai ser enviado aos clientes DHCP
domain=mycompany.local
 
# Gateway padrão que vai ser enviado aos clientes DHCP
dhcp-option=option:router,192.168.1.1
 
# Servidores DNS que devem ser anunciados aos clientes DHCP
dhcp-option=option:dns-server,192.168.1.1
 
# Intervalo de IPs dinâmicos que o DHCP pode usar e o tempo de lease.
dhcp-range=192.168.1.2,192.168.1.254,24h
-->

### Explicação do significado dessas configurações

- **interface** é o nome da interface que será usada para detectar as solicitações DHCP e exibir as respostas. Neste caso, ela é definida como a interface virtual eth_srv.
- **bind-interfaces** significa que o dnsmasq só vai usar essa interface e ignorar as outras.
- **domain** é o nome de domínio usado na rede.
- **dhcp-option** permite fornecer mais informações opcionais aos clientes DHCP. Neste caso, configuramos router (também conhecido como gateway padrão) e dns-server. Quando os clientes receberem a resposta DHCP, também vão receber e aplicar essa configuração.
- **dhcp-range** indica o intervalo de IPs disponíveis para uso na atribuição de IP dinâmico, bem como a duração do lease. Neste caso, toda a rede (exceto o servidor DHCP) está disponível para o intervalo dinâmico no momento. É preciso mudar isso. O lease atual é de 24 horas, o que não é ideal para uma rede com vários dispositivos que são visíveis apenas durante períodos curtos.

### Como ativar a geração de registros de depuração

Ao testar mudanças em um serviço, é recomendável ativar a geração de registros de depuração para entender o que está acontecendo e por quê.

O dnsmasq está em execução como um daemon em segundo plano. Use o comando service da lição anterior para consultar o status dele:

`sudo service dnsmasq status`

<!-- Checking DNS forwarder and DHCP server: dnsmasq(running). -->

O serviço está em execução e gerou as últimas linhas.

Para ativar a geração de registros de depuração, vamos interromper o serviço em execução e alterar o arquivo de configuração dnsmasq. Para isso, primeiro interrompa o daemon dnsmasq:

`sudo service dnsmasq stop`

Para fazer as alterações, vamos abrir o arquivo de configuração usando um editor de texto chamado nano.

`sudo nano /etc/dnsmasq.d/mycompany.conf`

<!--
# É nesta interface que o servidor DHCP vai detectar o que for necessário.
interface=eth_srv
 
# Esse comando avisa ao dnsmasq para operar apenas naquela interface e não em
# outras, para não interferir em outros
# processos dnsmasq.
bind-interfaces
 
# O nome de domínio que vai ser enviado aos clientes DHCP
domain=mycompany.local
 
# Gateway padrão que vai ser enviado aos clientes DHCP
dhcp-option=option:router,192.168.1.1
 
# Servidores DNS que devem ser anunciados aos clientes DHCP
dhcp-option=option:dns-server,192.168.1.1
 
# Intervalo de IPs dinâmicos que o DHCP pode usar e o tempo de lease.
dhcp-range=192.168.1.2,192.168.1.254,24h
 
log-queries
 
log-facility=/var/log/dnsmasq.log
-->

No arquivo, vamos adicionar a opção `log-queries` e informar o local dos registros ao dnsmasq.

Adicione uma linha com a opção `log-queries` no final desse arquivo.

O arquivo de configuração foi modificado. Agora precisamos verificar se ele está funcionando como desejado. A primeira etapa é conferir se a sintaxe do arquivo está correta. Para isso, use um parâmetro no dnsmasq: --test

`sudo dnsmasq --test -C /etc/dnsmasq.d/mycompany.conf`

<!--
dnsmasq: syntax check OK.
-->

Depois que o arquivo de configuração for aprovado na verificação de sintaxe, inicie o daemon:

`sudo service dnsmasq start`

## Como fazer testes de consultas DNS

Para conferir se tudo está funcionando normalmente, vamos fazer algumas consultas DNS simples e ver o que o dnsmasq faz com elas. Para isso, use o comando dig, que permite solicitar o endereço IP de um determinado nome do host. Tente consultar o endereço IP de example.com:

`dig example.com @localhost`

<!--
; <<>> DiG 9.11.5-P4-5.1+deb10u5-Debian <<>> example.com @localhost
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8195
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
 
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;example.com.                   IN      A
 
;; ANSWER SECTION:
example.com.            21599   IN      A       93.184.216.34
 
;; Query time: 3 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Wed Aug 11 10:52:25 UTC 2021
;; MSG SIZE  rcvd: 56
-->

Você usou o parâmetro @localhost para informar à dig que queria usar a máquina em execução como servidor DNS. Resumindo, você consultou o dnsmasq em execução e recebeu uma resposta dele. Essa resposta inclui o endereço IPv4 do domínio solicitado.

Agora vamos analisar os registros de depuração gravados pelo dnsmasq para ver a resposta sobre a consulta:

`sudo tail /var/log/dnsmasq.log`

<!--
Aug 11 10:52:25 dnsmasq[1217]: query[A] example.com from 127.0.0.1
Aug 11 10:52:25 dnsmasq[1217]: forwarded example.com to 169.254.169.254
Aug 11 10:52:25 dnsmasq[1217]: reply example.com is 93.184.216.34
-->

Isso indica que ele encaminhou a solicitação para outro servidor DNS. Esse é o comportamento normal de um serviço de DNS com armazenamento em cache como o dnsmasq. Vamos ver o que acontece ao fazer a mesma solicitação outra vez. Execute o mesmo comando dig. Dica: pressione a seta para cima para não ter que digitar o comando novamente.

`dig example.com @localhost`

<!--
; <<>> DiG 9.11.5-P4-5.1+deb10u5-Debian <<>> example.com @localhost
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 17307
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
 
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;example.com.                   IN      A
 
;; ANSWER SECTION:
example.com.            21482   IN      A       93.184.216.34
 
;; Query time: 0 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Wed Aug 11 10:54:22 UTC 2021
;; MSG SIZE  rcvd: 56
-->

O resultado é o mesmo. Qual foi a resposta do dnsmasq?

`sudo tail /var/log/dnsmasq.log`

<!--
Aug 11 10:54:22 dnsmasq[1217]: query[A] example.com from 127.0.0.1
Aug 11 10:54:22 dnsmasq[1217]: cached example.com is 93.184.216.34
-->

Em vez de encaminhar a consulta para o servidor de nomes da máquina, ele usou o valor que já estava armazenado em cache.

Vamos ver o que acontece ao solicitar um endereço IP de um nome de domínio que não existe.

`dig example.local @localhost`

<!--
; <<>> DiG 9.11.5-P4-5.1+deb10u5-Debian <<>> example.local @localhost
;; global options: +cmd
;; Got answer:
;; WARNING: .local is reserved for Multicast DNS
;; You are currently testing what happens when an mDNS query is leaked to DNS
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 22728
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
 
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;example.local.                 IN      A
 
;; AUTHORITY SECTION:
.                       86399   IN      SOA     a.root-servers.net. nstld.verisign-grs.com. 2021081100 1800 900 604800 86400
 
;; Query time: 30 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Wed Aug 11 10:55:27 UTC 2021
;; MSG SIZE  rcvd: 117
-->

A resposta que recebemos indica que o nome não está associado a qualquer endereço IP. No registro do dnsmasq, podemos ver a resposta dele.

<!--
Aug 11 10:55:27 dnsmasq[1217]: query[A] example.local from 127.0.0.1
Aug 11 10:55:27 dnsmasq[1217]: forwarded example.local to 169.254.169.254
Aug 11 10:55:27 dnsmasq[1217]: reply example.local is NXDOMAIN
-->

Como o dnsmasq não tinha qualquer informação associada a esse domínio, ele encaminhou a consulta ao servidor DNS configurado. A resposta foi que esse domínio não existe.

Você pode solicitar outros nomes de domínio para continuar o teste.

## Como fazer testes com um cliente DHCP

Agora que sabemos que o DNS funciona corretamente, vamos testar a configuração do DHCP. No terminal, execute dhclient, que é o cliente DHCP mais comum no Linux. Como vimos antes, use a interface eth_cli. Além disso, faça com que o comando seja executado no modo detalhado e indique o script de depuração que será usado:

`sudo dhclient -i eth_cli -v -sf /root/debug_dhcp.sh`

<!--
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/
 
Listening on LPF/eth_cli/aa:fd:16:47:4a:cf
Sending on   LPF/eth_cli/aa:fd:16:47:4a:cf
Sending on   Socket/fallback
Created duid "\000\001\000\001(\246i\245\252\375\026GJ\317".
DHCPDISCOVER on eth_cli to 255.255.255.255 port 67 interval 6
DHCPOFFER of 192.168.1.142 from 192.168.1.1
DHCPREQUEST for 192.168.1.142 on eth_cli to 255.255.255.255 port 67
DHCPACK of 192.168.1.142 from 192.168.1.1
Received variables:
  Hostname: afcdeabc7bc3
  IP address: 192.168.1.142
  Network: 192.168.1.0
  Netmask: 255.255.255.0
  Router: 192.168.1.1
  Domain Name: mycompany.local
  DNS server: 192.168.1.1
bound to 192.168.1.142 -- renewal in 39980 seconds.
-->

<!---
#!/bin/sh
case "$reason" in
        BOUND|RENEW|REBIND|REBOOT)
        echo Received variables:
        echo "  Hostname: $new_host_name";
        echo "  IP address: $new_ip_address";
        echo "  Network: $new_network_number";
        echo "  Netmask: $new_subnet_mask";
        echo "  Router: $new_routers";
        echo "  Domain Name: $new_domain_name";
        echo "  DNS server: $new_domain_name_servers";
        ;;
esac
-->

O script de depuração transmitido com o parâmetro -sf faz com que, em vez de modificar todas as configurações de rede desta máquina, possamos ver as informações recebidas do servidor.

No resultado da depuração, vemos que as opções determinadas no arquivo de configuração foram enviadas corretamente ao cliente.

Ao analisar o registro do dnsmasq, você vai ver estas linhas adicionais:

<!--
Aug 11 10:57:44 dnsmasq-dhcp[1217]: DHCPDISCOVER(eth_srv) aa:fd:16:47:4a:cf 
Aug 11 10:57:44 dnsmasq-dhcp[1217]: DHCPOFFER(eth_srv) 192.168.1.142 aa:fd:16:47:4a:cf 
Aug 11 10:57:44 dnsmasq-dhcp[1217]: DHCPREQUEST(eth_srv) 192.168.1.142 aa:fd:16:47:4a:cf 
Aug 11 10:57:44 dnsmasq-dhcp[1217]: DHCPACK(eth_srv) 192.168.1.142 aa:fd:16:47:4a:cf afcdeabc7bc3
-->

Isso indica que o servidor recebeu a solicitação e a respondeu com um endereço.

Além disso, ele sabe que a máquina com o endereço MAC eth_cli se chama linux-instance. O domínio da rede está definido como mycompany.local. Isso significa que é possível consultar o endereço IP de linux-instance.mycompany.local para ver o endereço recebido pelo DHCP:

`dig linux-instance.mycompany.local @localhost`

<!--
Aug 11 11:00:35 dnsmasq[1217]: query[A] linux-instance.mycompany.local from 127.0.0.1
Aug 11 11:00:35 dnsmasq[1217]: forwarded linux-instance.mycompany.local to 169.254.169.254
Aug 11 11:00:35 dnsmasq[1217]: reply linux-instance.mycompany.local is NXDOMAIN
-->

Quando o dnsmasq atribui um endereço dinâmico, ele também registra o nome das máquinas da rede. Assim, se outras máquinas solicitarem esses nomes, o dnsmasq vai reconhecer os endereços associados a eles.

## Como mudar a configuração

Já sabemos o que o dnsmasq está fazendo e recebemos um endereço IP dele. Agora é hora de atender à solicitação da empresa de atribuir IPs fixos ao novo servidor. Para isso, use o endereço MAC da placa de rede. É preciso saber os endereços MAC dos servidores e os endereços IP que serão atribuídos a eles:

- aa:bb:cc:dd:ee:b2 - 192.168.1.2
- aa:bb:cc:dd:ee:c3 - 192.168.1.3
- aa:bb:cc:dd:ee:d4 - 192.168.1.4

Além disso, sabemos que será preciso configurar mais servidores no futuro. Por isso, deixe os primeiros 20 endereços IP fora do intervalo dinâmico.

Use a opção de configuração dhcp-host para atribuir um endereço específico a uma máquina. O formato dessa opção é listar o endereço MAC da máquina, seguido por uma vírgula e então pelo endereço IP destinado a ele. Por exemplo, o primeiro servidor na lista ficaria assim:

<!--
dhcp-host=aa:bb:cc:dd:ee:b2,192.168.1.2
dhcp-host=aa:bb:cc:dd:ee:c3,192.168.1.3
dhcp-host=aa:bb:cc:dd:ee:d4,192.168.1.4
-->

Para editar a configuração novamente, interrompa o servidor usando o comando service.

`sudo service dnsmasq stop`

Depois vamos abrir o arquivo de configuração de novo usando o nano.

`sudo nano /etc/dnsmasq.d/mycompany.conf`

Precisamos mudar a opção dhcp-range e adicionar as linhas dhcp-host:

- Altere a opção dhcp-range para que comece com 192.168.1.20 em vez de 192.168.1.2.
- Troque o tempo do lease de 24 para 6 horas.
- Ao final do arquivo, adicione três linhas dhcp-host (uma para cada servidor que precisa ser configurado) de acordo com as definições acima.

<!--
# É nesta interface que o servidor DHCP vai detectar o que for necessário.
interface=eth_srv
 
# Esse comando avisa ao dnsmasq para operar apenas naquela interface e não em
# outras, para não interferir em outros
# processos dnsmasq.
bind-interfaces
 
# O nome de domínio que vai ser enviado aos clientes DHCP
domain=mycompany.local
 
# Gateway padrão que vai ser enviado aos clientes DHCP
dhcp-option=option:router,192.168.1.1
 
# Servidores DNS que devem ser anunciados aos clientes DHCP
dhcp-option=option:dns-server,192.168.1.1
 
# Intervalo de IPs dinâmicos que o DHCP pode usar e o tempo de lease.
dhcp-range=192.168.1.20,192.168.1.254,6h
 
dhcp-host=aa:bb:cc:dd:ee:b2,192.168.1.2
dhcp-host=aa:bb:cc:dd:ee:c3,192.168.1.3
dhcp-host=aa:bb:cc:dd:ee:d4,192.168.1.4
log-queries
 
log-facility=/var/log/dnsmasq.log
-->

Verifique o arquivo de configuração novamente.

`sudo dnsmasq --test -C /etc/dnsmasq.d/mycompany.conf`

<!--
dnsmasq: syntax check OK.
-->

Quando você tiver certeza de que a sintaxe da configuração está certa, reinicie o serviço com o mesmo comando de antes:

`sudo service dnsmasq start`

Agora vamos conferir se as linhas adicionadas para especificar os endereços IP fixos funcionam. Como estamos usando uma instância de teste com um ambiente de rede simulado, podemos definir o endereço MAC da interface de rede como um dos exemplos especificados no arquivo de configuração para testar a mudança.

Importante: não mude o endereço MAC das máquinas reais da rede, porque isso pode causar vários problemas de rede difíceis de depurar. Só é possível usar essa técnica no laboratório porque esta é uma simulação de teste.

Mude o endereço MAC de eth_cli com o comando ip link.

`sudo ip link set eth_cli address aa:bb:cc:dd:ee:c3`

Assim como muitos outros comandos do Linux, esse comando não gera qualquer saída se for executado sem erros. Para ver o que ele fez, precisamos conferir a interface novamente, como fizemos antes.

`sudo ip address show eth_cli`

<!--
2: eth_cli@eth_srv: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether aa:bb:cc:dd:ee:c3 brd ff:ff:ff:ff:ff:ff
-->

Agora o endereço MAC (exibido na linha link/ether) corresponde a um dos novos servidores. Vamos ver se o dnsmasq nos dá o endereço IP correto.

`sudo dhclient -i eth_cli -v  -sf /root/debug_dhcp.sh`

<!--
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/
 
Listening on LPF/eth_cli/aa:bb:cc:dd:ee:c3
Sending on   LPF/eth_cli/aa:bb:cc:dd:ee:c3
Sending on   Socket/fallback
DHCPREQUEST for 192.168.1.142 on eth_cli to 255.255.255.255 port 67
DHCPREQUEST for 192.168.1.142 on eth_cli to 255.255.255.255 port 67
DHCPDISCOVER on eth_cli to 255.255.255.255 port 67 interval 4
DHCPOFFER of 192.168.1.3 from 192.168.1.1
DHCPREQUEST for 192.168.1.3 on eth_cli to 255.255.255.255 port 67
DHCPACK of 192.168.1.3 from 192.168.1.1
Received variables:
  Hostname: afcdeabc7bc3
  IP address: 192.168.1.3
  Network: 192.168.1.0
  Netmask: 255.255.255.0
  Router: 192.168.1.1
  Domain Name: mycompany.local
  DNS server: 192.168.1.1
bound to 192.168.1.3 -- renewal in 8244 seconds.
-->

Neste caso, o cliente primeiro tentou solicitar o mesmo endereço IP de antes (as linhas DHCPREQUEST), mas não recebeu resposta. Por fim, ele tentou conseguir um novo endereço com DHCPDISCOVER e recebeu uma resposta com o endereço desejado.

Qual foi a resposta do dnsmasq?

<!--
Aug 11 11:07:44 dnsmasq-dhcp[1435]: DHCPDISCOVER(eth_srv) 192.168.1.142 aa:bb:cc:dd:ee:c3 
Aug 11 11:07:44 dnsmasq-dhcp[1435]: DHCPOFFER(eth_srv) 192.168.1.3 aa:bb:cc:dd:ee:c3 
Aug 11 11:07:44 dnsmasq-dhcp[1435]: DHCPREQUEST(eth_srv) 192.168.1.3 aa:bb:cc:dd:ee:c3 
Aug 11 11:07:44 dnsmasq-dhcp[1435]: DHCPACK(eth_srv) 192.168.1.3 aa:bb:cc:dd:ee:c3 afcdeabc7bc3
-->

Você fez a mudança necessária na configuração do DHCP e confirmou que ela está funcionando.

Em uma situação real, agora seria o momento de copiar o arquivo de configuração para o ambiente de produção.

## Conclusão

Parabéns! Você fez testes com consultas DNS e modificou a configuração de um servidor DHCP.
