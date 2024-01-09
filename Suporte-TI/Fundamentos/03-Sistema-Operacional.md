# Sistemas Operacionais

Um sistema operacional é um software que gerencia os recursos de um computador e fornece uma interface para os usuários interagirem com ele. Ele é composto por duas partes principais: *o kernel e o espaço do usuário.*

O kernel é a parte mais fundamental do sistema operacional. Ele é responsável por gerenciar os recursos de hardware do computador, como a CPU, a memória e o armazenamento. Ele também é responsável por fornecer serviços básicos aos aplicativos, como acesso à memória e ao armazenamento.

O espaço do usuário é a parte do sistema operacional com a qual os usuários interagem diretamente. Ele inclui os aplicativos, as interfaces de usuário e as configurações do sistema.

## Componentes do sistema operacional

### O kernel é responsável pelas seguintes funções

- **Gerenciamento de arquivos:** o kernel gerencia o armazenamento de arquivos no computador. Ele cria e exclui arquivos, atribui nomes a eles e controla o acesso a eles.
- **Gerenciamento de processos:** o kernel gerencia os processos que estão sendo executados no computador. Ele atribui recursos aos processos, controla a ordem de execução e monitora o uso de recursos.
- **Gerenciamento de memória:** o kernel gerencia a memória do computador. Ele aloca e libera memória para os processos, e garante que a memória seja usada de forma eficiente.
- **Gerenciamento de entrada e saída:** o kernel gerencia a comunicação do computador com dispositivos externos, como teclados, mouses, discos rígidos e impressoras.

### O espaço do usuário é responsável pelas seguintes funções

- **Execução de aplicativos:** o espaço do usuário executa os aplicativos que os usuários desejam usar. Ele fornece uma interface para os usuários interagirem com os aplicativos.
- **Gerenciamento de configurações:** o espaço do usuário fornece uma interface para os usuários gerenciarem as configurações do sistema.

## Arquivos e sistemas de arquivos

Um arquivo é uma coleção de dados armazenados no computador. Os arquivos podem conter qualquer tipo de dados, como texto, imagens, vídeos ou programas.

Um sistema de arquivos é um conjunto de regras que definem como os arquivos são armazenados e organizados no computador. Ele fornece uma maneira para os usuários acessarem e gerenciarem seus arquivos.

Existem muitos tipos diferentes de sistemas de arquivos. Alguns sistemas de arquivos são projetados para serem eficientes, enquanto outros são projetados para serem seguros ou resistentes a erros.

## Gerenciamento de processos

Quando queremos rodar um programa, temos que dedicar recursos de computação para ele, como RAM e CPU. O kernel tem que gerenciar os recursos eficientemente, para que todos os programas desejados possam ser executados.

O kernel não dedica todos os recursos do computador para um processo. Nosso sistema está rodando constantemente vários processos necessários para que ele funcione, então o kernel precisa lidar com todos esses processos de uma só vez.

O kernel cria processos, escalona-os com eficiência e gerencia como os processos são finalizados.

## Gerenciamento de memória

Lembre-se que quando um processo é executado, ele precisa de tempo de CPU, mas também precisa de memória. Quando os processos são executados, eles ocupam espaço na memória, para que o computador possa ler e carregá-los rapidamente.

No entanto, em comparação com os discos rígidos, a memória é muito menor. Então, para ter mais memória do que temos fisicamente, usamos algo chamado de memória virtual.

A memória virtual é uma combinação de espaço no disco rígido e da RAM, uma memória que os processos podem usar.

Quando executamos um processo, pegamos os dados do programa em blocos, que chamamos de páginas. Armazenamos essas páginas na memória virtual. Se quisermos ler e executar essas páginas, elas precisam ser enviadas para a memória física ou RAM.

### Gerenciamento de entradas e saídas

O kernel também é responsável por gerenciar entradas e saídas. Chamamos os dispositivos de entrada e saída de I/O (Input/Output). São eles os monitores, teclados, mouses, discos rígidos, caixinhas de som, fones de ouvido Bluetooth, webcams e adaptadores de rede.

Esses dispositivos I/O são gerenciados pelo kernel, que precisa carregar os drivers que são usados, para que possamos reconhecer e conversar com esses tipos de hardware.

Quando o kernel inicia os drivers para se comunicar com o hardware, ele também gerencia a transferência de dados de entrada e de saída dos dispositivos.

## Interação com o sistema operacional: espaço do usuário

O espaço do usuário é a parte do sistema operacional com a qual os usuários interagem diretamente. Ele inclui os aplicativos, as interfaces de usuário e as configurações do sistema.

Existem duas formas de interagir com o sistema operacional: com um Shell ou uma interface gráfica de usuário.

Uma interface gráfica do usuário, ou GUI, é uma maneira visual de interagir com o computador. Usamos o mouse para clicar e arrastar, para abrir pastas etc. Podemos ver tudo o que fazemos.

O Shell é basicamente um programa que interpreta comandos de texto e os envia ao sistema operacional para execução.

Embora tenhamos as GUIs hoje, o Shell ainda é muito usado para executar comandos, especialmente por usuários avançados. No Linux, especialmente, é essencial conhecer os comandos, não apenas a GUI. Isso ocorre porque a maioria das máquinas com Linux atendidas em suporte de TI são acessadas remotamente. Na maioria das vezes, você não terá uma GUI.

É importante saber usar um Shell na função de suporte de TI. Algumas tarefas só podem ser feitas por meio de comandos. Em funções de TI mais avançadas, você pode ter que gerenciar milhares de máquinas. Não dá para clicar em um botão ou arrastar uma janela em cada máquina quando dá para executar um só comando.

Além da interface gráfica e do Shell, também vamos interagir com o sistema operacional por meio de aplicativos. Existem aplicativos e bibliotecas do sistema que usamos diariamente, como aplicativos de logging, configurações do sistema e muito mais.

## Logs

Os logs são arquivos que registram eventos do sistema em nosso computador. Eles registram eventos como quando o computador foi ligado, quando um driver foi carregado, e até quando algo não está funcionando na forma de mensagens de erro.

Os logs são importantes para a solução de problemas, pois podem fornecer informações sobre o que aconteceu antes ou durante um problema. No entanto, os logs podem ser difíceis de navegar, pois registram tudo o que acontece no computador.

Para facilitar a navegação nos logs, existem ferramentas que podem ajudá-lo a encontrar as informações que você precisa.

## Máquinas virtuais

As máquinas virtuais são cópias de máquinas reais que podem ser executadas em um computador físico. Elas são úteis para vários propósitos, incluindo:

- Aprender novos sistemas operacionais
- Testar software
- Executar aplicativos que não são compatíveis com o seu sistema operacional
- As máquinas virtuais usam recursos físicos, como memória, processamento e armazenamento. No entanto, elas oferecem o benefício adicional de rodar vários sistemas operacionais de uma só vez.

As máquinas virtuais são uma ferramenta poderosa que pode ser usada para uma variedade de propósitos. Se você está procurando uma maneira de executar vários sistemas operacionais em um único computador, as máquinas virtuais são uma ótima opção.
