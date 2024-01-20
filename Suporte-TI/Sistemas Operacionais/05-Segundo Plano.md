# O que acontece em segundo plano e gerenciamento de softwares de dispositivo

## Windows: por debaixo do capô

A maioria dos softwares do Windows é distribuída em pacotes de código fechado. Ou seja, você não tem acesso ao código-fonte para saber o que o programa está fazendo. Nesse caso, embora você não possa ler as instruções do desenvolvedor, pode usar certas ferramentas para identificar as ações do instalador.

Uma maneira de fazer isso é usando o programa de monitoramento de processos oferecido no kit de ferramentas de operações internas do CIS Microsoft. Assim, você verá todas as atividades realizadas pelo executável, como os arquivos gravados e atividades de processo executadas.

O Windows Installer monitora todas as ações tomadas e cria um conjunto separado de instruções para desfazê-las. É por isso que os usuários conseguem desinstalar o programa. Se isso despertou sua curiosidade sobre o que compõe um arquivo MSI ou se quiser criar um pacote de instalação do Windows, dê uma olhada na ferramenta "orca.exe" oferecida pela Microsoft. É uma boa forma de matar a curiosidade. O Orca faz parte do SDK, ou kit de desenvolvimento de software, do Windows, mas você não precisa saber programar para usá-lo. O Orca pode ajudar você a editar ou criar pacotes do Windows Installer.
​

### Windows: dispositivos e drivers

Uma parte importante de que falamos sobre os softwares, mas não vimos como funciona, é o driver.
Lembre-se de que um driver é usado para ajudar nosso hardware a interagir com o sistema operacional.
No Windows, a Microsoft agrupa todos os dispositivos e drivers do computador em um único console de gerenciamento chamado **Gerenciador de Dispositivos.**
São duas as maneiras de acessar o Gerenciador de dispositivos: Você pode abrir a caixa de diálogo "Executar" e digitar `devmgmt.msc`.
Ou clicar com o botão direito do mouse em "Este Computador", selecionar "Gerenciar" clicar na opção "Gerenciador de dispositivos" no menu à esquerda.

Esse agrupamento geralmente acontece automaticamente quando se conecta um novo dispositivo. Faz parte do sistema plug-and-play que o Windows usa para detectar novo hardware conectado ao computador automaticamente. Depois, ele reconhece e instala o software correto para gerenciá-lo.
A maioria dos fornecedores ou fabricantes de hardware atribuem uma string especial de caracteres a seus dispositivos, que são conhecidos como ID de hardware.
Quando o Windows percebe que um novo dispositivo foi conectado, ele começa pedindo ao dispositivo conectado o ID de hardware.
Depois de ter o ID de hardware do novo dispositivo, o Windows o utiliza para procurar o driver certo para o dispositivo. Ele procura em alguns lugares, começando com uma lista local de drivers conhecidos. Depois, recorre ao Windows Update ou à loja de drivers, caso precise expandir a pesquisa.

Embora esse processo aconteça quase que 100% automaticamente e em segundo plano, você pode interagir diretamente com os drivers do Windows pelo console do Gerenciador de Dispositivos que mencionamos antes. Você pode expandir as categorias do Gerenciador de Dispositivos para ver os dispositivos dentro delas, assim.
E ainda pode usar o todo-poderoso clique com o botão direito do Windows para abrir um menu e gerenciar suas configurações.
Você pode desinstalar, desativar e atualizar o driver de um dispositivo nesse menu. Pode também instruir o Windows a procurar alterações de hardware, como um dispositivo recém-conectado.
Por fim, se você selecionar "Propriedades" no menu do botão direito, verá alguns detalhes sobre o dispositivo e seu driver, como o fabricante e a versão usada do driver. tem como fazer isso via cli também.

### Windows: atualizações do sistema operacional

É importante manter o sistema operacional atualizado por muitos motivos. É bom ter os recursos mais novos do seu sistema operacional e principalmente as atualizações de segurança de que seu sistema operacional precisa. Quando o fabricante do sistema descobre uma falha de segurança nele, ele busca maneiras de criar uma correção para essa falha. Uma correção, ou patch, de segurança é um software destinado a corrigir uma brecha de segurança. Quando seu sistema operacional é atualizado com correções de segurança, é vital instalar esses correções imediatamente. Quanto mais você esperar, maior a chance de você sofrer prejuízos pela falha de segurança.

O Windows geralmente faz um ótimo trabalho em informar quando há atualizações para instalar. O serviço do cliente do Windows Update é executado em segundo plano e baixa e instala atualizações e correções no seu sistema operacional.

Uma desvantagem disso é que a instalação de atualizações não é mais opcional no Windows 10. Você também não pode escolher as atualizações que quer aplicar porque todas são aplicadas em uma versão mensal.
A Microsoft anunciou que o modelo de atualização dos Windows 7 e 8 também passará a ser de pacote cumulativo. Isso não será mais exclusivo dos usuários do Windows 10.
​

## Linux: por debaixo do capô

No Linux, as instalações de software são um pouco mais claras. Mencionamos em uma outra aula que é possível instalar software diretamente pelo código-fonte. Esse método varia de acordo com o software porque cada linguagem de programação é compilada de uma forma.

