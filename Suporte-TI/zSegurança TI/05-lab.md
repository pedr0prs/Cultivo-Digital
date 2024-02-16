# Como criar/inspecionar pares de chaves, criptografar/descriptografar e assinar/verificar usando o OpenSSL

O OpenSSL é um kit de ferramentas comerciais para os protocolos Transport Layer Security (TLS) e Secure Sockets Layer (SSL). Ele também é uma biblioteca de criptografia para fins gerais. O OpenSSL tem uma licença do estilo Apache. Isso significa que você pode acessar e usar o utilitário livremente para fins comerciais e não comerciais (sujeito a algumas simples condições da licença).

O que você vai aprender

- **OpenSSL:** você vai ver como gerar pares de chaves com o OpenSSL.
- **Criptografia e descriptografia:** você vai usar o par de chaves para criptografar e descriptografar um pequeno volume de dados.
- **Verificação:** você vai usar o par de chaves para assinar e verificar os dados, garantindo a precisão deles.

## Como gerar chaves

Antes de criptografar ou descriptografar qualquer item, você precisa de uma chave privada e uma pública. Então vamos criá-las primeiro.

Como gerar uma chave privada

Um par de chaves consiste em uma chave pública que você pode divulgar e uma chave privada que precisa ser mantida em segredo. Quando alguém quiser enviar dados e garantir que ninguém os veja, eles podem ser criptografados com sua chave pública. Os dados criptografados com essa chave só podem ser descriptografados com sua chave privada. Assim só você consegue ver os dados originais. Por isso é tão importante manter as chaves privadas em segredo. Se alguém tiver uma cópia dela, poderá descriptografar os dados enviados a você. Isso não é nada bom!

Primeiro vamos gerar e analisar uma chave RSA privada de 2.048 bits. Para gerar a chave, insira este comando no terminal:

`openssl genrsa -out private_key.pem 2048`
Você vai ver a seguinte saída (ou algo muito parecido):

<!--
Generating RSA private key, 2048 bit long modulus (2 primes)
................+++++
..........................................+++++
e is 65537 (0x010001)
-->

Esse comando cria uma chave RSA de 2.048 bits chamada "private_key.pem". O nome da chave é informado depois da sinalização "-out" e geralmente termina em ".pem". O número de bits é indicado no último argumento. Para ver sua nova chave privada, use o comando "cat" para exibir a chave na tela, como você faria com qualquer outro arquivo:

`cat private_key.pem`

O conteúdo do arquivo da chave privada parece uma grande mistura de caracteres aleatórios. Isso está correto, então fique tranquilo se não conseguir ler o conteúdo:

