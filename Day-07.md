Continuação das opções de montagem do sistema de arquivos e suas opções avançadas. 

Como superar a barreira de 16tB na formatação do sistema de arquivo ext4.

 Abordaremos o pseudo sistema de arquivos Filesystem e também, como gerenciar os discos usando os volumes lógicos.

## Opções de Montagem - Partições

Tipos de opções que poderemos usar como dispositivo de origem no fstab. 

# cat fstab

No momento em que adicionamos o disco em /dev/sda no /var ele foi adicionado como dispositivo padrão do Kernel, que é o dispositivo de bloco convencional no HD. Há uma seguinte problemática: caso seja adicionado um segundo HD e inverta a posição dos discos, o sda vai ser sempre o primeiro disco conectado na controladora 0 da placa mãe, existe uma identificação na placa física que começa com 0 e vai até 8, depende da placa mãe, então caso seja desconectado um disco da placa e inverter as posição dos discos o sda não vai ser mais esse disco que criamos de 4GB, para evitar este problema, foi criado uma forma de identificar o dispositivo com outras características, uma delas é o label.

# dumpe2fs /dev/sda6 | less

Recebemos alguns dados internos do disco relacionado a formatação do sistema de arquivos, alguns dados importantes são: UUID (Muito importante), label, last mounted, filesystem features, block e inode count…

# blkid -s /dev/sda1 

Para pegar o UUID do disco.

# tune2fs -L  part_var /dev/sda 

Altera o nome do volume da partição do disco, agora é part_var

## Opções avançadas de formatação

# tune2fs -O

Permite ativar ou desativar uma feature que está habilitada no sistema de arquivos 

# tune2fs -O ^has_journal /dev/sdb3

Remove a característica do journal do sistema de arquivo ext4. Uma das possibilidades do ext4 é justamente a remoção do journal, com isso ele passa a operar com um sistema de arquivos semelhante ao ext2, mas com uma segurança muito maior, com controle de integridade, menos receptível a corrompimento. 

Esse recurso foi sugerido pelo pessoal do google para melhorar a performance do sistema de arquivos e alguns funcionalidades da cloud, porquê reduz bastante o IO quando utilizado em rede.

Caso acontece um corrompimento extremamente grave não tem o journal para fazer a recuperação automática, tendo que fazer a checagem convencional com fsck e a recuperação passo a passo, mas é muito difícil que isso aconteça. 

# tune2fs -O has_journal /dev/sdb3

Cria o journal novamente. 

## Ext4 maior que 16TiB

Formatar o sistema de arquivos com capacidade maior que 16TiB

# less /etc/mke2fs.conf

De preferência forçar o tipo para que seja ext4, que o sistema ativará a opção de 64bits, isso só pode ser feito no momento da formatação. 

Caso seja necessário utilizar um sistema de arquivo que terá um tamanho maior que 16TiB, tem que especificar essa opção no momento da formatação. 

## Sistemas de arquivos em arquivos

Até agora foi demonstrado a criação de sistemas de arquivos em partições, no caso os discos sda/sdb. 

Mas será que tem como criar um sistema de arquivos em um arquivo no disco? Quando isso é utilizado?
# df → ls → mkdir /data = criou uma pasta chamada data

# cd /data→ entrar na pasta data 

# truncate -s 1G teste.img = criou um arquivo do tamanho de 1G 

O truncate forma um arquivo que é chamado copy on write, significa que mesmo criado um arquivo de 1G ele está ocupando apenas 4KB, que é o mínimo necessário da unidade de locação. No momento em que vai-se gravando arquivos dentro do arquivo teste.img vai efetivamente ocupando espaço no sistema de arquivo. Isso é interessante para ser usado em virtualizações, pois há várias máquinas virtuais que são armazenadas em discos e nem sempre são preenchidas com o tempo, o disco não é utilizado 100%, então se tiver 10 maquinas virtuais, no caso armazenado em um servidor, não terá a ocupação do disco total que estão armazenado com isso ganha-se mais eficiente na utilização dos seus recursos. Em maquinas virtuais críticas é bom usar exatamente o espaço que foi locado em disco para que não tenha problema de crescimento no futuro.

