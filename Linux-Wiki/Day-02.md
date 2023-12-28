## Primeir o acesso linux via SSH

**jeferson@486-dx2:~$ ssh jeferson@IP**

Jeferson - usuário

486-dx2 - nome da maquina

**ssh -** logar na maquina

~ - diretório do usuário corrente

$ - Usuário comum. não é o admin do sistema/root

https://linuxconfig.org/unable-to-ssh-into-virtualbox-guest-machine

## Conhecendo shell do linux

**cat -** visualizar o conteúdo de um arquivo

**su -** Super user. para entrar no root

**# -** usuário root/admin

**pwd -** mostra o diretório atual, o diretório corrente

**cd -**  mudar de diretório - anterior ~ home . . Volta um nível, pode-se usar /. . /. . /. ./

 **ls -lha -**  ls=lista os arquivos em diretórios a=all l=mais informações h=Fácil leitura

**ctrl+l/clear** - limpar a tela

**shell -** usando para interagir com o sistema

**bash shell -** usando em 90% das distribuições linux, 

**setas pra cima -** com os comando usado anteriormente

**history -** históricos de comandos 

**ctrl + d** - exit, logout

**ctrl + c** - cancelar

**TAB -** ajuda a completar os comandos

**grep -** procurar algo

**df -h -** mostra as partições

**echo** - imprime algo

**>-** direcionamento, manda

**lost+found** - achados e perdidos

## O que é um arquivo e um diretório

**arquivo =** qualquer coisa

**diretório =** algo que vai reunir outra coisa dentro, guarda arquivos e diretórios

se começar com **‘d’** é um diretório 

se começar com **‘b’** é um dispositivo de bloco, armazena info. (hd, pen-drive)

se começar com **‘c’** é um dispositivo de caractere que está recebendo e enviando informação

se começar com **‘-’** é um arquivo comum (txt)

se começa com **‘L’** é uma atalho

usando a **‘/’** = caminho absoluto 

## Estrutura de diretórios do Linux e o FHS

Significados dos diretórios (extraído de https://pt.wikipedia.org/wiki/Filesystem_Hierarchy_Standard):

**/bin -** Binários de usuários, essenciais no boot, arquivos executáveis essencial para o Linux, usado com bastante frequência.  
**/sbin -** Binários do superusuário, essenciais no boot

**/boot -** Arquivo do gerenciador de partida e kernel, símbolos. Arquivos essenciais para a inicialização do sistema.
**/dev -** Dispositivos do sistema. 

sda1 são os discos. sd- disco. a- primeiro. 1-lógico

ttyS1 são terminal, porta de comunicação, dispositivos de caracteres. 

**psaux -** mouse

**net -** rede 
**/etc -** Arquivos de configuração globais. diretório que guarda toda a configuração da maquina.
**/etc/opt -** Arquivos de configuração para aplicativos em /opt
**/etc/X11** - Arquivos de configuração para o X Window System 11
**/home** - Armazenamento de dados de contas de usuários normais
**/root** - Armazenamento de dados de contas do superusuário
**/lib -** Bibliotecas e os módulos essenciais do sistema, kernek linux. de binários localizados em /bin e **/sbin**

**libdiscover.so.version,** extensões não são obrigatórias. sys

**.ko** são drives 
**/mnt** - Sistema de arquivos montado temporariamente. ponto de montagem.
**/media** - Ponto de montagem de mídias removíveis (como pen-drives, cd-rom)
**/opt** - Pacotes estático de aplicações. pouco utilizado. 
**/proc** - systema de arquivos virtual, onde pode fazer a interação com o kernel
e processos do sistema. existe mas n existe.

informações dinâmicas sobre o sistema.
**/tmp** - Arquivos temporários. Conteúdo geralmente apagado no reboot nas distribuições.
**/usr** - (unix system resources) - Hierarquia secundária (não essenciais no boot) para dados compartilhados de usuários. não é vital para o sistema operacional. derivados dos usuários. 
**/usr/bin** - O mesmo que a hierarquia /bin, mas contém binários não essenciais ao funcionamento da máquina ou para o recovery
**/usr/include** - Diretório padrão para headers
**/usr/lib** - O mesmo que a hierarquia /lib, mas não essenciais ao boot
**/usr/sbin** - O mesmo que o /sbin, mas não essenciais ao boot da máquina. somente o root pode utilizar o /sbin
**/usr/share** - Dados compartilhados independentes de arquitetura
**/usr/src** - Armazenamento de código fonte da máquina.
**/usr/X11R6** - - X Window Sysem, versão 11R6, interface gráfica do linux
**/usr/local** - Armazenamento de binários não distribuídos na instalação principal
da máquina, ou seja, fora do sistema de empacotamento. Também é o local
de armazenamento terciário de dados.
**/var** - Arquivos que são gravados com sequencia (logs, páginas web, email, imagens, etc) variáveis 
**/var/lock** - Arquivos de lock, usados para controlar corretamente os recursos em uso
**/var/log** - Arquivos de log, usado para logs em geral
**/var/mail** - Caixas de e-mail dos usuários do sistema em formato mailbox
**/var/run** - Contém dados sobre a execução do sistema desde seu primeiro boot
(daemons e usuários), da informações a tudo que está rodando desde ultimo boot. dados variáveis e temporários. 
**/var/spool** - Spooling de tarefas (fila de impressão, cache de pacotes, proxy, etc)
**/var/spool/mail** - Antigo local da caixa de correio de usuários (deve ser usado /var/mail)
**/var/tmp** - Arquivos temporários. Quando usado em modo multi-usuário.

**sys -** relacionados aos drives e kernel, tem informações sobre os devices.

### todas as distribuições devem seguir o FHS,  a estrutura de sistemas de arquivos básicas.

dispositivos de bloco que serve para armazenamento e dispositivos de caracteres que serve para transferir informação.

## Desligando e reiniciando o linux

**halt** - desliga 

**reboot** 

**shutdown -h** ou r(da reboot) now - desliga a maquina instantaneamente 

**shutdown - - help -** 

**shutdown -h** 18:00 ou +30 “aviso” programa um desligamento

**shutdown -c** - cancela tudo

**poweroff**

**init 0** - desliga

**init 6** - reinicia