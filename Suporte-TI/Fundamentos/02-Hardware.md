# Hardware

Hardware é um assunto essencial que deve ser compreendido. Seja para trocar peças defeituosas, fazer um upgrade de máquinas ou até mesmo montar seu próprio computador, é importante saber como cada componente funciona e como eles se comunicam entre si.

## O que é hardware?

Hardware é simplesmente a parte física de um computador. São componentes físicos, como a tela, o teclado, o mouse, a placa-mãe, o processador, a memória RAM, o armazenamento e a fonte de alimentação, etc. Pode acreditar, existem muitos tipos de hardwares, cada qual com sua finalidade e objetivo, a cada dia que se passa se criam novos componentes de hardwares mais tecnológicos.

## Quais são os componentes principais de um computador?

- **Processador (CPU):** O processador é o cérebro do computador. Ele é responsável por realizar todos os cálculos e processamentos de dados.
- **Memória RAM _(Random Access Memory)_**: A memória RAM é a memória de curto prazo do computador. Ela é usada para armazenar dados que estão sendo usados ​​atualmente pelo processador.
- **Armazenamento:** O armazenamento é usado para armazenar dados de longo prazo, como arquivos, programas e sistemas operacionais. Os tipos mais comuns de armazenamento são o disco rígido (HDD) e o disco de estado sólido (SSD).
- **Placa-mãe:** A placa-mãe é a base do computador. Ela conecta todos os componentes e permite que eles se comuniquem entre si.
- **Fonte de alimentação:** A fonte de alimentação converte a energia da tomada em uma forma que o computador pode usar.

## Aplicativos e memória

Além dos componentes físicos, um computador também precisa de software para funcionar. O software são as instruções que dizem ao computador o que fazer. Os aplicativos, como navegadores, reprodutores de música e editores de texto, são tipos de softwares.

Os aplicativos são armazenados no armazenamento do computador _(SSD ou HDD)_. Quando você abre um aplicativo, ele é copiado para a memória RAM. A RAM é uma memória de acesso aleatório, o que significa que a CPU pode ler qualquer parte da RAM com a mesma rapidez.

A RAM é muito mais rápida que o armazenamento, por isso é importante que os aplicativos sejam copiados para a RAM antes de serem executados. A RAM é limitada em tamanho, por isso nem todos os aplicativos podem ser executados ao mesmo tempo.

A CPU também usa algo chamado **cache**. O cache é uma pequena quantidade de memória de alta velocidade que fica próxima à CPU. O cache é usado para armazenar dados que a CPU usa com frequência. Isso permite que a CPU acesse os dados mais rapidamente.

### Como os hardwares comunicam entre si

Até agora, vimos como os aplicativos são executados do disco rígido para o processador. Mas como o clique do mouse ou o toque do teclado são enviados para o processador?

Se você apertar uma tecla no teclado, enviará apenas um byte para o processador. O processador não sabe o que é isso porque não tem instruções sobre como lidar com esse tipo de informação.

Acontece que os dispositivos também usam programas para dizer ao processador como executá-los. Esses programas são chamados de **drivers**. Os drivers contêm as instruções de que o processador precisa para compreender dispositivos externos como teclados, webcams, impressoras, entre outros.

O processador não sabe que existe um dispositivo com o qual ele pode conversar, então ele tem que se conectar com o que chamamos de **BIOS**, ou seja, **serviços básicos de entrada e saída.**

A BIOS é um software que ajuda a inicializar o hardware do computador e que coloca o sistema operacional em funcionamento.

No sistema atual, existe outro componente da BIOS chamado de **UEFI**, que significa: *interface unificada de firmware extensível.*

A UEFI executa a mesma função de iniciar seu computador, como a BIOS tradicional. Mas ela é mais moderna e tem melhor compatibilidade e suporte para os hardwares mais novos. A maioria dos hardwares atualmente vem com o UEFI embutido. *No futuro, a UEFI será a BIOS predominante.*

#### Autoteste de inicialização (POST)

Quando ligamos um computador, pode ouvir bipe de vez em quando. Os computadores executam um teste para garantir que todo o hardware está funcionando corretamente. Isso é chamado de *autoteste de inicialização, ou POST.*

É a BIOS que o executa quando você inicializa seu computador. O POST descobre qual é o hardware que está no computador. Ele acontece antes de a BIOS inicializar qualquer item de hardware ou carregar drivers essenciais.

Se tiver qualquer problema em algum hardware, não há como exibi-lo na tela, porque itens como o driver de vídeo ainda não foram carregados. Em vez disso, o computador geralmente pode emitir uma série de bipes, como se fosse um código Morse, que pode ajudar a identificar qual o problema.

Então, se o seu computador se iniciar corretamente, talvez você ouça um único bipe. Se você ouvir dois bipes, pode ser um erro de POST.

#### Como a BIOS é usada no suporte de TI

Na função de suporte de TI, você pode interagir com a BIOS mais frequentemente do que pensa.

As configurações da BIOS controlam quais dispositivos devem ser inicializados e, como técnico de TI, você pode precisar mudar essas configurações frequentemente.

Uma trabalho de TI que se faz com frequência é a restauração/formatação do computador. O processo de restauração/formatação resulta em salvar os dados do cliente, limpar e reinstalar o sistema operacional. Este procedimento é normalmente executado usando um programa que fica armazenado em algum dispositivo externo, como um pen drive, CD-ROM ou até um servidor acessível pela rede.

Para acessar esses programas e fazer a restauração/formatação, você precisará usar a BIOS para informar ao computador que ele deve ser inicializado a partir desse dispositivo externo.

## Ponto Reflexão

O cenário da tecnologia da informação está se tornando mais diverso, com pessoas de todos os tipos, gêneros, etnias e origens educacionais trabalhando juntas. Essa diversidade é benéfica, pois traz uma variedade de perspectivas e experiências.

Além disso, a tecnologia está sempre em mudança, portanto, é importante ter uma atitude de aprendizado contínuo. As habilidades tecnológicas são importantes, mas as habilidades interpessoais, como empatia e compreensão dos problemas das pessoas, são essenciais para o sucesso na TI.

### 🔗 Saiba mais

- [Computer Hardware](https://www.geeksforgeeks.org/computer-hardware/)

- [Components of Computer](https://www.indeed.com/career-advice/career-development/what-are-basic-components-of-computer-hardware)

- [Memory](https://medium.com/dvt-engineering/the-basics-of-application-memory-management-19f060c2d0f)

- [Ganhe uns trocados formatando computadores (Windows)](https://www.adrenaline.com.br/artigos/como-formatar-o-pc-com-windows/)