# ls -lh = verificar se foi criado o arquivo

/data# mkfs.ext4 teste.img = criação de um sistema de arquivo ext4.

/data# mount teste.img /mnt = monta o sistema de arquivo ext4 no /mnt que é um sistema de arquivo temporário pra montagens transitórias 

/data# df -hT = lista todos sistemas de arquivos detalhado

 O sistema de arquivo de origem é o /dev/loop0. O loop é utilizado para montar sistema de arquivos em arquivos. Ele mapeia o arquivo em um dispositivo. Por padrão, o sistema linux permite apenas a montagem de partições de um dispositivo para uma pasta. O loop não permite gravações concorrentes, ou seja ele perde performance de gravação.

swap é uma continuação da memória, mas lenta pois armazena em disco, por exemplo: caso tenha 2gb de memória e criar 2gb de swap, virtualmente o linux terá 4gb de memória, pois caso seja ocupado os 2bg de memória residente ele passará a utilizar a memória do swap para fazer o processamento de programas. Isso é ruim, caso esteja processando algo em memória e esses dados estiverem na swap, ele terá que ler e gravar no disco para continuar o processamento, por isso swap prejudica enormemente o funcionamento da máquina quando má utilizada.  Mas em algumas situações é bem importante para que a máquina não trave por excesso de utilização de memória, apesar do kernel do linux ter alguns mecanismos para proteger isto.         O swap não permite que seja utilizado espaçamento, no caso o copy on write. O que é preciso para criar um arquivo que funcione para swap ?

/data# dd if=/dev/zero of=teste.img = bs=1024 count=1024000

dd = copia e converte | if= ler o dispositivo | of= arquivo de destino | bs= barra de setores | count= numero de vezes que ele irá gravar | criado um arquivo de 1G

/data# mkswap teste.img - aula de permissões mais a frente.

/data# chmod 0600 teste.img = com isso o usuário normal não consegue ler os dados de memória, que pode ter dados de memória do usuário root. Usuário normal ler os dados que estão no swap é um problemão de segurança.

/data# swapon teste.img = criado 1G de memória swap perfeitamente, pois agora não é um arquivo copy on write.

Como que faço para saber qual swap está sendo utilizado no meu sistema?

# cat /proc/swaps 

proc = é o sistema de arquivos virtuais do kernel, com ele é possível visualizar tudo que o kernel está fazendo no sistema. Basicamente o proc dá acesso ao kernel, ele não está armazenado em disco, ele só existe virtualmente, não ocupa espaço em disco. 

É onde se encontra o detalhamento de cada disco de swap adicionado na máquina. 

# swapoff = desliga o swap 

Se eu quiser utilizar primeiro um arquivo de swap e depois um outro arquivo? No caso, quando é utilizado o swap, o arquivo que é utilizado primeiro é o que tem o número de prioridade mais positivo. 

Caso o swap seja utilizado em sdd o tempo de vida útil dele caí bastante, não é recomendável utilizar swap em ssd. 

Como faço para reduzir o uso de swap, para ser usado apenas quando necessário?

# cat /proc/sys/vm/swappiness = Por padrão, ele mostra o valor 60. 

# echo 1 >/proc/sys/vm/swappiness = fará o possível para utilizar ainda menos swap, usará somente em ultimo caso.

Com isso, você evita que o ssd se desgaste facilmente, colocando esse parâmetro de ajuste do kernel, fazendo com o que use mais memória física da máquina sempre que possível, somente em ultimo caso ele usará swap para a máquina não morrer. 

O linux é completamente ajustável, dá pra tunar o sistema, o uso de memória, o uso de swap, para que ele tenha preferencia na utilização e preferencia também na sua operação no dia-dia.

## Pseudo filesystem $ /proc - /sys

São padrão em todas as distribuições Linux.

