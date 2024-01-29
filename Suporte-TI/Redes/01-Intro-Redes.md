# Introdução a redes de computadores

Computadores se comunicam entre si como nós humanos. Para isso, eles precisam usar um conjunto de regras chamado protocolo. As redes de computadores são responsáveis por garantir que os computadores possam se ouvir, falar a mesma língua e repetir mensagens não recebidas.

Existem dois modelos principais para descrever as redes de computadores: **TCP/IP e OSI.**

Os protocolos de cada camada carregam os da camada acima para levar os dados de um lugar para o outro.
Por exemplo, o protocolo usado para levar dados da ponta de um cabo de rede para a outra é diferente do protocolo usado para levar dados de um lado do planeta para o outro.

Às vezes, ocorrem problemas na comunicação entre computadores, e cabe a um especialista em suporte de TI corrigi-los.
É por isso que entender redes de computadores é tão importante.

## Modelo TCP/IP de 5 camadas

As redes são compostas por cinco camadas, que são responsáveis por diferentes partes da comunicação.

- A camada **física:** é o que conecta os dispositivos fisicamente. Ela define como os sinais são enviados pelos cabos e conectores.
- A camada de **enlace:** de dados é responsável por interpretar esses sinais e garantir que os dispositivos possam se comunicar entre si.
- A camada de **rede:** é responsável por rotear os dados entre diferentes redes.
- A camada de **transporte:** é responsável por garantir que os dados cheguem aos aplicativos corretos.
- A camada de **aplicação:** é responsável pelo conteúdo dos dados, como e-mail, navegação na web e outros.

*Um exemplo simples de como as camadas funcionam é a entrega de um pacote.*

A camada física é o caminhão de entrega e as estradas.
A camada de enlace de dados é como os caminhões de entrega passam de um cruzamento para o outro.
A camada de rede identifica quais estradas devem ser usadas para ir do endereço A ao endereço B.
A camada de transporte garante que o motorista saiba bater na sua porta para dizer que seu pacote chegou.
E a camada de aplicação é o conteúdo do pacote em si, como o livro que você encomendou.

## O modelo de rede OSI

O modelo TCP/IP tradicional tem apenas quatro camadas, já que não diferencia a camada física da camada de enlace de dado. O outro modelo mais conhecido é o OSI. Esse é o modelo ensinado em muitos outros programas de certificação de rede, como as certificações de rede da Cisco. A principal diferença entre o nosso modelo de cinco camadas e o modelo OSI de sete camadas é que o modelo OSI divide a camada de aplicação em três camadas no total.

## Visão geral dos dispositivos de rede

### Cabos

Os cabos de rede são a forma mais comum de conectar dispositivos. Eles são feitos de cobre ou fibra óptica.
Os cabos de cobre são os mais comuns e são formados por vários pares de fios de cobre trançados. Eles são relativamente baratos e fáceis de instalar.
Existem diferentes tipos de cabos de cobre, cada um com suas próprias características. Os cabos Cat5 são os mais antigos e não são mais usados para aplicações de alta velocidade. Os cabos Cat5e e Cat6 são mais rápidos e confiáveis, mas também são mais caros.

Os cabos de fibra óptica são feitos de pequenos tubos de vidro que transportam feixes de luz. Eles são mais caros e difíceis de instalar do que os cabos de cobre, mas também são mais rápidos e confiáveis, e podem transportar dados por distâncias muito maiores.

### Hubs e Switches

Hubs e switches são dispositivos de rede que conectam computadores. Um hub é um dispositivo de camada física que envia todos os dados recebidos para todos os dispositivos conectados a ele. Isso pode causar problemas se dois dispositivos tentarem enviar dados ao mesmo tempo, pois os dados podem se colidir e serem corrompidos.

Um switch é um dispositivo de camada de enlace de dados que envia os dados apenas para o dispositivo de destino. Isso evita colisões e melhora o desempenho da rede.

Hubs e switches são os principais dispositivos para conectar computadores a uma única rede, geralmente chamada de LAN, ou local area network.

### Roteadores

Roteadores são dispositivos que conectam redes diferentes. Eles são como uma ponte entre redes, permitindo que os dados sejam enviados de uma para outra. O tipo mais comum de roteador é o roteador doméstico. Esses roteadores são usados para conectar sua casa ou escritório à Internet. Eles geralmente têm uma interface simples que permite que você configure o roteador e se conecte à sua rede ISP.

Os roteadores centrais são usados por provedores de serviços de Internet (ISPs) para conectar redes diferentes. Esses roteadores são muito mais complexos do que os roteadores domésticos e são responsáveis por encaminhar o tráfego da Internet por todo o mundo.

Roteadores funcionam usando tabelas de roteamento. Essas tabelas contêm informações sobre como chegar a diferentes redes. Quando você envia dados pela Internet, seu roteador usa a tabela de roteamento para determinar qual caminho é o melhor para enviar os dados.

Roteadores são essenciais para a Internet. Sem eles, não seria possível enviar dados entre redes diferentes.

#### Servidores e clientes

