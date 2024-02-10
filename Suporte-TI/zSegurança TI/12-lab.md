# tcpdump

Neste laboratório, você vai conhecer o tcpdump e alguns recursos dele. O tcpdump é a principal ferramenta de análise de rede para profissionais de segurança da informação e redes. Como especialista em suporte de TI, ter um bom domínio desse aplicativo é essencial para entender o TCP/IP. O tcpdump mostra o tráfego da rede de uma maneira que facilita a análise e a solução de problemas.

## Atividades deste laboratório

Noções básicas sobre os comandos: você vai aprender a usar o tcpdump, ver a função de algumas sinalizações dele e saber como interpretar as respostas.
Captura de pacotes: você vai fazer exercícios para salvar e ler capturas de pacotes em arquivos.

### Como usar o tcpdump

Uso básico

Primeiro vamos apresentar o tcpdump e executar a ferramenta sem qualquer opção. O tcpdump exige privilégios raiz ou de administrador para capturar o tráfego. Portanto, todos os comandos precisam começar com sudo. No mínimo, é preciso especificar uma interface de detecção com a sinalização -i. Confira o nome da interface de rede primária com o comando ip link. Neste caso, usaremos a interface eth0 em todos os exemplos. No entanto, ela não é necessariamente a mesma que você usará na sua máquina.

Para usar o tcpdump a fim de detectar pacotes na interface, digite o comando abaixo.

`sudo tcpdump -i eth0`

Quando o tcpdump é concluído, ele apresenta um resumo com o número de pacotes capturados, filtrados ou descartados:

<!--
10:26:27.868546 IP nginx-us-west1-b.c.qwiklabs-terminal-vms-prod-00.internal.46564 > 987cae65f07e.5000: Flags [P.], seq 1:15, ack 14375, win 506, options [nop,nop,TS val 1540850423 ecr 3482513360], length 14
^C
527 packets captured
527 packets received by filter
0 packets dropped by kernel
-->

Por padrão, o tcpdump faz algumas análises de protocolo básicas. Para um estudo mais profundo, use a sinalização -v. Isso ativará a resposta detalhada. A configuração padrão do tcpdump também tenta executar buscas DNS reversas para determinar os nomes de host dos endereços IP e substituir os números de porta pelos nomes dos serviços normalmente associados a elas. Para desativar esse comportamento, use a sinalização -n. É recomendável usar essa opção para acelerar a análise e evitar gerar tráfego adicional nas buscas DNS. Para fazer um teste, digite este comando:

`sudo tcpdump -i eth0 -vn`

Você vai ver uma resposta com mais detalhes sobre cada pacote:

<!--
172.19.0.2.46564 > 172.17.0.2.5000: Flags [.], cksum 0xbb04 (correct), ack 11863, win 504, options [nop,nop,TS val 1540898645 ecr 3482561595], length 0
10:27:16.103384 IP (tos 0x0, ttl 63, id 28613, offset 0, flags [DF], proto TCP (6), length 63)
172.19.0.2.46564 > 172.17.0.2.5000: Flags [P.], cksum 0xacf9 (correct), seq 1:12, ack 11863, win 504, options [nop,nop,TS val 1540898650 ecr 3482561595], length 11
10:27:16.103391 IP (tos 0x0, ttl 64, id 11488, offset 0, flags [DF], proto TCP (6), length 52)
172.17.0.2.5000 > 172.19.0.2.46564: Flags [.], cksum 0x584f (incorrect -> 0xbaf1), ack 12, win 501, options [nop,nop,TS val 3482561601 ecr 1540898650], length 0
^C
306 packets captured
306 packets received by filter
0 packets dropped by kernel
-->

Sem a sinalização de resposta detalhada, o tcpdump mostra somente:

o protocolo da camada 3, portas e endereços de origem e de destino;
detalhes do TCP, como sinalizações, números de sequência e ack, tamanho da janela e opções.
Com a sinalização de resposta detalhada, você também vai ver todos os detalhes do cabeçalho IP, como time to live, número de identificação do IP, além de opções e sinalizações de IP.

#### Como filtrar

Vamos ver um pouco sobre a linguagem de filtros do tcpdump, junto com a análise do protocolo. O tcpdump oferece uma linguagem poderosa para filtrar pacotes. Assim você pode capturar somente o tráfego necessário para a análise. As regras de filtro são inseridas no final do comando, depois de todas as outras sinalizações. Usaremos o filtro para capturar somente o tráfego DNS para um servidor específico. Em seguida, vamos gerar tráfego DNS para demonstrar a capacidade do tcpdump de interpretar consultas e respostas DNS.