/proc = podemos identificar o status e dispositivos de cada processo. Também dá uma visão de como a máquina está operando no nível de hardware e também das execuções dos processos. 

Atualmente o /proc trabalha com parte de hardware, interrupções e processos do sistema que estão em execução. 

Já o /sys está mais relacionado com a informações de dispositivos do sistema. Por exemplo: as sessões que estão rodando no kernel, restante de disco, HPA, parte do dispositivo de bloco, sistemas de economia de energia, etc. 

 Ambos seguem a filosofia unix, que todas as chamadas são associadas a um arquivo.

/proc/1# cat status = Status de memória, locação, etc … 

/proc/1# cat cmdline = linha de comando que foi executada que iniciou que executou o pip, no caso é o init, que é o primeiro processo que executa no sistema 

/proc/1# = cat environ = arquivo que contém a variáveis de ambiente utilizadas no unit, como path e o tipo de terminal

/proc# cat acpi/wakeup = status da maquina voltar do suspende 

/proc# cpuinfo = dados da cpu rodando na maquina 

/proc# cat interrupts | less = todas as interrupções e quantas estão sendo utilizadas por cada hardware 

/proc# cat devices = especifica os dispositivos usados no sistema

/proc# cat dma = acesso direto a memória 

/proc# cat ioports = são as portas de entradas e saídas que são utilizadas no dispositivo 

/proc# cat filesystems = sistema de arquivos que estão montados e suportados por este kernel tanto virtuais quanto físicos. 

/proc# ls -la kcore = representação da memória usado na máquina (muito importante) somente root pode ler este arquivo, porquê se um usuário normal tiver acesso a este arquivo, ele consegue ver todas as execuções e processos da máquina. Esse arquivo consegue entender o que está rodando na máquina.

/proc# cat kcore | strings|less = ELF = formato de execução do sistema linux. Mostra também a imagem do boot do kernel. Dá acesso a muita coisa que está rodando no sistem operacional, na parte de memória. Algumas ferramentas utilizada esse arquivo nativamente para fazer analise de forense de dados. 

Caso a linha de comando bug = reset = reset o terminal 

apt install strings 

/proc# cat loadavg = basicamente contém os dados do load da máquina que está em execução

A utilização de alguns arquivos no /proc, como o loadavg, evita que seja executado um binário, ou seja, é uma execução mais rápida do que carregar um programa.

No /proc a leitura é diretamente da fonte, que é bem melhor. Por isto que é interessante entender a estrutura do /proc

/proc# cat meminfo = informações do uso de memória, além disso há um detalhamento muito maior de memória inativa, ativa, memória anônima.  

Alguns programas alocam memória na inicialização da máquina e deixa como memória anônima, que não mostra no top, a memória não fica vinculada a um sistema no momento, ela fica apenas alocada e no meminfo dá pra identificar a quantidade de memoria anônima alocada. 

/proc# cat misc = Outros dados de módulos do sistema que não são classificadas as categorias, como o loop-control, watchdog = cão de guarda, fica monitorando o kernel, caso ele pare de responder ele reseta imediatamente a máquina e com isso ele fez com que a máquina volte imediatamente caso ela trave, impedindo que o sistema fique indisponível por muito tempo. É um mecanismo de segurança usado em alta disponibilidade devido a esse recursos. 

/proc# cat modules = Contém os módulos que estão carregados no momento no sistema, os módulos são os drives, que são carregados e permitem alterações ou adicionar funcionalidades para controlar um dispositivo ou recurso no kernel do sistema. Basicamente os módulos são equivalentes ao drives do winds.

/proc# cat mounts = mostra os pontos de montagens do sistema.

Vale a pena ler os dados diretamente pelo /proc, pois não se executa binários e ganha-se mais pro atividade.

/proc# cat uptime = tempo que está ativa desde o ultimo boot 

/proc# ls -f = diretórios sem ser os pid, como acpi = dados de consumo de energia da máquina, fs = dados relacionados ao filesystem, sys = dados sobre execução dos sistema 

/proc/sys# cat net = dados sobre interface de rede

