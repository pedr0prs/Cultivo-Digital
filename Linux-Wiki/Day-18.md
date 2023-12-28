### Configuração de Rotas ###

Virmos  como funciona a configuração de rotas, quanto IPV4 e IPV6,
Rota é o caminho que o pacote percorre para alcançar seu destino e está diretamente associado a sub-redes, ips e endereços, tanto ipv4 e ipv6. 

# Rotas-Calculo-Mascara #

$ ip route ls $ ip route list $ ip r ls $ = mostra rotas que estão associadas a placa de rede

$ apt-get install subnetcalc $ = faz o calculo dos bits e mostra as configurações de rede 

$ subnetcalc 192...= calcula o bits de determinado ip, explicitando: - network
              - netmask 
              - broadcast
              - wildcard mask   
              - host bits
              - max. hosts
              - host range
              - properties
                    - ip
                    - class
                    - private
                geo contry 
                DNS


conclusão: não adianta apenas ter o ip configuraado no sistema, é preciso também ter uma rota associada a essa interface, que é o caminho para que o host consiga acessar o destino0


# rotas-gateway-padrao #

caso precise criar um endereço especial de roteamento via interface pra um outro equipamento espcial chamado gateway..

$ ip route add 192.168.4.0/24 via ...

Então uma das regras importante na configuração de um endereçamento de uma máquina na rede é adicionar um gateway padrão, porquê é a rota minima que precisa ter para puder a máquina passar os destinos0, extremamente util para acessar a internet...

### Arquivo-interfaces-hotplug ###


$ cd /etc/network = mostra arquivos interfaces 


### serviços-listening ###

Escuta determina porta...

$ ss -lnt = lista 4 entradas

# nginx #

$ less /etc/services = esse arquivo contem o mapeamento entre o numero da porta e o protocolo mais comum que utiliza essa porta 

### multiplos sevicos - mesma porta ### 

 Depende, es essa maquina estiver escutando todas as portas, que é o caso do http. Não da pra instalar dois serviços na mesma porta, por exemplo o nginx com apache, dá conflito. 

Pode-se colocar dois serviços escutando na mesma porta, DESDE que não esteja escutando no mesmo IP. 

### servicos-inetd-na-pratica ###

$ systemclt list-units = lista todos unix rodando no clt 
$ |grep -i service = serviços principais 


$ install telnetd 

inetd = um serviço que chama outros serviços 

## crianço serviços de rede ## 

$ date 
$ cd /tmp
$ vim mostra-hora
                    #!/bin/bash
                    date
$ chmod 755 mostra-hora
$ ./mostra-hora 

agora vamos fazer esse serviço funcionar via rede

$ cd /etc/
$ vim inetd.conf
                    criar um serviço em baixo de STANDARD  
                    8090    stream  tcp nowait  nobody  /tmp/mostra-hora

$ systemclt restart inetd 
$ ss -intp

vamos testar agora

$ telnet localhost 8090

# netcat #