Agora insira o comando a seguir.

`sudo tcpdump -i eth0 -vn host 8.8.8.8 and port 53 &`

Vejamos como é a composição desse filtro e o que exatamente ele está fazendo. Host 8.8.8.8 especifica que queremos somente os pacotes em que o endereço IP de origem ou destino corresponde ao que especificamos (neste caso, 8.8.8.8). Para ver somente o tráfego de uma direção, basta adicionar um qualificador correspondente, como dst ou src, para os endereços IP de destino e de origem, respectivamente. Se não houver um qualificador, será usado o tráfego de ambas as direções.

Port 53 significa que queremos somente os pacotes em que a porta de origem ou de destino corresponde à especificada (neste caso, DNS). Essas duas instruções de filtro são unidas com o operador lógico and. Isso significa que as duas partes da instrução de filtro precisam ser verdadeiras para que um pacote seja capturado por ele.

Para continuar, pressione Enter.

Para listar todos os jobs em execução, use este comando:

`jobs -l`

<!--
[1]+   618 Running        sudo tcpdump -i eth0 -vn host 8.8.8.8 and port 53 &
-->
Agora anote o código da tarefa do processo acima no seu editor de texto local.

Em seguida, execute o comando abaixo.

`dig @8.8.8.8 A example.com`
A resposta será parecida com esta tela:
<!--
10:30:18.461037 IP (tos 0x0, ttl 64, id 11001, offset 0, flags [none], proto UDP (17), length 80)
    172.17.0.2.35281 > 8.8.8.8.53: 5649+ [1au] A? example.com. (52)
10:30:18.462607 IP (tos 0x80, ttl 114, id 43094, offset 0, flags [none], proto UDP (17), length 84)
    8.8.8.8.53 > 172.17.0.2.35281: 5649$ 1/0/1 example.com. A 93.184.216.34 (56)

; <<>> DiG 9.11.5-P4-5.1+deb10u5-Debian <<>> @8.8.8.8 A example.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 5649
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;example.com.                   IN      A

;; ANSWER SECTION:
example.com.            1868    IN      A       93.184.216.34

;; Query time: 2 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Wed Aug 11 10:30:18 UTC 2021
;; MSG SIZE  rcvd: 56
-->

Isso usará o utilitário dig para consultar um servidor DNS específico (neste caso, 8.8.8.8), solicitando o A record do domínio especificado (neste caso, example.com).

Depois disso, use o ID da tarefa anotado para colocar o processo em primeiro plano com o seguinte comando:

`fg % [job-id]`
<!--
sudo tcpdump -i eth0 -vn host 8.8.8.8 and port 53
^C
2 packets captured
2 packets received by filter
0 packets dropped by kernel
-->
Agora você vai ver dois pacotes capturados, já que as regras do filtro removem qualquer outro tráfego.

O primeiro é a consulta DNS, que é a pergunta (do processo em execução no terminal) enviada ao servidor. Nesse caso, o tráfego é UDP. A análise da consulta DNS do tcpdump inicia logo após o campo checksum do UDP. Ela começa com o número de identificação do DNS, seguido por algumas opções do UDP e o tipo de consulta (nesse caso, A? para indicar que estamos solicitando um A record). Depois temos o nome de domínio em que estamos interessados (example.com).

O segundo pacote é a resposta do servidor, que inclui o mesmo número de DNS da consulta original, seguido por essa própria consulta. Em seguida, é exibida a resposta à consulta, com o endereço IP associado ao nome de domínio.

Agora vamos ver os recursos do tcpdump para gravar e ler capturas de pacotes em arquivos.

##### Como salvar pacotes capturados

`sudo tcpdump -i eth0 port 80 -w http.pcap &`
Isso iniciará uma captura na interface eth0 que filtra somente o tráfego HTTP, especificando a porta 80. A sinalização -w indica que queremos gravar os pacotes capturados em um arquivo chamado http.pcap.

Durante a execução em segundo plano, vamos gerar tráfego http para ser capturado no terminal. Não interrompa a captura iniciada com o comando anterior. Se tiver feito isso, comece de novo.

Para continuar, pressione Enter.

Para listar todos os jobs em execução, use este comando:

`jobs -l`
<!--
[1]+   648 Running        sudo tcpdump -i eth0 port 80 -w http.pcap &
-->
Agora anote o código da tarefa do processo acima no seu editor de texto local.

