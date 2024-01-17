# Camadas de transporte e aplicação

As três primeiras camadas do modelo OSI explicam como os nós individuais de uma rede podem se comunicar uns com os outros. Mas não explicam como os programas de computador podem se comunicar uns com os outros.

## Camada de transporte

A camada de transporte é responsável por várias funções importantes nas redes de computadores. Dentre elas, a multiplexação e a desmultiplexação de tráfego, o estabelecimento de conexões de longa duração e a garantia da integridade dos dados por meio de checagem de erros e verificação de dados.

A multiplexação na camada de transporte significa que os nós da rede podem direcionar o tráfego para diferentes serviços de recepção. A desmultiplexação é o mesmo conceito, só que na ponta receptora, ela pega o tráfego totalmente destinado ao mesmo nó e o entrega ao serviço de recepção correto.

A camada de transporte lida com multiplexação e desmultiplexação por meio de portas. Uma porta é um número de 16 bits usado para direcionar tráfego para serviços específicos executados em um computador em rede. Diferentes serviços de rede são executados observando portas específicas em busca de solicitações.

As portas são normalmente denotadas com dois pontos após o endereço de IP. Por exemplo, o endereço IP 10.1.1.100 e a porta 80 podem ser descritos como 10.1.1.100:80. Quando escrito dessa maneira, é conhecido como endereço de socket ou número de socket.

Por exemplo:

- *um servidor web tradicional escuta na porta 80. Isso significa que se você quiser acessar um site hospedado nesse servidor, você direcionará o tráfego para 10.1.1.100 porta 80.*

O mesmo dispositivo também pode estar rodando um servidor FTP, ou File Transfer Protocol. O FTP é um método antigo usado para transferir arquivos de um computador para o outro, mas que ainda está em uso hoje. O FTP tradicionalmente escuta na porta 21. Logo, se você quisesse estabelecer uma conexão com um servidor FTP rodando no mesmo IP do servidor web em execução no nosso exemplo, você direcionaria o tráfego para 10.1.1.100 porta 21.

Em ambientes pequenos, um único servidor pode hospedar quase todas as aplicações necessárias para administrar o negócio. O mesmo computador pode hospedar um website interno, o servidor de e-mail para a empresa, um servidor de arquivos para compartilhamentos, um servidor de impressoras para compartilhamento de impressoras em rede, praticamente tudo. Tudo isso é possível em razão da multiplexação e desmultiplexação, além da adição de portas no esquema de endereçamento.

## Segmento TCP

O segmento TCP é composto de um cabeçalho TCP e uma seção de dados. A seção de dados é onde a camada de aplicação coloca seus dados.

O cabeçalho TCP é dividido em vários campos que contêm informações importantes.

- **Porta de origem:** A porta de origem é uma porta de numeração alta escolhida de uma seção especial de portas conhecidas como portas efêmeras. Ela é necessária para manter separadas muitas conexões de saída.
- **Porta de destino:** A porta de destino é a porta do serviço para o qual o tráfego é destinado. Ela é necessária para que o computador que fez a solicitação original possa enviar esses dados para o programa que os solicitou.
- **Número de sequência:** O número de sequência é um número de 32 bits usado para rastrear onde este segmento deve ficar na sequência de segmentos TCP. Ele é usado para garantir que os dados sejam recebidos na ordem correta.
- **Número de confirmação:** O número de confirmação é o número do próximo segmento esperado. Ele é usado para informar ao remetente que o segmento anterior foi recebido com sucesso.
- **Offset de dados:** O offset de dados é um número de quatro bits que comunica o comprimento do cabeçalho TCP para este segmento. Ele é usado pelo dispositivo de rede de recepção para entender onde começa o payload em si.
- **Flags de controle:** Os flags de controle são seis bits que indicam o estado da conexão TCP. Eles são usados para controlar o fluxo de dados, confirmar a recepção e indicar se os dados são urgentes.
- **Janela TCP:** A janela TCP é um número de 16 bits que especifica o intervalo de números de sequência que podem ser enviados antes que uma confirmação seja necessária. Ela é usada para controlar o fluxo de dados e evitar que o remetente envie dados demais para o destinatário.
- **Checksum:** O checksum é um número de 16 bits que é usado para verificar se os dados foram corrompidos durante a transmissão.
- **Ponteiro urgente:** O ponteiro urgente é usado em conjunto com um dos flags de controle TCP para indicar segmentos específicos que podem ser mais importantes que outros. Ele é raramente usado na prática.
- **Opções:** As opções são campos opcionais que podem ser usados para fornecer informações adicionais sobre o segmento TCP. Elas são raramente usadas na prática.

