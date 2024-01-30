# FTP, SFTP e TFTP

Um serviço de rede comumente usado nas empresas é o **serviço de transferência de arquivos.** Existem serviços de protocolo de transferência de arquivos diferentes usados atualmente.

- **FTP:** Também conhecido como _protocolo de transferência de arquivos._ É uma forma antiga de transferir arquivos de um computador para outro pela Internet e ainda está em uso atualmente. Não é uma maneira muito segura de transferir dados porque não dá suporte a criptografia de dados. O serviço FTP funciona quase como o serviço SSH. Os clientes que desejam acessar um servidor FTP precisam instalar um cliente FTP. No servidor FTP, instalamos o software que nos permite compartilhar informações localizadas no diretório desse servidor. O FTP é usado principalmente hoje para compartilhar conteúdo na web. Se você usa um provedor de hospedagem de sites, é possível que ele já uma conexão FTP disponível para uso, de forma a viabilizar facilmente a cópia de arquivos de e para seu site.

- **SFTP:** é uma versão segura do FTP, então faz sentido escolher essa opção em vez do FTP. Durante o processo de SFTP, os dados são enviados por meio do SSH e são criptografados.

- **TFTP:** significa _FTP trivial_. É uma maneira mais simples de transferir arquivos do que o FTP. O TFTP não requer autenticação de usuário como o FTP. Portanto, qualquer arquivo que você armazene assim deve ser genérico e não pode precisar de proteção. Um uso comum do TFTP é hospedar arquivos de instalação.

Um método de inicializar o computador sobre o qual ainda não falamos é o **boot PXE**, que significa execução de pré-inicialização. Ele permite a inicialização de um software disponível na rede. Um caso típico de empresa que deseja instalar o software pela rede é manter os arquivos de instalação do sistema operacional em um servidor TFTP. Dessa forma, quando você executa uma inicialização pela rede, você pode ser automaticamente levado para o instalador. É algo muito mais eficiente do que ter que carregar um USB para todo lado com uma imagem do sistema operacional.

## NTP

Um dos protocolos de Internet mais antigos em uso é o _protocolo de tempo de rede_, ou **NTP.** Ele é usado para manter o relógio sincronizado nas máquinas conectadas a uma rede. Você já deve ter visto o NTP em sua vida pessoal se você já foi a um aeroporto. Os aeroportos utilizam sistemas de relógios sincronizados e muitos dos sistemas deles usam o NTP. Isso ocorre porque as informações que você vê na tela de partidas e chegadas têm que coincidir com a hora que a equipe de controle de tráfego aéreo vê. As máquinas precisam ter a hora precisa na rede por vários motivos.

Existem alguns serviços de segurança como o **Kerberos** e o _protocolo de autenticação de rede_, que dependem de que a hora esteja exatamente igual em toda a rede para funcionarem. É importante manter a hora certa e igual em toda a frota da sua empresa.

**Você não pode depender só do hardware para manter a hora sincronizada, então você deve configurar um servidor NTP**. Podemos usar um servidor NTP local ou um servidor NTP público. Para configurar um servidor NTP local, você pode instalar o software do servidor NTP no seu servidor de gerenciamento. Depois, você instala clientes NTP em suas máquinas informa aos computadores com qual serviço NTP eles devem sincronizar a hora. Essa é uma ótima opção, pois você pode gerenciar todo o processo de ponta a ponta.

A outra maneira de configurar o NTP é usar um servidor NTP público. Os servidores NTP públicos são gerenciados por outras empresas com as quais suas máquinas clientes se conectam para obter a hora sincronizada. Esta é uma ótima maneira de utilizar o NTP sem precisar rodar um servidor NTP dedicado. Mas se você tiver uma grande frota de milhares de máquinas, a melhor etiqueta é executar seus próprios servidores NTP.

Outra prática recomendada é executar seu próprio servidor NTP e apontá-lo para um servidor NTP público. Isso faz com que você não precise conectar todos os seus clientes a um servidor NTP público e não precise ajustar a sincronização de tempo. Esteja você rodando seu próprio servidor NTP, esteja você usando um público, o NTP é um importante serviço de rede que você deve integrar à sua frota.

