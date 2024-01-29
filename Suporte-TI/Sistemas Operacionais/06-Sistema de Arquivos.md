# Tipos de sistemas de arquivos

O sistema de arquivos é usado para rastrear os arquivos e o armazenamento deles no disco. Sem um sistema de arquivos, o sistema operacional não saberia como organizar os arquivos. Então, quando se tem um disco ou qualquer tipo de dispositivo de armazenamento novo, como um pen-drive, você precisa adicionar nele um sistema de arquivos.

Para o Windows, usamos o sistema de arquivos NTFS, e para o Linux, recomenda-se usar o ext4. Os sistemas de arquivos têm diferentes compatibilidades  com diferentes sistemas operacionais. Na maioria das vezes, o suporte cruzado entre os sistemas operacionais é mínimo. Digamos que você tenha um pen-drive com o sistema de arquivos NTFS. Tanto o Windows quanto o Ubuntu do Linux conseguem ler e gravar no pen-drive. Mas se você tiver um pen-drive ext4, ele só funcionará no Ubuntu, não no Windows, pelo menos sem a ajuda de ferramentas de terceiros.

O FAT32 que suportam leitura e gravação de dados em todos os três principais sistemas operacionais. Mas o FAT32 tem algumas deficiências. Ele não suporta arquivos maiores que 4 gigabytes o tamanho do sistema de arquivos não pode ser maior que 32 gigabytes. Isso pode ser suficiente para um pequeno pen-drive, mas não é adequado para nada mais.

## Anatomia do disco

O disco de armazenamento pode ser dividido em algo chamado partição. A partição é apenas um pedaço do disco que você pode gerenciar.
Quando você cria várias partições, temos a impressão de que estamos dividindo fisicamente um disco em vários discos separados.
Para adicionar um sistema de arquivos em um disco, primeiro você precisa criar uma partição. Normalmente, temos uma única partição para o sistema operacional, não é raro ter várias partições para usos diferentes.

Digamos que você queira ter duas partições em um disco, uma para o sistema operacional Windows e outra para o Linux. Em vez de usar duas máquinas para ter os dois sistemas operacionais, você pode simplesmente usar uma máquina e alternar entre os dois sistemas operacionais na inicialização. Isso é chamado de dualboot.

Você também pode adicionar diferentes sistemas de arquivos em partições diferentes do mesmo disco. As partições funcionam basicamente como subdiscos separados, mas todas elas usam o mesmo disco físico.
Vale a pena ressaltar que quando você formata um sistema de arquivos em uma partição, ela se torna um volume. Volume e partição são por vezes usados erradamente como sinônimos, mas é muito importante que você entenda essa distinção.

O outro componente do disco é a tabela de partição. A tabela de partição informa ao OS como o disco está particionado. A tabela informa a partir de quais partições se pode inicializar o sistema, quanto espaço está alocado para a partição etc.
Existem dois esquemas de tabela de partição mais usados.

- O MBR, ou Registro Mestre de Inicalização
- o GPT, ou Tabela de Partição GUID.

Estes esquemas decidem como estruturar as informações nas partições.
O MBR é uma tabela de partição tradicional e é usado principalmente no sistema operacional Windows. O MBR só permite que você tenha volume de tamanhos de até 2 terabytes. Ele também usa algo chamado de partições primárias. Você só pode ter quatro partições primárias em um disco. Se você quiser adicionar mais, terá que pegar uma partição primária e torná-la algo conhecido como partição estendida. Dentro da partição estendida, você pode criar algo chamado de partição lógica.

O MBR é um padrão antigo e está sendo lentamente substituído pelo próximo esquema de tabela de partição de que vamos falar: o GPT. O GPT está se tornando o novo padrão para os discos. Você pode ter um volume maior que 2 terabytes e ele só tem um tipo de partição. Você pode fazer quantas partições quiser em um disco.
Para usar a inicialização via UEFI, seu disco tem que usar a tabela de partição GUID.

### Windows: particionamento e formatação de disco em um sistema de arquivos

