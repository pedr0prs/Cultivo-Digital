# Usuários, administradores e permissões

Existem dois tipos diferentes de usuários, usuários padrão e administradores.

O usuário padrão é aquele que recebe acesso a uma máquina, mas tem acesso restrito para fazer coisas como instalar softwares ou alterar determinadas configurações.

O administrador ou "admin" é um usuário que tem controle total sobre uma máquina. Eles conseguem ver as contas das outras pessoas, alterar e remover qualquer pessoa do computador e ver todos os arquivos. Você também pode ter vários administradores em uma máquina. Na sua máquina pessoal, você é o administrador padrão, pois você tem controle total sobre o seu sistema. Afinal, é a sua máquina.

Mas em um computador público, o administrador é alguém que controla e faz a manutenção da máquina, como um especialista em suporte de TI. Ele pode conceder acesso a outros usuários, instalar softwares, alterar as configurações restritas do sistema e executar outras ações que considere apropriadas. Imagine como seria terrível se qualquer pessoa que usasse um computador público pudesse instalar softwares? Os computadores ficariam sobrecarregados, as coisas ficariam desorganizadas e, o pior de tudo, os computadores poderiam ser infectados com softwares maliciosos. Os usuários são colocados em grupos de acordo com os níveis de acesso e permissões para realizar determinadas tarefas. Essas tarefas dependem do que o administrador do computador considera apropriado. O administrador pode habilitar acessos e configurações diferentes com base no tipo de grupo em que está um usuário.

## Windows: acessando informações de usuários e grupos GUI

Se procuramos **Gerenciamento do computador** na pesquisa de aplicativos e o abrimos, veremos uma janela que nos dá muitas informações. No topo da barra lateral, você verá "Gerenciamento do computador local". Isso significa que estamos gerenciando uma única máquina localmente. Em um ambiente corporativo, você pode gerenciar várias máquinas no que chamamos de domínio. Um domínio do Windows é uma rede de computadores, usuários, arquivos etc. que são adicionados a um banco de dados central. Se você for o administrador desse domínio, você poderá ver essas contas e computadores a partir de qualquer máquina do domínio.

- **Agendador de Tarefas:** permite agendar programas e tarefas para serem executados em determinados horários, como desligar automaticamente o computador todas as noites às 11h da noite.

- **Visualizador de Eventos:** é onde o nosso sistema armazena seus logs do sistema. Vamos nos aprofundar nessa ferramenta em outra aula.

- **Pastas compartilhadas:** mostra as pastas que os diferentes usuários da máquina compartilham uns com os outros.

Lembra-se de como dissemos que os outros usuários não conseguem ver os arquivos de outra pessoa? Não é totalmente verdade. Se os usuários armazenarem arquivos em uma pasta compartilhada, qualquer pessoa que tenha acesso a essa pasta poderá visualizá-los.

- **Usuários e Grupos Locais:** é aqui que faremos nosso gerenciamento de usuários e grupos. Desempenho: mostra o monitoramento dos recursos da nossa máquina, como CPU e RAM.

- **Gerenciador de Dispositivos:** é aqui que vamos gerenciar dispositivos do nosso computador, como nossas placas de rede, placas de som, monitores e muito mais.

No menu Repositório, temos um submenu chamado **Gerenciamento de disco**.

Finalmente, o menu **Serviços e aplicativos** nos mostra os programas e serviços que temos disponíveis no sistema. Aqui podemos optar por habilitar ou desabilitar serviços como o DNS. Todas as configurações essenciais que nós, administradores, precisamos mudar estão na ferramenta "Gerenciamento do computador". Vamos ver nosso tipo de conta de usuário e de quais grupos fazemos parte. Vamos voltar para os usuários e grupos locais. Na aba "Usuários", podemos ver algumas contas criadas pelo Windows, como "Convidado" e "Administrador".
A conta de administrador local permite fazer login usando o nome de usuário do administrador e a senha do administrador no computador.

