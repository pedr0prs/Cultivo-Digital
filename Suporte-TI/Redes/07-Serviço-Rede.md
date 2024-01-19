# Serviços de rede

As redes de computadores são um sistema complexo que envolve muitas tecnologias, camadas e protocolos. No fim das contas, a finalidade principal das redes é disponibilizar serviços de rede para responder às solicitações de dados dos clientes.

O grande número e variedade de coisas que podem estar embutidos em um serviço de rede torna impossível ensinar tudo sobre eles. No entanto, existem muitos serviços e tecnologias de rede que são usados para tornar as redes de computadores mais seguras e fáceis de usar. Esses serviços e tecnologias de rede são aqueles que se relacionam diretamente com a área de redes em si, e é importante entender como eles funcionam.

## Por que precisamos de um DNS

Os humanos conseguem se lembrar muito melhor de palavras do que de números. É aí que entra em ação o DNS, ou sistema de nomes de domínio. O DNS é um serviço de rede global e amplamente distribuído que transforma para você sequências de letras em endereços IP.

O endereço IP para o nome de um domínio pode mudar todo o tempo por muitas razões diferentes. Por exemplo, uma organização pode mudar seu provedor de serviços de Internet (ISP), o que pode resultar em um novo endereço IP para seus servidores web. O nome de domínio é apenas o termo que usamos para algo que pode ser resolvido pelo DNS.

Usando o DNS, uma organização pode simplesmente mudar o endereço IP ao qual o nome de domínio está vinculado e o usuário final pode nem saber. Isso significa que os usuários não precisam se preocupar em memorizar novos endereços IP sempre que os servidores web de uma organização mudarem de endereço.

Por exemplo:

- *Tente imaginar um mundo onde se tenha que memorizar um IP para cada site que você acessa, além de memorizar um novo IP para cada mudança. Passaríamos todo o nosso dia memorizando números!*

A importância do DNS para o funcionamento da internet hoje em dia não pode ser subestimada. O DNS é essencial para que os usuários possam acessar os sites e serviços que desejam.

### DNS e localização geográfica

Os endereços IP podem se vincular a coisas diferentes dependendo do lugar do mundo em que você está. Isso ocorre porque os endereços IP são distribuídos em blocos geográficos.

Embora a maioria das comunicações na internet viaje na velocidade da luz, quanto mais você precisar direcionar dados, mais lentas as coisas ficarão. Em quase todas as situações, é mais rápido transmitir uma certa quantidade de dados entre lugares que estão geograficamente próximos uns dos outros.

Se você é uma empresa global, vai querer que pessoas de todo o mundo tenham uma ótima experiência ao acessar seu site. Então, em vez de manter todos os servidores web em um só lugar, você pode distribuí-los por data centers de todo o mundo.

Dessa forma, alguém que visite o site em Nova York pode ser atendido por um servidor web perto de Nova York, enquanto alguém de Nova Deli pode ser atendido por um servidor web mais perto de Nova Deli.

O DNS ajuda a viabilizar essa funcionalidade. Por causa de sua estrutura global, o DNS permite que as organizações decidam: se você estiver na região tal, vincule o nome de domínio a este IP. Se você estiver nessa outra região, vincule este domínio a este outro IP.

## As várias etapas da resolução de nomes

A primeira coisa que é importante saber é que os servidores DNS devem ser configurados em um nó da rede. Para que o computador funcione em uma rede moderna, ele precisa estar configurado de determinadas formas. Lembre-se de que os endereços MAC são codificados e vinculados a peças específicas do hardware. Mas também falamos que o endereço IP, a máscara de subrede e o gateway para um host devem ter configurações específicas. O servidor DNS é a quarta e última parte da configuração padrão de redes modernas. Estas são quase sempre as quatro coisas que devem ser configuradas para que um host funcione em uma rede de forma adequada. Devo destacar que um computador pode funcionar bem sem o DNS ou sem um servidor DNS configurado, mas isso dificulta o uso do computador para o ser humano.

