# O que é Active Directory?

O Active Directory tem sido usado para gerenciar centralmente redes de computadores desde que foi introduzido no Windows Server 2000. Se houver computadores com Windows em sua organização, é provável que o AD desempenhe um papel muito importante. O Active Directory funciona de forma semelhante ao LDAP. Ele até consegue falar no protocolo LDAP e consegue interoperar com o LINUX, o OS X e outros hosts além do Windows que usam esse protocolo.

Quando você usa o Active Directory para gerenciar uma frota de servidores Windows máquinas clientes, ele faz muito mais que oferecer serviços de diretório e autenticação centralizada. Ele também se torna o depósito central de objetos de políticas de grupo, ou GPOs, que são uma maneira de gerenciar as configurações de máquinas Windows.

A administração do Active Directory conta com um conjunto de ferramentas e utilitários. A ferramenta chamada Centro Administrativo do Active Directory, ou ADAC. O ADAC é uma ferramenta que usaremos para muitas das tarefas diárias que você aprenderá neste curso. Ela é ótimo para trabalhar e para aprender como funcionam as coisas nos bastidores, como você verá. Lembre-se de que, semelhantes aos sistemas de arquivos, os serviços de diretório são hierárquicos.

Tudo o que você vê no Active Directory é um objeto. Alguns objetos são recipientes que podem conter outros objetos. Vários dos recipientes padrão são chamados apenas de recipientes e servem como locais padrão para certos tipos de objetos. Outro tipo de recipiente é chamado de unidade organizacional, ou UO. Você pode pensar na UO como uma pasta ou um diretório para organizar objetos detro de um sistema de gerenciamento centralizado. Os recipientes comuns não podem conter outros recipientes, mas as UOs podem conter outras UOs. É uma GUI bem amigável.

## Gerenciando o Active Directory

O gerenciamento do Active Directory não é só um tema amplo, é um tema super amplo. Há administradores de sistemas que passam todo o tempo apenas gerenciando o AD. Quando um domínio do Active Directory é configurado pela primeira vez, ele contém uma conta de usuário padrão, um administrador e vários grupos de usuários padrão.

Os administradores de domínio são os administradores do domínio do Active Directory. A conta de administrador é o único membro desse grupo em um novo domínio. Lembra-se de como o administrador local ou root de um computador consegue fazer as alterações desejadas no sistema operacional. Os usuários do grupo "administradores de domínio" podem fazer as alterações desejadas no domínio. Como um domínio pode controlar a configuração de todos os computadores que estão vinculados a ele, os administradores de domínio também podem se tornar administradores locais de todas essas máquinas. Trata-se de muito poder e responsabilidade.

Portanto, não adicione contas a esse grupo a bel-prazer. Os administradores corporativos são administradores do domínio do Active Directory. Eles também têm permissão para fazer alterações no domínio que afetem outros domínios na floresta dos vários domínios. A conta de administrador é o único membro desse grupo em um novo domínio. As contas de administrador corporativo só são necessárias em ocasiões especiais, quando a floresta do Active Directory está sendo atualizada para uma nova versão.

Como administrador de sistemas ou especialista em suporte de TI, você também pode ser um administrador de domínio ou administrador corporativo para poder fazer alterações no Active Directory. Nunca use uma conta de administrador de domínio como conta de usuário no dia a dia. É muito fácil cometer um erro que afeta toda a organização. As contas de administrador de domínio só devem ser usadas quando você estiver conscientemente fazendo alterações no Active Directory.

### Gerenciando senhas de usuário do Active Directory

Uma das principais vantagens da autenticação central é simplificar o gerenciamento de senhas. Você sabia que até 25% das pessoas esquecem suas senhas pelo menos uma vez por dia? Ajudar os usuários nos problemas de senha é uma tarefa para um especialista em suporte de TI. Quando um usuário altera sua senha no Active Directory, essa mudança entra em vigor em todas as máquinas em que seja possível fazer logon. Com algumas exceções, o AD não armazena a senha do usuário. Em vez disso, ele armazena um hash criptográfico unidirecional da senha.

