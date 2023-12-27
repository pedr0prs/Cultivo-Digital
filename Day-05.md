# Day 05 - Comando diversos

chattr - basicamente permite alterar tributos do sistema de arquivos e diretórios do sistema operacional linux ele trabalha junto com

lsattr = permitindo listar e alterar tributos 

tributos é diferentes que permissões. Tributos estão relacionados a segurança e mudança do sistema operacional 

—e— = extendes 

chattr i = imutável, ele não permite alterações ou delações no arquivo ou diretório 

chattr +i = dá um tributo ao arquivo 

—i—e—-= ele se tormou imutável 

Nem o usuário root não consegue fazer nada no arquivo caso ele esteja com este tributo, desde que ele altere um tributo para que altere determinada ação, com isso dá para proteger arquivos importante até mesmo do usuário root, são poucos que conhece essa questão dos tributos no sistema de arquivos e é bem interessante para proteger arquivos do seu sistema. 

chattr -i = remove o tributo inserido anteriormente.

Com o tributo, o arquivo fica totalmente blindado, não pode ser removido, alterado, não conseguem fazer nada. 

chattr -a = permite colocar um arquivo e diretório no modo apende, que só permite adicionar conteúdo no final do arquivo usando >>. Quando se tem um arquivo de modo apende, não consegue alterar com a maioria dos editores. O modo apende, funciona bem na partição onde contem logs, com isso evita com que o log criado seja alterado de forma indevida. 

O atributo -a para pastas permite que os arquivos sejam apenas alterados e adicionados na pastas, mas impede a remoção dos arquivos, porém pode-se alterar o conteúdo do arquivo, só não excluí-lo. 

Há também a opção de igualar os atributos de uma pasta e arquivos que existem dentro desta pasta:

chattr =ai * = para atribuir os atributos “ai” para todos arquivos da pasta, por padrão é interessante também atribuir o “aie”, que são os extends. 

chattr +c = faz com que o arquivo seja compactado no momento em que ele for armazenado, o kernel no momento da leitura ele vai ler o conteúdo compactado, descompactar memoria e executar como se nada tivesse acontecido. Nem todas as distribuições possui suporte a esse atributo no kernel, caso não houver esse suporte ele será ignorado. Em resumo, o arquivo é armazenado de forma compactada desde que o kernel esteja preparado para isto em sua distribuição. 

chattr -c = para remover. 

chattr +s = permite deleção segura do kernel. ele não funciona atualmente tão bem com xt4, mas em outros sistemas de arquivos ele ainda opera de forma satisfatória. Ele permite que quando um arquivo seja apagado os blocos do arquivos sejam totalmente zerados, que significa que demora um pouco mais para ele fazer operações de elite, mas será feita de forma segura e com isso os blocos sejam dificilmente recuperados. Como hoje nos temos o jornery ele atrapalha um pouco esta operação, então esta opção cai um pouco no desuso por conta disto. 

chattr +S = permite fazer o sync do arquivo imediatamente. Todo sistema operacional Linux, possui um tempo em que o arquivo fica armazenado em memória ate ser gravado no disco, com +S ele será gravado imediatamente no disco, de forma síncrona. Dependendo do arquivo, se for muito grande, ele vai impactar na performance do seu sistema, mas se for um arquivo extremamente importante que deve ser gravado imediatamente, é interessante usar o atributo +S. 

chattr +D = Qualquer arquivo, pasta que for gravado no local, ele será gravado de forma síncrona, quando gravado será diretamente salvo no disco, sem passar pelo cache memoria e os buffs do disco. Muita atenção, se tiver uma pasta muito gravada, com extensa atividade e aplicar esse tributo, irá praticamente travar o servidor.

chattr +d = Faz com o que os arquivos e pastas marcadas com “d” não seja incluído no backup da ferramenta dump, que é utilizado como padrão no unix para fazer backup de pastas 

cut = permite que você corte um pedaço do arquivo para que seja exibido apenas uma parte do conteúdo 

cut -d “:” -f 1-3 /etc/passwd = delimitador. 1-3= primeiro ao terceiro campo

cut -b 1-4 /etc/passwd = pega os bytes do campo 1 - 4 

cut -c 1-4 /etc/passwd = especifica quantos caracteres do campo 1-4, space não é contado como caractere. 

cmp = serve para comparar um arquivo 

diff = mostra as diferenças 

diff -u = mostra um formato mais legível 

diff -r = compara um pasta com outra e mostra a diferença entre os arquivos existente nessas pastas 

o diff pode ser utilizado para fazer alterações no código fonte do aplicativo, é utilizado pelo git para fazer cálculos. 

### Multiplexador de Terminais

Existem no Linux comandos, caso seja instalado, que dá para gerenciar vários terminais em uma só tela. Os comandos são o screen e o tmux.
/bin/su - para entrar como root
apt install screen = fazer a instalação do screen
screen = abre um terminal normal

no screen utiliza ctrl + a para fazer os atalhos internos 

ctrl + a + w = Mostra quantos terminais estão abertos → 0x$ bash = esse 0 é o numero da screen que está aberta  

ctrl + a + c = cria um novo terminal 

ctrl + a + a = alterna entre os dois terminais usados recentemente 

ctrl + a + 0 = vai para a screen 0 e assim por diante

ctrl + a + d = deleta uma screen 

screen -ls = mostra os terminais que está rodando 

screen -x = reconeta a screen 

Isso é importante pois quando se executa alguns comandos em cloud remote é comum a conexão cair, por questões de instabilidade nos links de internets, então com screen é garantido que o programa permanecerá rodando do inicio ate o fim. Quando for realizar um trabalho muito grande, é interessante usar o screen para que o trabalho que esteja rodando não seja perdido.  É uma excelente prática agil para devops.

### tmux

tmux new = cria um nova sessão 

ctrl + b + c = cria um novo terminal 

ctrl + b, + d = deleta o terminal 

ctrl + b, + num = altera para qual terminal você quer ir 

ctrl + b, + shift +” = divide um terminal de forma horizontal, 

ctrl + b, + seta = muda para qual terminal ir 

ctrl + b, + % = divide o terminal de forma vertical 

da para dividir tanto horizontal quanto vertical, podendo dividir ate 3 ou mais terminais em um só.