O Windows vem de fábrica com uma ótima ferramenta chamada Utilitário de Gerenciamento de Disco. Como a maioria das coisas no Windows, existem algumas maneiras de acessar o gerenciamento de disco. Vamos iniciá-lo clicando com o botão direito em "Este Computador", selecionando a opção "Gerenciar" e, em seguida, clicando no console "Gerenciamento de disco" abaixo de "Repositório".

Para fazer manipulação de discos a partir da CLI, vamos usar uma ferramenta chamada Diskpart. O Diskpart é uma ferramenta de terminal criada para gerenciar discos diretamente a partir da linha de comando.
Como formatar o pen-drive novamente, mas usando o Diskpart em vez da GUI. Primeiro vamos conectar o pen-drive, e, em seguida, para iniciar o Diskpart, só precisamos abrir o prompt de comando, que neste caso é o "cmd.exe" e digitar `Diskpart`.
Será aberta outra janela do terminal e deve estar escrito Diskpart no prompt. Você pode listar os discos atuais do sistema digitando `list disk`. Em seguida, identificamos o disco que queremos formatar. Uma boa pista é o tamanho do disco, que é muito menor em um pen-drive. Então, podemos selecioná-lo com o comando `select disk` e, depois, disco `1`. Agora vamos limpar o disco com o comando `clean`, que remove toda e qualquer partição ou formatação de volume do disco. Com o disco limpo, agora precisamos criar uma partição nele. Isso pode ser feito com o comando `create partition primary`, que cria uma partição em branco para o sistema de arquivos.
Então, vamos selecionar a partição com `select partition 1`. Esse é o número da partição recém-criada e agora vamos marcá-la como "ativa" simplesmente digitando `active`.
Se você estiver pensando que o próximo passo é formatar o disco com o sistema de arquivos NTFS, você está certo. Podemos fazer isso executando este comando no prompt Diskpart: `format FS=NTFS label=my-drive quick`.

Este comando vai formatar o pen-drive com NTFS no modo rápido, de que falamos anteriormente, e o nome escolhido foi "my_pen_drive".

#### Windows: montando e desmontando um sistema de arquivos

Em TI, quando dizemos "montar algo", como um sistema de arquivos ou um disco rígido, significa que estamos tornando algo acessível ao computador. Neste caso, queremos que nosso pen-drive fique acessível, então "montamos" o sistema de arquivos em uma unidade. O Windows faz isso para nós automaticamente. Você deve ter notado que, ao conectar seu pen-drive, ele aparece na sua lista de unidades e você pode começar a usá-lo imediatamente. Quando você terminar de usar a unidade, você só o ejeta com segurança, ou seja, desmonta a unidade clicando com o botão direito e selecionando "Ejetar".

#### Windows: swap

Um termo que você já pode ter ouvido em relação a discos e partições é o espaço virtual (espaço swap). Antes de falarmos sobre o espaço virtual, vamos falar sobre o conceito de memória virtual. A memória virtual é a forma como o sistema operacional distribui a memória física disponível no computador (como a RAM) aos aplicativos que são executados. Ela faz isso por meio de um mapeamento de endereços do virtual para o físico. Ela facilita a vida do programa que precisa acessar a memória, pois ele não precisa se preocupar sobre quais partes da memória outros programas podem estar usando. Ele também não precisa rastrear onde os dados usados estão localizados na RAM.

A memória virtual também permite que nosso computador use mais memória do que instalamos fisicamente. Para fazer isso, ele dedica uma área do disco rígido para uma base de armazenamento de blocos de dados, chamados de páginas. Quando determinada página de dados não está sendo usada por um aplicativo, ela é desalocada, o que significa que ela é copiada da memória para o disco rígido. Isso ocorre porque acessar dados na RAM é rápido, muito mais rápido que no disco rígido, onde há espaço de sobra. Por causa disso, o sistema operacional tenta manter as páginas de dados mais acessadas na RAM. Em seguida, ele coloca coisas que não foram usadas há algum tempo no disco. Desta forma, se um programa precisa de uma página que não é muito acessada, o sistema operacional ainda consegue acessá-la. Mas ele tem que lê-la do disco rígido, que é mais lento, e colocá-la de volta na memória. Quase todos os sistemas operacionais usam algum tipo de esquema de gerenciamento de memória virtual e mecanismo de paginação.

