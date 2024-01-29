# Conexão remota e SSH

O SSH ou shell seguro é um protocolo implementado por outros programas para acessar um computador a partir de outro com segurança.
Para usar o SSH, você precisa ter um cliente SSH instalado no seu computador além de um servidor SSH no computador a que você está tentando se conectar. Saiba que quando falamos de servidor SSH, não se trata de outra máquina física que oferece dados. Um servidor SSH é um software. Na máquina remota, o servidor SSH é executado como um processo em segundo plano. Ele verifica constantemente se um cliente está tentando se conectar e autentica a solicitação dele.

O programa mais conhecido para usar o SSH no Linux é o OpenSSH.
O mesmo vale para o Windows. Vamos entender como usar o SSH em uma máquina Windows com um programa de código aberto bem conhecido, o PuTTY.

Então, começando pelo começo, para acessar uma máquina remota, temos que ter uma conta nela.
Também precisamos do nome do host ou endereço IP do computador.

`ssh pedr0prs@172.23.115.254`

Se der certo, recebemos uma mensagem. A autenticidade dos hosts, depois vem o endereço IP, não pode ser estabelecida. Esta mensagem está informando que nunca nos conectamos a essa máquina e nosso cliente do SSH não consegue confirmar que estamos nos conectando à máquina que queremos. Mas podemos confirmar que essa é a máquina certa. Então, vamos digitar "yes" e continuar.

Agora, esse host é salvo no computador como um host conhecido, então, não vamos receber essa mensagem de novo quando tentamos acessá-lo. Beleza, agora que nos conectamos pelo SSH, qualquer comando de texto que digitarmos será enviado com segurança ao servidor do SSH. Daqui em diante, você consegue até abrir um aplicativo para ver uma interface gráfica em vez de trabalhar no shell.
Podemos conectar o SSH usando senhas, como você viu antes. Essa forma de se autenticar em uma máquina remota é bem comum, mas não é tão segura. A alternativa é usar uma chave de autenticação SSH.

As chaves SSH são usadas em par, individualmente chamadas de chaves privada e pública.
Elas são como chaves físicas de um cofre especial. Você pode usar uma das chaves para trancar, mas ela não destranca. Já a outra chave só destranca o cofre, mas não tranca. É basicamente assim que as chaves privada e pública funcionam. Você pode bloquear algo com uma chave pública, mas só pode desbloquear com uma chave privada e vice-versa. Isso garante que o conteúdo do cofre, seja qual for, esteja disponível apenas para quem tem as chaves pública e privada.

Outra maneira de se conectar com segurança a uma máquina remota é por uma VPN. VPN significa rede privada virtual.
Ela permite se conectar a uma rede privada, como a rede do seu trabalho, pela Internet. É como um SSH mais sofisticado com um monte de configurações. Com ela, você acessa recursos, como servidores de arquivos compartilhados e dispositivos de rede, como se estivesse  trabalhando na rede da sua empresa.

## Windows: Conexões remotas

A capacidade de fazer conexões remotas é muito útil também em computadores Windows, mas não há um cliente SSH aberto para o Windows, pelo menos não ainda. Mas isso está mudando. A Microsoft anunciou que vai contribuir para o projeto OpenSSH para criar uma integração com o PowerShell.

O PuTTy é um software gratuito de código aberto usado para estabelecer conexões remotas por meio de vários protocolos de rede, incluindo SSH.

Abra um prompt do PowerShell e digite o nome do aplicativo.
Em seguida, informe que você quer se conectar via SSH adicionando a opção "-ssh". Você também pode informar o usuário e o endereço com o formato e especificando a porta no final.

`putty.exe -ssh pedr0prs@172.23.115.254`

O PuTTy também conta com uma ferramenta chamada plink, ou link do putty, que é integrada à linha de comando após a instalação do putty. Você também pode usar o plink para estabelecer conexões remotas SSH.
O SSH pode ser muito útil, principalmente para fazer conexão de um computador Windows para um sistema operacional com base em Linux em execução remotamente.

