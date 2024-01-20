# Permissões

## Windows: permissões de arquivo

As permissões de arquivo são um conceito importante em segurança de computadores. Trata-se de dar acesso a certos arquivos e diretórios somente a quem precisa.

No Windows, as permissões de arquivos e diretórios são dadas usando-se listas de controle de acesso, ou **ACLs**. De forma mais específica, vamos trabalhar com listas de controle de acesso discricionário, ou **DACLs**. Arquivos e pastas do Windows também podem receber listas de controle de acesso do sistema, ou **SACLs**. As SACLs são usadas para informar ao Windows que ele deve usar um log de eventos para fazer uma anotação cada vez que alguém acessa determinado arquivo ou pasta.

Você pode pensar na DACL como uma anotação sobre quem pode usar determinado arquivo e o que essa pessoa fazer com ele. Cada arquivo ou pasta tem um proprietário e uma ou mais DACLs. Vamos ver um exemplo. No Explorador de Arquivos, abri meu diretório principal. Se clicarmos com o botão direito em "Área de Trabalho" e selecionarmos "Propriedades", vemos a caixa de diálogo de propriedades do diretório "Área de Trabalho". Se formos para uma aba "Segurança", podemos ver a janela de permissões.

`icacls /?` na cli, mostra as permissões de um arquivo ou diretório

### Windows: modificando permissões powershell

`icacls 'c:\fotos' /grant 'everyone:(OI)(CI)(R)`

`icacls 'c:\fotos' /grant 'authenticated:(OI)(CI)(R)`

`icacls 'c:\fotos' /remove Everyone`

`icals 'c:\fotos`

## Linux: permissões de arquivo

Existem 3 permissões diferentes que você pode ter no Linux;

- **Leitura:** permite que alguém leia o conteúdo de um arquivo ou pasta.
- **Escrita:** permite que alguém grave informações em um arquivo ou pasta.
- **Execução:** permite que alguém execute um programa.

Vamos dar uma olhada com o comando `ls -l`. Usaremos o flag "l" para que possamos ver as permissões do arquivo. A primeira coisa que vemos nesta coluna é **-rwxrw-r--**. Há 10 bits aqui.

O primeiro é o tipo de arquivo. Neste exemplo, **-** significa que o arquivo que estamos vendo é apenas um arquivo normal. Às vezes você pode ver **d**, que significa diretório.

Os próximos nove bits são nossas **permissões**, que estão agrupadas em trios.

O primeiro trio refere-se à permissão do proprietário do arquivo.
O segundo trio refere-se à permissão do grupo ao qual este arquivo pertence.
O último trio refere-se à permissão de todos os outros usuários.

O **r** significa legível, **w** significa gravável e **x** significa executável. Assim como no binário, se um bit está definido, dizemos que ele está ativado. Então, para nossas permissões, se o bit tem um traço, ele está desativado. Se tiver algo diferente do traço, ele está ativado. As permissões no Linux são superflexíveis e poderosas porque nos permitem definir permissões específicas com base em nossa função, como proprietário, grupo ou todos os outros.

O primeiro conjunto de permissões, **rwx**, refere-se à permissão do usuário que é dono desse arquivo.
O próximo conjunto de permissões são permissões de grupo.
E por último, as permissões para todos os outros usuários e grupos só permitem que eles leiam este arquivo.

Em poucas palavras, essas são as permissões do Linux. Pode levar algum tempo para você se acostumar a ler essas permissões. Não se preocupe. Você pegará o jeito.

### Linux: modificando permissões

No Linux, mudamos as permissões usando o comando **chmod**, que vem de "modo de alteração". Primeiro, escolha qual conjunto de permissões você quer mudar.

O proprietário, que é representado por **u**.
O grupo ao qual o arquivo pertence, que é representado por **g**.
Ou outros usuários, que são representados por **o**.

Para adicionar ou remover permissões, basta usar um sinal de mais ou de menos para indicar quem a permissão afeta. Vamos dar uma olhada em alguns exemplos.
Então... `chmod u+x my_cool_file` - Este comando está dizendo que queremos mudar a permissão do "my_cool_file" dando acesso de execução "x"  ao proprietário "u".

Se quiser remover uma permissão. Então... `chmod u-x my_cool_file`