Como funciona no Windows? O sistema operacional Windows usa um programa chamado "Gerenciador de memória" para lidar com a memória virtual. A tarefa dele é cuidar desse mapeamento entre memória virtual e memória física para os programas e gerenciar a paginação. No Windows, as páginas salvas no disco são armazenadas um arquivo oculto especial na partição raiz com volume chamado `pagefile.sys`.
O Windows cria automaticamente arquivos de paginação e usa o gerenciador de memória para copiar páginas da memória para serem lidas conforme necessário. O sistema operacional faz um bom trabalho ao gerenciar o arquivo de paginação automaticamente. Mesmo assim, o Windows permite a modificação do tamanho, do número e da localização dos arquivos de paginação por meio de um applet do painel de controle chamado "Propriedades do Sistema". Você pode acessar o applet "Propriedades do Sistema" abrindo o Painel de Controle, indo até "Sistema e Segurança" e clicando em "Sistema". Quando estiver na página "Sistema", você pode abrir as "Configurações avançadas do sistema" no menu à esquerda. Escolha a aba "Avançado" e, em seguida, clique no botão "Configurações" na seção "Desempenho". Mais um vez, clique na aba "Avançado" e você verá uma seção chamada "Memória virtual", que exibe o tamanho do arquivo de paginação. Se você clicar no botão "Alterar...", você poderá substituir os padrões que o Windows apresenta, definir o tamanho do arquivo de paginação e adicionar arquivos de paginação a outras unidades do computador.

A Microsoft tem algumas diretrizes para definir a página e o tamanho do arquivo, e  você pode seguir. Por exemplo, no Windows 7 de 64 bits, o tamanho mínimo do arquivo de paginação deve ser definido como uma vez a quantidade de RAM da máquina. A menos que você tenha um motivo específico para alterá-lo, geralmente é bom deixar o Windows gerenciar automaticamente o tamanho do arquivo de paginação.

#### Windows: arquivos

Trataremos dos dados de arquivos e metadados de arquivos. Quando falamos de dados, estamos nos referindo ao conteúdo real do arquivo, como um documento de texto que salvamos no disco rígido. Os metadados de arquivos incluem todo o resto, como o dono do arquivo, permissões, tamanho do arquivo, sua localização no disco rígido e assim por diante.

Lembre-se de que o sistema de arquivos NTFS é o formato de sistema de arquivos nativo do Windows. Então, como o NTFS armazena e representa os arquivos com os quais estamos trabalhando no sistema operacional? O NTFS usa algo chamado de "tabela mestra de arquivos", ou MFT, para manter tudo em ordem.
Todo arquivo em um volume tem pelo menos uma entrada na MFT, incluindo a própria MFT. Normalmente, há uma correspondência "um para um" entre os arquivos e os registros da MFT. Mas se um arquivo tiver muitos atributos, pode haver mais de um registro para representá-lo.

Neste contexto, atributos são coisas como o nome de um arquivo, data e hora de sua criação, se o arquivo é somente leitura ou não, se o arquivo está compactado ou não, a localização dos dados que o arquivo contém e muitas outras informações. Quando você cria arquivos em um sistema de arquivos NTFS, são adicionadas entradas na MFT. Quando os arquivos são excluídos, suas entradas na MFT são marcadas como "livres" para que possam ser reutilizadas. Uma parte importante da entrada de um arquivo na MFT é um identificador chamado número de registro do arquivo. Ele é o índice das entradas de arquivos na MFT. Um tipo especial de arquivo que devemos mencionar no Windows é chamado de atalho. O atalho é só mais um arquivo e mais uma entrada na MFT. Mas ele faz referência a algum destino de forma que quando você o abre, você é levado para esse destino. Você pode criar um atalho clicando com o botão direito do mouse no arquivo de destino e selecionando a opção "Criar atalho".