### Existem cinco tipos principais de servidores DNS

- **Servidores de nomes de cache:** armazenam as pesquisas de nomes de domínio por um determinado período de tempo.
- **Servidores de nomes recursivos:** executam solicitações de resolução de DNS completas.
- **Servidores de nomes raiz:** são os servidores DNS de nível superior da hierarquia DNS.
- **Servidores de nomes TLD:** são os servidores DNS que controlam os domínios de nível superior, como .com, .net e .org.
- **Servidores de nomes autoritativos:** são os servidores DNS que armazenam as informações de resolução de nomes de domínio para um domínio específico.

À medida que nos aprofundamos neles, é importante observar que qualquer servidor DNS pode fazer muitas dessas funções de uma só vez.

Por exemplo:

- *em servidor de nomes de cache também pode ser um servidor de nomes recursivo.*

Os servidores de nomes de cache e recursivos são geralmente fornecidos por um ISP ou pela sua rede local. A finalidade deles é armazenar as pesquisas de nomes de domínio por um determinado período de tempo. Isso evita que o computador precise fazer uma nova pesquisa de DNS toda vez que precisar acessar um site ou serviço.

Para evitar que isso aconteça toda vez que uma nova conexão TCP é estabelecida, seu ISP ou sua rede local geralmente terão um servidor de nomes de cache disponível. A maioria dos servidores de nomes de cache também são servidores de nomes recursivos.

Os servidores de nomes recursivos são aqueles que executam solicitações de resolução de DNS completas. Eles são responsáveis por encontrar o endereço IP do host especificado pelo nome de domínio.

Todos os nomes de domínio no sistema DNS global têm um TTL, ou seja, um tempo de vida. Este valor se dá em segundos e pode ser configurado pelo proprietário de um nome de domínio de acordo com o período que o servidor de nomes está autorizado a armazenar em cache esse registro antes de descartá-lo e executar uma resolução completa novamente.

Há muitos anos, era normal esses TTLs serem muito longos, às vezes de um dia inteiro ou até mais. Isso porque a largura de banda geral disponível na internet era muito menor, de forma que os administradores de rede não queriam desperdiçar a largura de banda disponível para eles fazendo constantemente pesquisas completas de DNS.

Como a internet cresceu e ficou mais rápida, esses TTLs para a maioria dos domínios caíram para algo como minutos ou horas. Mas é importante saber que às vezes você ainda pode topar com nomes de domínio com TTLs muito longos, o que significa que pode demorar toda a duração de um TTL para que uma mudança no registro DNS possa ser conhecida em toda a internet.

A garantia de que todas as resoluções completas de DNS passem por uma série de pesquisas rigorosamente regulamentadas e controladas para obter as respostas corretas é a melhor maneira de se proteger contra pessoas mal-intencionadas que redirecionam tráfego.

Seu computador enviará sem ressalvas tráfego para qualquer IP que lhe for solicitado. Então, usando um sistema hierárquico controlado por entidades confiáveis como faz o DNS, podemos garantir melhor que as respostas às pesquisas de DNS sejam corretas.

## DNS e UDP

O DNS é um serviço da camada de aplicação que usa UDP para a camada de transporte. Isso ocorre porque o UDP é um protocolo sem conexão, o que significa que não há estabelecimento ou encerramento de uma conexão. Isso reduz o tráfego, pois uma única solicitação de DNS e sua resposta geralmente cabem em um único datagrama UDP.

Uma pesquisa completa de DNS via TCP requer 44 pacotes no mínimo. Isso ocorre porque o TCP requer um handshake triplo para estabelecer uma conexão, seguido de uma solicitação e resposta para cada hop na cadeia de resolução de nomes.

Uma pesquisa completa de DNS via UDP requer apenas 8 pacotes. Isso ocorre porque o UDP não requer um handshake para estabelecer uma conexão.

A recuperação de erros no DNS via UDP é realizada simplesmente repetindo a solicitação se não houver resposta.
