# DHCP (Dynamic Host Configuration Protocol)

O gerenciamento de hosts em uma rede pode ser uma tarefa assustadora e demorada. Todo computador em uma rede moderna baseada em TCP/IP precisa ter pelo menos quatro elementos especificamente configurados. Um endereço IP, a máscara de subrede para a rede local, um gateway primário e um servidor de nomes. Sozinhas, essas quatro coisas não parecem tanto, mas quando você tem que configurá-las em centenas de máquinas, o processo fica maçante. Dessas quatro coisas, três são provavelmente iguais em quase todos os nós da rede, a máscara de subrede, o gateway primário e o servidor DNS.

Mas o último item, um endereço de IP, precisa ser diferente em cada nó da rede. Isso pode exigir muito trabalho complicado de configuração é aí que entra em ação o DHCP, ou protocolo de configuração de host dinâmico.

O DHCP é um protocolo da camada de aplicação que automatiza o processo de configuração de hosts em uma rede. Com o DHCP, uma máquina pode consultar o servidor DHCP quando o computador conecta-se à rede e recebe toda a configuração de rede de uma só vez. O DHCP não só reduz a sobrecarga administrativa de ter que configurar muitos dispositivos de rede em uma única rede, mas ele também ajuda a resolver o problema de ter que escolher qual IP atribuir a cada máquina.

Todo computador em uma rede exige um IP para suas comunicações, mas muito poucos exigem um IP que seja comumente conhecido. Para os servidores ou equipamentos de rede da sua rede, como seu roteador de gateway, ter o endereço IP estático e conhecido é muito importante.

Por exemplo:

- *os dispositivos de uma rede precisam saber o IP do seu gateway a todo tempo. Se o servidor DNS local estiver com problemas , os administradores de rede precisarão de uma forma de se conectar a alguns desses dispositivos pelo IP deles. Sem um IP estático configurado para um servidor DNS, seria difícil se conectar a ele para diagnosticar quaisquer problemas. Mas, para vários dispositivos clientes como desktops, laptops ou até mesmo telefones celulares, só é importante que eles tenham um IP na rede certa. É muito menos importante o número exato desse IP. Usando o DHCP, você pode configurar um intervalo de endereços IP reservados para esses dispositivos clientes. Isso garante que qualquer um desses dispositivos obtenham um endereço IP quando precisarem, e resolve o problema de ter que manter uma lista de cada nó na rede e seu IP correspondente.*

Existem algumas formas padrão de funcionamento do DHCP. A alocação dinâmica do DHCP é a mais comum, e funciona como acabamos de descrever. Um intervalo de endereços IP é reservado para os dispositivos clientes e um desses IPs é emitido para os dispositivos quando eles solicitam. Na alocação dinâmica, o IP de um computador pode ser diferente quase toda vez que ele se conecta à rede.

A alocação automática é muito semelhante à alocação dinâmica na questão do intervalo de endereços IP que é reservado para fins de atribuição. A principal diferença é que o servidor DHCP é solicitado a acompanhar quais IPs foram atribuídos a determinados dispositivos no passado. Usando esta informação, o servidor DHCP atribuirá o mesmo IP à mesma máquina toda vez, se for possível.

Por fim, há o que chamamos de alocação fixa. A alocação fixa exige uma lista manualmente especificada de endereços MAC e seus IPs correspondentes.
Quando um computador solicita um IP, o servidor DHCP procura o endereço MAC em uma tabela e atribui o IP que corresponde a esse endereço.
Se o endereço MAC não for encontrado, o servidor DHCP pode migrar para a alocação dinâmica ou automática, ou pode se recusar a atribuir um IP. Isso pode ser usado como medida de segurança para garantir que apenas os dispositivos com endereço MAC configurados no servidor DHCP consigam obter um IP se comunicar na rede.
Vale a pena destacar que essa descoberta DHCP pode ser usada para configurar muitas coisas além das que mencionamos aqui.
Juntamente com aspectos como endereço IP e gateway primário, você também pode usar o DHCP para atribuir itens como servidores NTP. NTP significa protocolo de tempo de rede e é usado para manter todos os computadores de uma rede sincronizados no tempo.