Além de criar atalhos como formas de acessar outros arquivos, o NTFS oferece outras duas maneiras usando **hardlinks e links simbólicos.**
Os links simbólicos são como atalhos, mas no nível do sistema de arquivos. Quando você cria um link simbólico, você cria uma entrada na MFT que aponta para o nome de outra entrada ou outro arquivo. Pode parecer apenas outra maneira de criar um atalho, mas os links simbólicos têm uma diferença fundamental.
O sistema operacional os trata como substitutos dos arquivos a que eles estão ligados, em quase todos os sentidos. Você pode criar links simbólicos com o programa `mklink` no prompt de comando.

Quando você cria um hardlink no NTFS, uma entrada é adicionada na MFT e aponta para o número de registro do arquivo vinculado, não para o nome do arquivo. Isso significa que o nome do arquivo de destino pode mudar que o hardlink ainda apontará para ele. Você pode criar hardlinks de maneira semelhante aos links simbólicos, mas com a opção "/H". `mklink /H file_1_hardlink file_1.txt`.
Como o hardlink aponta para o número de registro do arquivo e não para o nome do arquivo, você pode alterar o nome do arquivo original e o link continuará funcionando.

#### Windows: uso de disco

Para verificar o uso do disco, você pode abrir o utilitário "Gerenciamento do computador". Em seguida, vá ao console de gerenciamento de disco. Depois, clique com o botão direito na partição em que você está interessado e selecione "Propriedades". Você verá a aba "Geral", onde verá o espaço usado e o espaço livre na unidade. Além de usar essa interface gráfica do usuário para verificar o uso do disco, o Windows fornece um utilitário de linha de comando chamado `Disk Usage` dentre suas ferramentas internas do sistema. Esse utilitário DU informa o uso de determinado disco e mostra quantos arquivos ele possui. Pode ser útil para criar scripts que precisem de texto baseado em informações de saída em vez de relatórios visuais, como o gráfico de pizza no gerenciamento de disco.

Na mesma aba do console de gerenciamento de disco, você verá um botão chamado "Limpeza de Disco". Se você pressionar este botão, o Windows iniciará um programa chamado `cleanmgr.exe`, que fará uma faxina no seu disco rígido para tentar liberar algum espaço. Essa faxina inclui coisas como excluir arquivos temporários, comprimir arquivos antigos e raramente usados, limpar os logs e esvaziar a lixeira.

Outra tarefa relacionada à integridade do disco é chamada de desfragmentação. A ideia da desfragmentação de disco é pegar todos os arquivos armazenados em determinado disco e reorganizá-los em locais próximos uns dos outros. Ter arquivos ordenados assim facilita a rotação dos discos rígidos que usam um braço para gravar e ler os dados. A cabeça do braço tem que se deslocar menos para ler os dados de que precisa. Devo dizer que esse é um benefício pequeno para as unidades sólidas, pois nelas não há cabeça de gravação e leitura que precise se mover em um disco giratório.

Para esses tipos de unidades, o sistema operacional pode usar um processo chamado `Trim` para recuperar porções não utilizadas do disco sólido. Não entraremos em detalhes sobre o funcionamento do "Trim", mas é bom saber que ele existe.

A desfragmentação no Windows é tratada como uma tarefa agendada. De vez em quando, o sistema operacional desfragmenta o disco automaticamente e você não precisa se preocupar com isso, mas você pode desfragmentar manualmente  uma unidade no Windows, se quiser. Para iniciar uma desfragmentação manual, abra a ferramenta de desfragmentação de disco oferecida no sistema operacional. Digite "desfragmentador de disco".
Quando ele abrir, você verá uma lista de discos que podem ser desfragmentados junto com botões para analisar os ganhos potenciais de executar uma desfragmentação e para executar a desfragmentação em si.

#### Windows: reparo do sistema de arquivos

Falamos sobre o perigo de desconectar um dispositivo USB sem ejetá-lo ou desmontá-lo do computador. Você já deve ter visto mensagens de erro como esta, quando o sistema alerta que você deve ejetar com segurança esta unidade flash. Por que precisamos fazer isso? Quando copiamos arquivos para uma unidade flash e vemos que o arquivo foi copiado com sucesso, por que não podemos simplesmente desconectar a unidade sem desmontá-la ou sem apertar o botão "Ejetar" no sistema operacional? Pode acontecer de a unidade não ter terminado de copiar esses dados. Esse alerta não está ali à toa. Quando lemos ou gravamos algo em uma unidade, colocamos os dados em um buffer ou cache primeiro. Um buffer de dados é uma região da RAM usada para armazenar dados temporariamente enquanto eles estão sendo movidos. Então, quando você copia algo do seu sistema operacional para seu drive USB, primeiro ele é copiado para um buffer de dados porque a RAM opera mais rápido que os discos rígidos.