### Revisão de serviços de suporte de rede

Uma intranet é uma rede interna dentro de uma empresa. Ela fica acessível para quem está na rede da empresa. As intranets podem oferecer uma ampla gama de informações e servem para melhorar a produtividade propiciando aos funcionários um meio de compartilhar informações. As intranets são mais comuns em grandes empresas e podem ser uma ferramenta muito valiosa para a produtividade dos funcionários.

Outro serviço de suporte interno amplamente usado é o servidor proxy. O servidor proxy funciona como intermediário entre a rede de uma empresa e a Internet. Ele recebe tráfego da rede e retransmite essas informações para a rede da empresa. Dessa forma, o tráfego de rede da empresa fica privado em relação à Internet. A Internet recebe o tráfego por meio do servidor proxy, mas não sabe de onde vem. Ela só conhece o proxy. Os servidores proxy também podem ser usados para monitorar e registrar a atividade interna da rede da empresa. Podem ser configurados para que determinados sites sejam filtrados e tenham acesso negado. Os servidores proxy são úteis para conferir privacidade e segurança na Internet, além de regular os acessos dentro de uma empresa.

## DNS

DNS é o que vincula os nomes que a gente entende aos endereços de IP. É um serviço de rede importante a ser configurado e mantido ao gerenciar a infraestrutura de TI de uma empresa. Se você não configurá-lo corretamente, ninguém conseguirá acessar os sites usando seus nomes. Nem precisamos pensar em DNS em nossos computadores pessoais.

Quando você liga uma máquina nova na Internet e digita o endereço de um site, ele funciona automaticamente. Você não precisa digitar o endereço IP, mas algo está acontecendo nos bastidores. Quando você se conecta a uma rede, você está usando o endereço do servidor DNS que foi fornecido pelo roteador ao qual você está conectado. Ele atualiza sua configuração de rede para usar esse endereço do servidor, que geralmente é o servidor DNS do seu provedor. A partir daí, você consegue acessar praticamente qualquer site.

Então por que configurar seu próprio serviço de DNS se o DNS funciona sozinho? Bem, existem dois motivos.
Primeiro, se você estiver rodando um serviço web, como um website, você precisa dizer à Internet em qual endereço IP seu site pode ser acessado. Para isso, você precisa configurar o DNS.
A segunda razão é que você provavelmente terá que trabalhar no seu servidor ou nas máquinas do usuários de forma remota. Na teoria, você poderia acessá-los remotamente através de um endereço IP, mas você também pode usar um nome de host mais fácil de lembrar. Para fazer isso, você precisa que o DNS vincule o endereço IP ao nome do host.

### DNS para servidores Web

Você deve se lembrar que podemos usar um servidor web para armazenar e servir conteúdo aos clientes que solicitam nossos serviços. Provavelmente vamos armazenar o conteúdo do site em nosso servidor web. Se os clientes quiserem acessar nosso site, precisamos configurar o DNS para que eles possam digitar uma URL e achar o site.

Primeiro, precisamos de um nome de domínio. Podemos comprar um nome de domínio como **ConfigurarDNSELegal.exemplo.com.** Podemos comprar nomes de domínio assim de empresas chamadas de **registradores de domínio, como GoDaddy.com ou BluHost.com.** Assim que tivermos o nosso nome de domínio, temos que apontar os arquivos do site para esse nome de domínio. Os arquivos do nosso site podem ficar armazenados em um provedor de hospedagem na nuvem ou podemos decidir armazená-los em nossos próprios servidores.

Normalmente, os registradores de domínio também fornecem serviços de hospedagem na nuvem, mas eles costumam cobrar uma taxa mensal para hospedar seus arquivos web. ***Dica: se você não quiser utilizar serviços de hospedagem na nuvem, é só rodar seu próprio servidor web.**