Auditar a infraestrutura significa analisar quem faz ações específica-se sua infraestrutura de TI. Em um cenário de auditoria de segurança ou solução de problemas, é importante que apenas uma pessoa possa autenticar sua conta. Então, com isso em mente, como você pode ajudar na questão das senhas? O problema mais comum é a pessoa esquecar a senha. Quando isso acontece, se você tiver responsabilidades de administrador de sistemas, você pode ter autorização para redefinir a senha da pessoa. Isso só deve ser feito quando você tiver certeza absoluta de que a pessoa que está solicitando a redefinição da senha tenha permissão para fazê-lo. Muitas organizações têm políticas e procedimentos que exigem que o pedido seja feito pessoalmente ou que a pessoa prove que seja quem diz ser. Quando a redefinição de senha estiver autorizada, a parte difícil já terá acabado. O resto é simples.

Quando você redefine uma senha como administrador, você só informa a nova senha e sua autorização de administrador substitui a senha existente. Se essa pessoa tiver usado o sistema de arquivos de criptografia NTFS ou o recurso EFS para criptografar arquivos, ela pode perder o acesso a esses arquivos se a senha deles for redefinida.

#### Associando-se a um domínio do Active Directory

Se você tem responsabilidades de administrador de sistemas, você pode ter que agregar máquinas ao domínio do Active Directory. Lembre-sa de nossa introdução ao AD onde falamos que os computadores podem se associar ou vincular ao Active Directory? Associar um computador ao Active Directory significa duas coisas: que o AD reconhece o computador e tem uma conta de computador para ele, e que esse computador reconhece o domínio do Active Directory e se autentica nele.

`Add-Computer -DomainName 'example.com' -Server 'dlc`

`Get-AdForest`

`Get-AdDomain`

## O que é política de grupo?

Os objetos representam coisas em sua rede às quais você pode fazer referência ou gerenciar. Um desses tipos de objeto do AD é o objeto de política de grupo, ou GPO.

**O que é um GPO?** É um conjunto de políticas e preferências que podem ser aplicadas a um grupo de objetos no diretório. Os GPOs contêm configurações para computadores e contas de usuário.
Usar a política de grupo ajuda a padronizar as preferências de usuário para cada uma dessas equipes e ajuda, tornando-as mais gerenciáveis para você configurar. Com as políticas de grupo, você pode criar scripts de login e logoff e aplicá-los a usuários e computadores. Você pode configurar o log de eventos ordenando que o computador registre os eventos e os envie para determinado local. Dá para definir quantas vezes alguém pode digitar a senha errada antes de bloquear a conta. Você pode instalar os softwares que você quer deixar disponíveis e bloquear os softwares que você não deseja executar. As instruções do chefe são só o começo. Dá para criar quantos objetos de política de grupo que você desejar. Mas eles só servirão para algo se estivem vinculados a domínio, sites ou UOs.
Quando você vincula um GPO, todos os computadores ou usuários nesse domínio, site ou UO serão afetados por essa política. Você pode usar outras ferramentas, como filtragem de segurança e filtros WMI, para aplicar as políticas de grupo de forma mais seletiva.

Um objeto de política de grupo pode conter configuração de computador, configuração de usuário ou as duas.
Elas são aplicadas em momentos diferentes. A configuração do computador é aplicada quando o computador entra do domínio do Active Directory. Isso acontece toda vez que o computador inicializa o Windows, a menos que a rede esteja desconectada  no momento em que ele é inicializado. A configuração de usuário é aplicada quando um usuário faz login no computador. Em cada caso, depois que o GPO entra em vigor, ele é verificado aplicado a cada poucos minutos.