Então, se você não desmontar corretamente um sistema de arquivos e der tempo suficiente ao buffer para que termine de mover os dados, você corre o risco de corromper os dados.
A corrupção dos dados pode acontecer por muitas razões além da remoção da unidade sem segurança.
Digamos que você esteja trabalhando no seu computador e a energia do prédio caiu, fazendo com que seu computador se desligue de repente. Esse tipo de acidente também provoca corrupção de dados. Falhas no sistema ou erros de software podem causar corrupção de dados também. O sistema de arquivos NTFS tem alguns recursos avançados incorporados que podem ajudar a minimizar o risco de corrupção de dados, tentando se recuperar quando o sistema de arquivos é danificado.

Um desses recursos, por meio de um processo chamado de `journaling`, registra as alterações feitas nos metadados de um arquivo em um arquivo de log chamado log NTFS.
Ao registrar essas alterações, o NTFS cria um histórico das ações tomadas. Isso significa que consegue checar o log para ver qual deveria ser o estado atual do sistema de arquivos.
Se uma falha ou erro causar danos, o sistema de arquivos pode iniciar o processo de recuperação que irá usar esse log para assegurar que o sistema esteja em um estado íntegro.

Além do journaling, o NTFS do WIndows implementa algo chamado de "autocorreção". Como dá para imaginar pelo nome, o mecanismo de autocorreção faz alterações em pequenos problemas e corrupções do disco automaticamente em segundo plano. Ele faz isso enquanto o Windows está sendo executado e você não precisa fazer uma reinicialização.

Se você quiser verificar o status do processo de autocorreção do seu computador, você pode abrir um prompt de comando como administrador e usar a ferramenta `fsutil repair query` e quero consultar minha unidade "C".
Finalmente, quando as coisas dão errado e há corrupção grave ou catastrófica no disco , como setores defeituosos, falhas de disco etc, você pode usar o utilitário `Chkdsk`. Os recursos embutidos de recuperação do NTFS existem para que você não precise executar o "Chkdsk", mas ele está disponível para emergências.

Para executar verificações de disco manualmente, você pode abrir um prompt de comando como administrador e digitar "chkdsk" na linha de comando. Por padrão, o "chkdsk" é executado no modo somente leitura. Então, você receberá um relatório sobre a integridade do disco, não fará nenhuma modificação ou reparo. Você pode usar o "chkdsk" para corrigir todos os problemas encontrados com o flag "/F". Você também pode especificar a unidade que quer verificar. Assim... `chkdsk /F` eu vou verificar meu pen-drive, que está no D.

Muitas vezes, você não precisará executar o "chkdsk" manualmente. Se o sistema operacional detectar que alguns dados foram corrompidos ou que o disco tem um setor defeituoso, ele mesmo definirá um bit no arquivo de metadados do volume para indicar a corrupção. Quando o sistema for inicializado, o utilitário "chkdsk" irá verificar este bit. Se for o caso, ele será executado e tentará reparar a corrupção reconstruindo os bits defeituosos do sistema de arquivos a partir do log NTFS.

### Linux: particionamento e formatação de disco em um sistema de arquivos

No Linux, há ferramentas diferentes de linha de comando para particionamento que podemos usar. Uma que dá suporte tanto para MBR quanto para GPT é a ferramenta "Parted". O Parted pode ser usado em dois modos. O primeiro é o interativo, ou seja, usamos um programa separado, assim como quando usamos o comando "less". O segundo é a linha de comando, que significa que você executa os comandos sem sair do shell. Vamos usar o modo interativo.