Não vamos nos aprofundar em desenvolvimento de software, mas digamos que temos um arquivo compactado com um pacote simples para instalar. Este é o pacote do aplicativo Flappy. Já extraí os arquivos, e você pode ver que há um script de instalação. Esse é um arquivo de script que executa várias tarefas no computador para instalar o pacote. E temos "flappy_app_code", que é o código do software efetivamente.

`ls -l Flappy\ App/` > **setup_script** quem faz toda a mágica

O README é um arquivo padrão contido em arquivos-fonte que possuem informações sobre o arquivo compactado. Ele é uma solicitação não muito sutil para ler suas instruções antes de qualquer coisa. O script de instalação é o que nos interessa. Ele é quem diz como instalar o nosso pacote. Um script de instalação pode conter instruções do programa, como compile "flappy_app_code" em instruções de máquina, copie o binário do aplicativo Flappy compilado para o diretório "/bin" ou crie uma pasta em "/home/ qualquer que seja o nome de usuário do flappy".

Esse é um resumo muito geral do que acontece quando se instala um pacote simples. No fim das contas, os desenvolvedores de software decidem do que o software precisa para funcionar e que tarefas precisa executar. Cabe ao desenvolvedor saber se essas tarefas criam arquivos ou atualizam diretórios. Se você soubesse quais são as linguagens de programação usadas, poderia ler as instruções por conta própria.

### Linux: dispositivos e drivers

O Ubuntu mostra o gerenciamento de dispositivos de forma um pouco confusa. No Linux, tudo é considerado um arquivo, até os dispositivos de hardware. Quando um dispositivo é conectado ao computador, um arquivo do dispositivo é criado no diretório `/dev`.

Existem muitos dispositivos nele, mas nem todos eles são físicos. Por exemplo, os dispositivos `/dev/null` aqui. Os mais comuns são: **os dispositivos de caractere e de bloco. Os dispositivos de caractere, como teclado e mouse, transmitem dados caractere por caractere.**

Os dispositivos de bloco, como unidades USB discos rígidos e CD-ROMs, transferem blocos de dados. Um bloco de dados é apenas uma unidade de armazenamento de dados.

Você verá alguns arquivos que começam com "/dev/sda" ou "/sdb".
Dispositivos SD são os de armazenamento em massa, como discos rígidos, pentes de memória e outros. Se tiver um "A" depois de "SD", significa que o dispositivo foi detectado pelo computador primeiro. Então, você deve ver algo como "/dev sda", "/dev sdb", "/dev sdc". Voltando ao dispositivo "/dev/null", vemos que ele é considerado um dispositivo de caracteres porque é usado para transferir dados, caractere por caractere.
Essa foi uma visão geral bem simples dos arquivos de dispositivo.

Vamos falar sobre atualização de drivers de dispositivo no Linux. No Windows, basta clicar em "Atualizar driver", na maioria dos casos. No Linux, o processo é um pouco mais complicado mas ao mesmo tempo muito fácil.Os drivers de dispositivo não são armazenados no diretório "/dev". Às vezes, eles compõem do kernel do Linux. Lembre-se de que o kernel da máquina trata da interação com o hardware. O kernel é um software realmente monolítico que tem muitas funções, incluindo suporte a muitos hardwares.

Hoje em dia, o suporte a muitos hardwares está integrado ao kernel. Então, ao conectar um dispositivo, ele passa a funcionar automaticamente. Mas se for um dispositivo sem suporte integrado no kernel, ele provavelmente tem algo conhecido como módulo de kernel.

Mas o que é esse módulo de kernel? Para muitos desenvolvedores, manipular softwares como o kernel do Linux intimida um pouco. Para evitar isso, eles criam módulos de kernel que ampliam a funcionalidade do kernel sem precisar mexer nele. Então, para instalar um módulo de kernel para um tipo específico de dispositivo, basta fazer o mesmo processo para instalar todos os softwares no Linux.
Saiba que nem todos os módulos de kernel são drivers.
​

### Linux: atualizações do sistema operacional

Com os comandos `"apt update" e "apt upgrade"`, as atualizações de segurança já podem ser instaladas para você. Mas o comando "apt upgrade" não atualiza o sistema operacional principal.
No Linux, é o kernel junto de outros pacotes. O kernel controla os componentes centrais do sistema operacional. Como nossos processadores de texto, o kernel é um mero pacote. Os desenvolvedores do kernel costumam incluir correções de segurança, novos recursos e correções para erros nas atualizações. Se você quiser ter tudo isso, precisa executar um novo kernel.

Para descobrir a versão do seu kernel, vamos aprender um novo comando, chamado "uname". O comando "uname" exibe as informações do sistema. Se você usar o sinalizador "-r" para a versão do kernel, vai descobrir quão atual é o seu kernel.

Minha versão do kernel é a 4.1, como podemos ver aqui. Para atualizar o kernel e outros pacotes, usamos nosso comando parceiro, "apt", com a opção "full-upgrade". Antes de executar o comando, lembre-se de atualizar as fontes de aplicativos com "APT update". "Sudo apt update".Agora, podemos executar "sudo apt full-upgrade".

Se houver uma nova versão do kernel disponível, ela será instalada. Depois de reiniciar o computador, você começará a usá-la. Para saber se o kernel mais recente está sendo usado, execute o comando "uname -r".