Por padrão, as políticas no GPO serão reaplicadas na máquina a cada 90 minutos. Isso garante que os computadores da rede não fujam da configuração que os administradores de sistemas definiram. As preferências de política de grupo, por outro lado, são configurações que, em muitos casos, servem como modelos de configurações. Os administradores de sistemas escolhem configurações que devem ser o padrão nos computadores que aplicam o GPO. Mas alguém que esteja usando o computador pode mudar as configurações definidas pela política e essa mudança não será retirada.

**Como os computadores associados a um domínio obtêm seus GPOs?** Quando um computador ou usuário associado a um domínio entra no domínio fazendo contato com um controlador de domínio, esse controlador de domínio dá ao computador uma lista de políticas de grupo que devem ser aplicadas. O computador faz o download dessas políticas a partir de uma pasta especial chamada `Sysvol`, que é exportada como compartilhamento de rede de todos os controladores de domínio. Esta pasta é replicada entre todos os controladores de domínio e também pode conter coisas como scripts de login e de logoff. Depois que o computador baixa os GPOs,  ele os aplica. Não vamos entrar em muitos detalhes  sobre a pasta Sysvol.

Por fim, muitas políticas e preferências dos GPOs são representadas como valores no Registro do Windows. O Registro do Windows é um banco de dados de configurações hierárquicas que o Windows e muitos dos seus aplicativos usam para armazenar dados de configuração.
O GPO é aplicado por meio de alterações no registro. O sistema operacional Windows e seus aplicativos leem as configurações do registro para determinar como deve ser seu comportamento.
O gerenciamento de políticas de grupo é outro assunto muito extenso.

### Resolução de problemas de política de grupo

Um dos problemas mais comuns que você pode encontrar é quando um usuário não consegue fazer login no computador ou não consegue autenticar no domínio do Active Directory. Existem muitas razões para isso acontecer. Eles podem ter digitado a senha com o botão "Caps Lock" ativado. Podem ter bloqueado a conta, podem ter mudado uma configuração do sistema ou pode ser um defeito de software. É importante pensar em etapas para solucionar problemas e lembrar-se de fazer perguntas sobre o que aconteceu. Olhe sempre as condições exatas em que a falha ocorreu bem como as mensagens de erro exibidas. Essas informações devem ser suficientes para você começar a encontrar o caminho certo.

Se um usuário digitar uma senha errada várias vezes seguidas, a conta pode ser bloqueada. As pessoas às vezes esquecem suas senhas e precisam de um administrador de sistemas para resolver o problema. Se um computador do domínio não conseguir localizar um controlador de domínio para usar para autenticação, nada que dependa de autenticação no Active Directory vai funcionar. Pode ser um problema de conectividade da rede, nada específico do Active Directory. Se o computador não estiver conectado a uma rede que possa encaminhar as comunicações para o controlador de domínio, isso deve ser corrigido. Qualquer problema de rede que impeça o computador de entrar em contato com o controlador de domínio ou seus servidores DNS configurados, que são usados para encontrar o controlador de domínio, deve ser corrigido.

Agora, por que o DNS é tão importante? Para que o computador entre em contato com um controlador de domínio, primeiro ele precisa encontrar um controlador. Isso é feito usando registros de DNS. O computador do domínio fará uma solicitação de DNS dos registros SRV que correspondem ao domínio ao qual ele está vinculado. Se o computador não conseguir contatar seus servidores DNS ou se esses servidores DNS não tiverem os registros SRV que o computador está procurando, não será possível encontrar o controlador de domínio.

Os registros SRV em que estamos interessados são __ldap._tcp.dc._msdcs.DOMAIN.NAME, onde "DOMAIN.NAME" é o nome DNS do nosso domínio. Então, vou até o PowerShell

`Resolve-DNSName -Type SRV -Name _ldap._tcp.dc._msdcs.example.com`.

Devo ver um registro SRV para cada um dos meus controladores de domínio. Se não conseguir resolver os registros SRV dos meus controladores de domínio, meus servidores DNS podem estar desconfigurados.

