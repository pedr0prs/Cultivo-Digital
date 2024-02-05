# Gerenciando Serviços do sistema

## Como os serviços funcionam na prática

É importante entender como funcionam os programas que fornecem esses serviços para que você possa gerenciá-los e corrigir problemas que venham a surgir. Esses programas são executados como processos em segundo plano, Também conhecido como `daemons`, ou apenas serviços. Isso significa que o programa não precisa interagir com o usuário através da interface gráfica ou da linha de comando para prestar o serviço necessário. O sistema operacional garante que o programa esteja em execução. Cada serviço tem um ou mais arquivos de configuração que você, como administrador do sistema, usará para determinar o comportamento do serviço.

Alguns serviços podem oferecer interfaces interativas que permitem ao usuário editar as configurações e inspecionar o status atual ou o histórico de uso. Outros serviços podem depender apenas da infraestrutura do sistema para isso, o que significa que você precisará editar os arquivos de configuração. Você tem que saber como iniciar e parar o serviço, e como percorrer os logs para ver as atividades atuais ou anteriores.

Os serviços geralmente são configurados para serem iniciados quando a máquina é inicializada. Assim, se houver uma queda de energia ou um evento semelhante que faça com que a máquina seja reinicializada, você não precisará de um administrador de sistemas para reiniciar manualmente o serviço. Se você quiser decidir quando o serviço é iniciado, em vez de ser lançado na inicialização, você precisará alterar a configuração do software para que ele inicie quando você quiser. Da mesma forma, os serviços geralmente são configurados para reiniciar se eles travarem inesperadamente.

Se você não quiser assim, será necessário alterar a configuração do sistema que manipula essas propriedades. Existem muitos serviços e cada um pode exigir conhecimento específico sobre como configurá-lo, e quando e como usá-lo. Mas os conceitos gerais sobre o gerenciamento e a configuração dos serviços são os mesmos.

### Gerenciando serviços no Linux

Como administrador de sistemas, você precisará saber como ver o status de um serviço em execução e como interromper, iniciar e reiniciar os serviços em execução. A maneira exata de fazer isso depende do sistema operacional que você está usando, mas os conceitos são os mesmos.

Vamos pegar um serviço muito simples: **protocolo de horário de rede, ou NTP.** Já falamos que o NTP permite que máquinas sincronizem seus relógios. As instalações do Ubuntu incluem um daemon que roda na máquina e se encarrega de sincronizar o relógio usando o NTP. Podemos verificar se há um daemon do NTP rodando nesta máquina usando o comando:

`service ntp status`

Dá para ver que existe um serviço NTP e o sistema nos diz que ele está em execução. Este serviço está mantendo o nosso relógio na hora certa sem percebermos. Se a qualquer momento ele detectar que o relógio se desajustou, ele ajustará a hora em pequenos incrementos. Ele adicionará ou removerá 0,5 milissegundos por segundo até atingir a hora desejado. Ele usa incrementos muito pequenos de forma que outros serviços que dependam do relógio para executar suas tarefas não sejam afetados por um ajuste repentino da hora.
Em condições normais de operação, o relógio de computador terá desvios muito pequenos da hora padrão. Então, esses ajustes pequenos fazem sentido. Se o `daemon` detectar que a hora mudou em mais de 128 milissegundos, ele pressupõe que outra coisa esteja acontecendo e não interfere. Vamos testá-lo modificando manualmente a data do sistema para uma data no passado.

`sudo date -s 2017-01-01 00:00:00` e essa data especificada.

`date` para verificar se a data mudou

Definimos a data para primeiro de janeiro de 2017 e meia-noite. Se verificarmos a data depois de alguns segundos, ela ainda estará definida para primeiro de janeiro de 2017 alguns segundos depois da meia-noite. Não foi ajustada. O daemon NTP tentou mudar, mas como foi mais de 128 milissegundos, ele não ajustou o relógio. Então, como fazer para colocá-lo no presente? Existe uma opção no daemon NTP que permite ajustar drasticamente o relógio durante a inicialização. Isso ocorre porque o daemon é um dos primeiro a iniciar quando a máquina está inicializando, quando não deve haver nenhum serviço dependente da hora em execução. Se reiniciarmos manualmente o serviço agora, veremos que a data e a hora serão ajustadas.

`sudo service ntp stop`.
`sudo service ntp start`

Usamos a ação "stop" para interromper o serviço e a ação "start" para iniciá-la novamente.

Imediatamente após o início do serviço, vimos que a data e a hora estão no presente de novo.

Usamos o comando "sudo" para parar e iniciar o serviço porque qualquer usuário pode verificar o status do serviço, mas somente o administrador pode fazer com que ele pare e inicie.

