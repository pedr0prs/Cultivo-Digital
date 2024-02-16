# VPNs

As empresas têm muitos motivos ter segurança em suas redes. E, para tanto, elas lançam mão de algumas das tecnologias que já estudamos. Os firewalls, o NAT, o uso de espaço de endereço não roteável, etc.

As organizações geralmente têm informações proprietárias que precisam permanecer seguras. Serviços de rede destinados a acesso exclusivo para funcionários e outras coisas. Uma das maneiras mais fáceis de manter as redes seguras é usar várias tecnologias de segurança de forma que apenas dispositivos fisicamente conectados à rede local possam acessar esses recursos. Mas nem sempre os funcionários estão no escritório. Eles podem estar trabalhando em casa ou em uma viagem de negócios, e ainda assim podem precisar acessar esses recursos para fazer seu trabalho. É aí que entram as VPNs.

As redes privadas virtuais, ou VPNs, são uma tecnologia que permite estender uma rede privada ou local para um host que pode não operar na mesma rede local. As VPNs têm diversas variações e fazem muitas coisas diferentes.

O exemplo mais comum de uso das VPNs é para que funcionários acessem a rede de suas empresas quando não estão no escritório. As VPNs são um protocolo de tunelamento, o que significa que elas viabilizam acesso a algo que não está disponível localmente. Ao estabelecer uma conexão VPN, você também pode dizer que foi feito um túnel VPN.

Vamos voltar para o exemplo de um funcionário que precisa acessar os recursos da empresa enquanto não está no escritório. O funcionário pode usar um cliente VPN para estabelecer um túnel VPN na rede da empresa.

Isso colocaria no computador dele o que é conhecido como interface virtual com um IP que corresponde ao espaço de endereço da rede com a qual se estabeleceu a conexão VPN. Ao enviar dados para fora desta interface virtual, o computador pode acessar recursos internos como se estivesse fisicamente conectado à rede privada.

A maioria das VPNs funciona usando a seção payload da camada de transporte para transportar um payload criptografado que contém um segundo conjunto inteiro de pacotes: as camadas de rede, de transporte e de aplicação de um pacote destinado a atravessar a rede remota.

Basicamente, esse payload é transportado para o endpoint da VPN, onde todas as outras camadas são removidas e descartadas.

Então, o payload é descriptografado, deixando o servidor VPN com as três camadas superiores de um novo pacote. Ocorre um encapsulamento com as informações adequadas da camada de enlace de dados e ele é enviado através da rede.

Este processo é concluído de forma inversa, na direção oposta. As VPNs geralmente exigem procedimentos de autenticação rigorosos para garantir que elas só sejam acessadas por computadores e usuários autorizados.

Na verdade, as VPNs foram uma das primeiras tecnologias em que a autenticação de dois fatores se tornou comum. A autenticação de dois fatores é uma técnica em que mais do que só um nome de usuário e uma senha são necessários para autenticar.

Normalmente, um token numérico de curta duração é gerado pelo usuário através de uma peça especializada de hardware ou software. As VPNs também podem ser usadas para estabelecer conectividade site a site.

Conceitualmente, não há muita diferença em como isso funciona comparando-se com a estrutura remota. Acontece que o roteador ou às vezes um dispositivo VPN especializado em uma rede estabelece o túnel VPN para o roteador ou dispositivo VPN de outra rede.

Desta forma, dois escritórios fisicamente separados podem atuar como uma só rede e acessar recursos de rede através do túnel. É importante dizer que, assim como o NAT, as VPNs são um conceito geral de tecnologia, não um protocolo bem definido.

Existem muitas implementações diferentes de VPNs. E os detalhes de como todos elas funcionam podem ser muito específicos.

O mais importante é que as VPNs são uma tecnologia que usa túneis criptografados para permitir que um computador ou uma rede remota atue como se estivesse conectado a uma rede que não está fisicamente ligada a eles.

## Serviços de proxy

O serviço de proxy é um servidor que atua em nome de um cliente a fim de acessar outro serviço. Os proxys ficam entre os clientes e outros servidores, oferecendo benefícios como anonimato, segurança, filtragem de conteúdo, aumento de desempenho, dentre outras coisas.

Se algo lhe parece familiar, isso é bom. Já cobrimos alguns exemplos específicos de proxys, como os roteadores de gateway.

O conceito de proxy é isso: um conceito ou uma abstração. Não se refere a nenhuma implementação específica. Os proxys existem em quase todas as camadas do nosso modelo de rede.

Na maioria das vezes, você vai ouvir o termo proxy usado para se referir a proxys web. Como você pode imaginar, esses são proxys especificamente criados para tráfego na web. Um proxy web pode atender a muitos fins.

Muitos anos atrás, quando a maioria da conexões com a internet eram muito mais lentas do que hoje, muitas organizações usavam proxys web para aumentar o desempenho. Usando um proxy web, uma organização direcionava todo o tráfego web por ele, permitindo que o próprio servidor proxy recuperasse os dados da página web a partir da internet. Depois, esses dados ficavam em cache. Desta forma, se alguém solicitasse a mesma página , ele poderia simplesmente retornar os dados em cache, em vez de ter que buscar uma nova versão todas as vezes.

Esse tipo de proxy é bem antigo e você não costuma encontrá-los em uso hoje. Por quê? Bem, por um lado, a maioria das organizações tem conexões rápidas o suficiente para não haver benefício em manter páginas web em cache.

Além disso, a web tornou-se muito mais dinâmica. O acesso à página twitter terá conteúdo diferente para cada pessoa com sua conta no Twitter, então o armazenamento em cache não seria muito útil.

Um uso mais comum do proxy web hoje pode ser para impedir totalmente alguém de acessar sites como o Twitter. Uma empresa pode decidir que o acesso ao Twitter durante o horário de trabalho reduz a produtividade. Usando um proxy web, é possível direcionar todo o tráfego da web para ele, permitir que o proxy inspecione quais dados estão sendo solicitados e, depois, permitir ou negar esse pedido, dependendo de qual site está sendo acessado.

Outro exemplo de proxy é o proxy reverso. O proxy reverso é um serviço que pode parecer ser um único servidor para clientes externos, mas que representa muitos servidores que existem por trás dele.

Um bom exemplo disso é a arquitetura de sites populares hoje em dia. Sites muito populares, como o Twitter, recebem tanto tráfego que seria impossível um único servidor lidar com tudo. Um site popular assim pode precisar de muitos, muitos servidores web para dar conta do processamento de todos as solicitações recebidas.

O proxy reverso, nessa situação, pode atuar como uma frente única para muitos servidores web que estão por trás. Do ponto de vista dos clientes, parece que eles estão todos conectados ao mesmo servidor. Mas ,nos bastidores, este servidor proxy reverso está distribuindo essas solicitações recebidas para vários servidores físicos diferentes.

Outra maneira de que os proxys reversos são comumente usados por sites populares é para lidar com a descriptografia. Mais da metade de todo o tráfego na web é hoje encriptado, mas criptografar e descriptografar dados é um processo que exige muito poder de processamento.

Os proxys reversos são implementados para uso de hardwares construídos especificamente para criptografia, executando o trabalho de encriptação e desencriptação, para que os servidores web fiquem livres para só oferecer conteúdo.

Os proxys têm muitas variações e não podemos cobrir todas aqui. Mas o mais importante é que o proxy é qualquer servidor que atua como intermediário entre um cliente e outro servidor.
