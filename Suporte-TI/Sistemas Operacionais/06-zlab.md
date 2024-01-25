# Particionar  e formatar uma unidade de disco no linux

## Blocos e partições

Os blocos são uma camada de dispositivos de armazenamento que permitem o acesso independente a cada um deles. Assim, os programas acessam o armazenamento de qualquer dispositivo de hardware, seja ele um disco rígido, uma unidade de estado sólido, um pen drive etc.

No Linux, execute o comando lsblk para ver os dispositivos de transferência por blocos e sistemas de arquivos conectados ao sistema. Esse comando reúne informações sobre todos os dispositivos conectados ao sistema e exibe o resultado em uma estrutura em árvore.

`lsblk`

NAME      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda         8:0    0   10G  0 disk
|-sda1      8:1    0  4.9G  0 part
|-sda2      8:2    0   16M  0 part
|-sda3      8:3    0    2G  0 part
|-sda4      8:4    0   16M  0 part
|-sda5      8:5    0    2G  0 part
|-sda6      8:6    0  512B  0 part
|-sda7      8:7    0  512B  0 part
|-sda8      8:8    0   16M  0 part
|-sda9      8:9    0  512B  0 part
|-sda10     8:10   0  512B  0 part
|-sda11     8:11   0    8M  0 part
`-sda12     8:12   0   32M  0 part
sdb         8:16   0   10G  0 disk
|-sdb1      8:17   0  5.9G  0 part /etc/hosts
|-sdb2      8:18   0   16M  0 part
|-sdb3      8:19   0    2G  0 part
| -vroot 253:0    0    2G  1 dm
|-sdb4      8:20   0   16M  0 part
|-sdb5      8:21   0    2G  0 part
|-sdb6      8:22   0  512B  0 part
|-sdb7      8:23   0  512B  0 part
|-sdb8      8:24   0   16M  0 part
|-sdb9      8:25   0  512B  0 part
|-sdb10     8:26   0  512B  0 part
|-sdb11     8:27   0    8M  0 part
`-sdb12     8:28   0   32M  0 part  

Dois dispositivos de transferência por blocos (sda ou sdb) vão estar conectados à sua instância (discos). Cada um deles tem 10 GB. A coluna MOUNTPOINT mostra onde o dispositivo de transferência por blocos está montado. É um local de arquivos no disco onde os arquivos podem ser acessados pelo sistema de arquivos Linux. Nesse caso, o MOUNTPOINT (/etc/hosts) é exibido em sdb, ou seja, o segundo disco (sdb) está montado na raiz da árvore de sistemas de arquivos Linux. Sendo assim, os arquivos que você está vendo agora no sistema são desse disco.

O primeiro disco, sda, também está disponível, mas está desmontado (UNMOUNT). Neste laboratório, você vai dividir esse disco em duas partições. Você vai montar uma delas no sistema de arquivos para poder acessar os documentos.

Outra opção é usar o comando df para conferir os discos montados no sistema. Normalmente, esse comando é usado para mostrar o espaço disponível no sistema de arquivos. Ele gera uma lista de todos os dispositivos de transferência por blocos e o espaço disponível neles. Use a opção -h para mostrar os tamanhos de arquivo em um formato legível.

`df -h`

Filesystem      Size  Used Avail Use% Mounted on
overlay         5.7G  809M  4.9G  14% /
tmpfs            64M     0   64M   0% /dev
tmpfs           290M     0  290M   0% /sys/fs/cgroup
shm              64M     0   64M   0% /dev/shm
/dev/sdb1       5.7G  809M  4.9G  14% /etc/hosts

### Partições

Em vez de usar um bloco de armazenamento como um todo, é comum dividir esse bloco em partições. Elas podem ter tamanhos diferentes e ser formatadas de acordo com diversos sistemas de arquivos. Isso permite usar um único dispositivo de armazenamento para vários fins.

Para exibir as informações de partição, use o comando **fdisk.** Você também pode usar a opção -l para listar as partições do bloco. Indique o nome de um dispositivo no comando fdisk para listar as partições dele.

`sudo fdisk -l`

GPT PMBR size mismatch (18874524 != 20971519) will be corrected by write.
The backup GPT table is not on the end of the device. This problem will be corrected by write.
Disk /dev/sda: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: PersistentDisk  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: FDF53EEC-3010-3049-B247-42C11C16F682