<!--
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA4kNMSmssCSYbOnq/UAHGH5xx9gjZaOiST3JQQtJO11L/YeBO
8DOHc7UawNADA/XDBAnGZih1M8T1PGc6Vk5SW2Lb8FMf9zG2XhYpCACFFPJAW00q
s4s1JesdugOprHZ8Jmm/QJl4KuCjlY/XdviCvcbxROIQ2mglR8nW1QWrhECQNBfo
dRSuTwmW3qBSW/Xd5pmTpP4GHCyUfRO9YCF/tZYtVMYg4FOqdGaTHRZbs6peMV4D
lSjZHDonnsGK0UJpxQNbtJEcG7vr7Vl8ziVWY5RUDND7nZYlQlbqxvvqbPPt+px3
4pAZ58eyOqeAmYBc8mwNoXp4YrC2deFng7zrKwIDAQABAoIBAB6SR0Ga33VQ/8bU
BPtzceidg8xhf7asDfDMGkodDmgLn9QCscfEvp2Er9uzf2TOlQ37oCH3f3aCOzxx
GjHFHV2Zquv630vQHLrztZGOOG0PGmD7uTRPL9wyu26BxjA2RioOibfZxKHOfmvb
5pn9k/S+Z6UOAobwIXFktTFNNdKFgalax813FlxFfmmoOC8kE30W6mP6iecP+ojm
xf577RhwR+PdE5zNNvm2F8j5ZWP39pboX7e3eYUCsEyPmVu1MSMTXrHHg6KNhCty
Qu1JfrAaisch+6vrAzfuP7t0WiILzieQgZzFDpI9HziwwOtCw+EKQhHCOPurWcO6
ByZUBzkCgYEA9aEprwqutbXB5H3QinxqXLInAH+wy8oTAMS6nV1sisIos6dD3CLO
u2fLRegv8PEUopASnzyv5PWU/iS+VJjdBCco59hmwW+7CVpaOJXlJ1qpznPVJmyx
pWsinM9Ug23GDd/jd61yKux22773RSGCYs9N7FVww5WYcDlWHLUFPk0CgYEA69DQ
h2iFuDSPonG8GPS6hf/KVRQaJZqGAINCk/2txTWmaz9VPdWT25+rxBzIoQOYAC4P
NjPHo/gJLrO/y6X6lAKBCje/Otb9E7GZwH0pFc7MxtQVR4ik6/7To3ancXNmawHe
owWZHDBRK+Ot33nZ+tYvAq48zE7rxNxsctZ9O1cCgYASsd12UR3S/q5vMZQ5thZy
T6zgQNe36v1fRZneeEnWlch7Q/PKQWvyn4e9Hlrnv7GOXeDM9dV9W6OnZCyIS8om
ksRuQO4xMsvNfm73d5ElWaUq7W3/qq4qpOjRfoY0Kpq0W6H4bd8OnUi+mN5BCLff
xV9s6WPXvv8HK5X+QVjQ0QKBgBrMqGY7IrdEge5cLpxHc8s2vq/ckPwlC4WTZUWc
VttKtZcKo41bcGpNQyAOhV6HIgcjNOdcCxw/XAvKsclbG5cmkbOvkjQFqs1KKccO
clTgI7WU9LYkeVm4pCS3n1/tVX5jwAGW6Uei1ha+0UvMdVFkdgM/+fjeHz1IL6r9
ZU4RAoGBALi33UjlJUYVMXPZc/JyFk8yyvRpYMRhmW7mQxR8gx0i1rNolPSccRkj
3NO+e1k86yyk3RsqBdixGKYDp2JqS+Aj7eHlxvUcrCAnpk9l96q8yuhQ4mJUWqs7
/hW6bxUPjDZ9BxprGZRL4ZLgPL+6C4Q4rE8TZu/5qQYDIy+ab03t
-----END RSA PRIVATE KEY-----
-->

**Atenção: sua chave privada será semelhante a esta, mas não será a mesma. Isso é muito importante, porque se o OpenSSL gerasse as mesmas chaves várias vezes, teríamos um problema grave.**

### Como gerar chave publica

Use a chave privada para gerar a chave pública e depois faça a verificação dela. Agora que você tem uma chave privada, você precisa gerar a chave pública correspondente. Você pode dar essa chave para qualquer pessoa que quiser enviar dados criptografados a você. Quando os dados são criptografados com sua chave pública, eles só podem ser descriptografados por alguém com sua chave privada. Para criar uma chave pública com base em uma chave privada, insira o comando a seguir. Você vai ver esta resposta:

`openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem`

<!--
writing RSA key
-->

A chave pública pode ser exibida da mesma forma que a privada. Ela também parece um aglomerado de caracteres aleatórios, mas é diferente e um pouco mais curta:

`cat public_key.pem`

<!--
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4kNMSmssCSYbOnq/UAHG
H5xx9gjZaOiST3JQQtJO11L/YeBO8DOHc7UawNADA/XDBAnGZih1M8T1PGc6Vk5S
W2Lb8FMf9zG2XhYpCACFFPJAW00qs4s1JesdugOprHZ8Jmm/QJl4KuCjlY/XdviC
vcbxROIQ2mglR8nW1QWrhECQNBfodRSuTwmW3qBSW/Xd5pmTpP4GHCyUfRO9YCF/
tZYtVMYg4FOqdGaTHRZbs6peMV4DlSjZHDonnsGK0UJpxQNbtJEcG7vr7Vl8ziVW
Y5RUDND7nZYlQlbqxvvqbPPt+px34pAZ58eyOqeAmYBc8mwNoXp4YrC2deFng7zr
KwIDAQAB
-----END PUBLIC KEY-----
-->

**Atenção: assim como a chave privada, sua chave pública não será igual à que aparece na imagem.**

Agora que as duas chaves foram criadas, você pode criptografar e descriptografar dados com elas. Vamos examinar isso mais a fundo.

#### Como criptografar e descriptografar