Na verdade, a Microsoft tem outra forma de se conectar a outros computadores Windows que se chama protocolo de computador remoto, ou RDP.
Há clientes RDP para Linux e OS 10 também, como o RealVNC e o Microsoft RDP no Mac. O RDP dá aos usuários uma interface gráfica ligada aos computadores remotos, desde que o computador remoto tenha ativado as conexões RDP recebidas.

Um programa-cliente chamado Cliente de serviços de terminal Microsoft, ou `MSTSC.exe`, é usado para criar conexões RDP com computadores remotos. Você pode ativar as conexões remotas no seu computador clicando no menu Iniciar, clicando com o botão direito em "Este Computador" e selecionando "Propriedades", na janela aberta, selecione "Remoto", Em seguida, escolha uma opção na seção "Computador remoto" do painel.

Há algumas implicações na segurança quando se permite que pessoas se conectem a um computador remotamente. Você só deve permitir que usuários confiáveis façam isso. Normalmente, no ramo industrial, esses tipos de configuração são feitos pelo administrador do sistema dos computadores da empresa que se conectam à rede. Depois de permitir conexões no computador remoto e confirmar que você está na lista de usuários autorizados a acessá-lo, você pode usar o cliente do protocolo de computador remoto MSTSC.exe para se conectar a ele de qualquer parte da rede.

Você pode abrir o cliente do RPD de algumas formas. Digitando `mstsc` na caixa "Executar" ou procurando `Conexões de RemoteApp` no menu inicial. Depois de abrir o cliente, você terá que informar o nome ou o endereço IP do computador ao qual quer se conectar. O cliente Windows do RDP pode ser aberto também pela linha de comando, ou você pode especificar mais parâmetros, como "/admin", se quiser se conectar à máquina remota com credenciais administrativas.

### Windows: Transferência de arquivos por conexão remota

O pacote PuTTY vem com uma ferramenta chamada PuTTy Secure Copy Client, ou pscp.exe. Você pode usá-lo para copiar arquivos de uma forma muito parecida com o comando SCP do Linux.

Usar PuTTY ou SCP para transferir arquivos pode demorar um pouco, principalmente no caso de transferir arquivos para várias máquinas. O Windows criou um mecanismo alternativo nativo para compartilhar arquivos usando o conceito de pastas compartilhadas.
Pastas compartilhadas fazem exatamente o que o nome diz. Você diz ao Windows que quer compartilhar uma pasta com uma pessoa ou grupo de pessoas e coloca alguns arquivos dentro dela. Com isso, todos com quem você compartilhou a pasta podem acessar esses arquivos. Compartilhar pastas no Windows é fácil. Basta clicar com o botão direito na pasta você compartilhar, passar o mouse sobre "Compartilhar com opções" e escolher as pessoas.

Nesta tela, você pode adicionar os usuários individualmente ou em grupo para compartilhar a pasta. Há até uma opção de adicionar todos às permissões de compartilhamento, o que pode ser conveniente, mas não é tão seguro.
Depois de compartilhar a pasta, você pode acessá-lo de outros computadores. Comece abrindo "Este Computador" e acesse a aba "Computador". Na tela aberta, você pode mapear a pasta diretamente para o seu computador com a opção "Mapear unidade de rede".

Por fim, em outro computador, é possível acessá-lo diretamente pela caixa "Executar" digitando "\", o nome do computador, seguido de "\" e o nome da pasta mapeada. Pode ser interessante para você saber que é possível compartilhar pastas pela linha de comando usando o comando "net share". O "net share" oferece o mesmo processo de compartilhamento da GUI, e você terá que especificar os tipos de permissão que gostaria de dar a que usuários.

## Linux: Transferência de arquivos por conexão remota

O SCP, ou cópia segura, é um comando do Linux que serve para copiar e colar arquivos entre computadores de uma rede.
Ele utiliza o SSH para transferir os dados. Com o SSH, você envia um arquivo como se conecta a uma máquina.
Vamos ver isso na prática. Digamos que você queira copiar um arquivo do nosso computador para outro. Para fazer isso, podemos executar o comando SCP com algumas sinalizações.