Uma alternativa disponível na maioria dos serviços é a ação "restart", que faz uma interrupção seguida de uma inicialização.

`sudo service ntp restart`

Agora você viu como verificar o status, iniciar, parar e reiniciar um serviço no Linux. O NTP é um serviço muito simples, mas você também pode usar os mesmos comandos para gerenciar serviços muito mais complexos.
​

#### Configurando serviços no Linux

Além de saber como consultar o status, parar e iniciar serviços como administrador do sistema, você tem que saber como configurar serviços para atender às necessidades da sua organização.

Por exemplo, se você estiver rodando um servidor DNS, você precisará configurar as zonas DNS que você deseja atender. Se você estiver rodando um servidor web, você precisa configurar os diferentes sites e aplicativos web que você queira habilitar. E, em geral, você deverá aplicar medidas de segurança específicas e políticas de backup para todos os seus serviços.

Os detalhes vão depender muito do sistema operacional e do serviço. A maioria dos serviços é ativada logo depois que você os instalá-la. Estes programas saem da fábrica com configurações padronizadas para começar seguramente o serviço imediatamente, mas nem todos os serviços trazem valores padrão adequados para todos. Em alguns casos, você precisará editar os arquivos de configuração antes que o serviço possa ser ativado.

No Windows, a maior parte da configuração fica armazenada no registro. Ela pode ser modificada usando a interface gráfica ou usando o comando `set service`.

No Linux, os arquivos de configuração para os serviços instalados estão localizados no diretório `/etc`. E embora alguns softwares tenham editores gráficos de configuração, você normalmente terá que editar os arquivos de configuração com um editor de texto. Vamos experimentar um servidor ftp simples chamado `vsftpd`, um serviço que é ativado por padrão quando instalado.

`sudo apt install vsftpd` para instalar o serviço.

Depois da instalação, o serviço já está em execução.

`service vsftpd status` e ver que ele está funcionando. Isso nos diz que o serviço já está em execução. Também podemos verificar que ele está em execução fazendo uma conexão com o servidor ftp por meio de cliente ftp.

Para fazer isso, vou digitar `lftp localhost`

O **Lftp é um programa cliente de FTP que nos permite fazer uma conexão com um servidor ftp.** Quando dizemos para se conectar ao host local, ele vai tentar se conectar ao ftp servidor em execução no host local. Agora, vamos tentar executar o comando ls para listar o conteúdo da corrente directory. E então digite exit.

Isso está falhando porque é requerendo um nome de usuário e senha, e nós não estamos fornecendo. Faz sentido que o comportamento padrão do servidor ftp deve ser bloqueado. Se realmente quisermos ativar conexões anônimas, nós vamos ter que fazer isso explicitamente. Vamos modificar o arquivo de configuração para permitir conexões anônimas.

Então eu tenho o `sudo vim /etc/vsftpd.conf` Isso vai abrir meu arquivo de configuração. E então eu quero ir em frente e mude o `anonymous_enable do não ao sim` salve meu arquivo de configuração. Alterando o valor do configuração anonymous_enable de não a sim, nós estamos dizendo o programa do servidor ftp que Não permitimos conexões anônimas. Nós fizemos a mudança, mas nós não terminamos ainda. Se tentarmos nos conectar novamente, Ainda vou falhar.

Ele falhou e, em seguida, atingimos a saída. Isso também acontecerá com outros serviços porque a maioria dos serviços lê seus configuração quando eles começam, e depois mantenha-o na memória enquanto estiver correndo. Para que nosso serviço para reler a configuração, precisamos dizer para recarregar. Recarregar significa que o serviço relê o arquivo de configuração sem ter para parar e começar. Dessa forma, conexões contínuas não são interrompidos, mas novas conexões usarão uma nova configuração. Vamos fazer isso pelo nosso serviço ftp, então eu digito no serviço `sudo vsftpd reload`
Depois de fazermos isso, podemos tente se conectar novamente e Desta vez, a execução finalmente terá sucesso. Vamos ver, funcionou.

### Gerenciando serviços no Windows

Como o Linux, o Windows também permite que o administrador do sistema gerencie os serviços em execução no sistema. Para este exemplo, vamos dar uma olhada no serviço Windows Update. Este serviço é responsável pela detecção de atualizações de software para o sistema operacional ou outros programas instalados, por baixá-los e deixá-los prontos para serem aplicados no sistema.

No PowerShell:

`Get-Service wuauserv` é um nome curto para o serviço Windows Update, que é esta... Dá para ver que o serviço Windows Update está em execução e podemos obter mais informações sobre ele executando este próximo comando, que vai ser:

