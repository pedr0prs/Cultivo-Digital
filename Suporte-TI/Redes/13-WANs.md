# WANs

## Tecnologias das redes de longa distância

Diferentemente de uma LAN, ou rede local, a WAN significa rede de área ampla. Uma rede de área ampla funciona como uma única rede, mas abrange vários locais físicos. As tecnologias WAN geralmente exigem que você contrate um link da Internet com seu ISP. Este ISP trata de enviar seus dados de um lado para o outro. Assim, é como se todos os seus computadores estivessem no mesmo local físico. Uma configuração típica de WAN tem algumas seções.

Imagine uma rede de computadores de um lado do país e outra rede de computadores do outro. Cada uma dessas redes termina em um ponto de demarcação, que é onde a rede do ISP assume. A área entre cada ponto de demarcação e a rede principal do ISP é chamada de anel local. Este anel local seria algo como uma linha T-Carrier ou uma conexão ótica de alta velocidade com escritório regional local do provedor. De lá, ele se conecta à rede principal do ISP e à Internet como um todo.

As WANs funcionam usando vários protocolos diferentes na camada de enlace de dados para transportar seus dados de um local para o outro. Na verdade, esses mesmos protocolos funcionam no centro da própria Internet, em vez de funcionarem na nossa conhecida Ethernet.

## VPNs ponto-a-ponto

Uma alternativa popular às tecnologias WAN são as VPNs ponto-a-ponto. As tecnologias WAN são ótimas quando você precisa transportar grandes quantidades de dados para vários locais, porque as tecnologias WAN são criadas para ser super-rápidas. Uma linha a cabo ou DSL pode ser mais barata, mas não consegue lidar com a carga necessária em algumas dessas situações. Mas nos últimos anos, as empresas estão migrando cada vez mais seus serviços internos para a nuvem.

Isso torna as despesas da WAN totalmente desnecessárias. Em vez disso, as empresas podem usar VPNs ponto-a-ponto para garantir que as unidades diferentes possam se comunicar umas com as outras. Uma VPN ponto-a-ponto, também chamada de VPN site-to-site, estabelece um túnel VPN entre dois locais. Funciona muito como a VPN tradicional permite que usuários individuais atuem como se estivessem na mesma rede. A diferença é que a lógica de tunelamento VPN é tratada por dispositivos de rede dos dois lados, de forma que os usuários não tenham que estabelecer suas próprias conexões.

## Redes sem fio

No mundo de hoje, cada vez menos dispositivos se limitam a cabos físicos para se conectar às redes de computadores. As rede sem fio são exatamente o que parecem ser. Um forma de rede que não usa cabos.

As especificações mais comuns de como os dispositivos de rede sem fio devem se comunicar são definidas pelos padrões **IEEE 802.11.** Este conjunto de especificações, também chamado de família 802.11, compõem o conjunto de tecnologias que chamamos de WiFi. Os dispositivos de rede sem fio se comunicam através de ondas de rádio. Diferentes padrões 802.11 geralmente usam o mesmo protocolo básico, mas podem operar em diferentes bandas de frequência. Uma banda de frequência é uma determinada seção do espectro de rádio que foi delimitada para ser usada para certas comunicações.

As redes WiFi operam em algumas bandas de frequência diferentes. Geralmente são as bandas de 2,4 gigahertz e 5 gigahertz. Existem muitas especificações 802.11, incluindo algumas que existem apenas experimentalmente ou para testes. As especificações mais comuns que você pode encontrar são 802.11b, 802.11a, 802.11g, 802.11n e 802.11ac.

Em termos do nosso modelo de rede, você deve pensar nos protocolos 802.11 como a maneira de operarmos nas camadas física e de enlace de dados. Um quadro 802.11 possui vários campos. O primeiro é chamado de campo de controle de quadro. Este campo tem 16 bits de comprimento e contém um número de subcampos que são usados para descrever como o próprio quadro deve ser processado.

O próximo campo é chamado de campo de duração. Ele especifica o tamanho do quadro total. Assim, o receptor sabe quanto tempo deve esperar para ouvir a transmissão. Depois disso estão os quatro campos de endereço.

Um ponto de acesso sem fio é um dispositivo que conecta as partes sem fio e com fio de uma rede. Uma única rede sem fio pode ter muitos pontos de acesso diferentes para cobrir uma área grande. Os dispositivos em uma rede sem fio são associados a um determinado ponto de acesso.

Geralmente é o mais próximos fisicamente. Mas ele também pode ser determinado por outros fatores como força geral do sinal e interferência sem fio. As associações não são só importantes para o dispositivo sem fio conversar com um ponto de acesso específico, elas também permitem que as transmissões de entrada para o dispositivo sem fio sejam enviadas pelo ponto de acesso correto. Existem quatro campos de endereço porque precisa haver espaço para indicar qual ponto de acesso sem fio deve estar processando o quadro.

Então, temos nosso campo de endereço de origem normal, que representa o endereço MAC do dispositivo de envio. Mas também temos o destino pretendido na rede, juntamente com um endereço de recepção e um endereço do transmissor. O endereço do receptor é o endereço MAC do ponto de acesso que deve receber o quadro, e o endereço do transmissor é o endereço MAC de quem acabou de transmitir o quadro. Em muitas situações, o endereço de destino e do receptor podem ser os mesmos.

Geralmente, os endereços de origem e do transmissor também são os mesmos. Mas, dependendo de como exatamente uma rede sem fio foi arquitetada, nem sempre será o caso. Às vezes, os pontos de acesso sem fio transmitem esses quadros uns dos outros.