Device       Start      End  Sectors  Size Type
/dev/sda1  8704000 18874476 10170477  4.9G Linux filesystem
/dev/sda2    20480    53247    32768   16M ChromeOS kernel
/dev/sda3  4509696  8703999  4194304    2G ChromeOS root fs
/dev/sda4    53248    86015    32768   16M ChromeOS kernel
/dev/sda5   315392  4509695  4194304    2G ChromeOS root fs
/dev/sda6    16448    16448        1  512B ChromeOS kernel
/dev/sda7    16449    16449        1  512B ChromeOS root fs
/dev/sda8    86016   118783    32768   16M Linux filesystem
/dev/sda9    16450    16450        1  512B ChromeOS reserved
/dev/sda10   16451    16451        1  512B ChromeOS reserved
/dev/sda11      64    16447    16384    8M BIOS boot
/dev/sda12  249856   315391    65536   32M EFI System

Partition 7 does not start on physical sector boundary.
Partition 9 does not start on physical sector boundary.
Partition 10 does not start on physical sector boundary.
Partition table entries are not in disk order.

Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: PersistentDisk  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes

Para listar todas as partições contidas em /dev/sdb, adicione /dev/sdb ao comando fdisk.

`sudo fdisk -l /dev/[MOUNT DRIVE]`

Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: PersistentDisk  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: FDF53EEC-3010-3049-B247-42C11C16F682

Device       Start      End  Sectors  Size Type
/dev/sdb1  8704000 20971486 12267487  5.9G Linux filesystem
/dev/sdb2    20480    53247    32768   16M ChromeOS kernel
/dev/sdb3  4509696  8703999  4194304    2G ChromeOS root fs
/dev/sdb4    53248    86015    32768   16M ChromeOS kernel
/dev/sdb5   315392  4509695  4194304    2G ChromeOS root fs
/dev/sdb6    16448    16448        1  512B ChromeOS kernel
/dev/sdb7    16449    16449        1  512B ChromeOS root fs
/dev/sdb8    86016   118783    32768   16M Linux filesystem
/dev/sdb9    16450    16450        1  512B ChromeOS reserved
/dev/sdb10   16451    16451        1  512B ChromeOS reserved
/dev/sdb11      64    16447    16384    8M BIOS boot
/dev/sdb12  249856   315391    65536   32M EFI System

Partition 7 does not start on physical sector boundary.
Partition 9 does not start on physical sector boundary.
Partition 10 does not start on physical sector boundary.
Partition table entries are not in disk order.

O comando fdisk exibe as informações da tabela de partições, que armazena os dados referentes a elas.

Particionamento de disco com o comando fdisk
Quando o comando fdisk é usado sem opções, ele oferece um ambiente com menus para criar e excluir partições.

**Atenção: modificar partições é destrutivo e pode levar à perda de dados. Isso não é bom! Sempre faça backup dos dados antes de modificar as partições de um sistema ativo.**

### Comandos mount e umount

Montar e desmontar significa deixar o disponível ou indisponível em um sistema de arquivos Linux. Isso é feito com os comandos mount e umount. Antes de modificar um disco, primeiro é preciso desmontar ou seja, desconectá-lo do sistema com o comando umount. Quando as modificações estiverem concluídas, será necessário montar esse disco novamente. Neste exercício, como o dispositivo ainda não está montado, pule para o particionamento.

Inicie fdisk em modo interativo e adicione o nome do disco que você quer particionar. Neste laboratório, vamos particionar /dev/sda como um disco desconectado.

**Observação: neste laboratório, vamos particionar o disco que não está ativo no momento. Você deve selecionar dev/[UNMOUNTED DRIVE] para criar uma partição. Também é possível particionar o disco em que o sistema operacional é executado, mas nesse caso será necessário reinicializar para que as alterações de partição entrem em vigor.**

Inicie o comando fdisk e informe o disco que você quer particionar como parâmetro.

`sudo fdisk /dev/[UNMOUNTED DRIVE]`