_Sempre há prós e contras em hospedar um serviço dentro ou fora das suas instalações. Se você for o único especialista em suporte de TI de uma empresa, não deixe de ponderar todas as suas opções antes de se comprometer com um serviço de infraestrutura._

Vamos supor que queiramos hospedar os arquivos do nosso site por conta própria. A partir daqui, precisaremos apontar o novo nome de domínio para o local onde está o conteúdo web. Podemos fazer isso de duas maneiras. A maioria dos registradores de domínio informam suas configurações de DNS e você apresenta o endereço de IP do local de armazenamento do seu conteúdo. Se você decidir não usar o registrador de domínios para hospedar o DNS para você, então você terá que configurar um servidor DNS autoritativo para o seu site. Os servidores DNS autoritativos são servidores DNS que sabem exatamente qual é o endereço de IP para determinado nome de domínio. Como somos donos do nome de domínio e hospedamos nosso conteúdo da web, faz sentido que nós mesmos tenhamos os servidores DNS que conhecem essa informação.

### DNS para redes internas

A outra razão pela qual podemos ter nossos próprios servidores DNS é poder vincular nossos computadores internos aos endereços IP. Dessa forma, podemos fazer referência a um computador pelo nome em vez do endereço IP. Existem algumas maneiras de fazer isso.

Uma dela é usar um arquivo de host local que contém endereços IP estáticos com mapeamentos dos nomes de host.

**Lembre-se de que os arquivos de host e as redes nos permitem mapear endereços IP para fazer a hospedagem manual.**

No Linux, nosso arquivo host é chamado de `etc/hosts`. Há um endereço IP que aponta para `127.0.0.1`, que aponta para um nome chamado `localhost`. Essa é só uma referência ao computador. `Localhost` é comumente usado como uma forma de acessar um servidor web local. Se eu alterar esse mapeamento de endereço IP para `www.google.com`, salvar e abrir um navegador web... E digitar `www.google.com`, não vou acessar o Google. Deixe-me lhe mostrar. Então, vou mudar meu localhost para `www.google.com`. Vou salvar. Abro meu navegador em `www.google.com` e, como você pode ver, não me levou a lugar nenhum. Ele me direcionou de volta para o meu computador local. Isso ocorre porque a consulta de DNS verificar primeiro nosso arquivo de host local, depois passa para os servidores DNS locais. Então, se houver uma entrada para `google.com` no meu arquivo de host, sou levado esse endereço IP.

Digamos que eu queira acessar o computador da `Natalie em 192.168.15` e que o nome de host dela seja `catlady.examplecompany.com`. Eu teria que inserir essa informação no arquivo de host de cada computador da minha frota.

Podemos **configurar um servidor DNS local que contenha todos os nomes de computadores da organização mapeados para seus endereços IP.** Trata-se de um local de armazenamento mais central para essas informações. Depois, mudamos as configurações de rede para que todos os computadores usem o servidor DNS em vez de usar o que nos é dado pelo provedor.

Por fim, vamos ver uma das últimas opções de DNS que podemos usar para uma rede interna. Podemos integrar um serviço de diretório que possui informações do usuário e das máquinas em sua localização central, como o Active Directory e o LDAP. Depois de configurar o DNS em nosso serviço de diretório, ele será preenchido automaticamente com os mapeamentos de endereço IP para cada máquina. Portanto, não haverá necessidade de inserir essas informações manualmente.

## DHCP

Outro serviço de rede que facilitará seu trabalho no suporte de TI é o DHCP, protocolo de configuração dinâmica de máquinas. Ao gerenciar uma infraestrutura de TI e desejar conectar um computador a uma rede, você tem duas opções.

Você pode conceder um endereço IP estático ou atribuir um endereço IP por DHCP. Quando você usa um endereço IP estático, você tem que acompanhar todos os endereços IP atribuídos aos computadores e inseridos manualmente nas configurações de rede. Se você habilitar o DHCP, seus computadores receberão um endereço IP de um servidor DHCP. Eles receberão automaticamente endereços IP e você não precisará se preocupar em configurar endereços manualmente.