### Windows: acessando informações de usuários e grupos pela CLI

Imagine que você está trabalhando como especialista em suporte de TI em uma empresa, e seu chefe pede que você verifique todas as informações dos usuários em 10 máquinas para garantir que a conta do administrador local não esteja habilitada. É claro que você pode pesquisar **Gerenciamento do computador** na barra de pesquisa, clicar em **Gerenciamento do computador (local)**, olhar na aba **Ferramentas do sistema**, clicar em **Usuários e grupos locais**, depois clicar duas vezes no nome do usuário para garantir que a conta do administrador local não esteja habilitada. Agora você só precisa fazer isso mais nove vezes. Há um caminho muito mais rápido. Você pode usar a **CLI** para ver rapidamente a lista de usuários do computador usando o comando `Get-LocalUser`.

`Get-LocalGroup` listará os grupos da máquina local.

`Get-LocalGroupMember` listará quem quais usuários está em determinado grupo.

Se sua organização tiver muitas máquinas Windows, é muito comum usar o Active Directory para gerenciar contas de usuário em um serviço de diretório central.

### Windows: senhas

Em **Usuários e grupos locais**, vamos clicar com o botão direito em um nome de usuário. Vamos clicar em Propriedades. Depois, vamos só marcar esta caixa que diz: **O usuário deve mudar a senha na próxima autenticação**.

Há um comando nativo do PowerShell que pode ser usado para definir a senha, mas ele é um pouco mais complicado. Ele exige um pouco de conhecimento em scripts. Por enquanto, vamos ficar com o mais simples, o comando mais enxuto `net`.

O "net" faz muitas coisas diferentes, e alterar as senhas dos usuários locais é só uma delas. Como esse é um comando antigo do DOS, você também pode usar o parâmetro `/?` para obter ajuda sobre o comando na CLI.

Para alterar a senha para um usuário, o comando é "net user" e o nome de usuário e senha.

A melhor maneira de usar esse comando é usar um asterisco em vez de escrever a senha na linha de comando. Se você usar o asterisco, o "net" fará uma pausa e pedirá que você digite sua senha. vamos exigir que o usuário altere a senha padrão no seu próximo login usando o parâmetro: `/logonpasswordchg:yes`.

### Windows: adicionando e removendo usuários

Vamos voltar para a nossa ferramenta "Gerenciamento do computador". Em "Usuários e grupos locais", vamos clicar com o botão direito e selecionar "Novo usuário".

A adição e remoção de contas de usuários locais na CLI usa o mesmo comando "net" que usamos para alterar as senhas, mas com parâmetros diferentes. Como antes, há um comando nativo do PowerShell, `new-localuser`, que exige um um pouco de script.

então, `net user pedr0prs * / add`. Agora vamos listar as contas de usuário para ter certeza de que funcionou. Então... `Get-LocalUser`. vamos sinalizar a conta dele para que exija uma alteração de senha `net user pedr0prs /logonpasswordchg:yes`.

## Linux: usuários, Superusuário e mais

No Linux, o acesso ao gerenciamento de usuários funciona exatamente como no Windows. Diferentes tipos de usuários têm privilégios diferentes e podem ser agrupados em vários níveis de acesso. Mas existem algumas diferenças nas nomenclaturas do Linux. Existem os usuários padrão e também há os administradores no Linux. Há também um usuário especial chamado usuário **root.** Não se confunda com o diretório root ou com a barra.

O usuário root é o primeiro usuário criado automaticamente quando instalamos um sistema operacional Linux. Este usuário tem todos os privilégios no sistema operacional, ele é o superusuário. Tecnicamente, há apenas um superusuário ou conta root, mas qualquer um que tenha acesso a esses poderes também pode ser chamado de **superusuário.** Agora, vamos tentar visualizar o conteúdo de um arquivo restrito pelo root. O caminho do arquivo é `/etc/sudoers.` Deu erro:  cat /etc/sudoers: **permissão negada.** O arquivo sudoers é um arquivo protegido que só pode ser lido pelo root. Podemos fazer login no root e rodar este comando, sem problemas. Mas pode ser realmente perigoso ficar logado no root, já que o root, assim como a conta de administrador local do Windows, tem acesso irrestrito à máquina. Se cometermos um erro, podemos excluir ou modificar algo importante, e isso não é bom.

