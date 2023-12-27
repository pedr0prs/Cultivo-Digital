## Coringas, caracteres especiais e comandos diversos para  manipulação de arquivos e diretórios que irá ajudar no dia-dia

## coringas

*     - substitui um, nenhum ou mais de um caracteres naquela posição

? - identifica um caractere naquela posição apenas 

[a,z] - um padrão 

{s,a} - padrão de strings 

ls a* - irá mostrar todos os comandos que se inicia com a letra A, assim por diante. 

ls *path - mostrar todos que termina com path

ls a*r - Mostra todos que começam com A e termina com R

ls m? - Mostra todos que tem 1 caractere depois do M

ls m?? - mostra comandos que tenha 2 caracteres depois do M

ls a?t* - Mostrar todos os comandos que iniciam com a letra A e que tenha um caractere “?” na segunda posição, que tenha uma letra T e depois um, nenhum ou mais de um caractere depois do T que é o *

ls ?z* - Comandos que iniciam com qualquer letra, na segunda posição tem que ter a letra Z e um, nenhum ou mais caracteres *

[]   - coxetes, usado para delimitar uma referencia de caracteres, uma faixa de caracteres.

ls m[a,c] - mostrar todos os comandos que iniciam com a letra M e termina com letra A ate a C

ls m[^abc] - determina pesquisar uma palavra que comece com M e não termina com ABC.

 ^ - caractere de negação 

bom para filtrar e pegar apenas o que a gente quer em uma pasta. 

{} - chaves, determina pedaços do arquivo

ls x{zd,ze}* - Mostra todos que começam com X e que tem ZD e ZE incluído logo em seguida, e o *. 

ls w?[d-z]*{list,comp}* - mostra todos que começam com W, com acréscimo de qualquer caractere depois ?, que tenha de D a Z, * substitui um, nenhum, ou mais de um caractere, {list,comp} mostrar todos que tenham LIST e COMP, seguido de *. Neste caso ele irá mostrar a mesma pasta duas vezes, pois é duas procuras usando coxetes e chaves. 

## Comandos diversos do linux - 40 comandos

clear - limpa tela ou CTRL + L 

jogo da velha # - comentário 

date - permite configurar a data do sistema operacional 

date 101007452022 - altera o mês, dia e hora minutos e segundos 

date +”%d-%m-%y %T- mostra dia mês, ano e horário exato. 

%j - dias corridos

%r - formato americano 

%p - MP ou AM 

hwclock —systohc - salva o horário (normalmente é automático)

df - mostra o espaço livre em cada partição montada no sistema linux 

df -h - formato mais humano

df -l - lista somente o sistema de arquivo locais 

df -m - exibe a saída em megabytes 

df -a - inclui pseudfsystem mais organizado q o → mount

df -i - Inodes, cada arquivo que é armazenado no sistema de arquivos são sempre referenciados em um Inode, é dai que conseguimos criar os links, hardlinks. 

df - T - Mostra qual sistema de arquivos utilizado em cada partição 

ln - cria um link de um arquivo para um diretório ou para um arquivo. 

os links são classificados em hardlinks que podem ser feitos dentro do mesmo sistema de arquivos, e o resultado desse link é um arquivo convencional ou um link simbólico que pode criar entre sistemas de arquivos diferentes ou dentro do próprio sistema de arquivo. 

O arquivo é referenciado pelo inode no sistema linux.

o link simbólico é apenas um apontamento virtual para o arquivo, ele não faz referencia ao inode diretamente, o link simbólico faz referencia a um símbolo para puder acessar um arquivo alvo. É bastante usado para realizar ligações entre as pastas do sistema, já o Hardlink  

du - exibe a ocupação do tamanho de cada arquivo na partição montada

du -hs - sem detalhamento  

find - permite encontrar arquivos e diretórios, muito poderoso 

find . -name ls - mostra todos as pastas e arquivos que termina com ls que estão na estrutura 

find. -name mc - mostra binários e pastas 

find. -type d -name mc - apenas pastas

find /usr -maxdepth 2 -type f - desce dois níveis 

### Pesquisa por data

find /etc -mtime -1 - mostra todos os arquivos que foram modificados a um dia atrás

find /etc -amin 10- todos os arquivos que foram acessados nos ultimos 10m

find /etc -cmin -1 - mostrar todos os arquivos que foram criado no ultimo minuto 

find /etc -ctime -1 = um dia atrás +1 = arquivos e pastas criado a mais de um dia 

find /usr -mount - faz a pesquisa dentro da arvore de pesquisa 

find /usr -gid - 

find /home -uid 1000 - pesquisa todos os usuários 

find /home -user nomedousuário = find /home -group- pesquisa todos as pastas de um usuário 

### pesquisa pelo tamanho dos arquivos

find /usr -size +1000 - pesquisa todos que tem um tamanho mais de mil blocos

find /usr -size -1000 - pesquisa todos que tem um tamanho menos de mil blocos

para pesquisar em kbtes é só colocar o K no final do 1000

free - ele exibe a memória livre do sistema operacional, tanto a memória RAM física e também a memória SWAP configurado no servidor linux.

