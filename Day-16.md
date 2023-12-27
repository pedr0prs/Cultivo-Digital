# Redes de computadores #

## o que é redes ##

Quando se tem um computador e esse computador é ligado a outros computadores, essa definição é meio antiquada.. 
Vamos se familizar com a nomeclatura host, e o que é um host? é tudo aquilo que está na minha rede, é um elemento na minha rede. 
Por exemplo, se eu tenho um servidor eu tenho um host, hoje um host pode ser simplesmente uma vm ou até uma máquina física ou um conteienrs.  
### Host é tudo aquilo que tem ip, tudo que está na rede ###

# PROTOCOLO DE REDE #

É uma "regra", um protocolo, onde fará a comunicação entre um ou mais hosts, para que eles consigam se comunicar. 
SE FEZ CERTO FUNCIONA! 

### Meios de comunicação ###
    - Cabo UTP
    - WIFI
    - FIBRA

### ENDEREÇAMENTO ###
    - ENDEREÇO DE REDE
    - IP
    - BROADCAST
    - GATEWAY 
    - MASCARA DE REDE

Essa informações a cima serve para realizar a comunicação entre os hosts..
O ip é a identificação na rede de um determinado host.
A mascará de rede define qual será a porção do endereço ip que será destinado a hosts, ou seja há um peçado do ip que irá determinar se vai pra rede ou host.

IP: 192.168.86<rede | host>.101 

O broadcast: 192.168.86<rede | host>.255
Normalmente representa TODA a rede.

RESUMINDO:
O IP é o endereço da máquina.
O NETMASK é o que determina qual parte do endereçamento é referente a rede "congelada" e qual parte é referente ao host. 
Network é o endereço da minha rede. 
Broadcast representa TODA a minha rede.
Gateway: é quem levará para as outras redes.

# Protocolos e o modelo OSI #

Sem esses protocolos os computadores, hosts, não conseguiriam conversar entre si... Imagine se todos computadores tivessem o mesmo protocolo de rede, seria impossível compor o que chamamos hoje de internet.

Por isso o modelo OSI surgiu e criou algumas diretrizes para que possamos seguir um determinado padrão.
Foi-se criadas as camadas mostrando como funciona a rede de computadores.

Imagem OSI

CAMADAS

Fisica = os cabos, o impulso elétrico: placa de redes, wifi
Enlance = subdividido em duas partes: MAC do dispositivo e o controle de enlace Lógico: Switches, ethernet
Rede=, Mostra a melhor rota para chegar ao destino: Roteadores
Transporte= literalmente quem transporta a informação: TCP e UDP
Sessão= Coordenar o fluxo de dados entres os nós: netbios
apresentação= prepara tudo para aplicação: TLS 
Aplicação= que já é o browser: HTTP, FTP

### Tipos redes ###

    - WAN
    - LAN
    - MAN 

### Topologias ###
    - Ethernet
    - Token Ring
    - barramento


### Convertendo o ipe mascaras binárias ###

Um endereço IP é composto por 4 octetos.

11111111 11111111 11111111 11111111
octeto-1 octeto-2 octeto-3 octeto-4 
  255      255     255      255

  converta esse ip: 192.168.86.100 em binário!

    128   64  32  16  8   4   2   1   
192= 1     1   0   0   0   0   0   0
168= 1     0   1   0   1   0   0   0 
86=  0     1   0   1   0   1   1   0
100= 0     1   1   0   0   1   0   0


    192.168.86.100/24  
        IP/CIDR 

        CIDR = soma dos octetos referente a rede... Quantidade de bits que sua máquina está usando