Então, em vez de logar no root, podemos dizer ao shell que queremos executar esse comando como root. Parece com o recurso de controle de acesso do usuário do Windows? Sim, é ele mesmo. No Linux, podemos fazer isso com o comando **sudo**, que vem de "superusuário faz". Então... `sudo cat /etc/ sudoers`. Agora podemos ver o conteúdo deste arquivo.

Se você não quiser rodar o "sudo" toda vez que precisar executar um comando que requer privilégios de root, você pode usar o comando "SU", que vem de "usuário substituto". Isso permitirá que você mude para um usuário diferente. Se você não especificar o usuário, o padrão será o root.

Não é recomendável ficar logado como root o tempo todo. Existem muitos serviços e arquivos críticos que podem ser alterados por engano. Se você precisa logar como root, tenha cuidado. Vou sair do root agora e voltar para meu usuário normal. Dá para ver quem tem acesso à execução do sudo visualizando `/etc/groupfile`. É também assim que você visualiza os membros de todos os grupos.

Existem quatro campos separados por dois pontos.

O primeiro campo é o nome do grupo. Neste caso, é sudo.

O segundo campo é a senha do grupo. Não precisamos especificar uma senha do grupo, então  o padrão é a senha do root. O "x" significa que a senha foi criptografada e armazenada em um arquivo separado.

O terceiro campo é a ID do grupo. Quando o sistema operacional executa uma tarefa que envolve um grupo, ele usa a ID do grupo em vez do nome do grupo.

O último campo é a lista de usuários do grupo.

E se quiséssemos ver os usuários da nossa máquina? Qual é o arquivo que armazena essa informação? Infelizmente, não é `/etc/user`.

O arquivo que contém informações do usuário é `/etc/password`.
Há muito mais informações aqui e muito mais usuários. A maioria dessas contas não são de pessoas que usam o computador. Há um monte de processos constantemente em execução no nosso computador que precisamos associar a usuários.

- **root:x:0:0:root:/root:/bin/bash**
 O primeiro campo é o nome do usuário, e o segundo campo é a senha do usuário. A senha não está armazenada neste arquivo. Ele está criptografada e armazenada em um arquivo diferente, assim como a senha do nosso ID de grupo. O terceiro campo é o ID do usuário, ou "UID". Assim com as IDs de grupo, as IDs de usuário são como nosso sistema identifica um usuário, não pelo seu nome. O root tem a UID "0". E é basicamente assim que você visualiza usuários e grupos no Linux.

### Linux: senhas

Para alterar sua senha no Linux, tudo que você precisa fazer é executar o `passwd pedr0prs`, que vem de "comando de senha".

Quando você define uma senha, ela é embaralhada e seguramente guardada em um arquivo especial privilegiado chamado `/etc /shadow`. Este arquivo só pode ser lido por root para afastar os curiosos. Mesmo que você tivesse acesso, você não seria capaz de desembaralhar as senhas encontradas nesse arquivo.

Se você estiver gerenciando um computador e quiser forçar um usuário padrão a mudar a senha dele, como fizemos no Windows, você pode usar `sudo passwd -e pedr0prs`, que é o flag para "expirar", juntamente com "passwd". A senha do usuário expira imediatamente e o obriga a definir uma nova senha na próxima vez que ele fizer login.

### Linux: adicionando e removendo usuários

Para adicionar um novo usuário no Linux, você pode usar o comando `useradd`. "sudo useradd pedr0prs".
Para remover o usuário, você pode usar `sudo userdel pedr0prs`.
