# Entrevista com encenação: sistemas operacionais

- **U- USER | S- SUPORTE**

U- Neste cenário, digamos que você passou na mesa de um usuário e ele relatou algum tipo de problema em um aplicativo. Quando você chegou lá, ele mostrou o problema. Ele estava tentando abrir um aplicativo por um atalho na área de trabalho e sempre que clicava duas vezes nele, a seguinte mensagem de erro genérica era exibida: **Erro ao inicializar aplicativo.** Solucione o problema para mim.

S- Que sistema operacional você está usando e qual é o nome do aplicativo?

U- Digamos que seja um desktop Linux e um aplicativo personalizado. Digamos que eu mesmo o criei na empresa. Vamos chamá-lo de aplicativo X.

S- Você se lembra da última vez em que ele funcionou?

U- Claro. Podemos dizer que funcionava na sexta-feira, e hoje é segunda-feira.

S- Sabe se há algum outro usuário com esse problema?

U- Este é o primeiro relato dele, mas ainda é segunda-feira de manhã.

S- Você sabe se houve algum tipo de atualização no final de semana?

U- Não que eu saiba, mas há alguma forma de saber?

S- Podemos dar uma olhada nos registros do Apt.

U- O que é o Apt?

S- O Apt é um utilitário usado para a instalação de aplicativos e atualizações.

U- Ótimo. Bacana. Então, onde estávamos? Você pode me mostrar como podemos encontrar os registros do Apt? Na verdade, não tenho certeza de onde os registros do aplicativo estão. Beleza, e como você descobriria se essa fosse uma situação real?

S- Provavelmente verificaria a página principal ou pesquisaria on-line.

U- Perfeito, essa é uma boa ideia. Então, digamos que você descubra que o registro está em "/var/log/apt" e o arquivo que estamos procurando é o history.log. Agora que você tem esse arquivo, ele tem cem entradas diferentes. Como encontrar o que precisamos especificamente para esse aplicativo?

S- Podemos usar o comando "grep" com o nome do aplicativo.

U- Digamos que façamos isso e que descobrimos que houve uma atualização neste final de semana.

S- Então, é possível que a atualização tenha causado esse problema. Pode haver uma dependência faltando ou o aplicativo pode ter sido corrompido. Podemos verificar as permissões também.

U- Então, por onde começamos?

S- Quero que você execute algumas atualizações só para garantir que tudo está instalado e que não faltam dependências.
Por isso, primeiro quero executar "sudo apt get update" e depois "sudo apt get upgrade".

U- Entendi. Então digamos que ambos foram executados e finalizados com sucesso. O que fazemos agora?

S- Vamos tentar inicializar o aplicativo.

U- ele ainda falha, com o mesmo erro.

S- Acho que agora deveríamos checar as permissões.

U- Certo. Como fazemos isso?

S- Primeiro, precisamos encontrar o local. Provavelmente podemos descobrir o local clicando com o botão direito no atalho e lendo o que a seção "Command".

U- Certo. Digamos que a gente faça isso e que e digamos que o comando seja "application -x".

S- Agora, precisamos usar o comando "which" com o local indicado.

U- Certo. Digamos que o local seja "/usr/bin".

S- Agora, temos que navegar com "cd" ao diretório do aplicativo.

U- Entendi. Vamos supor que estamos nele. Beleza.

S- Agora, precisamos listar todas as permissões. Então, temos que usar "ls -l".

U- Beleza, o que vejo é o seguinte. -rwxr-x--- root root. Pode me explicar o que isso tudo significa?

S- R significa leitura, W significa gravação, X significa executar. O primeiro grupo de três está associado aos proprietários do aplicativo, o segundo grupo de três está associado aos grupos do aplicativo e o último conjunto de três está associado a outros ou usuários. "Root" está associado ao proprietário e o segundo "root" está associado ao grupo.

U- Beleza. Depois de ver tudo isso, algo pareceu errado aqui?

S- Sim. Como o último grupo de três está associado a usuários e outros, percebi que não há permissões de leitura ou execução para o aplicativo.

U- Beleza. Como podemos corrigir isso?

S- Podemos usar um comando de alterar o modo de acesso, `chmod`, para atualizar as permissões.

U- Entendi. Agora, o problema foi resolvido, tentamos abrir o aplicativo, tudo funcionou bem.

S- Há alguma outra coisa a verificar depois disso?

U- Sim. Eu gostaria de notificar os proprietários do aplicativo porque isso vai afetar muitos usuários e eu gostaria de evitar problemas recorrentes.

S- Entendi. Legal. Muito obrigado.

Nesse cenário, demos diversos passos à frente e atrás, o que é muito comum nesse tipo de entrevista. A descrição inicial era muito ampla e a candidata fez várias perguntas focadas para melhor avaliar o problema. Como a mensagem de erro não estava clara, havia várias causas possíveis para o problema. Eliminar as causas mais prováveis primeiro nos permitiu continuar tentando até encontrar a causa real. Além disso, mostramos que está tudo bem não saber tudo. A candidata não sabia onde o registro do apt ficava, mas ela explicou como descobriria se isso fosse um problema real que ela estivesse resolvendo. Ao fazer isso, você mostra tem criatividade e é eficaz em resolver problemas. É impossível saber tudo, mas saber onde encontrar respostas é fundamental para um especialista em suporte de TI.
​