Welcome to fdisk (util-linux 2.33.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

GPT PMBR size mismatch (18874524 != 20971519) will be corrected by write.
The backup GPT table is not on the end of the device. This problem will be corrected by write.

Command (m for help):

O comando fdisk será iniciado em modo interativo. Use `m` para receber a ajuda do comando.

Command (m for help): m

Help:

  GPT
   M   enter protective/hybrid MBR

  Generic
   d   delete a partition
   F   list free unpartitioned space
   l   list known partition types
   n   add a new partition
   p   print the partition table
   t   change a partition type
   v   verify the partition table
   i   print information about a partition

  Misc
   m   print this menu
   x   extra functionality (experts only)

  Script
   I   load disk layout from sfdisk script file
   O   dump disk layout to sfdisk script file

  Save & Exit
   w   write table to disk and exit
   q   quit without saving changes

  Create a new label
   g   create a new empty GPT partition table
   G   create a new empty SGI (IRIX) partition table
   o   create a new empty DOS partition table
   s   create a new empty Sun partition table

Command (m for help):
Você também pode usar p para exibir detalhes sobre as partições no disco.

Command (m for help): p

Disk /dev/sda: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: PersistentDisk  
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: FDF53EEC-3010-3049-B247-42C11C16F682

Device       Start      End  Sectors  Size Type
/dev/sda1  8704000 18874476 10170477  4.9G Linux filesystem
/dev/sda2    20480    53247    32768   16M ChromeOS kernel
/dev/sda3  4509696  8703999  4194304    2G ChromeOS root fs
/dev/sda4    53248    86015    32768   16M ChromeOS kernel
/dev/sda5   315392  4509695  4194304    2G ChromeOS root fs
/dev/sda6    16448    16448        1  512B ChromeOS kernel
/dev/sda7    16449    16449        1  512B ChromeOS root fs
/dev/sda8    86016   118783    32768   16M Linux filesystem
/dev/sda9    16450    16450        1  512B ChromeOS reserved
/dev/sda10   16451    16451        1  512B ChromeOS reserved
/dev/sda11      64    16447    16384    8M BIOS boot
/dev/sda12  249856   315391    65536   32M EFI System

Partition 7 does not start on physical sector boundary.
Partition 9 does not start on physical sector boundary.
Partition 10 does not start on physical sector boundary.

Partition table entries are not in disk order.

Command (m for help):
Digite q para sair do modo interativo quando terminar.

### Criar partições

Agora você vai criar partições com o comando fdisk. Divida a unidade desconectada em duas partições: uma partição swap de 1 GB e outra de 9 GB. O tipo de sistemas de arquivos da segunda partição será ext4.

Abra fdisk em modo interativo para fazer o particionamento:

`sudo fdisk /dev/[UNMOUNTED DRIVE]`

Welcome to fdisk (util-linux 2.33.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

GPT PMBR size mismatch (18874524 != 20971519) will be corrected by write.
The backup GPT table is not on the end of the device. This problem will be corrected by write.

Command (m for help):
Para criar uma partição, use o controle de comando n. No entanto, como todo o espaço no disco já está alocado, será necessário liberar espaço primeiro com a exclusão das partições padrão.

Use o controle de comando d para excluir as partições padrão. Ao emitir o controle de comando d, o comando fdisk solicita que você digite o número de partições a excluir. Como são 12 partições, o comando fdisk seleciona automaticamente a última por padrão. Pressione Enter para excluí-la. Repita o processo até excluir todas as 12 partições.

Command (m for help): d
Partition number (1-12, default 12):

Partition 12 has been deleted.

Command (m for help): d
Partition number (1-11, default 11):

Partition 11 has been deleted.

Command (m for help): d
Partition number (1-10, default 10):

Partition 10 has been deleted.

Command (m for help): d
Partition number (1-9, default 9):

Partition 9 has been deleted.

Command (m for help): d
Partition number (1-8, default 8):

Partition 8 has been deleted.

Command (m for help): d
Partition number (1-7, default 7):

Partition 7 has been deleted.

Command (m for help): d
Partition number (1-6, default 6):

Partition 6 has been deleted.

Command (m for help): d
Partition number (1-5, default 5):

Partition 5 has been deleted.

Command (m for help): d
Partition number (1-4, default 4):

Partition 4 has been deleted.

Command (m for help): d
Partition number (1-3, default 3):

Partition 3 has been deleted.

Command (m for help): d
Partition number (1,2, default 2):

Partition 2 has been deleted.

Command (m for help): d
Selected partition 1
Partition 1 has been deleted.

Command (m for help):
Agora você já pode criar as novas partições. Para isso, digite o controle de comando n.

Indique onde você que alocar o setor de início (local da memória) da nova partição. Neste caso, pressione Enter para selecionar o valor padrão 2048.

Command (m for help): n
Partition number (1-128, default 1):
First sector (34-20971486, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-20971486, default 20971486):
Indique o último setor para definir até onde você quer alocar a partição. O tamanho total da partição é a diferença entre o primeiro e o último setor. "Setor de disco" se refere às unidades usadas para medir o tamanho em disco. Cada setor armazena um volume fixo de dados. Em muitos discos rígidos, um setor armazena 512 bytes. Para criar a primeira partição de 1 GB, digite 2097200 (divida a partição original por 10).

Command (m for help): n
Partition number (1-128, default 1):
First sector (34-20971486, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-20971486, default 20971486): 2097200

Created a new partition 1 of type 'Linux filesystem' and of size 1023 MiB.

Command (m for help):
Duas coisas importantes acontecem aqui: o tamanho da partição é definido como 1 GB e o tipo como Linux filesystem. Veja como alterar esses tipos na próxima seção. Pronto! Uma partição foi criada. Agora, siga para a segunda.

Use o controle de comando n novamente para criar uma nova partição.

Command (m for help): n
Partition number (2-128, default 2):
Selecione o número de partição 2 para atribuir números de partição em sequência.

Command (m for help): n
Partition number (2-128, default 2):
First sector (2097201-20971486, default 2099200):
Selecione o setor inicial padrão da partição, que é o setor seguinte ao da última alocada.

Command (m for help): n
Partition number (2-128, default 2):
First sector (2097201-20971486, default 2099200):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2099200-20971486, default 20971486):
Selecione também o último setor padrão, equivalente ao último setor do espaço restante em disco.

Command (m for help): n
Partition number (2-128, default 2):
First sector (2097201-20971486, default 2099200):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2099200-20971486, default 20971486):

