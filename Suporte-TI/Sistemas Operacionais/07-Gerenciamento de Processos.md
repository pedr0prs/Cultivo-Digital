# GErenciamento de processos

Os processos desempenham um papel importante na experiência de usuário do computador. Afinal, para que usar um computador se você não puder usar nenhum programa? Com cada vez mais processos em execução no nosso computador, temos que pensar em maneiras de utilizar melhor os recursos de hardware.

## Programas x processos

Processos são programas que estão em execução. Podemos ter muitos processos em execução para o mesmo programa, pois podemos ter muitas janelas do Chrome abertas de uma só vez. 

Quando iniciamos um processo, estamos executando um programa. E lembre-se: o programa é apenas software. Para calcular as informações contidas em nosso software, precisamos oferecer recursos para que ele possa ser executado.

Quando os processos são executados, eles usam recursos de hardware como CPU e RAM. Felizmente, os computadores de hoje são poderosos o suficiente para lidar com os processos que usamos em nossas atividades cotidianas, como navegar na Web, assistir a filmes etc. Mas às vezes isso não é suficiente.

Às vezes, um processo toma mais recursos do que deveria. Às vezes, os processos param de respondem e travam nosso sistema, deixando todo o computador paralisado.

Quando você abre um aplicativo como um processador de texto, você está iniciando um processo. Esse processo recebe algo chamado de ID de processo para identificá-lo em meio a outros processos. Nosso computador vê que o processo precisa de recursos de hardware para ser executado.
Assim, o kernel toma decisões para entender quais recursos oferecer. Então, num piscar de olhos, nosso computador inicia o processador de texto e, você já pode começar a trabalhar.

Isso acontece para cada processo que você inicia e para cada processo que você nem sabe que está rodando. Além dos processos visíveis que iniciamos, como o nosso reprodutor de música ou processador de texto, também há processos não visíveis em execução.
Estes são conhecidos como processos em segundo plano, às vezes chamados também de **daemons.** Os processos em segundo plano são processos executados no plano de fundo. Não dá para vê-los e não interagimos com eles, mas nosso sistema precisa deles para funcionar.
Dentre esses processos está o escalonamento de processos, os logs, o gerenciamento de redes e muitos outros.

### Windows: criação e encerramento de processos

Quando o Windows é inicializado, o primeiro modo de usuário não kernel que é inicia é o subsistema do gerenciador de sessão, ou **smss.exe.** O processo smss.exe é responsável por configurar algumas coisas para o funcionamento do sistema operacional.
Em seguida, inicia-se o processo de login chamado **winlogon.exe**, juntamente com o subsistema de tempo de execução cliente/servidor, chamado de **csrss.exe**, que lida com a conciliação entre a GUI do Windows e a linha de comando.

No Windows, cada novo processo criado precisa que um pai informe ao sistema operacional que um novo processo precisa ser gerado. O processo filho herda algumas coisas do seu pai, como variáveis e configurações, os quais podemos chamar, como um todo, de ambiente. Ele dá ao processo filho um início de vida, mas depois da etapa inicial de criação, o filho funciona praticamente sozinho.

Diferentemente do Linux, os processos do Windows conseguem operar independentemente de seus pais.

Então vamos ver isso no powershell, podemos digitar `notepad.exe` para criar um novo processo para o programa de bloco de notas.
Você pode usar o prompt de comando e usar o utilitário **taskkill**. O `taskkill` consegue encontrar e interromper um processo de algumas formas. Uma das formas mais comuns é usar um número de identificação, conhecido como ID do processo, ou PID, para dizer ao `taskkill` que processo você deseja interromper.

`tasklill /pid 5856`

#### Windows: lendo informações do processo

Você interage com processos de iniciação e interrupção o tempo todo nos computadores, embora o sistema operacional geralmente cuide de tudo isso nos bastidores.
Ao aprender sobre os processos, você está dando uma espiada por trás da cortina do funcionamento real dos sistemas operacionais. Esse conhecimento é fascinante e poderoso, especialmente quando aplicado por um especialista em suporte de TI experiente para resolver problemas.

No sistema operacional Windows, o gerenciador de tarefas ou `taskmgr.exe` é um método de obtenção de informações sobre processos. Você pode abri-lo apertando as teclas **CTRL+SHIFT+ESC** ou localizando-o do menu Iniciar.
Se você clicar na aba "Processos", verá uma lista dos processos que o usuário atual está executando juntamente com alguns dos processos em nível do sistema que o usuário pode ver.

As informações sobre cada processo são divididas em colunas no gerenciador de tarefas. O gerenciador de tarefas informa qual aplicativo ou processo está sendo executado juntamente com o usuário que o iniciou e os recursos de CPU ou de memória que estão sendo usados. Para encerrar um processo, você pode selecionar qualquer uma das linhas de processo e clicar no botão "Finalizar tarefa" no canto inferior direito.

Você também pode ver essas informações no prompt de comando e no PowerShell. No prompt de comando, você pode usar o utilitário chamado `TaskList` para mostrar todos os processos em execução.
Em um prompt do PowerShell, você pode usar um comando chamado `Get-Process` para fazer a mesma coisa.