`sudo parted -l` Ele lista os discos que estão conectados ao nosso computador.
`sudo parted /dev/sdb`. Agora estamos na ferramenta "Parted".
Se quisermos sair dessa ferramenta e voltar para o shell, basta usar o comando `quit`.
Vou executar `print` só para ver este disco mais uma vez. Está dizendo que há um rótulo de disco não reconhecido.
Precisamos definir um rótulo com o comando `mklabel`. Como queremos usar a tabela de partição `GPT`

Vamos começar a fazer modificações no disco. Queremos particionar o disco "/dev/sdb" em duas partições. Na ferramenta "Parted", vamos usar o comando `mkpart`.
O comando "mkpart" precisa ter as seguintes informações: o tipo de partição queremos fazer, o sistema de arquivos que queremos formatar e o começo e o fim do disco. Assim `mkpart primary ext4 1Mib 5Gib`

O tipo de partição só importa nas tabelas de partição MBR. Lembre-se, o MBR usa particições primárias, estendidas e lógicas. Como estamos formatando com "GPT", vamos usar "primary" como tipo de partição.

Em seguida, vamos formatar a partição com o sistema de arquivos usando "mkfs".
`sudo mkfs -t ext4 /dev/sdb1`. O tipo é "ext4". E eu quero formatar a partição, então "sdb1".

Cuidado ao usar a ferramenta "Parted". Ela é muito poderosa e se você modificar o disco errado, poderá fazer uma grande bagunça. Mesmo tendo particionado o disco e formatado um sistema de arquivos, ainda não podemos ler e gravar arquivos ainda. Há uma última etapa para deixar o disco utilizável no Linux. Temos que montar o sistema de arquivos em um diretório para que possamos acessá-lo no shell.

#### Linux: montando e desmontando um sistema de arquivos

Para começar a interagir com o disco, precisamos montar o sistema de arquivos em um diretório.
`sudo mount /dev/sdb1 /my_usb/`. Agora, se formos para "my_usb", podemos começar a ler e e gravar no novo sistema de arquivos.
Na verdade, não precisamos montar explicitamente um sistema de arquivos usando o comando "mount". A maioria dos sistemas operacionais faz isso automaticamente quando ligamos um dispositivo como uma unidade USB.

Os sistemas de arquivos devem ser montados  de uma forma ou porque precisamos dizer ao sistema operacional como interagir com o dispositivo. Também podemos desmontar o sistema de arquivos de forma semelhante usando o comando `umount`. Desmontar é o oposto de montar um disco. Posso usar `sudo umount /my_usb` Quando você desliga seu computador, os discos que foram montados manualmente são automaticamente desmontados.

Sempre desmonte o sistema de arquivos de uma unidade antes de desconectar fisicamente a unidade.
Além disso, tenha em mente que quando usamos o comando "mount" para montar um sistema de arquivos em um diretório, depois que desligamoso computador, a montagem desaparece.
Mas podemos montar um disco permanente se quisermos que ele carregue automaticamente quando o computador é inicializado.
Para fazer isso, precisamos modificar um arquivo chamado `/etc/fstab`. Se abrirmos esse arquivo agora, você verá uma lista de IDs de dispositivos, as montagens, o tipo de sistema de arquivos, mais outras informações.

Se quisermos montar automaticamente sistemas de arquivos quando o computador é inicializado, basta adicionar uma entrada semelhante ao que está escrito aqui.
Podemos usar este comando: `sudo blkid`. Será exibido o UUID dos IDs de dispositivos de blocos, também conhecidos como IDs de dispositivos de armazenamento.

#### Linux: swap

No Linux, a área dedicada do disco rígido usado para memória virtual é conhecida como espaço virtual (swap).
Na prática, você deve criar partições swap para seus principais dispositivos de armazenamento, como discos rígidos e SSDs.
Vamos fazer um espaço virtual. Primeiro, volte para a ferramenta "Parted" e selecione "/dev/sdb", onde está nosso pen-drive. Vamos particioná-lo novamente desta vez para fazer uma espaço swap. Depois, vamos formatar nela o sistema de arquivos Linux-swap.
`mkpart primary Linux swap 5GiB 100%`. Você verá que a parte final do comando é "100%",  o que indica o uso de todo o restante do espaço livre em nossa unidade.
Para concluir este processo, precisamos especificar que queremos torná-lo espaço swap por meio do comando `sudo mkswap /dev/destino`.
Finalmente, há mais um comando a executar para ativar o swap no dispositivo: `sudo swapon /dev/sdb2`.