Created a new partition 2 of type 'Linux filesystem' and of size 9 GiB.

Command (m for help):  
A segunda partição foi criada. Legal!

Antes de confirmar as mudanças, mude o tipo da partição. Altere o tipo da primeira partição para Linux swap. Digite o controle de comando t para mudar o tipo e selecione a primeira partição.

Command (m for help): t
Partition number (1,2, default 2): 1
Partition type (type L to list all types):  
É possível usar o controle de comando L para ver uma lista de todos os tipos de partição.

Command (m for help): t
Partition number (1,2, default 2): 1
Partition type (type L to list all types): L
  1 EFI System                     C12A7328-F81F-11D2-BA4B-00A0C93EC93B
  2 MBR partition scheme           024DEE41-33E7-11D3-9D69-0008C781F39F
  3 Intel Fast Flash               D3BFE2DE-3DAF-11DF-BA40-E3A556D89593
  4 BIOS boot                      21686148-6449-6E6F-744E-656564454649
  5 Sony boot partition            F4019732-066E-4E12-8273-346C5641494F
  6 Lenovo boot partition          BFBFAFE7-A34F-448A-9A5B-6213EB736C22
  7 PowerPC PReP boot              9E1A2D38-C612-4316-AA26-8B49521E5A8B
  8 ONIE boot                      7412F7D5-A156-4B13-81DC-867174929325
  9 ONIE config                    D4E6E2CD-4469-46F3-B5CB-1BFF57AFC149
 10 Microsoft reserved             E3C9E316-0B5C-4DB8-817D-F92DF00215AE
 11 Microsoft basic data           EBD0A0A2-B9E5-4433-87C0-68B6B72699C7
 12 Microsoft LDM metadata         5808C8AA-7E8F-42E0-85D2-E1E90434CFB3
 13 Microsoft LDM data             AF9B60A0-1431-4F62-BC68-3311714A69AD
 14 Windows recovery environment   DE94BBA4-06D1-4D40-A16A-BFD50179D6AC
 15 IBM General Parallel Fs        37AFFC90-EF7D-4E96-91C3-2D7AE055B174
 16 Microsoft Storage Spaces       E75CAF8F-F680-4CEE-AFA3-B001E56EFC2D
 17 HP-UX data                     75894C1E-3AEB-11D3-B7C1-7B03A0000000
 18 HP-UX service                  E2A1E728-32E3-11D6-A682-7B03A0000000
 19 Linux swap                     0657FD6D-A4AB-43C4-84E5-0933C84B4F4F
 20 Linux filesystem               0FC63DAF-8483-4772-8E79-3D69D8477DE4
 21 Linux server data              3B8F8425-20E0-4F3B-907F-1A25A76F98E8
 22 Linux root (x86)               44479540-F297-41B2-9AF7-D131D5F0458A
Digite 19 para mudar o tipo da partição para "Linux swap" e pressione Enter.

Aviso: alguns caracteres no nome do tipo de partição Linux swap estão truncados.

Partition type (type L to list all types): 19