Depois execute o seguinte comando para gerar tráfego:

`curl example.com`
Esse comando busca o HTML de example.com e o exibe na tela. A resposta será como o exemplo abaixo. Tenha em mente que só a primeira parte dela é exibida.
<!--
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
-->
Depois disso, use o ID da tarefa anotado para colocar o processo em primeiro plano com o seguinte comando:

`fg % [job-id]`

A resposta é um resumo do número de pacotes capturados.

<!--
sudo tcpdump -i eth0 port 80 -w http.pcap
^C10 packets captured
10 packets received by filter
0 packets dropped by kernel
-->
Um arquivo binário com os pacotes que acabamos de capturar, chamado http.pcap, também é criado. Não tente mostrar o conteúdo desse arquivo na tela. Como se trata de um arquivo binário, ele aparece como um texto sem sentido.
<!--
http.pcap
-->
Em algum lugar do arquivo, há informações sobre os pacotes criados ao extrair o html de example.com. Podemos fazer a leitura do arquivo usando o tcpdump com este comando:

`tcpdump -r http.pcap -nv`
<!--
reading from file http.pcap, link-type EN10MB (Ethernet)
10:33:00.317909 IP (tos 0x0, ttl 64, id 31614, offset 0, flags [DF], proto TCP (6), length 60)
    172.17.0.2.43280 > 93.184.216.34.80: Flags [S], cksum 0xe21c (incorrect -> 0xb084), seq 989487956, win 65320, options [mss 1420,sackOK,TS val 1202857771 ecr 0,nop,wscale 7], length 0
10:33:00.325430 IP (tos 0x60, ttl 53, id 24192, offset 0, flags [none], proto TCP (6), length 60)
    93.184.216.34.80 > 172.17.0.2.43280: Flags [S.], cksum 0xc4f9 (correct), seq 2553104025, ack 989487957, win 65535, options [mss 1460,sackOK,TS val 315226344 ecr 1202857771,nop,wscale 9], length 0
10:33:00.325444 IP (tos 0x0, ttl 64, id 31615, offset 0, flags [DF], proto TCP (6), length 52)
    172.17.0.2.43280 > 93.184.216.34.80: Flags [.], cksum 0xe214 (incorrect -> 0xf1c0), ack 1, win 511, options [nop,nop,TS val 1202857779 ecr 315226344], length 0
10:33:00.325500 IP (tos 0x0, ttl 64, id 31616, offset 0, flags [DF], proto TCP (6), length 127)
    172.17.0.2.43280 > 93.184.216.34.80: Flags [P.], cksum 0xe25f (incorrect -> 0x4f95), seq 1:76, ack 1, win 511, options [nop,nop,TS val 1202857779 ecr 315226344], length 75: HTTP, length: 75
        GET / HTTP/1.1
        Host: example.com
        User-Agent: curl/7.64.0
        Accept: */*

10:33:00.332224 IP (tos 0x60, ttl 53, id 24193, offset 0, flags [none], proto TCP (6), length 52)
    93.184.216.34.80 > 172.17.0.2.43280: Flags [.], cksum 0xf2ed (correct), ack 76, win 128, options [nop,nop,TS val 315226351 ecr 1202857779], length 0
10:33:00.332588 IP (tos 0x60, ttl 53, id 24194, offset 0, flags [none], proto TCP (6), length 1659)
    93.184.216.34.80 > 172.17.0.2.43280: Flags [P.], cksum 0xe85b (incorrect -> 0xa3b5), seq 1:1608, ack 76, win 128, options [nop,nop,TS val 315226351 ecr 1202857779], length 1607: HTTP, length: 1607
        HTTP/1.1 200 OK
        Accept-Ranges: bytes
        Age: 501852
        Cache-Control: max-age=604800
        Content-Type: text/html; charset=UTF-8
-->
Não é necessário usar o sudo para ler pacotes de um arquivo. O tcpdump grava os pacotes completos no arquivo, e não somente a análise baseada em texto que é exibida na tela em operações normais. Por exemplo, na saída, você vai ver o html retornado como o corpo da consulta original no terminal.

<!--
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
-->

###### Conclusão

Parabéns! Você usou o tcpdump para fazer o monitoramento básico de rede, incluindo filtrar tráfego específico. Você também aprendeu a interpretar as informações que o tcpdump exibe sobre os pacotes, além de salvar e carregar resumos dos pacotes capturados em uma sessão.
