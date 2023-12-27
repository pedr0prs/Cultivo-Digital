# Comando ip addr e Ping # 

$ ip addr show = lista interface de configurações de rede (melhor jeito de ver o ip)

1: lo: interface que existe local
normalmente começa com 127.0.0.1/8

2: enp0s3: vm 

normalmente segue o hardware 

$ ip addr show dev nome" da rede

### traceroute e mtr ###

$ apt get install traceroute 

$ source /etc/profile = carrega o ambiente 

$ traceroute www.google.com = mostra a rota da rede 

            -n         mostra os ips


$ mtr = gráfico em cli 

### traceroute6 e mtr ###

$ ping6 

$ traceroute6 www..

$ mtr -6 www...


# introdução DNS #

Permite que use nomes amigaveis para acessar sites...

$ vim /etc/resolv.conf = arquivo que especifica os resolvedores de nomes 

# DNS Host #

$ apt-get install bind9-host

$ host www.. = traz o ipva4 e 6 

UMA PESQUISA LEVA A OUTRA 

-- aqui aprendemos a 