Geralmente é um ou mais dos meus controladores de domínio, mas pode ser um servidor de domínio diferente. De qualquer maneira, os servidores DNS apropriados a serem usados para seus computadores de domínio devem ser conhecidos e documentados. Compare a configuração da máquina com a configuração válida conhecida e veja se ela precisa ser ajustada. Por outro lado, se você estiver resolvendo registros SRV, mas eles parecem estar incompletos ou incorretos, pode ser necessária uma investigação mais aprofundada.

Mais uma coisa que deve ser destacada: **dependendo da configuração do seu domínio e dos seus computadores, pode ocorrer de a autenticação local continuar funcionando, pelo menos por um tempinho.** Quando alguém faz login em um computador do domínio, as informações necessárias para autenticar esse usuário são copiadas para a máquina local.

Isso significa que, após o primeiro login, você poderá fazer login naquele computador, mesmo se a rede estiver desconectada. Você não será autenticado no domínio nem terá acesso autorizado a do domínio, como pastas compartilhadas. Só porque alguém consegue fazer login não significa que essa pessoa tenha conseguido encontrar um controlador de domínio.

Outro problema que pode impedir que os usuários façam autenticação tem a ver com o relógio. O Kerberos é o protocolo de autenticação que o AD usa e ele percebe diferenças de hora. Se o controlador de domínio e o computador não tiverem a mesma hora relativa ao UTC, geralmente com tolerância de cinco minutos, a tentativa de autenticação falhará. Os computadores de domínio geralmente sincronizam sua hora com controladores de domínio e o serviço de hora do Windows, mas às vezes pode haver falhas.

Se o computador estiver desconectado de uma rede de domínio por muito tempo, ou se a hora for alterada por um software ou por um administrador local e ficar fora de sincronia, o computador pode não estar sincronizado automaticamente com um controlador de domínio. Você pode forçar manualmente um computador de domínio a ressincronizar usando o comando `w32tm/rsync`.

Um problema comum que você pode ter que solucionar é quando uma política ou uma preferência definida pelo GPO não consegue ser aplicada a um computador. Você pode descobrir essa falha de várias maneiras, como alguém da empresa pode dizer algo em seu computador está faltando ou não está funcionando. Se você estiver usando o GPO para gerenciar a configuração de suas máquinas, talvez haja um software que esteja faltando ou pode estar faltando uma unidade de rede mapeada ou várias outras coisas. O certo é que algo que você quis configurar com um GPO não estará configurado em um ou mais computadores. Vejamos os três motivos mais comuns para isso acontecer.

- O primeiro tipo, e possivelmente o tipo mais comum, de falha de GPO tem a ver com a maneira como as políticas de grupo são aplicadas. Dependendo de como seu domínio está configurado, o mecanismo de políticas de grupo que aplica configurações a uma máquina local pode sacrificar a aplicação imediata de alguns tipos de políticas para tornar o login mais rápido. Isso é chamado de otimização de login rápido e pode significar que algumas mudanças de GPO levam muito mais tempo para serem aplicadas automaticamente do que você imagina. Além disso, o mecanismo de políticas de grupo geralmente tenta aplicar o GPO mais rápido implementando as alterações apenas em um GPO em vez de todo o GPO. Em qualquer um desses exemplos, você pode forçar a aplicação completa e imediata de todos os GPOs com:

`gpupdate /force`. Se você quiser cobrir todas as possibilidades, você pode executar `gpupdate /force /sync`

A adição do parâmetro "/sync" fará logoff e reinicializará o computador. Alguns tipos de políticas de grupo só podem ser executadas quando o computador é inicializado ou quando um usuário faz logon pela primeira vez. Então, fazer log off e reinicializar é a única maneira de garantir que a atualização forçada do GPO aplique todas as configurações. A falha de replicação é outro motivo pelo qual um GPO pode deixar de ser aplicado conforme o esperado.