free —kilo = mostra em kilobytes 

free —mega = mostra em megabytes 

feee —kibi = mostra em kibibytes 

free —mebi = mostra em mebibytes 

free —gibe = mostra em gibebytes

free —giga = mostra em gigabytes 

free —mega -s 1 = mostra a utilização da memória a cada segundo 

cat /proc/meminfo = detalhamento da memória usada no sistema

grep - é bastante utilizado em pesquisa por expressões dentro de um determinado arquivo ou em entrada padrão

grep -v - inverte a busca 

grep -f 

grep -i - ignora maisculos e menusculos ]

grep -iE = pesquisa por expressões regular

 grep -iF = pesquisa por caracteres especiais 

grep -ril 

grep -rin = numero da linha que contém a expressão

head = mostra as primeiras linhas de um arquivo 

head -n 3 = mostra as 3 primeiras linhas 

head -c = mostra a quatidade de bytes do arquivo 

nl = numera a quantidade de números dos arquivos 

more - ele abre o arquivo e pausa pagina a pagina, e com Enter ele mostra linha a linha e se apertar SPACE ele abre pagina a pagina. uma das vantagens do more é que só pode ser rolado para baixo. 

less - pode rolar pra cima e pra baixo com as setas de navegação, tem a possibilidade de pesquisar dentro do arquivo usando / buscarnome e usando a letra N ele mostra as próximas ocorrências da busca Q finaliza.

sort - ordena os números e depois as palavras que começam de A a Z 

sort -r = inverte a classificação 

sort -c = mostra se esta ordenada ou não 

tail = permite visualizar o final do arquivo, ele mostra as dez ultimas linhas do arquivos 

tail -n 4 - mostra as ultimas 4 linhas 

interessante combinar com outros comandos 

time = permite que vejamos o tempo de execução de um comando 

touch = permite criar um arquivo vazio 

touch -t = altera a data e hora do arquivo 

touch -a = altera a data de acesso do arquivo 

uptime = mostra o tempo de atividade da maquina 

dsmeg = exibe as mensagens do ringbuff do kernel 

dsmeg -t pipe grep enp0s3 = exibe todas as mensagens relacionado da placa 

dsmeg -x = mostra o texto legível, facilita a classificação da categoria de msg

dsmeg -T = mostra os horários 

dsmeg -c = limpa as msgs do buff do kernel 

mesg = enviar msg em tempo real usando talk 

su = permite elevar os privilégios do usuários convencional para um usuário root. 

su - = mais recomendado e seguro

/bin/su - = é possível que tenha um pash alterado, aqui força o sistema para elevar ao usuário root de maneira adequada 

sudo = permite escalar privilégios para super usuários e a vantagem dele é que dá para especificar quais usuários poderão escalar privilégio pra root, adicionando ele para o grupo sudo

sudo id

sudo su = fica sudo de uma forma permanente 

adduser nomedousuário sudo = para adicionar um usuário ao sudo

deluser nomedousuário sudo = para excluir um usuário do sudo

sync = permite gravar os buffs do kernel em um disco  

O Linux faz o cache do bando de dados que vão ser gravados em memória e geralmente ele demora em torno de 10s a 20s dependendo da configuração do sistema de arquivos. Com sync realizada de maneira instantânea. Um uso muito importante dele é quando for realizar o recovery do sistema usando o modo unit1, caso seja necessário atualizar algum arquivo, com sync é possível forçar antes da maquina dar o reboot. as vezes da um kernelpank.

uname = retorna basicamente o nome do sistema operacional 

uname -a = retorna dados referente a versão do kernel 

uname -s = exibe o kernel

uname -n = nome da maquina na rede = hostname

uname -r = versão atual do kernel, bem interessante.  bastante atualizado num disco que é utilizado no boot da maquina.

uname -v = mostra a data que o kernel foi compilado 

uname -m = mostra a arquitetura atualizada no kernel 

reboot = reinicia a maquina, somente usuário root. 

systemctl reboot = também reinicia a máquina 

reboot -f = força a reinicialização, é interessante usar o sync primeiro antes de usa-lo, parar salvar o máximo de configurações possíveis. 

shutdown -r now = reboot = shutdown -h now

halt = desliga a maquina = systemctl halt

echo b >/proc/sysrq-trigger = reinicia o kernel diretamente, em casos de emergências. Recomendado fazer checagem de arquivos. 

echo o >/proc/sysrq-trigger = caso tudo dê errado, o sistema esteja instável, o sistema de arquivo deu problema e é necessário desligar. 

shutdown -h 09:40 = agenda o desligamento 

showdown -h +10 = desliga em 10s 

shutdown -c = cancela o agendamento do desligamento 

wc = wordcount que conta o números de palavras, bytes e linhas em um arquivo ou em entrada padrão. 

wc -l = exibe somente o número de linhas 

wc -c = apenas bytes 

wc - w = apenas as palavras 

seq = imprime uma sequencia de números 

sec 2 2 10 = imprime 2 em 2 até 10

2= primeiro número 2= incremento 10= número final 

seq -w = ordena com 0, para que os números fiquem alinhados.