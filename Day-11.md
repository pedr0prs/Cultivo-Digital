Redirecionadores, pipe, entender o que são os operadores and e or, como conseguir a ajuda no Linux.

### Redirecionadores - STDOUT

> = redireciona a saida padrão - stdout - standart output 

>> = redireciona a saida padrão e concatena no arquivo/disp indicado, ou seja, não vai substituir, irá colocar na linha abaixo.

cat > .txt = pode-se usar o direcionador para criar um arquivo. 

### Redirecionadores - STDIN

< = redireciona a entrada padrão - stdin 

<< = 

### Redirecionadores - STDERR

2> = Redireciona a saida de erro padrão 

2>> = Redireciona a saida de erro padrão concatenado 

FD = File Descriptor

stdin = 0

stdout = 1

stderr = 2 

Tudo no Linux é arquivo 

### Redirecionadores - STDOUT E STDERR

2>&1 = Direciona a saida de erro e joga a para um file descriptor, ou seja, quando tiver erro, irá mudar a saida padrão de erro para stdout 

### Redirecionadores - Pipe e o Tee

| = pega o conteúdo do comando anterior e joga para o outro comando processar 

ls | tee = joga o conteúdo para dentro do arquivo e exibe na tela 

| grep buscar” = buscar algo 

| grep root | nl = enumeras as linhas 

| grep root | wc -l = diz quantas linhas se tem 

### Operadores - AND e OR

AND ⇒ && = Executa o próximo comando caso o anterior tenha sido executado com sucesso.

OR ⇒ || = Executa caso o comando anterior tenha falhado

### Como conseguir ajuda no Linux

man comando = mostra tudo sobre o comando 

man -k comando = mostra comandos para ajudar

/procuraalgo = para procurar algo dentro da man page 

shift + P = vai pro inicio da page

shift + G = vai pro final da page 

aprops = descrisão do comando  

aprops -w c?mando = mostra todos usando coringas 

whatis —help = tb procura algo 

/user/share/man = onde fica as pags de manual 

LS() = São as seção 

info ls = informações sobre 

comando —help = ajuda sobre determinado comando 

which = mostra exatamente onde está o binário

which -a comando = mostra todas as opções do caminho 

find = procura arquivos no disco 

/usr/share/doc$ = documentações