Vamos simular que um arquivo foi criptografado com sua chave pública e enviado para você, a única pessoa que consegue descriptografar com a chave privada. Da mesma forma, é possível criptografar arquivos com as chaves públicas de outras pessoas, sabendo que eles só poderão ser descriptografados por elas.

Crie um arquivo de texto com informações que você quer proteger pela criptografia. Depois criptografe e inspecione o arquivo. Para começar, insira o comando abaixo. Ele vai criar um novo arquivo chamado `secret.txt`, que contém apenas o texto _"This is a secret message, for authorized parties only"_ ("Esta é uma mensagem secreta somente para pessoas autorizadas"). Você pode mudar essa mensagem se quiser.

`echo 'This is a secret message, for authorized parties only' > secret.txt`

Depois, para criptografar o arquivo usando sua chave pública, insira este comando:

`openssl rsautl -encrypt -pubin -inkey public_key.pem -in secret.txt -out secret.enc`

Será criado o arquivo "secret.enc", que é uma versão criptografada do "secret.txt". Se você tentar ver o conteúdo do arquivo criptografado, notará que a saída está distorcida. Isso é completamente normal para mensagens criptografadas. A ideia é que o conteúdo não seja exibido.

Veja um exemplo de como o arquivo criptografado "secret.enc" aparece no editor nano usando o comando abaixo:

`nano ~/secret.enc`

saída:

<!--
^? <     e ^@vmD  ^B% r*M o^R ^O 8 X  {  ^\(^B  ^}= 1i T 9~ ^RT^\^Px ^T^l n ^G ^O ^i  iN (W [ ^$
^a^d~m  , d Tq L   < J ^Q bdQ
=Q R[^kT  ^G iq   GG  ^T {  UZ^dV8^A ^~O#koj^N^^ K vT ^O3 ^Tn^oP^l^Pa ^u3^G^N^i0=c{ ^tR09  o@^d$
<br>
<br>
<br>
<br>
<br>
<br>
<br>
^G Get Help  ^O Write Out  ^W Where Is  ^K Cut Text  ^J Justify  ^C Cur Pos
^X Exit  ^R Read File  ^\ Replace  ^U Uncut Text  ^T To Spell  ^_ Go To Line
-->
Para sair do editor nano, use o comando Ctrl-X.

O arquivo criptografado está pronto e pode ser enviado para quem tiver a chave privada correspondente. Como neste caso é você, descriptografe o arquivo e recupere o conteúdo original. A chave privada precisa ser usada para descriptografar a mensagem, já que ela foi criptografada com a chave pública. Use o comando a seguir para descriptografar o arquivo:

`openssl rsautl -decrypt -inkey private_key.pem -in secret.enc`

Isso mostra o conteúdo do arquivo descriptografado na tela, que deve ser igual ao conteúdo de "secret.txt":

<!--
This is a secret message, for authorized parties only
-->

##### Como gerar um resumo de hash

Agora você vai criar um resumo de hash da mensagem e gerar uma assinatura digital correspondente. Em seguida, você vai verificar a assinatura do resumo. Assim poderá confirmar que a mensagem não foi alterada nem falsificada. Se a mensagem tiver sido modificada, os hashes dela e da assinatura serão diferentes e ocorrerá uma falha na verificação.

Para criar um resumo de hash da mensagem, insira este comando:

`openssl dgst -sha256 -sign private_key.pem -out secret.txt.sha256 secret.txt`

Esse comando usa a chave privada para gerar o arquivo "secret.txt.sha256", que contém o resumo de hash do arquivo de texto secreto.

Com esse arquivo, qualquer pessoa pode usar a chave pública e o resumo de hash para verificar se o arquivo não foi modificado desde a criação dele e a geração do hash. Para fazer a verificação, insira este comando:

`openssl dgst -sha256 -verify public_key.pem -signature secret.txt.sha256 secret.txt`

Você vai ver a seguinte saída, indicando que a verificação foi concluída e o arquivo não foi modificado por terceiros mal-intencionados:

<!--
Verified OK
-->
Se qualquer outra saída for exibida, isso significa que o conteúdo do arquivo foi alterado e provavelmente não é mais seguro.

###### Conclusão

Parabéns! Você usou o OpenSSL corretamente para criar uma chave privada e uma pública. Depois praticou a criptografia e a descriptografia de arquivos com essas chaves, bem como a criação e a verificação de hashes digitais.