**Lembre-se de que quando são feitas alterações no Active Directory, essas alterações geralmente ocorrem em um único controlador de domínio.**

Depois, essas alterações devem ser replicadas em outros controladores de domínio. Se a replicação falhar, os diferentes computadores da rede podem ter ideias diferentes sobre o estado dos objetos do diretório, como objetos de políticas de grupo. A variável "ambiente do servidor de logon" contém o nome do controlador de domínio que o computador usou para fazer logon.

Lembre-se de que você pode ver o conteúdo da variável com este comando no PowerShell, `$env:LOGONSERVER`. Está mostrando DC 1. Você também pode obter os mesmos resultados usando o prompt de comando com "%LOGONSERVER%".

Saber a qual domínio você está conectado é muito útil caso você suspeite de um problema de replicação. No console de gerenciamento de políticas de grupo, dá para verificar a integridade geral da infraestrutura de políticas de grupo.

Vou selecionar meu domínio e dar uma olhada na aba de status. Esta aba traz um resumo do status de replicação do Active Directory e do SYSVOL para o domínio. O resultado mostrado pode ser de um teste recente, então vou forçar uma nova análise clicando em "Detectar agora". Queremos ver todos os nossos controladores de domínio listado em controladores de domínio com replicação em sincronia. Se eles estiverem listados, podemos ter a certeza que não há problemas de replicação afetando os objetos de políticas de grupo. Se virmos controladores de domínio na lista de controladores de domínio com replicação em andamento, podemos ter um problema de replicação. Dependendo do tamanho e da complexidade da sua infraestrutura do Active Directory, além da confiabilidade e a taxa de transferência dos links de rede entre seus locais, é possível que a replicação demore alguns minutos para ser concluída. Se a replicação não for concluída em um período de tempo razoável, talvez seja necessário investigar problemas de replicação no Active Directory.

Focamos nos casos mais simples de gerenciamento de política de grupo. Mas o fato é que controlar o escopo dos objetos de políticas de grupo pode ser supercomplicado. Se você estiver tentando descobrir por que determinado GPO não está sendo aplicado a um computador, a primeira coisa a fazer é executar o conjunto de políticas resultantes, ou RSOP.

O comando de resultados de GP nos ajudará muito. Se eu executar `gpresult /R`, vou obter um relatório resumido no meu terminal.

`gpresult /H NOME DO ARQUIVO.html`. Vou digitar "gpresult /H" e depois "test.html". Vou ver um relatório em HTML, que posso abrir no meu navegador, deixe-me ir lá para vê-lo. O GPO que me interessa está listado nos GPOs aplicados ou nos GPOs negados? Se estiver negado, qual foi a razão da negação? Outro GPO saiu vencedor na política ou na preferência que estou tentando configurar? Cada GPO pode ser configurado com uma ACL chamada de filtro de segurança.

O filtro de segurança está definido para além dos usuários autenticados? Se estiver, pode ser que você tenha que estar em um grupo específico para ler ou aplicar o GPO. Cada GPO também pode ser configurado com o filtro WMI. O filtro WMI permite aplicar o GPO com base na configuração do computador. Os filtros WMI são poderosos, mas são caros, e configurá-los incorretamente é muito fácil. Isso ocorre porque eles analisam os valores de instrumentação de gerenciamento do Windows para decidir se uma política deve ou não ser aplicada. Por exemplo, você pode criar um GPO para instalar um software, mas somente se o WMI relatar a presença de determinado hardware específico. Esses filtros são caros porque exigem que o mecanismo de políticas de grupo faça um tipo de consulta ou cálculo em cada computador ligado à política, mas aplique o GPO apenas aos computadores que correspondam ao filtro. Muitas políticas e preferências podem ser configuradas para serem aplicadas ao computador ou aos usuários assim que estes fizerem login.
