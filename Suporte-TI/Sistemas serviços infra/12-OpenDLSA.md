# O que é OpenLDAP?

O OpenLDAP, que significa protocolo de acesso de diretório leve, opera de forma semelhante ao Active Directory. Usando a notação LDAP ou o formato de intercâmbio de dados LDAP, LDIF, você pode autenticar, adicionar, remover usuários, grupos, computadores etc. em um serviço de diretório. O OpenLDAP pode ser usado em qualquer sistema operacional, incluindo Linux, macOS e até mesmo o Microsoft Windows. No entanto, como o Active Directory é um software de propriedade da Microsoft para serviços de diretório, recomendamos que você o use no Windows, em vez de usar o OpenLDAP. Mas é útil saber que o OpenLDAP é de código aberto e que pode ser usado em diversas plataformas.

Existem algumas maneiras de interagir com um diretório do OpenLDAP. Primeiro, você pode usar a interface de linha de comando e rodar comandos para criar e gerenciar entradas de diretório. Você também pode usar uma ferramenta como o phpLDAPadmin, que oferece uma interface web para gerenciar seus dados de diretório, muito parecida com a GUI do Active Directory do Windows, com a qual você está familiarizado.

Para começar, vamos abrir o pacote OpenLDAP usando este comando. Vou entrar no meu ambiente Linux e digitar este comando.

`Sudo apt-get install slapd ldap-utils`

Vou colocar minha senha e aceitar.

Depois de instalar os pacotes, você terá que colocar sua senha de administrador do LDAP. É o que eu vou fazer.

Em seguida, vou clicar em OK.

Depois, vou confirmar a senha e pressionar OK.

Agora que está instalado, vamos reconfigurar o pacote "slapd" para podermos ajustar nossa configuração. Para fazer isso, vamos executar o seguinte comando...

Vou limpar minha janela e executar

`sudo dpkg-reconfigure slapd`

Vamos ver um monte de perguntas sobre nossa nova configuração. Vamos preencher as configurações com esses valores. Então, a primeira opção é: "Omitir configuração do servidor OpenLDAP?" Vou dizer "não". Em seguida, nome de domínio DNS, isso é semelhante ao Windows AD, é o domínio da nossa organização. Vamos usar "example.com".

Em seguida, vou clicar em OK.

Nome da organização. Vamos usar "example".

Senha do administrador... Vamos colocar a mesma coisa que pusemos antes.

Para o banco de dados, vamos usar o MBD. Você quer que o banco de dados seja excluído quando o slapd for removido? Vamos dizer "não". Agora ele está nos perguntando se queremos  o mover banco de dados antigo. Vamos dizer "sim" desta vez. E então... "Permitir o protocolo LDAP versão 2?" Eu vou dizer "não".

É isso aí. Agora você tem um servidor OpenLDAP rodando.

## Gerenciando o OpenLDAP

É fácil gerenciar o OpenLDAP pelo navegador e com ferramentas como o phpLDAPadmin, mas você também pode usar ferramentas da linha de comando para alcançar o mesmo resultado. Recomendo que você pesquise sobre as configurações do PHPLDAPadmin se esta for sua primeira configuração do openLDPA.

Para começar a usar ferramentas de linha de comando, você precisa usar algo conhecido como arquivos LDIF. É só um arquivo de texto que lista atributos e valores para descrever algo. Aqui está um exemplo simples de um arquivo LDIF de um usuário. Mesmo sem entender a sintaxe deste arquivo, dá para inferir que ele está falando de uma funcionário chamado pedro quem trabalha no departamento de engenharia da empresa "example.com".

<!--  Arquivo LDIF

dn:uid=pedro,ou=Support,dc=example,dc=comobjectClass:inetOrgPerson
descripton: Pedro trabalha no departamento de suporte ti
cn: Pedro
uid: pedro

-->

Para nossas finalidades, queremos apenas uma visão geral de como isso tudo funciona. Depois de escrever seus arquivos LDIF, a tarefa está quase concluída. Dependendo de qual tarefa você quer fazer no seu diretório, você deve executar:

`ldapadd` pega as informações de um arquivo LDIF e adiciona o contexto dos arquivos.

`ldapmodify` como você pode imaginar, modifica um objeto existente.

`ldapdelete` remove o objeto ao qual o arquivo LDIF se refere.

`ldapsearch`  procura entradas em seu banco de dados de diretórios.

Não é importante saber a sintaxe desses comandos, pois é sempre possível procurar uma sintaxe na documentação oficial. Como você pode ver, não é tão difícil trabalhar com o OpenLDAP. Ele opera de maneira muito semelhante ao Active Directory do Windows, ou AD. Você pode levar usar conhecimento e formar seu diretório assim como você fez no Windows AD.

Se você estiver considerando o LDAP como solução para suas necessidades de serviços de diretório, recomendo que você procure a ferramenta web de gerenciamento PHPLDAPadmin. Assim como o Windows AD, este assunto pode ser bastante extenso. Então, pense em qual solução de diretório melhor se adapta às necessidades de TI da sua empresa. Há muitas razões para querer implantar um serviço de diretório como o OpenLDAP ou o Active Directory ao trabalhar em uma função de administração de sistemas.

Os serviços de diretório são ótimos para autenticação centralizada, controle dos locais dos computadores em sua organização, controle de quem pode acessá-los e muito mais. Não deixe de fazer testes e se familiarizar com o OpenLDAP ou o PHLDAPadmin para ter uma noção melhor de como esses serviços de diretório funcionam. Conferir a documentação oficial é sempre uma boa forma de começar. Até agora, você aprendeu sobre todos os serviços essenciais de infraestrutura de TI. O próximo assunto do qual falaremos é garantir que todo o trabalho que você fez em sua infraestrutura de TI não seja jogado fora: você vai aprender sobre recuperação de desastres e backups.
