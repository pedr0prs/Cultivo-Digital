### Principais comando para realizar a manipulação das contas de usuário na maquina, servidor, sistema.

Super importante. No Linux é tudo arquivo, precisamos saber onde os comandos vão interagir, qual arquivo o comando vai interagir. 

### Administração de usuários, adicionar, remover, modificar, gerenciamento de contas de usuários.

$ adduser —help = ajuda, paramentos, exemplos 

$ vim /etc/adduser.conf = Tem as características do usuário, traz algumas informações padrões para quando for utilizar o adduser, por exemplo: ***Caso queria adicionar um usuário Pedro $ adduser Pedro.*** 

Não precisa alterar nada, mas caso precise aqui é o lugar. 

DSHELL=/bin/bash = shell padrão do sistema para o usuário 

DHOME=/home = diretório home do usuário 

GROUPHOMES=no = aqui define os usuário por grupos 

LETTERHOMES=no = filtrar os usuários por letras

SKEL=/etc/skel = um esqueleto, neste diretório estarão todos os arquivos que serão colocados dentro do diretório home de cada usuário no momento de sua criação.

UID = User identification, identificação do usuário em números, o UID do root sempre é 0, dos usuários convencionais, varia de sistema, mas normalmente há um padrão, no Debian, por exemplo: ****Os usuários convencionais o UID é a partir de 1000 e os usuários do sistema de 100 até 999.****

FIRST_SYSTEM_UID=100

LAST_SYSTEM_UID=999

GID = Group Identification, identificação do grupo que o usuário pertence, como funciona: *********Se tem um usuário e ele pertence a um grupo, por padrão ele sempre irá criar um grupo, por exemplo: se foi criado um usário pedro, o sistema criará um grupo chamado pedro, onde automáticamente irá fazer parte do grupo pedro. Dá para ter vários grupos, porém há o grupo principal, o GID.*********

FIRST_UID=1000

LAST_UID=59999

*************************O primeiro usuário convencional criado será com UID 1001 e vai até 59k, mesmo as coisas para os grupos.************************* 

USERGROUPS=yes = Todo usuário que criar ele criará um grupo para o usuário. 

Na grande maioria dos servidores isso não faz sentido. no. 

USERS_GID=100 = Caso criado um usuário, ele fará parte do grupo 100.

DIR_MODE=0755 = Aqui muda as permissões do diretório home do usuário. 

SETGID_HOME=no = habilitar ou não o SETGID.

SKEL_IGNORE_REGEX= “” = Ignora alterações lá no esqueleto 

EXTRA_GROUPS= deixa com # para não valer. 

$ adduser giropops = cria um usuário e um grupo para este usuário, criar o diretório home ‘giropops’ e mandar os arquivos skels para o diretório home deste usuário. 

id = informações do usuário 

$ cat /etc/group = mostra todos os grupos existentes. 

# adduser —uid 1234 -gid 0 —home /opt toskao = cria um usuário, com UID 1234, no group 0 grupo do root, o home dele será em /opt

# useradd -u 2121 -g 0 -s /bin/bash -d /opt/toskao2 bla = faz a mesma coisa a cima, sem perguntar as informações do usuário. 

# adduser = pede todas as informações bonitinho

# useradd = cria o usuário de modo “grosseiro”  

# etc/passwd = etc é onde estão a maioria dos arquivos de configuração dos usuários, mostra todos os usuários criados.

posso entrar no arquivo e alterar, só cuidado. 

# etc/shadow = mostra as senhas criptografadas 

deluser ou userdel = deleta usuário 

# deluser —remove-home nomeusuario = remove o usuário e o home dele

# userdel -r nomeusuario = remove usuário e home

# addgroup nomegrupo = cria um grupo 

# adduser —group nomegrupo = também cria um grupo 

# newgrp = pertencer a um grupo por um breve momento 

# etc/group = informações dos grupos

# etc/gshadow = mostra os arquivos de configurações dos grupos 

# delgroup nomegrupo = remove o grupo 

# groupdel nomegrupo = remove grupo 

senhas

# passwd —help 

# passwd -l nomeconta = lock a conta 

# passwd -u nomeconta = unlock conta 

# passwd -e nomeconta = expira a senha do usuário 

# passwd -d nomeconta = deleta a senha do usuário 

# passwd -de nomeconta = expira e deleta a senha do usuário 

adiciona usuário a determinado grupo

# gpasswd -a nomeusuario nomegroup = adiciona um usuário a um grupo 

# gpasswd -A nomeusuario nome grupo = adiciona um administrador para o grupo 

mudar informações do usuário 

# usermod —help 

# usermod -u 555 —gid 0 -c “cometários” -d /home/girus -s /bin/zsh = modifica o UID pra 555, o group para root que é 0, -c adiciona um comentário, -d muda o diretório do usuário - s muda o shell 

# usermod -l  novonomeusuario nomeusuario = muda o nome do usuário 

# chfn —help = muda nomes do usuário

# chsh nomeusuario = muda o shell 

# groupmode —help = modifica as paradas do grupos 

# lastlog = ultimos usuários de quem logou no sistema 

# last = entrada e saida do sistema 

# users = mostra os usuários logados no sistema 

# groups = mostra os grupos que o usuário pertente