/proc/sys/net/ipv4# = várias opções sobre otimização do protocolo ipv4 direto no kernel, aqui consigo interagir direto com o sistema operacional para puder alterar parâmetros. 

É uma forma de se comunicar direto com o sistema operacional através do /proc, utilizando essa estrutura de arquivos.

/proc/sys/net/ipv4# cat ip_forward = permite compartilhamento de internet da máquina 

/sys# = Mostra basicamente a conexão com dispositivos sendo utilizado no sistema operacional a maior parte de dispositivos de blocos e armazenamentos foram migrados para o /sys e o /proc é mais voltado para operações de redes e processos.

/sys/bus# = Mostra os barramentos da máquina, no caso o barramento do tipo de hardware, como: pci, pnp, pci_express 

/sys/block# = aqui basicamente é o dispositivo de bloco, como: sda, sdb  

/sys/block/sda# cat capability = mostra algumas capacidades do sda 

/sys/block/sda# cat power/runtime_status = controla aspectos de energia do hd, se ele está suspenso ou operacional.

Como é uma maquina virtual não tem como desligar o disco. Mas num servidor usando disco mecânico há como programar para desligar o disco depois de 4m de inatividade por exemplo, isso dá para ser controlado por aqui .

/sys/block/sda# cat /power/async = ver se aparte de direcionamento energia =disabled= está assíncrona 

/sys/block/loop0# cat dev = Numero maior menor 7:0 

/sys/block/loop0# cat removable = 0 = não é removível 

Dispositivo removível é tudo aquilo que é plugado na máquina e remover, como é um caso de um pendrive. Caso entra-se no /dev do pendrive, e desse o cat removable, ele iria mostrar  “1” que é um dispositivo removível. 

Com isso é póssivel criar um sistema de instalação que leia os dispositivos no /sys e mostre para o usuário somente o que ele pode particionar no momento da instalação os dispositivos que são fixos, assim ignorando pendrives, qualquer outro dispositivos que esteja conectado momentaneamente. Com isso tem uma forma de selecionar e filtrar os dispositivos no sistema. 

/sys/kernel# ls = alguns dados a respeito do uso de recursos que os dispositivos fazem no kernel.

No sys iremos encontrar tudo que esta associado a utilização do dispositivo de bloco, controle, performance e gerenciamento de energia  

## Discard e Trimming

Quando se esta no dispositivo de blocos ssd, normalmente precisa-se configurar o bloco discard, para que ele libere e sicronize os inodes da area que teve blocos removidos ou atulizados.  

# fstrim -va = scaneia e libera todos os sistemas de arquivos que tenha discard.

No momento em que é utilizado o bloco discard, ele informa ao ssd que há uma area que foi liberada e libera os inodes. Dependendo da quantidade de arquivos que será salvo, isso pode demorar.

## Outros sistemas de arquivos

Até agora foi usado o sistema de arquivo ext4 para testes e estudo.  Mas há outro sistemas de arquivos que podem ser utilizados, como: xfs, btrfs, reiserfs, jfs, entre outros. 

Não existe um sistema de arquivo melhor que outro, mas alguns se sobressaem melhor em algumas situações, como é o caso do: xfs, que é utilizado em sistemas que tem uma quantidade de gravações muito grande, inclusive ele é conhecido pela parte de resiliência, a recuperação de arquivos em caso de corrompimento é muito grande. Atualmente a ext4 é o mesmo nível do xfs. 

O btrfs é um sistema de arquivos de segunda geração, ele permite além de adicionar arquivos normais, ele permite também a compactação do conteúdo e deduplicação.

 

## Introdução ao LVM - Logical Volume Manager

Assunto muito interessante com relação aos dispositivos de bloco e melhorias neste gerenciamento, usando LVM, que significa Logical Volume Manager, traduzindo, gerenciamento de volumes lógicos.   