`scp /home/pedr0prs/arquivo.md pedr0prs@172.23.115.254:`

Neste comando, executamos o comando SCP com o caminho do arquivo que queremos transferir para a conta do usuário, nome de host ou caminho para o qual queremos copiar o arquivo. Agora, temos que dar as informações de acesso do computador ao qual queremos enviar o arquivo. Depois de apertar enter, vemos que o arquivo foi copiado com sucesso.
Play video starting at :1:37 and follow transcript1:37
E prontinho. O comando SCP é uma ferramenta superútil para copiar e transferir arquivos entre computadores de uma rede. Leia mais sobre o comando na página principal.

## Virtualização

A instância virtual é só uma máquina virtual. Existe um software famoso de virtualização de código aberto, o Virtual Box, para gerenciar instâncias virtuais. Não vamos abordar todos os itens do menu do Virtual Box, somente de alguns dos principais.

**Primeiro passo:** como instalar uma instância virtual? Eu já baixei uma imagem do Ubuntu do site oficial e salvei na minha área de trabalho, mas tenho que instalá-la de alguma forma. Bom, para instalar, vou clicar nesse botão "New" aqui para criar uma nova VM. Vou escolher um nome para a VM e selecionar o tipo e a versão do meu SO. Vou usar os padrões mesmo. Depois, preciso indicar quanto de RAM quero dedicar a essa VM. Um gigabyte é mais que suficiente para mim, então vou manter esse valor e continuar. Agora preciso indicar quanto de espaço do disco quero dedicar a essa VM. Vou usar o valor padrão de 10 gigabytes e clicar em "Create". Vamos manter os valores padrão só para passar logo para a criação.
Agora, aqui no menu, posso clicar em "Start" para iniciar a VM. Vou precisar selecionar uma unidade para abrir a VM, como ao inicializar com uma unidade USB que contém a imagem do sistema. Depois, vou selecionar a imagem que baixei. E, a partir daqui, a instalação começa.

## Monitoramento do sistema

O ato de criar eventos de log é chamado de registro. Seu sistema faz um bom trabalho registrando eventos instantaneamente. Na maioria dos sistemas, um serviço é executado em segundo plano para gravar eventos nos registros o tempo todo. Estes sistemas são personalizáveis, então você pode registrar qualquer campo que quiser, mas, por padrão, todos os itens essenciais são registrados.

`tail -f /var/log/syslog`

Os logs dão informações importantes, como erros que ocorreram, alterações promovidas etc. Eles são uma fonte confiável de informações.

### Windows: visualizador de eventos

No Windows, os eventos registrados pelo sistema operacional são armazenados em um aplicativo chamado **Visualizador de Eventos.**

Inicialize o Visualizador de Eventos pelo menu Iniciar ou digitando `eventvwr.msc` na caixa "Executar".
A tela padrão do Visualizador de Eventos mostra um resumo eventos recentes possivelmente importantes.
O primeiro conjunto se chama "Modos de Exibição Personalizados". O Visualizador de Eventos registra muitas informações sobre o sistema. Por isso, é normal haver uma dificuldade para separar o sinal, como eventos recentes, de ruído ou informações irrelevantes.

É aí que o conceito de modos de exibição personalizados são úteis.
Com uma tela personalizada, você pode criar um filtro que analisa todos os logs de evento que o Visualizador de Eventos conhece e extrair apenas a informação que interessa a você.

Vamos supor que queiramos ver somente eventos de erro, graves ou mais sérios, registrados na última hora. Para fazer isso, o Google gera opções de vista personalizada no painel de ações à direita. Isso abrirá uma aba chamada "Filtrar". Nessa aba, clique nas caixas "Erro" e "Nível crítico".
Vamos alterar o menu suspenso registrado para a última hora. Em "Logs de Eventos", vamos selecionar apenas os "Logs do Windows" e clicar em "Ok".
Depois, daremos um nome à vista. Clicar em "Ok" mais uma vez.