Servidor é um dispositivo que fornece dados para outros dispositivos. O dispositivo que recebe os dados é chamado de cliente. Um servidor pode ser um computador, um programa ou mesmo um aplicativo.

Por exemplo, um servidor de web fornece páginas da web para os clientes.
Um servidor de e-mail fornece e-mails para os clientes.
Um servidor de arquivos fornece arquivos para os clientes.

É importante lembrar que um dispositivo pode ser tanto servidor quanto cliente, dependendo da situação.

## camada física

A camada física é complexa, mas a parte mais importante que você precisa saber é que ela é responsável por mover os dados de um lugar para o outro. Um exemplo simples de como a camada física funciona é o cabo Ethernet que você usa para conectar seu computador ao roteador.

Quando você envia dados para outro computador pela rede, o cabo Ethernet converte esses dados em uns e zeros.
Em seguida, esses uns e zeros são transmitidos através do cabo para o outro computador.
O outro computador recebe os uns e zeros e os converte de volta em dados.

### Cabeamento de par trançados

O tipo mais comum de cabo de rede é o par trançado. Ele é feito de dois fios de cobre que são trançados entre si.
Essa torção ajuda a proteger os dados contra interferências externas. Um cabo Cat6 padrão tem oito fios, formando quatro pares trançados. Os pares são usados para enviar dados em ambas as direções. Isso é chamado de comunicação duplex.

No modo full duplex, os dispositivos podem se comunicar um com o outro ao mesmo tempo.
No modo half duplex, apenas um dispositivo pode se comunicar por vez.

### Portas de rede e painéis de conexão

O final da camada física é onde os cabos de rede se conectam aos dispositivos. Os cabos de rede de par trançado têm um conector RJ45 nas pontas. O conector RJ45 é o tipo mais comum de conector de rede. Um cabo de rede com conector RJ45 se conecta a uma porta de rede RJ45. As portas de rede são geralmente encontradas em dispositivos como switches, servidores e desktops.

As portas de rede geralmente têm dois LEDs: **um LED de link e um LED de atividade.**
O LED de link acende quando o cabo está conectado corretamente.
O LED de atividade pisca quando dados estão sendo transmitidos pelo cabo.
Às vezes, o mesmo LED é usado para link e atividade.

Em alguns casos, as portas de rede não estão conectadas diretamente aos dispositivos. Em vez disso, elas podem ser instaladas na parede ou embaixo da mesa. Nesses casos, os cabos de rede passam por paredes e chegam a um patch panel.
**O patch panel é um dispositivo que contém várias portas de rede.**
Ele é usado para conectar os cabos de rede aos switches ou roteadores.

## Enlace de dados

### Endereços Ethernet e MAC

O Ethernet é um protocolo que permite que os computadores se comuniquem entre si. Ele usa um método chamado **CSMA/CD** para evitar que dois computadores enviem dados ao mesmo tempo.
O CSMA/CD funciona assim: *se um computador não estiver enviando dados, ele pode enviar dados a qualquer momento.*
*Se dois computadores tentarem enviar dados ao mesmo tempo, eles detectarão a colisão e tentarão novamente mais tarde.*

O Ethernet também usa endereços MAC para identificar quais computadores estão enviando e recebendo dados.
*Os endereços MAC são números únicos de 48 bits que são atribuídos a cada interface de rede.*

### Unicast, multcast e broadcast

Ethernet pode enviar dados de três maneiras:

**Unicast:** envia dados para um único dispositivo.
**Multicast:** envia dados para um grupo de dispositivos.
**Broadcast:** envia dados para todos os dispositivos em uma rede.

Unicast é o tipo mais comum de transmissão. É usado quando um dispositivo precisa enviar dados para outro dispositivo específico.

Multicast é usado quando um dispositivo precisa enviar dados para um grupo de dispositivos. Por exemplo, um servidor de streaming pode usar multicast para enviar dados de vídeo para todos os dispositivos em uma rede.

Broadcast é usado quando um dispositivo precisa enviar dados para todos os dispositivos em uma rede. Por exemplo, um roteador pode usar broadcast para anunciar sua presença em uma rede.

### Dissecando um quadro Ethernet

O quadro Ethernet é o pacote de dados que é usado no nível Ethernet.
Ele tem uma estrutura bem definida, com campos obrigatórios e com tamanho fixo.

Os campos do quadro Ethernet são:

**Preâmbulo:** é uma sequência de bits usada para sincronizar os dispositivos de rede.
**Delimitador do quadro inicial:** sinaliza o início do quadro.
**Endereço MAC de destino:** identifica o dispositivo para o qual o quadro é destinado.
**Endereço MAC de origem:** identifica o dispositivo que enviou o quadro.
**Campo EtherType:** identifica o protocolo dos dados no quadro.
**Payload de dados:** é a carga útil real de dados que está sendo transmitida.
**Sequência de verificação de quadro:** é uma soma de verificação que é usada para verificar a integridade dos dados.

*A sequência de verificação de quadro é calculada usando um algoritmo matemático chamado CRC.*
*Se a sequência de verificação de quadro não corresponder à soma calculada pelo dispositivo receptor, os dados são descartados.*