vale a pena observar que o DHCP pode ser usado para além do IP, da máscara de subrede, do gateway e do servidor DNS.

## DHCP em ação

O DHCP é um protocolo da camada de aplicação, o que significa que ele depende das camadas de rede, de link de dados e física para operar. Mas você deve ter notado que a função principal do DHCP é ajudar a configurar a própria camada de rede. Vamos analisar com atenção como o DHCP funciona e como ele faz suas comunicações sem ter a configuração da camada de rede.

O processo pelo qual um cliente configurado para usar o DHCP tenta obter informações de configuração da rede é conhecido como descoberta DHCP. O processo de descoberta DHCP tem quatro etapas.

Primeiro, temos a etapa de descoberta do servidor.
Os clientes DHCP enviam o que é conhecido como mensagem de descoberta de DHCP  para a rede. Como a máquina não tem IP e não conhece o IP do servidor DHCP, forma-se uma mensagem broadcast especialmente criada. O DHCP escuta na porta UDP 67 e as mensagens de descoberta DHCP são sempre enviadas pela porta UDP 68. Então a mensagem DHCPDISCOVER é encapsulada em um datagrama UDP com a porta de destino 67 e a porta de origem 68. Depois, isso é encapsulado dentro de um datagrama IP com IP de destino 255.255.255.255, e IP de origem 0.0.0.0. Esta mensagem broadcast é entregue a todos os nós da rede local. E se houver um servidor DHCP, ele recebe esta mensagem. Em seguida, o servidor DHCP examina sua própria configuração e toma uma decisão sobre qual, se for o caso, endereço IP oferecer ao cliente. Isso depende de ele estar configurado para rodar com alocação de endereço dinâmica, automática ou fixa. A resposta é enviada como uma mensagem DHCPOFFER com orta de destino 68, porta de origem 67, IP broadcast de destino 255.255.255.255 e seu IP real como origem.
Como a oferta DHCP também é broadcast, ela alcança todas as máquinas da rede. O cliente original reconhece que essa mensagem lhe foi destinada. Isso porque o DHCPOFFER tem um campo que especifica o endereço MAC do cliente que enviou a mensagem DHCPDISCOVER. A máquina cliente agora processa este DHCPOFFER para ver qual IP lhe está sendo oferecido.

Tecnicamente, o cliente DHCP pode rejeitar esta oferta. É totalmente possível que vários servidores DHCP estejam rodando na mesma rede e que um cliente DHCP esteja configurado para responder apenas a uma oferta de um IP dentro de certo intervalo. Mas isso é raro.

Mais frequentemente, o cliente DHCP responde à mensagem DHCPOFFER com uma mensagem DHCPREQUEST.
Esta mensagem diz basicamente: *"sim, quero o IP que você me oferece".*
Como o IP ainda não foi atribuído, ela continua sendo enviada do IP 0.0.0.0 para o IP broadcast 255.255.255.255

Finalmente, o servidor DHCP recebe a mensagem DHCPREQUEST e responde com DHCPACK ou com uma mensagem de confirmação DHCP.
Esta mensagem é enviada novamente para um IP broadcast 255.255.255.255, e com um IP de origem igual ao IP real do servidor DHCP.
Novamente, o cliente DHCP reconhece que esta mensagem lhe foi direcionada pela inclusão do seu endereço MAC em um dos campos da mensagem.
A pilha de rede do computador cliente agora pode usar as informações de configuração apresentadas pelo servidor DHCP para criar sua própria configuração de camada de rede.
Nesta fase, o computador que está atuando como o cliente DHCP já tem todas as informações para operar de forma plena na rede a que está conectado.

Toda essa configuração é conhecida como "lease DHCP" pois ela tem prazo de expiração.
O lease DHCP pode durar dias ou apenas um curto período de tempo. Quando o lease expira, o cliente DHCP precisa negociar um novo lease fazendo todo o processo de descoberta DHCP novamente. O cliente também pode liberar seu lease para o servidor DHCP, algo que ele faz quando se desconecta da rede. Isso permite que o servidor DHCP devolva esse endereço IP ao rol de IPs disponíveis.