Assim que estiver tudo pronto, você verá uma nova vista nos menus personalizados onde apenas os eventos correspondentes ao filtro são exibidos. As outras duas categorias de log exibidas na página do lado esquerdo são "Logs do Windows" e "Logs de Aplicativos e Serviços".
As categorias de "Logs do Windows" contêm logs de eventos geralmente aplicados a todo o sistema operacional.

Digamos que você esteja tendo um problema com um driver que falha na inicialização. O log chamado "Sistema" seria um bom lugar para começar a investigar. Se quiser ver quem está acessando o computador, comece analisando o log "Segurança".

A outra categoria se chama "Logs de Aplicativos e Serviços". Essa categoria contém logs que monitoram eventos de um único aplicativo ou de componentes do sistema operacional, diferentemente dos eventos gerais do sistema da categoria "Logs do Windows". Por exemplo, se você está tendo problemas com o PowerShell e quer entendê-los melhor, verificar o log do PowerShell em "Logs de Aplicativos e Serviços" seria um ótimo primeiro passo.

Independentemente da categoria, cada linha de um log no Visualizador de Eventos representa um evento. Cada evento contém informações agrupadas em colunas sobre o evento, como o nível do acesso.
"Informação" é o nível mais baixo e "Crítico" é o mais alto. Você também encontra a data e a hora em que o evento ocorreu.
Ao selecionar um evento, informações detalhadas são exibidas no painel inferior do Visualizador de Eventos.
Isso pode ajudar você a investigar o problemas ou até mesmo contextualizar um relatório de erros.

O Visualizador de Eventos é um ferramenta excelente para especialistas em suporte de TI. Com ela, você tem muitas informações detalhadas disponíveis sobre os problemas que um software ou hardware pode estar tendo no sistema.
Mas são muitas informações oferecidas. Por isso, não se esqueça das vistas personalizadas e do filtro. E o mais importante: não fique com medo de mexer na ferramenta se acostumar a encontrar recursos na sua interface. Você vai se divertir e aprender muito.

### Linux: Logs

Os logs no Linux são armazenados no diretório `/var/log`. Lembre-se que o diretório "/var" significa variável, ou seja, arquivos que mudam constantemente são mantidos neste diretório, e os logs mudam constantemente.

Analisarmos o diretório "/var/log" com um "ls" pode ser um pouco intimidante. Mas não se preocupe. Cada um desses arquivos de log armazena informações específicas que podemos entender lendo o nome dos arquivos.
Vamos ver alguns dos mais comuns:
`/var/log/auth.log`: aqui, são registrados eventos relacionados a autorização e segurança.
`/var/log/kern.log`: as mensagens do kernel são registradas aqui.
`/var/log/dmesg`: aqui, são registradas as mensagens de inicialização do sistema. Se você encontrar um problema, digamos, na inicialização, aqui é um bom lugar para buscar informações. Pode ser um pouco cansativo abrir cada um desses logs para encontrar informações sobre eventos. Por sorte, há arquivos de log que combinam informações de outros arquivos de log. A desvantagem é que esses arquivos geralmente são muito grandes. Se você tem uma boa ideia de onde um problema pode estar, talvez seja melhor optar pelo arquivo de log menor e mais específico.
O único arquivo de log que registra praticamente tudo no um arquivo `/var/log/syslog`. A única coisa que **sys log** não registra por padrão são eventos desativados.

Para solucionar problemas com máquinas de usuários, `less /var/log/syslog` normalmente conterá as informações mais completas sobre o sistema, por isso, você deve começar por ele. Os arquivos de log geram muitos eventos. Por isso, eles usam muitos dados que devem ser armazenados em algum lugar da máquina. Geralmente, queremos ver os últimos eventos do sistema, por isso não precisamos sobrecarregar o disco com todas essas informações Felizmente, nossos sistemas também são ótimos em apagar arquivos de log para abrir espaço para novos arquivos. Para tanto, eles usam algo chamado rotação de logs.

