### Disco e Partições

df -hT -t ext4 = aqui temos um sistema de arquivos que é montado no raiz. Significa que a primeira coluna tem dispositivo de origem, que contém no sistema de arquivo raiz. 

a nomenclatura é a seguinte /dev/sda1

/dev = contém os dispositivos do sistema operacional 

ls -la sda* = dispositivos de disco, se começa com b é dispositivo de bloco 

fdisk /dev/sda = particionador de disco do Linux + p = faz o print dos dados da partição do disco. 

tipo de disco padrão msdos: dos = que são quatro partições primarias que são numeradas sda1 ao sda4 e são partições antigas e limitadas, com o tempo foi havendo a necessidadade de criar mais partições no sistema Linux e com isso foi criado o conceito de partições estendidas e partições logicas.

### Partição estendida

Nada mais é do que uma partição primaria que serve para estender essa limitação do msdos. Ela se encontra logo em baixo da partição sda1.

Criar um disco rígido vdi nas configurações do virtualbox  

fdisk -l = lista os discos

fdisk /dev/sdb = para ir para o disco criado 

m = mostra um help na linha de comando

p = mostra as partições criadas 

g = cria um esquema 

o = cria um novo rótulo de identificação dos

p = 

n = para criar uma nova partição, perguntará se é para criar uma partição primaria ou estendida, pode-se criar até partições primarias. Coloca letra “p” de primária e 1 para ser no primeiro setor/partição e escolher o tamanho da partição, no caso +400M, com isso foi criado uma partição de 400 megas.

Criar outra partição primária “n”, escolhendo a “2” partição, pois a primeira ja foi escolhida e atribuir +200M 

p = mostra as partições criadas

t = altera o tipo da partição, perguntará qual partição será alterada, no caso o 2 

L = lista todas as partições escolher a “82 Linux swap”

w = salva as alterações realizadas e sincronizou os discos  

mkfs.ext3 /dev/sdb1 = formata a partição e prepara para o user  

mkswap /dev/sdb2 = formatar a segunda partição criada 

wipefs -a /dev/sdb = apaga tudo que foi feito no disco sdb, destrói tudo criado

### Outro tipo de gerenciamento de partições

gdisk /dev/sdb = mostra que não tem nenhuma partição presente, com “?” ele mostra um help

o = cria um GPT e confirma “Y”

i = lista as partições e o tipo dela

n = cria uma nova partição. Diferentemente da partição primária que é de 1 a 4 ou da partição logica 5 a 68. No caso da GPT ele dá 128 particionamentos e além disso, o GPT tem backups das partições que foram criadas, backup no inicio e no final do disco, uma estrutura bem mais resiliente para o sistema de particionamento. 

1 = cria a primeira partição e selecionar o setor “+2M” para ter um bom alinhamento da partição com o setores de discos, coloca o tamanho total da partição “+400M” e será criado como Linux filesystem que é o tipo 83. 

cria outra partição n → 1 → +2M → +400M 

No sistema do gdisk, a partição é 8300

cria outra partição n → 2 → enter → +250M

Uma das vantagens do gdisk, na edição do GUID, é justamente porquê após a criação de uma partição, ele perguntará qual o tipo que você quer identificar, no caso “swap 8200”

Com isso dá para isolar as partições para que uma não interfira na outra

Ainda no gdisk tem a opções de fazer um backup dos dados para um arquivo, isso os outros normalmente não tem

b = backup do gpt para um arquivo → /tmp/backup.diskgpt

v = verifica se tem problemas de particionamentos 

x = entra no modo xpert → ? = help 

z = destrói todo esquema de partição gpt que foi criado no /dev/sdb 

### parted - Outro particionador de disco

ele possui ferramentas em modo texto e permite também ser utilizado em modo gráfico usando a ferramenta “gparted” que mostra de uma forma mais virtual as partições do disco e ele permite também que o usuário use-o de modo não iterativo, ou seja, dá para usar ele em um shellscript, uma automação para criar as partições desejadas. Ele tem bibliotecas que são usados por particionadores em algumas distribuições para ser executado no momento das partições no momento da instalação.

#### apt install parted

parted /dev/sdb = para entrar na partição criada usando parted

print = exibe as partições que existem no hd

wipefs -a /dev/sdb = formata o sdb

help = lista ajuda

mklabel msdos = seleciona o tipo da partição → msdos 

mkpart = para criar uma partição e pergunta se vai ser primaria ou estendida → primary → ext4 = tipos de arquivos que será armazenada na partição → Start? 1 = para iniciar com 1 mega → end? 402 → para finalizar com 402megas 

No momento que usa o parted ele já esta salvando as operações no disco e essa é uma diferença em relação aos outros. No momento em que eu  executo as mudanças as coisas já estão acontecendo, sendo salvos e apagados do discos. 

set 1 boot on = determina que a partição seja usado para dar boot na maquina 

cria outra partição estendida mkpart → start 403 → end 603 

mkpart → logical → sw → start 403 → end 503 → pergunta se é para alinhar para melhor performace → Ignore

print → quit

#### mkfs.ext3 /dev/sdb1 → y  

#### mkswap /dev/sdb5 → com isso está criado as partições sdb1 e sdb5

#### parted /dev/sdb  → help

help unit = mostra as unidades de medidas disponíveis 

help mkpart = Mostra todas as possibilidades tipos de sistemas de arquivos que pode ser utilizado 

unit s = Altera a unidade de medida para setores 

unit kg = altera a unidade pra kbytes 

unit mb = altera para megabytes

rm → 5 = remove primeiramente as partições lógicas

rm = remove partições 

### cfdisk - Outro particionador de disco

Particionador de modo texto, iterativo, ele não possui versão no ambiente gráfico e permite criar padrões de partições tanto no modo msdos e ufi 

#### wipefs -a /dev/sdb = destruir partições criadas anteriormente 

#### cfdisk /dev/sdb = abrir o hd → inicialmente ele perguntar qual o tipo de partição que o usuário quer criar. Caso tenha um hd com mais de 2terabytes de tamanho, é obrigado usar GPT, pois no msdos tem a limitação de 2tb de tamanho e alguns discos hoje já são vendidos com até 8tb de capacidade é obrigatório usar o GPT que permite criações de partições muito grandes até o limite de 1zetabytes. → GPT 

No cfdisk pode-se usar as setas do teclado 

Para criar uma partição nova → enter → 450M = tamanho da partição → enter = criada a partição nova → t = altera o tipo da partição → linux raiz (x86-64) = defini o tipo da partição como root linux

Criar outra partição tipo linux swap 

## Migração para partição

mkdir /tmp/mount_var = Montar, basicamente é tornar a partição acessível para que consiga utilizar