Changed type of partition 'Linux filesystem' to 'Linux swap'.

Command (m for help):
O tipo de partição será alterado de acordo com a seleção.

Até agora, você editou a tabela de partições na memória. Use o comando q para sair do fdisk sem confirmar mudanças no disco. Você também pode usar os comandos d e n para remover e adicionar novas partições.

Use o comando v se quiser verificar as alterações antes de continuar.

Command (m for help): v
No errors detected.
Header version: 1.0
Using 2 out of 128 partitions.
A total of 4013 free sectors is available in 2 segments (the largest is 1007 KiB).
Se as mudanças feitas até o momento estiverem corretas, use o comando w para fazer a confirmação no disco.

Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
Parabéns! Você particionou o segundo disco com o comando fdisk.

Agora, o segundo dispositivo de disco tem duas partições: a primeira de 1 GB e a segunda de 9 GB.

Clique em Verificar meu progresso para conferir o objetivo.
Particionamento
￼
Verificar meu progresso

Formatar partições com o comando mkfs
Agora, você vai criar diferentes sistemas de arquivos nas novas partições. Para isso, use o comando mkfs no Linux. Existem diferentes tipos de sistemas de arquivo, e é importante conhecer todos eles, além de saber para qual função eles são adequados. Neste laboratório, você vai formatar a segunda partição com ext4, o tipo mais usado em sistemas de arquivo Linux.

Para fazer isso, use o comando lsblk novamente para localizar o disco onde você quer criar o tipo de sistema de arquivos.

lsblk
Copiado.
￼content_copy
NAME      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda         8:0    0   10G  0 disk
|-sda1      8:1    0 1023M  0 part
`-sda2      8:2    0    9G  0 part
sdb         8:16   0   10G  0 disk
|-sdb1      8:17   0  5.9G  0 part /etc/hosts
|-sdb2      8:18   0   16M  0 part
|-sdb3      8:19   0    2G  0 part
| -vroot 253:0    0    2G  1 dm
|-sdb4      8:20   0   16M  0 part
|-sdb5      8:21   0    2G  0 part
|-sdb6      8:22   0  512B  0 part
|-sdb7      8:23   0  512B  0 part
|-sdb8      8:24   0   16M  0 part
|-sdb9      8:25   0  512B  0 part
|-sdb10     8:26   0  512B  0 part
|-sdb11     8:27   0    8M  0 part
`-sdb12     8:28   0   32M  0 part
Formate a segunda partição de sua unidade desconectada (sdb2 ou sda2) com ext4. Para isso, execute o seguinte comando:

sudo mkfs -t ext4 /dev/[UNMOUNTED DRIVE]2
Copiado.
￼content_copy
mke2fs 1.44.5 (15-Dec-2018)
Discarding device blocks: done
Creating filesystem with 2359035 4k blocks and 589824 inodes
Filesystem UUID: 3e68d65f-3029-4232-8f45-b924de3862bd
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (16384 blocks): done
Writing superblocks and filesystem accounting information: done
Clique em Verificar meu progresso para conferir o objetivo.
EXT4

Agora, você pode montar /dev/[UNMOUNTED DRIVE]2 em um local no sistema de arquivos para começar a acessar os arquivos locais. Monte no diretório /home/my_drive.

`sudo mount /dev/[UNMOUNTED DRIVE]2 /home/my_drive`

Use o comando lsblk para verificar os sistemas de arquivo e os dispositivos de transferência por blocos conectados ao sistema.

`lsblk`
NAME      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda         8:0    0   10G  0 disk
|-sda1      8:1    0 1023M  0 part
`-sda2      8:2    0    9G  0 part /home/my_drive
sdb         8:16   0   10G  0 disk
|-sdb1      8:17   0  5.9G  0 part /etc/hosts
|-sdb2      8:18   0   16M  0 part
|-sdb3      8:19   0    2G  0 part
| -vroot 253:0    0    2G  1 dm
|-sdb4      8:20   0   16M  0 part
|-sdb5      8:21   0    2G  0 part
|-sdb6      8:22   0  512B  0 part
|-sdb7      8:23   0  512B  0 part
|-sdb8      8:24   0   16M  0 part
|-sdb9      8:25   0  512B  0 part
|-sdb10     8:26   0  512B  0 part
|-sdb11     8:27   0    8M  0 part
`-sdb12     8:28   0   32M  0 part
De agora em diante, ao acessar "/home/my_drive", você vai acessar arquivos no disco.