Se você decidir que precisa expandir seu intervalo de endereços IP, você não precisa mudar nada nas máquinas clientes, isso acontece automaticamente. Para configurar um servidor DHCP, você precisa descobrir qual faixa de IP você pode usar para atribuir endereços IP. Se você quiser integrar com o DNS, você precisará do endereço dos seus servidores DNS locais, qual gateway você deve atribuir e a máscara de sub-rede usada. Depois de escolher o software de servidor DHCP, você tem que ajustar as configurações com essas informações. Diferentes fabricantes de software de servidor DHCP têm diferentes layouts de configurações, então você precisa pesquisar sobre o específico que você vai usar. Há muitos softwares populares de servidor DHCP que você pode usar. Depois de ligar o seu servidor DHCP e seu cliente estiver definido para receber endereços DHCP em vez de endereços IP estáticos, as configurações de DHCP devem funcionar. Nas configurações de DHCP, podemos especificar locais de servidores DNS. Os dois servidores, em seguida, sincronizam-se e quando o DHCP libera novos endereços, O DNS atualiza os mapeamentos de endereços IP automaticamente.

## Resolução de problemas em serviços de rede

### Não foi possível resolver um nome de host ou de domínio

Haverá momentos em que você estará na função de suporte de TI e não conseguirá resolver ou obter o endereço IP para um nome de site. Esse problema em particular pode ser difícil de identificar quando você o encontrar. Você pode pensar que sua conexão de rede não está funcionando.

Primeiramente, se você não conseguir resolver um nome de domínio, verifique se sua conexão de rede está realmente funcionando. Você pode fazer uma verificação rápida e fazer ping de um site que você sabe que está disponível. É comum usar o bom e velho `www.google.com`. É raro o Google estar fora do ar, embora isso possa acontecer.

`ping www.google.com.`

Parece que estamos recebendo respostas. Vamos tentar isolar outro problema: o DNS.
Para verificar se seu servidor DNS está dando um endereço correto para google.com, você pode usar o `nslookup`.
Lembre-se de que o `nslookup` nos exibe o servidor de nomes de um host ou nome de domínio, então vou executá-lo no meu terminal.
A partir daqui, podemos descartar o problema no DNS verificando se o nome do host aponta para um servidor de nomes. Se copiarmos o endereço IP do resultado e colá-lo no navegador web, ele deve resolver o nome do site se o DNS estiver funcionando.
Então eu vou seguir em frente e copiar o endereço IP não autoritativo.
Abro meu navegador web... Dá para ver que está funcionando.

O que está acontecendo? Parece que minhas configurações de DNS não estão funcionando corretamente. Vamos ver meus resultados de ping novamente. Vou até meu terminal e fazer `ping www.google.com`
Vejo que ele mostra um endereço IP diferente do que tenho aqui. Se eu for para esse endereço IP, não chego a lugar nenhum. Então eu vou pegar esse endereço IP, copiá-lo.

`sudo vim /etc/hosts`
**remove DNS google**
_sudo: unable to resolve host devan-server_

Lembre-se de que quando há uma consulta de DNS, seu computador verifica primeiro o arquivo de host. Agora, se eu acessar meu arquivo host aqui, dá para ver que tenho uma entrada para `www.google.com` E ela aponta para um endereço IP falso. Se eu remover esta linha, onde diz 127.1.1.3 e salvar esse arquivo de configuração, reiniciar meu navegador,
e digitar `www.google.com`, aí sim conseguiremos acessá-lo.

A configuração correta do DNS será aplicada a `www.google.com` Existem algumas situações em que o DNS pode ser difícil de manejar, já que pode haver muitos fatores de influência. Mas, como acontece em qualquer cenário de toubleshooting, lembre-se de **continuar isolando o problema até que você consiga uma causa-raiz.**

Com o tempo e a experiência, você aprenderá muito mais sobre o DNS e a solucionar problemas no mundo real.
​
