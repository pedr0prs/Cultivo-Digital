# Configurando serviço de rede

## Configurando DNS com o dnsmasq

Em grandes implantações corporativas, É provável que haja programas diferentes servindo cada um dos serviços de rede. Em configurações menores, pode ser melhor ter uma solução centralizada para todos os serviços.

O `dnsmasq`, um programa que oferece serviços de **DNS, DHCP, TFTP e PXE em um único pacote.** Ele permite fazer configurações manuais desses serviços, mesmo não sendo tão complexo quanto outras soluções para redes.

`sudo apt get install dnsmasq`

Depois de instalarmos o "dnsmasq", ele é logo ativado em sua funcionalidade mais básica. Ele tem um cache para consultas DNS. Isso significa que você pode fazer solicitações de DNS e ele lembrará a resposta para que sua máquina não precise fazer uma pesquisa de DNS externa toda vez que você fizer a consulta. Para verificar essa funcionalidade, vamos usar o comando `dig`, que nos permite consultar servidores DNS e ver suas respostas. Então, vamos pedir ao nosso servidor DNS em execução no host local o endereço `www.example.com`.

`dig www.example.com @localhost`

A parte após o @ indica qual servidor DNS queremos usar. Temos a resposta da nossa consulta. Nosso servidor DNS está nos informando o endereço IP do domínio example.com. Como sabemos que essa consulta foi respondida pelo serviço que a máquina está executando? Podemos rodar o serviço no modo de depuração para obtermos mais informações sobre o que está acontecendo nos bastidores. Não é o modo regular de rodar o serviço, mas é útil para entender o que está acontecendo.

Então, vamos parar o serviço `dnsmasq` que está rodando e, em seguida, iniciá-lo no modo de depuração.

`sudo service dnsmasq stop`

`sudo dnsmasq -d -q`

Ao agregar "d" e "q", estamos dizendo ao dnsmasq que queremos executá-lo no modo de depuração e que queremos registrar as consultas que executamos. Quando ele inicia, ele exibe as opções de compilação que estão ativadas e os arquivos de configuração que estão sendo usados. Agora podemos consultar novamente com nosso comando "dig".

`dig www.example.com @localhost`

Ele está nos mostrando que nosso serviço `dnsmasq` recebeu a consulta, encaminhou-a ao servidor DNS de configuração e respondeu à máquina original. Se consultarmos o mesmo nome de host novamente, veremos que, em vez de perguntar ao outro servidor DNS, o dnsmasq responderá com a consulta em cache.

Agora, meu segundo console. vou digitar, novamente:

`dig www.example.com @localhost`

o dnsmasq está operando como um simples servidor DNS de cache. Mas fazê-lo trabalhar mais. Por exemplo, **podemos informar uma lista de nomes de hosts IPs e fazer com que este serviço dê respostas autoritativas.**

Você deve se lembrar de que, ao tentar resolver um nome de host para um IP, pode haver servidores que armazenam as informações sobre os mapeamentos, que podem então fornecer as respostas autoritativas, enquanto outros servidores só conseguirão encaminhar e delegar as consultas ao servidor com as informações. Esses arquivos têm o mesmo formato que o arquivo `host.exe`. Eu criei este arquivo que lista o host interno que eu quero resolver.

`cat myhosts`.

Você só precisa listar qual IP está associado a cada host. Usamos o parâmetro "h" dizer ao dnsmasq que queremos incluir essa lista nas informações que estão sendo servidas.

`sudo dnsmasq -d -q -H myhosts`. Agora que temos nossa lista de hosts carregados, vamos consultar com `dig`.

Agora, em um segundo console.

`dig oxygen.local @localhost`. Como o dnsmasq é autoritativo em relação a este host, não há ninguém a quem encaminhar esta consulta. Ele também lista qual arquivo está sendo usado para obter as informações necessárias.

Finalmente, vamos ver como é o resultado quando pedimos informações que ele não tem.

`dig oxygen.local @localhost`

Vimos que ele respondeu que o serviço autoritativo são os servidores-raiz, mas não consegui encontrar nenhum resultado. O que o dnsmasq disse? Como o nome solicitado não está na lista de hosts conhecidos do nosso servidor DNS, ele encaminhou a consulta para o servidor DNS de configuração. A resposta foi NXDOMAIN, o que significa "domínio não existente".

Mesmo o dnsmasq sendo muito simples, você viu como é um servidor DNS em ação.

### Configurando DHCP com o dnsmasq

Vimos como usar o dnsmasq para atender a consultas de DNS, mas como mencionamos antes, o dnsmasq também pode ser usado para outros serviços de rede.

O servidor DHCP é geralmente configurado em uma máquina ou dispositivo com endereço IP estático configurado para a interface de rede que está sendo usada para atender às consultas DHCP.