Quando uma partição é criada no disco, é como se fosse uma parede de uma casa e ela tem aquele tamanho fixo, caso seja definido uma partição de 500MB, o sistema formatado na partição também terá 500MB, caso aja a necessidade de expandir, há como criar outra partição maior, formatar, copia o conteúdo para esta nova partição e coloca no etcfstab e que seja montada no /var, como o exemplo visto anteriormente. 

Se houver uma forma mais simples de gerenciar isso? Que não seja necessário parar o servidor em produção e nem derrubar os serviços. 

Em 1989, a IBM introduziu esse sistema no sistema operacional AIX, o LVM é um sistema de ajuste de particionamento de disco que permite alterações de forma dinâmica o tamanho das partições. No LVM é possível aumentar e reduzir o tamanho da partição com a máquina em funcionamento, o sistema de arquivos irá acompanhar o tamanho sem parar nada.

# cfdisk /dev/sdb > gpt > 2 partições, uma de 1G e outra de 2G.

Vamos utilizar este particionamento que está sobrando para puder adicionar mais espaço no teste no LVM. Vamos utilizar a partição de 1G como a principal e depois somar esse espaço que está sobrando, simulando adição de um segundo HD, pode ser usado uma partição para ser adicionado na LVM ou um HD.  

É importante que os discos estejam sincronizados, pois nesse momento ele reler as tabelas de partições que estão no disco e carrega novamente na memória. 

Caso seja necessário fazer isso manualmente, pode-se usar: 

# partprobe /dev/sdb = carrega as tabelas de partições do disco e informa para o kernel para ele criar os dispositivos automaticamente no /dev, que é o gerenciador de dispositivos dinâmico do kernel. 

# cfdisk /dev/sda

No layout convencional, há uma partição no sda1, que é chamada de partição física, porquê é a partição que está no dispositivo que está sendo utilizado no momento, no disco físico, essa partição poderia ser dentro de um arquivo também. 

No LVM, esse dispositivo físico é chamado de “Volume físico” que é justamente o nosso dispositivo final, o tamanho dele será sempre fixo. 

No LVM, para que consiga alterar o tamanho da partição, ele cria uma camada a mais para puder armazenar esses dispositivos, essa camada é virtual chamada de “grupo de volume”. Então, no LVM, temos:  

→ O volume físico = a partição do hd, que não pode ser alterada, é associado a um:

→ Grupo de volumes = podendo ter uma ou duas partições físicas, e em baixo tem:

→ O volume lógico = partição real 

# cfdisk /dev/sdb > altera o tipo do sdb1 e sdb2 para Linux LVM.

Primeira etapa = partições criadas e ajustadas para linux LVM. 

Segunda etapa = criar o volume físico, para fazer isso:

# apt install lvm2

(Tem a possibilidade de particionar o sistema com a partição raiz usando também o LVM, é bem seguro, é um sistema robusto, não há risco de corrompimento de dados, tem tecnicas de backup dos dados utilizados para fazer o mapeamento de partições)

# pvcreate /dev/sdb1 = para criar um volume físico no sdb1.

# pvdisplay = mostra os volumes físicos 

# pvs = mostra resumido as linhas por linhas os volumes físicos disponíveis 

Terceira etapa = criar um grupo de volumes, dá para trabalhar com nomes mais amigáveis, nada melhor que isso para gerenciar uma máquina grande, não há limite de nomes de volumes a ser criado e isso dá uma flexibidade de expandir de uma forma muito fácil, além disso, o LVM permite criar volumes criptografados usando o DMCRYPTO, que faz a criptografia de toda partição. 

# vgcreate vg-linuxexpert /dev/sdb1= criar grupo de volume com o nome vg-linuxexpert na partição sdb1

# vgdisplay = mostra o grupo de volumes 

# vgs = mostra de forma resumida os grupos de volumes 

# lvcreate -n linuxadmin -L 200M vg-linuxexpert = cria um volume lógico, de 200megas no nome criado anteriormente 

Não se perde performance usando o LVM, pelo contrário, ganha-se performance quando há gravações de blocos, ele se sai melhor do que  o sistema de arquivos convencional, pois consegue gerenciar de uma forma bem eficiente. 