No Linux, o utilitário de rotação de logs se chama **logrotate.** Você talvez queira analisar um evento que aconteceu há um mês para poder alterar suas configurações de rotação de log e evitar que eventos não tão antigos sejam excluídos.
Falamos sobre o registro pensando em uma única máquina, mas se você acabar gerenciando muitos sistemas e quiser analisar seus logs em um local central, você pode usar algo chamado registro centralizado.

#### Trabalhando com logs

`less /var/log/syslog | grep error`

Aqui, podemos ver o resultado com os logs que contêm a palavra "error". Se precisar analisar problemas que aconteceram em um intervalo de tempo, basta verificar as marcações de data e hora em torno desse horário. Você pode descobrir o que está causando o problema assim ou, pelo menos, chegar um pouco mais perto de descobrir.

`tail -f /var/log/syslog`

Aqui, você visualizar qualquer iteração que o sistema poderá fazer.

## Método de instalação de sistemas operacionais

Um método que gera imagem de computadores é a clonagem de disco. Com ele, você faz uma cópia de um disco inteiro e pode fazer backup de uma máquina atual ou configurar uma nova. Há muitas ferramentas de clonagem de disco por aí para ajudar nessa tarefa. O benefício da clonagem de disco em uma mídia de instalação independente é que também é possível instalar configurações e pastas que você talvez precise.

Uma das ferramentas de clonagem de disco é o software de código aberto Clonezilla. Você pode usá-lo para fazer backup e restaurar uma ou várias máquinas ao mesmo tempo. Uma ferramenta comercial popular de geração de imagem é o Symantec Ghost.

Com a criação de imagens de disco, as ferramentas clonam os discos de diversas formas. Uma opção é a clonagem de disco para disco, em que você conecta um disco rígido externo à máquina que quer clonar. Você pode conectar um disco rígido, como HDDs e SSDs em algo conhecido como estação de disco externo.

Esses dispositivos são ótimas ferramentas de TI que parecem torradeiras. Depois de conectar o disco externo, use a ferramenta de clonagem de disco que quiser.

A "dd" é uma ferramenta leve usada para clonar unidades também.
Vamos fazer uma cópia da unidade USB que conectei ao meu notebook e salvá-la como arquivo de imagem.

`sudo parted -l`

Primeiro, precisamos confirmar que o disco está desmontado.

`umunt /dev/sdd`

Depois, executamos o dd.

`sudo dd if=/dev/sdd of=~/media/usb-image.img bs=100M`
Você não precisa saber como funciona o dd para usar esse comando.
Isso significa: vou copiar o conteúdo de `/dev/SDD`, que é a unidade USB, e salvar na área de trabalho em um arquivo de imagem. Depois que o arquivo de imagem é salvo, ao abrirmos ele, vemos exatamente o mesmo conteúdo da unidade USB.

Você pode usar o "dd" para discos maiores, como discos rígidos, e ele funcionará da mesma maneira.

Outro método para gerar imagens de uma máquina é solicitá-las diretamente pela rede.
Hoje, muitos fabricantes de SOs oferecem implantações iniciadas pela rede. Isso significa que não há mais mídia de instalação independente.
Em vez disso, é possível baixar e instalar um sistema operacional pela rede. Se quiser usar suas próprias imagens e não as criadas nas opções de inicialização de rede dos computadores, outras opções permitem fazer isso.

Se você gerencia a instalação do sistema operacional em uma empresa, o ideal é ter alguns aspectos da padronização de hardware em mente. Imagine se sua empresa tiver um notebook diferente, com drivers diferentes que precisam ser instalados. Pode ser um pouco tedioso ter que lembrar disso. Normalmente, é uma boa ideia tentar padronizar o tipo de hardware usado na empresa para facilitar um pouco o trabalho de implantação de sistemas operacionais. É, você está tão perto de terminar o curso. Temos algumas avaliações finais para você. Nelas, você terá que usar logs para detectar alguns problemas.
​