Como todos os endereços em um quadro 802.11 são endereços Mac, cada um desses quatro campos tem 6 bytes. Entre o terceiro e o quarto campo de endereço, você encontra o campo de controle de sequência. O campo de controle de sequência é de 16 bits e contém um número de sequência usado para acompanhar a ordem dos quadros. Depois disso está a seção de payload de dados, que tem todos os dados dos protocolos mais acima na pilha. Finalmente, temos um campo de sequência de verificação de quadros, que contém uma soma de verificação usada para uma verificação de redundância cíclica.

### Configuração de redes sem fio

O tipo mais comum de rede sem fio que você vai encontrar no mundo dos negócios é uma LAN sem fio, ou WLAN. Uma LAN sem fio consiste em um ou mais pontos de acesso, que atuam como pontes entre as redes sem fio e com fio. A rede com fio opera como uma LAN normal, como as que já descrevemos. A LAN com fio tem um link de saída de Internet. Para acessar recursos fora da WLAN, dispositivos sem fio se comunicam com os pontos de acesso. Então, eles encaminham o tráfego para o roteador de gateway, onde tudo ocorre como de costume.

As redes em malha são como as redes ad-hoc, já que muitos dispositivos se comunicam entre si sem fio, formando uma malha. Se você desenhasse linhas para representar os links entre os nós, você veria que a maioria das redes em malha são compostas apenas de pontos de acesso sem fio e ainda estariam conectadas a uma rede com fio. Esse tipo de rede permite implantar mais pontos de acesso à malha sem ter que passar um cabo por cada um deles. Com esse tipo de configuração, você pode aumentar o desempenho e o alcance de uma rede sem fio.

#### Canais sem fio

Os canais são muito importantes porque ajudam a resolver um problema muito antigo nas redes: os domínios de colisão.

As comunicações que se sobrepõem não podem ser adequadamente entendidas pela ponta receptora. Assim, quando duas ou mais transmissões ocorrem ao mesmo tempo, ou seja, ocorre uma colisão, todos os dispositivos em questão devem interromper suas transmissões.

Eles esperam uma quantidade aleatória de tempo e tentam novamente quando as coisas se acalmam. Isso torna tudo mais lento. O problema causado pelos domínios de colisão foram reduzidos nas redes com fio por dispositivos chamados de switches. Os switches se lembram de quais computadores estão em quais interfaces físicas. Assim, o tráfego é enviado só para aquele nó.

As rede sem fio não tem cabos, então não há interfaces físicas para um dispositivo. Ou seja, não podemos ter nada que funcione como um switch sem fio. Os dispositivos sem fio estão condenados a conversar uns com os outros. Os canais ajudam a corrigir esse problema até certo ponto.

Então, é preciso ter uma margem para as frequências exatas de uma transmissão. Alguns canais se sobrepõem, mas alguns são distantes o suficiente para não interferirem um no outro. Hoje, a maioria dos equipamentos de rede sem fio consegue detectar automaticamente quais canais estão mais congestionados. Alguns pontos de acesso só fazem essa análise quando são iniciados, outros mudam dinamicamente o canal conforme necessário.

Entre esses dois cenários e os canais especificados manualmente, você ainda pode se deparar com situações em que há um grande congestionamento do canal. Isso ocorre mais em densas áreas urbanas com muitas redes sem fio nas proximidades

O objetivo é entender como os domínios de colisão são um problema comum em todas as redes sem fio, e como você pode usar seu conhecimento sobre este espaço para otimizar as implantações de redes sem fio. Você deve ter certeza de que seus próprios pontos de acesso e os das empresas vizinhas tenham canais que se sobreponham o mínimo possível.

##### Segurança sem fio

**WEP** significa privacidade equivalente à conexão com fio e é uma tecnologia de criptografia que oferece um nível muito baixo de privacidade. Na verdade, está escrito no nome: privacidade equivalente à conexão com fio.

O uso do WEP protege um pouco seus dados, mas deve ser visto como se fosse um simples envio de dados não criptografados por meio de uma conexão com fio. O padrão WEP é um algoritmo de criptografia realmente fraco. Não leva muito tempo para alguém mal-intencionado quebrar essa criptografia e ler seus dados.

Importante saber que o número de bits de uma chave de criptografia corresponde ao nível de segurança, quanto mais bits em uma chave, mais tempo leva para alguém decifrar a criptografia.

O WEP usa apenas 40 bits para suas chaves e com a velocidade dos computadores modernos, isso pode ser quebrado em apenas alguns minutos. O WEP foi rapidamente substituído na maioria dos lugares pelo WPA, ou acesso protegido ao WiFi.

O WPA, por padrão, usa uma chave de 128 bits, tornando-o muito mais difícil de ser quebrado do que o WEP. Atualmente, o algoritmo de criptografia mais comumente usado nas redes sem fio é o WPA2, uma atualização do WPA original.

O WPA2 usa uma chave de 256 bits, tornando-o ainda mais difícil de decifrar. Outra maneira comum de proteger as redes sem fio é através do filtro de MAC. Com o filtro MAC, você configura seus pontos de acesso para permitir só as conexões de um conjunto específico de endereços MAC pertencentes a dispositivos definidos. Esse processo não faz criptografia dos dados enviados pelo ar, mas oferece uma barreira adicional impedindo dispositivos não autorizados de se conectar à sua rede sem fio.