# mkfs.ext4 /dev/vg-linuxexpert/linuxadmin = formata o volume lógico 

# mkdir /linuxadmin = cria um ponto de montagem 

# mount /dev/vg-linuxexpert/linuxadmin /linuxadmin = monta as partições do vg dentro do ponto de montagem /linuxadmin

# cp -a /usr/* . = copiar da pasta usr para partição /linuxadmin, no intuito de estourar a o espaço da partição

# df -hT = para ver se foi estourado mesmo
No sistema de arquivo convencional, teria que ser criado uma nova partição, adicionando um novo disco, copiar o conteúdo e o espaço anterior seria perdido, iria ter um buraco de 200MB que não seria utilizado para nada. Mas com o LVM é diferente.

# lvextend -L +200M /dev/vg-linuxexpert/linuxadmin = adicionou mais 200MG na partição

# resize2fs /dev/vg-linuxexpert/linuxadmin = aponta para o sistema de arquivos para dele realizar o resize, serve para ext2,3,4  

O grupo de volumes é como se fosse uma grande reserva, que pode ir usando os dispositivos para ir expandindo conforme o uso da máquina. Com esse pensamento, já dá para entender algumas coisas, por exemplo: já dá para especificar o dispositivo com o tamanho mínimo possível para posterior ir expandindo na medida em que o usuário linux precisa de espaço. 

# lvcreate -n user-linuxadmin -L 600M vg-linuxexpert = cria uma nova partição lógica com nome user-linuxadmin

#vgdisplay 

# mkfs-ext4 /dev/vg-linuxexpert/user-linuxadmin = formatou

# mkdir /user-linuxadmin = criar um ponto de montagem

# mount /dev/vg-linuxexpert/user-linuxadmin /user-linuxadmin = montado 

Crescer o volume é algo bem interessante, pois pode ser feito isso com a máquina quente.

# cp -a /usr/* . = copiar da pasta usr para partição /linuxadmin, no intuito de estourar a o espaço da partição

Caso seja necessário aumentar ainda mais a partição e tiver pouco espaço disponível para isso, há duas opções: reduzir a partição criada anteriormente ou adicionar mais espaços nos grupos de volumes (característica do LVM). Preferencialmente é bom sempre utilizar o espaço mínimo na criação do uso de volumes lógicos e ir expandido o volume, pois reduzir é mais chato e se estiver usando uma partição ext4 com 64bits, ele vai pedir para reduzir essa partição e se ela tiver menos que 16TB, perde-se a flag de 64bits, pois passara a trabalhar com 32bits e isso é bem ruim, porquê não haverá mais a possibilidade de expandir a partição além de 16TB, ficará com 16TB de limitação. Reduzir volume sempre dará mais trabalho, pois terá que desmontar a partição, na grande maioria das vezes, como é o caso da ext4 com 64bits. 

Opção então será aumentar o espaço que temos no grupo de volumes para puder utilizar os volumes lógicos, para isso é preciso utilizar o espaço sobrando no sdb, no caso o 2GB criado inicialmente.

# vgextend vg-linuxexpert /dev/sdb2 = pegou o espaço que estava sobrando no volume físico, criado anteriormente de 2GB e adicionou ao grupo de volumes. O grupo de volumes meio que vira partição usando LVM, então dá para ir acrescentando dispositivos. Posso adicionou um outro hd no virtualbox e adicionar ao grupo de volumes e a partição vai continuar crescendo.

# lvextend -L +500M /dev/vg-linuxexpert/linuxadmin = aumentou o volume em +500M 

# resize2fs /dev/vg-linuxexpert/linuxadmin = resize online aquente

# cp -a /usr/* . = copiar da pasta usr para partição /linuxadmin

# pvdisplay # pvs # lvdisplay # lvs # vgdisplay # vgs

#lsblk = lista os dispositivos de blocos e a estrutura de conexão de cada um deles, serve para entender como cada dispositivo está ligado em sua máquina!