## Sinalizações de controle TCP e o handshake de três vias

A maneira como o TCP estabelece uma conexão é usando diferentes flags de controle TCP, usados em uma ordem específica. Antes de falarmos como as conexões são estabelecidas e encerradas, vamos primeiro definir os seis flags de controle TCP.

### Flags de controle TCP

- **URG:** Urgente. O valor de um indica que o segmento é considerado urgente e que o campo urgent pointer tem mais dados sobre isso.
- **ACK:** Acknowledge. O valor de um neste campo significa que o campo acknowledgment number deve ser examinado.
- **PSH:** Push. Significa que o dispositivo transmissor quer que o dispositivo receptor empurre os dados atualmente armazenados em buffer para a aplicação no terminal de recebimento o mais rápido possível.
- **RST:** Reset. Significa que um dos lados da conexão TCP não conseguiu se recuperar adequadamente de uma série de segmentos ausentes ou malformados.
- **SYN:** Sincronize. É usado no primeiro estabelecimento de uma conexão TCP, garantindo que o lado receptor saiba examinar o campo sequence number.
- **FIN:** Finish. Quando esse flag está definido como um, isso significa que o computador de transmissão não tem mais dados para enviar e a conexão pode ser encerrada.
Handshake de três vias

Para iniciar o processo, o computador A envia um segmento TCP ao computador B com o flag SYN definido. Esta é a maneira de o computador A dizer: *"Vamos estabelecer uma conexão e olhar para o meu campo sequence number para sabermos onde começar esta conversa."*

O computador B responde com um segmento TCP, em que ambos os flags SYN e ACK estão definidos. Esta é a maneira do computador B dizer: *"Claro, vamos estabelecer uma conexão e eu confirmo seu número de sequência."*

Então, o computador A responde novamente com apenas o sinalizador ACK definido, dizendo apenas: *"Confirmo sua confirmação. Vamos começar a enviar dados."*

Essa troca envolvendo segmentos que possuem SYN, SYN/ACK e ACK definidos acontece toda vez que uma conexão TCP é estabelecida em qualquer lugar. E ela é tão famosa que tem um apelido. É chamada de **handshake triplo.**

O handshake é uma maneira de garantir que dois dispositivos estejam falando no mesmo protocolo e conseguirão se entender.

Depois que o handshake triplo é concluído, a conexão TCP é estabelecida. Agora, o computador A está livre para enviar os dados que quiser para o computador B e vice-versa.

### Handshake quádruplo

Depois que um dos dispositivos envolvidos na conexão TCP estiver pronto para encerrar a conexão, algo conhecido como handshake quádruplo acontece.

O computador pronto para encerrar a conexão envia um flag FIN, que o outro computador confirma com um flag ACK.

Depois, se este computador também estiver pronto para encerrar a conexão, que quase sempre será o caso, ele envia um flag FIN. A resposta novamente é um flag ACK.

Hipoteticamente, a conexão TCP pode permanecer aberta no modo simplex com apenas um lado encerrando a conexão. Mas isso não é algo que acontece com muita frequência.

## Estados do soquete TCP

Um soquete TCP é uma conexão entre dois hosts na rede. Ele é criado por um programa de aplicação e é usado para enviar e receber dados.

