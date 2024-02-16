# Lições práticas para a geração de hashes

Neste laboratório, você terá lições práticas com demonstrações dos processos de geração e verificação de hashes usando as ferramentas `md5sum` e `shasum`.

O md5sum é um programa de geração de hashes que calcula e verifica hashes MD5 de 128 bits. Como acontece com todos os algoritmos de geração de hashes, teoricamente, há um número ilimitado de arquivos com qualquer hash MD5. O "md5sum" é usado para verificar a integridade dos arquivos.

Da mesma forma, o shasum é um programa de criptografia que calcula e verifica hashes SHA. Ele também costuma ser usado para verificar a integridade dos arquivos.

Neste laboratório, você vai ver que praticamente qualquer alteração em um arquivo modifica o hash MD5 ou SHA.

O que você vai aprender

- **Calcular:** você vai criar um arquivo de texto e gerar hashes usando as ferramentas "md5sum" e "shasum".
- **Inspecionar:** depois de gerar os resumos de hash, você vai inspecionar os arquivos resultantes.
- **Verificar:** você vai verificar o hash usando as ferramentas "md5sum" e "shasum".
- **Modificar:** você vai modificar o arquivo de texto e comparar esses resultados com o hash original para observar como o resumo muda e identificar as falhas no processo de verificação.

## MD5

Primeiro vamos criar um arquivo de texto com alguns dados. Se você quiser, pode usar seus próprios dados de texto. Este comando cria um arquivo de texto chamado "file.txt" com uma única linha de texto básico:

Você vai ver a seguinte saída (ou algo muito parecido):

`echo 'This is some text in a file, just so we have some data' > file.txt`

Agora vamos gerar a soma de MD5 para o arquivo e armazená-la. Para gerar essa soma, digite este comando do "md5sum":

`md5sum file.txt > file.txt.md5`

Assim o hash MD5 será criado e salvo em um novo arquivo. Você pode conferir o conteúdo do hash na tela usando este comando:

`cat file.txt.md5`
O hash será exibido no terminal, e é parecido com isso:
<!--
c7a8ef893898f9a6b380eb4ec1e87113  file.txt
-->
Além disso, você pode verificar se o hash está correto e se o arquivo original não foi adulterado após a soma. Para fazer isso, insira este comando e veja a seguinte saída, que indica a validade do hash:

`md5sum -c file.txt.md5`
<!--
file.txt: OK
-->

### Verificação de um arquivo inválido

Agora, para você ver a segurança desse processo, vamos mostrar como até a alteração de um caractere no arquivo resulta em um hash diferente. Primeiro crie uma cópia do arquivo de texto e insira um único espaço ao final do documento. Use o editor de texto de sua preferência. Incluímos instruções para você fazer essa alteração no editor Nano. Faça uma cópia do arquivo ao digitar este comando:

`cp file.txt badfile.txt`

Depois gere um novo "md5sum" para o arquivo:

`md5sum badfile.txt > badfile.txt.md5`

O hash resultante é idêntico ao hash do arquivo original "file.txt", apesar da diferença nos nomes. Isso acontece porque, no processo de geração de hashes, só os dados do arquivo são consultados, e não os metadados.

`cat badfile.txt.md5`

`cat file.txt.md5`
Para abrir o arquivo de texto no Nano, digite este comando:

`nano badfile.txt`
O arquivo vai ser aberto no editor de texto. Para adicionar um espaço ao final do arquivo, use as teclas de seta, e não o mouse, para mover o cursor até o final da linha de texto. Em seguida, pressione a barra de espaço para adicionar um caractere de espaço ao final do arquivo. Sua tela deve se parecer com esta imagem:

<!--
This is some text in a file, just so we have some data 
<br>
<br>
<br>
<br>
<br>
<br>
^G Get Help  ^O Write Out  ^W Where Is  ^K Cut Text  ^J Justify  ^C Cur Pos
^X Exit  ^R Read File  ^\ Replace  ^U Uncut Text  ^T To Spell  ^_ Go To Line
-->
Para salvar o arquivo, pressione Ctrl + X. Você vai ver esta mensagem:
<!--
This is some text in a file, just so we have some data 
<br>
<br>
<br>
<br>
<br>
<br>
Save modified buffer?  (Answering "No" will DISCARD changes.)                                   
 Y Yes
 N No           ^C Cancel
-->
Digite Y para yes e pressione Enter para confirmar.

Você irá voltar à tela normal do terminal. Agora que você fez uma pequena alteração no arquivo, tente verificar o hash novamente. Desta vez, ocorrerá uma falha na verificação, mostrando que qualquer mudança resulta em um hash diferente. Insira este comando novamente para verificar:

`md5sum -c badfile.txt.md5`
Você vai ver uma mensagem informando que a verificação não foi concluída.
<!--
badfile.txt: FAILED
md5sum: WARNING: 1 computed checksum did NOT match
-->
Para ver a diferença de hash do arquivo editado, gere um novo hash e faça uma inspeção:

`md5sum badfile.txt > new.badfile.txt.md5`
`cat new.badfile.txt.md5`
Veja como ele é diferente do hash gerado anteriormente:

<!--
dcd879fd2c162dbfe9a186a67902e7ce  badfile.txt

Para referência, este é o conteúdo da soma original:

c7a8ef893898f9a6b380eb4ec1e87113  file.txt
-->

#### SHA

Vamos seguir as mesmas etapas para os hashes SHA1 e SHA256 usando a ferramenta "shasum". Em relação ao funcionamento, ambos trabalham de maneira muito semelhante e têm a mesma finalidade. No entanto, o SHA1 e o SHA256 são mais seguros que o MD5, e o SHA256 oferece ainda mais segurança que o SHA1. Isso significa que é mais fácil para um terceiro mal-intencionado atacar um sistema que usa MD5 do que um que usa SHA1. Atualmente, o SHA256 é amplamente utilizado, já que é o mais seguro dos três.

#### SHA1

Para criar a soma de SHA1 e salvá-la em um arquivo, use este comando:

`shasum file.txt > file.txt.sha1`

Veja o resultado dessa ação na tela, como você fez antes:

`cat file.txt.sha1`
<!--
65639a89992784291d769e05338085d1739645c6  file.txt
-->

Agora verifique o hash usando o comando abaixo. Como antes, essa ação falharia se o arquivo original tivesse sido alterado.

`shasum -c file.txt.sha1`
Você vai ver a seguinte saída, indicando que a verificação foi concluída:

<!--
file.txt: OK
-->

##### SHA256

Você pode usar a mesma ferramenta para criar uma soma de SHA256. A sinalização "-a" especifica o algoritmo que será usado. Quando nenhuma opção é definida, o padrão é o SHA1. Para gerar a soma de SHA256 do arquivo, use este comando:

`shasum -a 256 file.txt > file.txt.sha256`

É possível ver a saída do conteúdo desse arquivo da mesma forma de antes:

`cat file.txt.sha256`

O nível maior de segurança do SHA256 é resultado da criação de um hash mais longo e mais difícil de adivinhar. Veja que o conteúdo do arquivo é muito maior que no SHA1:

<!--
7a54af37c15a82e157c8368324e7234d22778ce845219cd16172895a608030ff  file.txt
-->

Por fim, para verificar a soma de SHA256, você pode usar o mesmo comando de antes:

`shasum -c file.txt.sha256`

###### Conclusão

Parabéns! Você criou e verificou hashes usando três dos algoritmos mais comuns: MD5, SHA1 e SHA256. Você também comprovou a segurança desses hashes ao mostrar que até mesmo pequenas alterações no arquivo resultam em um novo hash e geram falhas na verificação.