Em vez de um "+", usamos um "-". Fácil, não é? windows é complicado demais

Se você quiser adicionar várias permissões para um arquivo, basta fazer algo assim.
Estamos dizendo que queremos adicionar permissões para ler e executar permissões ao proprietário de "my_cool_file". E você pode fazer o mesmo para vários conjuntos de permissões. Você coloca `chmod ugo+r my_cool_file`
Estamos dizendo que queremos adicionar permissões de leitura para o proprietário, o grupo ao qual o arquivo pertence e todos os outros usuários e grupos.
Este uso de "rwx" e "ugo" para denotar permissões e usuários no "chmod" é conhecido como formato simbólico. Também podemos mudar as permissões numericamente, o que é muito mais rápido e simples. pois nos permite alterar todas as permissões de uma só vez.

- **O equivalente numérico de "rwx"**
- **é 4 para "ler" ou "r"**
- **2 para gravar ou "w"**
- **1 para executar ou "x".**
**Para definir permissões, adicionamos esses números para cada conjunto de permissões que queremos afetar.**

Vamos ver um exemplo.
Podemos executar `chmod 754 my_cool_file` para atualizar todos de uma vez.
De qualquer forma, você pode alterar as permissões usando o formato simbólico ou numérico. Basta escolher o que for mais fácil para você.
Você também pode alterar o proprietário e o grupo de um arquivo. O comando `chown`, que vem de "mudar proprietário", permite que você mude o dono de um arquivo.
E para mudar o grupo de arquivos , você pode usar o comando `chgrp`  que vem de "mudar grupo".

Pode demorar um pouco para você aprender a ler e a alterar permissões. Você pode praticar a alteração das permissões em alguns arquivos até você dominar a tarefa. As permissões são um elementos essencial em segurança de computadores!

### Linux: SetUID, SetGID, sticky bit

No Linux, também temos permissões especiais. E se eu quiser que um usuário consiga fazer algo que exija privilégios de root, mas não queira lhe dar esses privilégios? Qual é o uso disso? Essa pergunta é ótima. Há determinados comandos que precisam alterar arquivos que são de propriedade do root. Normalmente, se você precisar alterar um arquivo de propriedade do root, você precisa usar o **sudo**. Mas queremos que os usuários normais possam alterar os arquivos sem lhes dar acesso root.

Sabemos que o comando `passwd` embaralha secretamente nossas senhas e, em seguida, adiciona-as ao arquivo `etc/shadow`. Vamos nos aprofundar um pouco mais nesse arquivo.
Ah, está dizendo que esse arquivo é de propriedade do root. Como conseguimos gravar ou embaralhar senhas neste arquivo, se ele é de propriedade do root.
Bem, graças a um bit de permissão especial conhecido como **setuid**, podemos permitir que os arquivos sejam executados pela permissão do proprietário do arquivo.
Nesse caso, quando você executa o comando `passwd`, ele está sendo executado pelo root.

Dá para ver que as permissões deste arquivo parecem um pouco estranhas. Há um "s" aqui onde deveria haver um "x". O "s" significa "setuid".
Quando o "s" é colocado no lugar do que seria um bit irregular, ele nos permite executar o arquivo com as permissões do proprietário do arquivo. Para ativar o bit "setuid", você pode fazê-lo simbolicamente ou numericamente.
O formato simbólico usa "s", enquanto o formato numérico usa um "4", que você coloca antes das permissões.

Assim como o "setuid", você pode executar um arquivo usando permissões de grupo com "setgid", que vem de "definir ID de grupo". Isso permite que você execute um arquivo como membro do grupo desse arquivo.

Nas permissões de grupo, podemos ver que o bit "setgid" foi ativado, o que significa que quando este programa é executado, ele é executado como o grupo "tty". Para ativar o bit "setgid", você pode fazer algo parecido com o "setuid". A única diferença é que o formato numérico usa "2".

Há um último bit de permissão especial que devemos apresentar, que é o **sticky bit**.
Este bit fixa um arquivo ou uma pasta. Ele faz com que qualquer um possa gravar em um arquivo ou pasta, mas não possa excluir nada. Apenas o dono ou o root podem excluir qualquer coisa.
