# Sistemas Operacionais: Tornando você um usuário avançado

Acabei me passando no git e perdi a transcrição do modulo 01, ainda bem que aconteceu afins educacionais. Não irei refazer, pois achei o conteúdo muito inciante para esse primeiro momento. Mas, não deixarei passar em branco, mostrarei em tópicos os assuntos, se não sabem, procurem conhecimento na internet.

## Comandos básicos CLI powershell e bash

- Listar diretórios e arquivos - `ls, ls -lha`
- Navegação em diretórios - `cd, cd .., cd ~/`
- Criação de diretórios e arquivos - `mkdir, touch`
- histórico - `history`
- copiando e movendo/renomeando arquivos- `cp, mv`
- removendo diretórios e arquivos - `rmdir -r, rm -rf` (Cuidado com esse comando)
- exibindo conteúdo de arquivos - `cat, cat /`
- editores de texto - `vim, nano`
- entrada, saída e o pipeline - vale a pena olhar mais sobre isso.

### Entrada, saída e o pipeline

Em um sistema operacional Unix-like, como o GNU/Linux, a entrada e a saída dos comandos são controladas por streams (fluxos).

Existem dois streams principais:

- **STDIN (standard input):** é a entrada padrão, que é usada para fornecer dados aos comandos.
- **STDOUT (standard output):** é a saída padrão, que é usada para exibir os resultados dos comandos.

Além desses dois streams principais, também existem outros streams, como:

- **STDERR (standard error):** é a saída de erro, que é usada para exibir mensagens de erro dos comandos.
- **STDAUX (standard auxiliary):** é um stream auxiliar, que pode ser usado para fornecer dados ou receber resultados de comandos.

#### Redirecionamento de entrada e saída

O redirecionamento de entrada e saída é uma forma de modificar o fluxo de dados de um comando.

Ele é usado para:

- Enviar dados para um comando a partir de um arquivo.
- Escrever os resultados de um comando em um arquivo.
- Enviar dados para um comando a partir da entrada padrão do usuário.

O redirecionamento de entrada e saída é feito usando os seguintes símbolos:

**> ou >> para redirecionar a saída padrão.**
**< para redirecionar a entrada padrão.**
**2> ou 2>> para redirecionar a saída de erro.**

Exemplos de redirecionamento de entrada e saída

Vamos ver alguns exemplos de redirecionamento de entrada e saída:

Para ler o conteúdo do arquivo arquivo.txt e exibi-lo na tela, podemos usar o comando cat com o redirecionamento de entrada:
`cat arquivo.txt`

Para escrever o conteúdo da variável em um arquivo chamado arquivo.txt, podemos usar o comando echo com o redirecionamento de saída:
`echo "O valor da variável é $variavel" > arquivo.txt`

Para ler a entrada do usuário e exibi-la na tela, podemos usar o comando read com o redirecionamento de entrada:
`read -p "Digite um valor: " valor`
`echo "O valor digitado foi $valor"`

##### Pipelines

Um pipeline é uma sequência de comandos conectados por pipes. Um pipe é um símbolo representado por um caractere vertical **(|).**

A saída de um comando em um pipeline é passada como entrada para o próximo comando. Isso permite que os comandos sejam combinados para realizar tarefas complexas.

Exemplo de pipeline

Vamos ver um exemplo de pipeline:

`ls | grep "arquivo" | wc -l`

Este pipeline executa os seguintes comandos:

- ls lista o conteúdo do diretório atual.
- grep filtra as linhas que contêm a string "arquivo".
- wc -l conta o número de linhas.
- O resultado deste pipeline é o número de linhas que contêm a string "arquivo" no diretório atual.

##### Outros recursos de pipelines

Além de conectar comandos, os pipelines também podem ser usados para:

Duplicar a saída de um comando:
`ls | tee arquivo.txt`
Este comando lista o conteúdo do diretório atual e escreve a saída em um arquivo chamado arquivo.txt.

Passar argumentos para um comando:
`ls | xargs -n 10 echo`
Este comando lista o conteúdo do diretório atual e passa cada linha para o comando echo com o argumento -n 10. O comando echo exibirá cada linha com um máximo de 10 caracteres.