Os soquetes TCP podem existir em vários estados. Cada estado representa uma etapa diferente no processo de comunicação TCP.

- **LISTEN:** O soquete está pronto para aceitar conexões de entrada. Este estado é encontrado apenas no lado do servidor.
- **SYN_SENT:** O soquete enviou uma solicitação de sincronização para outro host. Este estado é encontrado apenas no lado do cliente.
- **SYN_RECEIVED:** O soquete recebeu uma solicitação de sincronização de outro host e enviou uma confirmação. Este estado é encontrado apenas no lado do servidor.
- **ESTABLISHED:** A conexão TCP está estabelecida e os dados podem ser enviados em ambas as direções. Este estado é encontrado em ambos os lados da conexão.
- **FIN_WAIT:** O soquete enviou uma mensagem FIN para encerrar a conexão. Este estado é encontrado apenas no lado que enviou a mensagem FIN.
- **CLOSE_WAIT:** O soquete recebeu uma mensagem FIN do outro lado da conexão, mas ainda não encerrou a conexão. Este estado é encontrado apenas no lado que recebeu a mensagem FIN.
- **CLOSED:** A conexão TCP foi encerrada. Este estado é encontrado em ambos os lados da conexão.
Notas

Os estados de soquete TCP podem variar de sistema operacional para sistema operacional.
Ao solucionar problemas de conectividade TCP, é importante consultar as definições de estado do soquete para o sistema operacional com o qual você está trabalhando.

## Protocolos orientados a conexão e sem conexão

Protocolos orientados a conexão, como o TCP, oferecem proteção à integridade dos dados estabelecendo conexões entre os hosts. Os protocolos nos níveis mais baixos do modelo de rede, como o IP e a Ethernet, usam somas de verificação para garantir que os dados recebidos estejam corretos. No entanto, esses protocolos não tentam reenviar os dados que não passaram na verificação. Isso é feito pelo protocolo da camada de transporte, que está na melhor posição de saber quais dados foram entregues com sucesso.

O TCP usa números de sequência para garantir que os dados sejam recebidos na ordem correta. Se um segmento for perdido ou corrompido, o TCP pode reenviá-lo.

Protocolos sem conexão, como o UDP, não estabelecem conexões. Eles simplesmente enviam pacotes de dados para um host de destino. O UDP não fornece garantia de entrega, pois não há confirmação de recebimento.

O UDP é adequado para aplicações em que a integridade dos dados não é crítica. Por exemplo, o UDP é usado para streaming de vídeo e áudio, onde alguns quadros ou pacotes perdidos não causarão problemas significativos.

## Firewalls

Firewalls são dispositivos ou programas que bloqueiam o tráfego que atende a determinados critérios. Eles são uma parte essencial da segurança da rede, pois ajudam a proteger as redes contra ataques e acesso não autorizado.

Os firewalls podem operar em diferentes camadas da rede. Alguns firewalls podem inspecionar o tráfego da camada de aplicação, enquanto outros lidam principalmente com bloqueios de intervalos de endereços IP. No entanto, os firewalls mais comumente usados operam na camada de transporte.

Os firewalls de camada de transporte geralmente permitem ou bloqueiam o tráfego com base no número da porta. Por exemplo, um firewall pode ser configurado para permitir que o tráfego da porta 80 (HTTP) entre na rede, mas bloquear todos os outros tipos de tráfego.

Isso pode ser usado para proteger serviços específicos na rede. Por exemplo:

- *uma pequena empresa pode usar um firewall para permitir que os usuários da Internet acessem seu site, mas bloquear o acesso a outros serviços, como seu servidor de arquivos interno.*

Os firewalls podem ser dispositivos de rede independentes ou podem ser executados em outros dispositivos, como roteadores ou servidores. Eles também podem ser executados em hosts individuais.

A maioria dos sistemas operacionais modernos inclui uma funcionalidade de firewall embutida. Isso permite que os usuários configurem regras de firewall para bloquear ou permitir o tráfego para portas específicas.
