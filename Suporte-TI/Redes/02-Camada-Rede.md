# A camada de rede

Quando você conecta seu computador a uma rede, ele precisa de um endereço para que possa se comunicar com outros dispositivos. Esse endereço é chamado de **endereço IP.**

Os endereços IP são números únicos que identificam cada dispositivo em uma rede. Eles são compostos de quatro números decimais separados por pontos. Por exemplo, o endereço IP do Google é 172.217.0.1.

Os endereços IP são distribuídos em blocos grandes para organizações e empresas. Isso significa que um dispositivo pode ter um endereço IP diferente em diferentes redes.

Por exemplo, seu computador pode ter um endereço IP diferente em sua casa, no trabalho ou em uma cafeteria.

## Endereços IP dinâmicos e estáticos

Existem dois tipos de endereços IP: **dinâmicos e estáticos.**

Os endereços IP dinâmicos são atribuídos automaticamente a um dispositivo quando ele se conecta a uma rede. Isso é feito por um servidor **DHCP (_Protocolo de configuração dinâmica de máquina_).**

Os endereços IP estáticos são atribuídos manualmente a um dispositivo. Eles são mais comuns em redes grandes e complexas.

## Datagramas IP e encapsulamento

**Datagramas IP** são a unidade básica de dados na camada de rede do modelo OSI. Eles são compostos por um cabeçalho e uma carga útil.

O cabeçalho contém informações de controle, como o endereço IP de origem e destino, o tamanho do datagrama e o tipo de serviço. A carga útil é a parte do datagrama que contém os dados reais que estão sendo transmitidos.

**Encapsulamento** é o processo de adicionar informações de controle a uma unidade de dados. No caso de datagramas IP, o encapsulamento ocorre na camada de rede. O encapsulamento adiciona informações de controle ao datagrama, como o endereço IP de origem e destino.

### Exemplo

Imagine que você está enviando um e-mail para um amigo. O e-mail é a carga útil do datagrama IP. O cabeçalho do datagrama IP contém informações de controle, como o endereço IP do seu computador e o endereço IP do computador do seu amigo.
Quando seu computador envia o e-mail, ele encapsula o e-mail em um datagrama IP. O datagrama IP é então enviado pela rede para o computador do seu amigo.

## Classes de endereço IP

Os endereços IP são divididos em duas partes: o ID da rede e o ID da máquina.
O sistema de classes de endereço é uma maneira de definir como o espaço global de endereços IP é dividido.

### Classes A, B e C

*As três classes principais de endereços IP são a classe A, a classe B e a classe C.*

- **Classe A:** Os endereços da classe A são aqueles em que o primeiro octeto é usado para o ID da rede e os últimos três, para o ID da máquina.
- **Classe B:** Os endereços da classe B são aqueles em que os dois primeiros octetos são do ID de rede e os dois seguintes, para o ID da máquina.
- **Classe C:** Os endereços da classe C são aqueles onde os primeiros três octetos são usados para o ID de rede e somente o octeto final é usado para o ID da máquina.

### Tamanho das redes

*Cada classe de endereço representa uma rede de tamanhos completamente diferentes.*

- **Classe A:** Uma rede de classe A tem um total de 24 bits de espaço de ID de máquina, o que significa que existem 16.777.216 endereços únicos possíveis.
- **Classe B:** Uma rede de classe B tem um total de 16 bits de espaço de ID de máquina, o que significa que existem 65.536 endereços únicos possíveis.
- **Classe C:** Uma rede de classe C tem um total de 8 bits de espaço de ID de máquina, o que significa que existem 256 endereços únicos possíveis.

#### Como identificar a classe de um endereço IP

*É possível identificar a classe de um endereço IP apenas olhando para ele.*

*Classe A: O primeiro bit do endereço IP é zero.*
*Classe B: Os dois primeiros bits do endereço IP são 1 e 0.*
*Classe C: Os três primeiros bits do endereço IP são 110.*

### Endereços IP especiais

Além das classes A, B e C, existem duas outras classes de endereços IP:

- **Classe D:** Os endereços da classe D sempre começam com os bits 1110 e são usados para multidifusão.
- **Classe E:** Os endereços da classe E são reservados para uso futuro.

O sistema de classes de endereço hoje

**O sistema de classes de endereço foi substituído pelo sistema CIDR, ou roteamento entre domínios sem classe. No entanto, o sistema de classes de endereço ainda é importante entender para quem procura um conhecimento de redes bem amplo e equilibrado.**

## Protocolo de resolução de endereço

O **ARP** é um protocolo usado para descobrir o endereço do hardware de um nó com determinado endereço IP. Quando o datagrama IP é formado por completo, ele precisa ser encapsulado dentro de um quadro Ethernet. Isso significa que o dispositivo de transmissão precisa de um endereço MAC de destino para completar o cabeçalho do quadro Ethernet. Quase todos os dispositivos conectados à rede, mantendo a tabela ARP local. A tabela ARP é apenas uma lista de endereços IP e seus endereços MAC associados.
