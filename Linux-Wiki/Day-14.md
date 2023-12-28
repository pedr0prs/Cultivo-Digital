Como criar e gerenciar variáveis de ambiênte.

SET, UNSET, EXPORT, ENV, PRINTENV, BASHRC, ETCPROFILE, .PROFILE…

### O que é e listando variáveis de ambiente

Variáveis de ambiênte nada mais é do que uma palavra/nome que reserva um valor na memória, e esse valor poderá ser acessado a qualquer momento.

Posso passar alguma configuração para o sistema operacional usando variáveis de ambiênte.

Variáveis de ambiênte é meio que tentar falar no nível da máquina.

O linux tem várias variáveis importante que trazem informações para o sistema operacional, como:

$PATH = mostra variárives onde tem binários 

echo $PATH = mostra o caminho do path

set | more = mostra praticámente todas as informações do sistema

printevn = mostras só as variáveis de ambiênte

### Criando e modificando variáveis de ambiênte

export PEDR0PRS= cria uma variável 

unset $PEDR0PRS = apaga a variável 

grep -i = procura maiúsculas e menusculas 

export PEDR0PRS=”pedro”:lindo = coloca dois valores 

## Comando ALIAS

alias cria apelidios para outros comandos

alias listar=”ls -lha”

unalias = tira o alias

whoami = mostra o usuário que está logado

## Arquivos para customizar o ambiênte

tail .bash_history = mostra os ultimos 10 comandos

bash = reseta o bash 

source = da uma fonte no arquivo linux

O etcprofile é sempre o primeiro arquivo a ser lido ao efetuar o login no bash

Depois é os aquivos que estão dentro da home do usuário, como bashrc bashlogin/logout

vim /etc/motd = msg de boas vindsa 

cd /etc/update-motd.d = boas vindas

touch .hushlogin = no home ele apaga a msg de boas vindas

### O arquivo /etc/environment

Esse arquivo será lido toda vez que você reiniciar sua máquina e criará variáveis de ambiênte para todos os usuários de sua máquina