#### Windows: sinais

O sinal é uma forma de dizer ao processo que algo acabou de acontecer. Você pode gerar um sinal com caracteres especiais no seu teclado e por meio de outros processos e softwares.

Um dos sinais mais comuns você vai encontrar é o chamado "sigint", que vem de "signal interrupt".
Você pode enviar este sinal para um processo em execução apertando as teclas CTRL+C.

#### Windows: gerenciando processos

O Process Explorer é um utilitário que a Microsoft criou para permitir que especialistas em suporte de TI, administradores de sistemas e outros usuários analisem os processos em execução.
Embora não venha instalado no sistema operacional Windows, você pode baixá-lo no site da Microsoft.

O Process Explorer consegue fazer muitas coisas e vamos passar por algumas das informações de monitoramento que ele oferece em outra aula. Não vamos entrar nos detalhes de todas os recursos. Então, se você estiver curioso, pode conferir a documentação no site da Microsoft. Colocamos um link para você na leitura suplementar.

### Linux: criação e encerramento de processos

No Linux, os processos têm um relacionamento pai/filho. Isso significa que todo processo que você inicia decorre de outro processo.

O comando `less` seria o processo pai do processo `grep`.
`less /etc/algum_arquivo | grep hello`
Se todos os processos vêm de outro processo, deve haver um processo inicial que iniciou tudo isso, certo? Sim, existe.

Quando você inicia o seu computador, o kernel cria um processo chamado `nit`, cujo **PID é 1.**
O "nit" inicia outros processos de que precisamos para colocar nosso computador em funcionamento.
Existem outros detalhes da criação de processos, mas eu queria apresentar o conceito de processo pai, já que você vai vê-los quando começarmos a gerenciar processos.

Quando seus processos concluem a tarefa, eles geralmente se encerram automaticamente. Quando um processo termina, ele libera todos os recursos que estava usando de volta para ao kernel para que eles possam ser usados por outro processo.

#### Linux: lendo informações do processo

Estaremos usando o comando `ps -x`.
Ele mostra um panorama dos processos atuais que você está executando em seu sistema.

Vamos começar da esquerda para a direita.
O **PID** é a ID do processo.
Lembre-se de que os processos recebem uma ID única quando são iniciados.
**TTY:** este é o terminal associado ao processo.
**STAT:** este é o status do processo. Se você vir um R aqui, isso significa que o processo está em execução ou está aguardando para ser executado. Outro status comum que você pode ver é "T", que representa "parado" e indica que o processo foi suspenso.
Outro que você pode ver é "S", que representa "interrompido", e significa que a tarefa está esperando a conclusão de um evento antes de continuar.
**TIME:** este é o tempo total da CPU que o processo levou.
**command:** este é o nome do comando que estamos executando.

`ps -ef`. O flag "E" é usado para ver todos os processos, mesmo aqueles executados por outros usuários. O flag "-f" vem de "full" e mostra todos os detalhes de um processo.
Veja bem: temos mais processos e ainda mais detalhes dos processos.

**UID** é a ID do usuário da pessoa que iniciou o processo.
**PID** é a ID do processo, e PPID é a ID do processo pai e que iniciou o processo.
**"C"** é o número de processos filhos que esse processo possui.
**STime** é a hora de início do processo.
**TTY** é o terminal associado ao processo.
**TIME:** este é o tempo total da CPU que o processo levou.
**E CMD, que vem de "command"**, é o nome do comando que estamos executando.

`ps -ef | grep chrome` irá pesquisar todos os processos com chrome

Lembre-se de que tudo no Linux tem um arquivo, até os processos. Para ver os arquivos que correspondem aos processos, podemos olhar no diretório "/proc". directory.

#### Linux: sinais

No Linux, existem muitos sinais de que podemos enviar aos processos. Esses sinais recebem nomes que começam com **sig**.
Lembra-se do sinal "sigint", de que falamos antes? Você pode usar o "sigint" para interromper um processo e a ação padrão desse sinal é finalizar o processo que ele está interrompendo. Isso também se aplica ao Linux. Você pode enviar o sinal "sigint" apertando as teclas **Ctrl+C**.

#### Linux: gerenciando processos

Então, para finalizar um processo, usamos o comando `kill` mais o PID do processo que queremos encerrar.
O outro sinal que você pode usar de vez em quando é o sinal `-KILL`. Ele apaga seu processo de uma forma muito violenta.

`kill -KILL 123141`

Digamos que você tenha um processo em execução e que não queira encerrá-lo, mas queira só colocá-lo em pausa. Você pode fazer isso enviando o sinal **-TSTP**, que vem de "terminal stop", e ele colocará seu processo em suspensão.

`kill -TSTP 12411`

Agora dá para ver que o processo 10754 está suspenso. Você também pode enviar o sinal "SIGTSTP" usando as teclas CTRL + Z.

Para retomar a execução do processo, você pode usar "-CONT".

`kill -CONT 23113`

Agora, se eu olhar o processo novamente, dá para ver que o status do processo mudou de T para um S.

**SIGTERM, SIGKILL e SIGSTP** são alguns dos sinais mais comuns que você verá ao trabalhar com processos no Linux.