Essa interface é então conectada à rede física que você deseja configurar através do DHCP, que pode ter inúmeras máquinas nela.

Na vida real, **o servidor DHCP e o cliente DHCP geralmente são executados em duas máquinas separadas**, mas para este exemplo, vamos fazer uma simulação em uma só máquina. Nesta máquina, nós temos uma interface chamada `eth_srv`, que está configurada para ser a interface do servidor DHCP.

`ip address show eth_srv`

Este comando nos mostra que esta interface possui o endereço IP 192.168.1.1. A parte "/24" indica que este IP está em uma rede que vai de 192.168.1.0 a 192.168.1.255.

Também temos uma interface chamada `eth_cli`, que é a interface que usaremos para simular um cliente que solicita um endereço usando o DHCP. Esta interface ainda não possui um IP configurado.

`ip address show eth_cli`

Podemos ver que essa interface não possui um endereço IPV4 configurado. Vamos mudar isso usando o nosso servidor DHCP.

Para fazer isso, precisamos fornecer configurações adicionais para o `dnsmasq`. Existem muitas coisas que podemos configurar.

Nós vamos usar um conjunto muito básico de opções. Vamos dar uma olhada no arquivo de configuração.

`cat dhcp.conf`

A opção "interface" diz ao dnsmasq que ele deve ouvir consultas de DHCP na interface `eth_srv`. A opção "vincular interfaces" informa para não escutar nenhum tipo de consulta em nenhum outra interface.

Assim, podemos ter mais de um servidor dnsmasq rodando ao mesmo tempo, cada um em sua própria interface. A opção "domínio" informa aos clientes o nome de domínio da rede e é usada para consultar nomes de host.

Então, nós temos duas opções diferentes de DHCP, que são informações adicionais que serão transmitidas para os clientes DHCP quando o IP for atribuído. Neste caso, estamos dizendo aos clientes o que configurar como gateway padrão e quais servidores DNS devem ser usados. Há muito mais opções que podemos definir, mas estas duas são as mais comuns.

Finalmente, configuramos o intervalo DHCP. Este é o intervalo de endereços IP que o servidor DHCP pode distribuir. Dependendo da sua configuração específica, você deve reservar alguns dos endereços de sua rede para máquinas que precisam ter um endereço estático. Se você não planeja fazer isso, você pode aumentar o intervalo, mas não inclua o endereço do próprio servidor DHCP.

O último valor para o intervalo do DHCP é a duração do tempo de concessão do endereço IP. Neste caso, são 12 horas, o que significa que, quando um endereço é atribuído a uma máquina, ele fica reservado para aquela máquina por essas 12 horas. Se a concessão expirar sem que o cliente a renove, o endereço pode ser atribuído a uma máquina diferente. Passamos pelo arquivo de configuração.

Vamos dizer ao dnsmasq que comece a escutar consultas usando esta configuração.

`sudo dnsmasq -d -q -c dhcp.conf`

Podemos ver no resultado que o dnsmasq está escutando consultas DHCP na interface eth_srv com as opções que definimos em nosso arquivo de configuração.

Agora, vamos rodar um cliente DHCP em um segundo terminal.

`sudo dhclient -i eth_cli -v`

Estamos usando o `dhclient`, que é um cliente DHCP muito comum no Linux. Estamos dizendo para ele rodar na interface eth_cli e estamos usando o flag "-v" para ver o resultado completo do que está acontecendo.

Agora vemos o pacote sendo trocado e como nosso cliente obteve o endereço IP 192.168.1.80. Também vemos que o cliente DHCP espera renovar o endereço antes que ele expire.

Vamos ver como nossa interface está agora.

`ip address show eth_cli`

Nossa interface eth_cli adquiriu um endereço IP. Agora, vamos ver o que o dnsmasq gravou quando a solicitação foi feita.

Vemos a mesma troca de pacotes que vimos do cliente, mas o dnsmasq também mostra que agora ele sabe o nome dd host da máquina  com o endereço 192.168.1.80, porque o dnsmasq também tem recursos de DNS. Isso significa que ele também apresenta essa informação como resposta autoritativa para consultas locais.

`dig @localhost instance-1.example`

Com isso, vimos como o dnsmasq pode atuar não apenas como servidor DNS, mas também como servidor DHCP. Esta configuração foi uma simulação para mostrar o que você pode fazer com o dnsmasq.

Como mencionado anteriormente, na vida real, haverá máquinas separadas, físicas ou virtuais. Se você quiser testar uma configuração como essa, geralmente se faz isso em uma rede separada da rede de produção. Lembre-se: nunca faça testes no ambiente de produção.
