## Comandos internos e externos do shell

Um comando interno basicamente, é um comando que está contido dentro do interpretador de comandos do próprio shell. Dentro do /bin/bash existem alguns comandos que são utilizados de forma muito frequentes ou com a finalidade de criar os shells scrips que são automações usando os comandos do próprio sistema operacional.

ls - mostra os arquivos 

echo - exibe uma mensagem na tela

alias - cria apelido de um comando para outro comando 

como fazer para identificar se esses comandos são internos ou externos. Dependendo do tipo de shell, irá mostrar o que se tem de disponível dentro da linha de comandos. Um comando interno é executado de forma mais rápida que um comando externo e com isso o usuário ganha mais performasse na execução dos aplicativos.  

which - identifica se o binário está instalado em sua maquina

man builtins - pagina de manual do bash, mostra os comandos que estão contidos dentro do BASH.

Outro interpretadores de comandos eles podem ter comandos internos diferentes do bash, por isso alguns shells scripts tem que explicitar obrigatoriamente qual o shell utilizado. 

utilizar o /bin/sh ele torna seu script mais portável em suas plataformas.

Existem alguns comandos que existes tanto internamente quanto externamente, porquê não existem outros interpretadores de comandos, por exemplo o echo. 

Qualquer binário que possa ser executado com o usuário convencional é necessário coloca-lo em usr/local/bin que são binários adicionais do usuário convencional. Que é tudo que não vem na distribuição e que deve ser executado por um usuário normal.

 $PATH - indica o caminho que a maquina vai pesquisar para executar um comando do sistema operacional. 

type - diz se o comando está sendo puxado interna ou externamente

Muitos ataques são realizados através da colocação do comando indevido no $PATH do sistema. Entender esse caminho de busca é muito importante. 

## Comandos de manipulação de diretórios

são eles: ls - cd - pdw - mkdir - rmdir.

ls que mostra os arquivos será o mais usado no dia-dia, saber como usa-lo irá dá muita produtividade. 

paramentos: -a - mostra os arquivos e diretórios ocultos 

-b - não lista os arquivos que terminam com ~ no final

-l - detalhamento da listagem dos arquivos

-d - classifica apenas pelo nome da pasta 

-f - não classifica listagem, sem detalhamento. 

-n - lista em formato numero 

-o - exibe somente os  donos do arquivo

-g - exibe apenas os grupos dos arquivos e diretórios 

-tr - classifica por data de criação

-lac - classifica pela data de alteração

-x - classifica por extensão do arquivo

-r - reverter a listagem 

R- Recursiva 

name~ backup 

. - pasta atual 

.. - pasta anterior 

arquivo oculto começa com . 

mkdir - criar diretórios 

-p - permite criar vários diretórios dentro do outro diretório. 

tree - mostra a arvore de diretórios -a deixa mais bonito

rmdir - remover diretórios

—color=auto - colore o arquivo caso estiver usando um terminal que suporta cores 

—color=never - ignora as cores 

A data do arquivo será a data da ultima alteração ou se acabou de criar, da criação. 

cd - navega entre as pasta

pwd - mostra a pagina que está atualmente 

## Comandos para manipulação de arquivos

cat - visualiza o conteúdo do arquivo 

-n - lista em numero os arquivos

-s - elimina as linhas em branco 

-b - numera apenas as linhas que estão preenchidas

-e - coloca $ no final da linha

-T - converte para o tab para CRLT + I 

tac - inverte

rm - remove arquivos e diretórios 

-r - remove os diretórios 

-f - força a remoção 

-i - pergunta confirma se é pra remover ou n 

rm -rf * - remove todos os arquivos 

rm — especifica para apagar 

cp - copia arquivo 

-* coringa 

mv - muda o nome do arquivo ou diretório 

## Micro tutorial para editar arquivos do linux

nano - um dos mais simples que acompanha no sistema operacional Debian, permite a edição de uma forma muito simples.

nano /tmp/test.txt - abre a interface para editar textos

ctrl + x - para sair da interface nano

ctrl + O - Salva arquivo 

apt-get install mc - pacote mc 

mcedit/nome do arquivo - editor de texto 

dpkg -l vim-tiny

vi/nome do arquivo - editor tradicional, editor modal. complexo.

modo de comandos

:q! - sai do editor sem salvar 

i - entra no modo de edição

esc - sai do modo de edição tb

:x - salva e sai do editor 

:w - salvar sem sair