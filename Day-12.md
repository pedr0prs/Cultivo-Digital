# VI - visual interface

$ sudo apt-get install vim 

[vim.org](http://vim.org) - documentação - learning vim 

$ vim nomearquivo
                                           linha, coluna

vimrc - customiza o vim

MODO DE INSERÇÃO
i = insert 
I = modo inserção no inicio da linha 
esq = retorna ao modo comando 

o = insere texto na linha abaixo 

O = insere na linha acima 

a = insere um caractere a frente 

A = entra em modo inserção no final da linha

Salvando e saindo 

:w = salva o arquivo 

:q = sai do arquivo 

:q! = força a saída 

:wq = salva e saí 

:x = sair e salvar 

ZZ = ZAIR E ZALVAR

ZQ = sai sem salvar 

Copiando, colando e recortando 

yy = copia 

p = cola

em modo de comando (Esq)

y8y = copia 8 linhas 

dd = recorta as linhas, mas guarda em buffer e quando aperta p ele cola de volta, dd alem de apagar ele também copia, cola e recorta 

d8d = apaga as 8 linhas 

dw = apaga uma palavra

yw = copia uma palavra
x = apaga 1 caractere igual ao delete

X = remove um caractere antes como backspace

Sempre que recortar/apagar qualquer coisa no vim, com o P ele cola, pois fica no buffer do vim

shift + p = cola na linha a cima

r = replace = substiui o caractere por outro (mode esq)
Visual

no mode esq

v = seleciona um pedaço de texto
V = Seleciona linhas do texto

ctrl + v = visual block, seleciona um bloco de texto

Voltando e refazendo

u = voltar

ctrl z = refazer 

buscas e localização 

/palavra = busca a palavra giropops descendo arquivo

?palavra = busca a palavra subindo o arquivo

n = continua com a busca

N = continua com a busca ao contrário

gg = vai pro inicio do arquivo

G = vai pro fim do arquivo 

M = meio da tela

H = no alto da tela

L = na parte da tela

comando vim

:set nu/mber = mostra as linhas no arquivo

:set nonumber = tira as linhas

:set hlserch = pesquisa caracteres 

:set nohlsearch = sai da pesquisa 

 :set tabstop=2 = o tab pula 2 spaces

:set expandtab = converte o tab em spaces

:set noerrorbells = tira o som do erro

:set novisualbells = tira a sinalização de erro visual

:set bg=dark/light = muda o esquema de cor do vim 

:set no/ingnorecase = 

:set syntax=on/off = reconhece a sintexa 

substituindo a palavra

:46s/palavra/coloca outra palavra = substitui a palavra 

:%s/palavra/outra palavra/g = modifica a palavra de todo arquivo. o g é caso a tenha 2 palavra na mesma frase

colocar no .vimrc

set number

set hlsearch

set tabstop=2

set shiftwidth=2

set softtabstop=2

set expandtab

set novisualbell

set noerrorbells

set ignorecase

set bg=light

set textwidth=79

syntax on

:e vim/nomearquivo = abre outro arquivo e! = força

:r nomearquivo = coloca todo conteudo do arquivo dentro de outro arquivo

shift + d = remove da posição do curso até o final da linha

dG = apaga até o final do arquivo

dgg = apaga até o inicio do arquivo 

:split nomearquivo = abre dois arquivo na mesma tela 

ctrl + ww  = vai para outra tela 

ctrl + vww = abre 3 telas 

:qa = fecha todas as janelas :qa! força

IP 

:! ip a = pega o ip
:! hostname = pega o nome da maquina 

:! comando = manda comando dentro do vim 

:.! comando = pega o comando e coloca dentro do vim