#### Linux: arquivos

No Linux, os metadados e os arquivos são organizados em uma estrutura chamada **inode.** Os inodes são semelhantes aos registros MFT do NTFS do Windows. Armazenamos inodes em uma tabela de inode que nos ajuda a gerenciar os arquivos em nosso sistema de arquivos. O inode em si não armazena dados ou o nome do arquivo, mas armazena todo o restante sobre o arquivo.

Os atalhos no Linux são chamados de **softlinks ou links simbólicos.** Eles funcionam de maneira semelhante aos links simbólicos do Windows porque simplesmente apontam para outro arquivo.
Os softlinks nos permitem fazer uma vinculação a outro arquivo usando o nome do arquivo. Eles são ótimos para criar atalhos para outros arquivos.

O outro tipo de link encontrado no Linux são os hardlinks. Assim como no Windows, os hardlinks não apontam para um arquivo. No Linux, eles se ligam a um inode armazenado em uma tabela de inode no sistema de arquivos.
Basicamente, quando se cria um hardlink, aponta-se para um local físico no disco, ou mais especificamente, no sistema de arquivos. Mas se você excluir o arquivo de um hardlink, todos os outros hardlinks ainda funcionam.

Para criar um softlink, podemos executar o comando `ln -s important_file important_file_softlink`.
Para criar um hardlink, podemos executar o comando `ln important_file important_file_hardlink`.

Os hardlinks são ótimos caso você precise do mesmo arquivo armazenado em lugares diferentes, mas não quer gastar espaço adicional no volume. Isso porque todos os hardlinks apontam para o mesmo espaço no volume. Você pode usar softlinks para fazer a mesma coisa. Mas e se você mover o arquivo, quebrar o link e se esquecer de todos os outros lugares em que você o usou? Esse links seriam quebrados também e você levaria tempo para limpar tudo.

#### Linux: uso de disco

No Linux, fazemos a mesma coisa usando o comando `du -h`.
O comando "du", que vem de **disk usage**, nos mostra o uso do disco de um diretório específico. Se você não especificar o diretório, o padrão será seu diretório atual.
O flag "-h" apresenta as medições dos dados de forma legível para nós, humanos. Você deve usar o comando "du" se quiser saber quanto espaço está sendo usado pelos arquivos de um diretório.

Outro comando que você pode usar se quiser saber quanto espaço livre você tem em sua máquina é o comando "df", que vem de "disk free".
Ele mostra o espaço livre disponível em toda a sua máquina. O flag "-h" apresenta as medições dos dados de forma legível para nós, humanos.
Você deve usar o comando "df" se quiser saber quanto espaço livre você tem em todo o seu sistema.

Você deve ter notado que nem falamos em desfragmentação do sistema de arquivos para o Linux. O Linux geralmente consegue evitar a fragmentação muito mais do que o Windows.

Em situações comuns na TI, você pode se encontrar com pouco espaço em disco.
Cabe a você investigar quais arquivos e pastas estão ocupando espaço e , se você precisar, remover esses arquivos. Como sempre, tenha sempre muito cuidado ao remover arquivos.

#### Linux: reparo do sistema de arquivos

Para tentar reparar um sistema de arquivos manualmente Linux você também pode usar o comando `fsck`, que vem de "filesystem check".
Mas você tem que confirmar que o sistema de arquivos não está montado.
Se você executar o "fsck" em uma partição montada, há grande chance de danificar o sistema de arquivos.
O reparo do sistema de arquivos nem sempre significa correção garantida, pode ajuda na maioria dos casos. Trate bem o seu hardware e ele vai tratar você bem na maioria dos casos. Outra coisa a ressaltará que, em algumas versões do Linux, o "fsck" roda no seu computador quando você o inicializa para verificar quaisquer problemas e tentar reparar automaticamente o sistema de arquivos.