`wuauserv Get-Service | Format-List *`.

Ele nos mostrará o tipo de serviço e como ele está configurado para ser executado. É uma boa maneira de obter informações adicionais sobre um serviço em que você está interessado. Como no Linux, qualquer usuário pode consultar o status de um serviço, mas somente os administradores podem iniciar ou interromper um serviço. Se você tentar fazer as próximas etapas como usuário normal do shell, você não conseguirá executar os comandos.

Agora, vamos tentar parar o serviço e verificar o status. Para isso, vou abrir um administrador do PowerShell e executar o comando `Stop-Service`.

`Stop-Service wuauserv`

`Get-Service wuauserv`. Então, o serviço foi interrompido.

Para reiniciá-lo, executamos o comando "Start-Service".

`Start-Service wuauserv` para iniciar o serviço. Depois vou digitar `Get-Service` para mostrar que o serviço está sendo executado.

Também podemos executar essas mesmas ações graficamente usando o console de gerenciamento de serviços. Então, vou clicar em Iniciar. Este console nos mostra todos os serviços do sistema. Os que estiverem em execução trarão a mensagem "em execução" na coluna "Status", enquanto os que não estiverem em execução não trarão nenhuma mensagem nessa coluna. Podemos encontrar o utilitário Windows Update no fim da lista. Podemos pará-lo clicando com o botão direito e apertando "Parar". Em seguida, pode-se clicar com o botão direito do mouse novamente e pressionar "Iniciar".

Pronto! É assim que você vê o status, para e inicia serviços no Windows.
​

#### Configurando serviços no Windows

Primeiro, precisamos ativar esse recurso. Usaremos a opção "Ativar e desativar recursos" no Painel de Controle do Windows. Então, vou clicar em "Iniciar", "Painel de Controle", clicar em "Ativar e desativar recursos do Windows". Será aberto o gerenciador de servidores, que podemos usar para ativar os serviços de informações da internet. Então, vou clicar em "Avançar", "Avançar" novamente, "Avançar" novamente, no total de três vezes. Eu vou rolar para baixo e procurar "servidor web IIS". Vou clicar nele. Vou clicar em "Adicionar recursos". Clicar em "Avançar", clicar em "Avançar" novamente, "Avançar" novamente, "Avançar" novamente e, em seguida, clicar em "Instalar".
Selecionei a opção do servidor web para habilitar esse serviço nesta instância do Windows. Agora estão sendo instaladas todas as partes necessárias para habilitar um servidor nesta máquina. A instalação acabou. Quando fechamos esta janela, percebemos que há uma nova opção no gerenciador de serviços chamada IIS. Vemos aqui que temos um serviço IIS em execução neste servidor. Podemos configurar este serviço clicando com o botão direito do mouse na entrada e, em seguida, selecionando "Gerenciador de serviços de informações da internet". Então, vou expandir nosso servidor e clicar em "Sites". Esses são os sites que são gerenciados pelo serviço. Atualmente, há apenas um site chamado "website padrão". Vamos ver como é o site navegando até o localhost. Então, vou clicar em "Internet Explorer" e digitar "localhost".

Ótimo. Nosso servidor está servindo o site padrão. Agora, vamos adicionar um site diferente. Voltamos aos serviços de informações do Windows. Eu criei um site de exemplo e o armazenei na pasta "Meus documentos". Agora, vou copiar este site para o diretório "inetpub", que é o diretório normalmente usado para servir sites ao usar o IIS. Depois vou em "copiar". Então, vou até o diretório do Inet "C:/inetpub".

Agora colo essa pasta de exemplo para meus documentos no diretório "Inetpub" e clico em "Continuar" no controle de segurança. Certo, copiei meu site, agora vamos habilitá-lo no console do gerenciador do IIS. Então, vamos voltar ao console. Posso adicionar um novo site clicando com o botão direito na lista de sites e selecionando a opção "Adicionar site". Agora vejo um monte de opções que preciso preencher. Vamos selecionar "exemplo" como o nome do meu site. Vamos selecionar a pasta que acabei de copiar como o caminho físico para o site.

Finalmente, vamos selecionar 8080 como a porta. Este último serve para que o site padrão possa ser executado na porta padrão, porta 80, enquanto o nosso site de exemplo será executado em uma porta separada. Certo. Configurei o novo site. O "IIS" me diz que o site já está instalado e funcionando. Vamos ver se é isso mesmo. Eu vou clicar em "Internet Explorer", digitar "localhost"  e digitar dois pontos, porta 8080 e pressionar "Enter". Deu certo. Adicionamos um segundo site ao nosso servidor.

Agora fazer isso no qwiklab.
