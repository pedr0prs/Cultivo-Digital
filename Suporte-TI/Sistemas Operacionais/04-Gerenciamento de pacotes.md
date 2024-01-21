# Distribuição de softwares e Gerenciadores de pacotes

## Windows: pacotes de software

No Windows, o software costuma ser empacotado como **.exe**, ou arquivo executável. Arquivos executáveis contêm instruções para o computador executar ao abri-lo, como copiar este arquivo daqui para lá, instalar este programa ou, de forma mais genérica, executar esta operação.

Um pacote de instalação da Microsoft, ou msi, é usado para guiar um programa chamado Windows Installer na instalação, manutenção e remoção de programas do sistema operacional Windows.

Se você quiser controle detalhista preciso das ações do Windows ao instalar o software, o ideal é optar pelo instalador personalizado. Mas essa opção pode ser complexa, principalmente para gerenciar coisas como dependências de código. o uso do Windows Installer guiado por um arquivo msi resolve boa parte dos registros e configura o software para você, mas há algumas regras bastante rígidas sobre a forma de instalar o software.

Instalar executáveis pela linha de comando é útil em muitos cenários de suporte de TI, incluindo instalações automáticas. Você pode escrever um script ou usar uma ferramenta de gestão de configuração para instalar algum software automaticamente sem precisar ter uma pessoa clicando nos botões de um assistente de instalação. Certo, mas instalar um executável pela linha de comando? A resposta é: depende. Não é o que você esperava, eu sei. Executar arquivos "exe" pela linha de comando é bem simples. Basta abrir um prompt de comando ou PowerShell, mudar para a pasta onde o executável está e digitar o nome dele.

Você também pode digitar o caminho absoluto do exe em qualquer parte do sistema de arquivos, assim: `C:\users\cindy\desktop\hello.exe` Executar um instalador pela linha de comando é semelhante, mas possivelmente oferecerá mais opções de instalação. Dependendo do instalador, podem haver sinalizadores para uma instalação silenciosa, por exemplo, em que nada aparece na tela e o pacote é instalado silenciosamente, ou um argumento para reiniciar o computador automaticamente após a instalação do pacote.

Dica de pro: tente usar o parâmetro de barra e interrogação ao executar um pacote pela linha de comando para ver que tipos de subcomando o pacote pode suportar. Se o pacote não tiver opções relacionadas à ajuda, você pode tentar ler a documentação do desenvolvedor para ver que tipos de instalação os pacotes de software suportam.

### Windows: arquivos compactados

Um arquivo compactado é composto de um ou mais arquivos que são comprimidos em um único arquivo.
O processo de instalar softwares por um arquivo compactado-fonte é chamado de instalação pela fonte. Alguns formatos de arquivo compactado comuns são .tar, .zip e .rar.
Para instalar software de um arquivo compactado, você extrai o conteúdo do arquivo compactado para ver os arquivos comprimidos.
Então, dependendo do código em que ele foi escrito, você tem que usar um método específico para instalar.

Não é só o software que é armazenado em um arquivo compactado: tudo pode ser arquivado, como fotos ou arquivos de música.
Para complicar as coisas um pouco mais, os tipos de arquivo compactado podem ser extraídos de inúmeras formas. Felizmente, o Windows tem ferramentas para compactar e descompactar diferentes tipos de arquivo, como ".rar", ".zip" e ".tar". Esta é a ferramenta de código aberto 7-zip.

### Windows: dependências de pacote

Pacotes de software geralmente dependem de outros fragmentos de código. Contar com outros softwares para fazer um aplicativo funcionar tem o nome de "dependência", já que um bit de código depende de outro para trabalhar.
A biblioteca é uma forma de empacotar um monte de código útil que alguém escreveu. Esse código é empacotado em uma única unidade. No Windows, essas bibliotecas compartilhadas são chamadas de bibliotecas de vínculo dinâmico, ou DLL.
Isso significa que o pacote de instalação terá todos os recursos e dependências, como DLLs, dentro do próprio pacote. O Windows Installer ainda gerencia essas dependências e verifica se eles estão disponíveis para o programa.
A maioria das bibliotecas compartilhadas fica em uma pasta em C:\Windows\WinSxS. Se um aplicativo precisar usar uma biblioteca compartilhada para executar uma tarefa, essa biblioteca será especificada em algo chamado Manifesto. Ele instrui o Windows a carregar a biblioteca da pasta SxS. O sistema SxS também suporta o acesso automático a várias versões da mesma biblioteca compartilhada.

Usando um `cmdlet` de gerenciamento de pacotes do Windows chamado `Find-Package`, você encontra softwares e suas dependências direto pela linha de comando.
Digamos que você queria instalar o pacote `Sysinternals`, que é um conjunto de ferramentas lançado pela Microsoft para solucionar problemas de todos os tipos nos computadores Windows.
Você pode baixar o pacote Sysinternals no site da Microsoft ou usar o recurso de gerenciamento de pacotes.
Primeiro, precisamos abrir um terminal do PowerShell digitando "PowerShell" no menu Iniciar.
Depois, tentamos localizar o pacote "sysinternals" executando o seguinte comando. `Find-Package sysinternals-IncludeDependencies`
basta informar o PowerShell do local em que ele pode encontrar o pacote Sysinternals. E esse é um repositório de pacotes chamado **Chocolatey**. Como queremos usar o Chocolatey para encontrar nossos pacotes, precisamos adicioná-lo como uma fonte de pacotes.
Digitamos `Register-PackageSource-Name chocolatey-ProviderName Chocolatey-Location`

### Windows: gerenciador de pacotes

Um gerenciador de pacotes garante que o processo de instalação, remoção, atualização e gerenciamento de dependências de software seja o mais fácil e automático possível. Algumas tecnologias de instalação, como o Windows Installer, podem cuidar do gerenciamento de dependências. Mas eles não ajudam muito na instalação de softwares a partir de um catálogo central de programas nem para executar atualizações automáticas.

O Chocolatey é um gerenciador de pacotes de terceiro para o Windows. Ou seja, não foi desenvolvido pela Microsoft. Ele permite instalar aplicativos Windows pela linha de comando. O Chocolatey usa a estrutura de algumas tecnologias do Windows, como o PowerShell, e permite instalar qualquer pacote ou software presente no seu repositório público.

Ferramentas de gerenciamento de configuração, como SCCM e Puppet, até se integram ao Choclatey. Isso faz o gerenciamento de implementações de software em computadores Windows ser automático e simples
Você pode instalar a ferramenta de linha de comando do Chocolatey e executá-la direto na CLI do PowerShell.

`Install-Package -Name sysinternals`

`Get-Package -Name sysinternals` - procurar o gerenciador de pacotes

`Uninstall-Package -Name sysinternals` - remove-o

## Linux: pacotes de software

No Linux, existem muitas distribuições diferentes, e cada uma pode ter seu tipo de pacote. Por exemplo, na distribuição ou distro Linux, a Red Hat, os pacotes usados são os `rpm` ou Red Hat Package Manager. basta saber que os tipos de pacote podem mudar quando se trabalha com diferentes distribuições Linux.
Vamos trabalhar com pacotes Debian, usados pelo Ubuntu. Um pacote Debian é empacotado como um arquivo `.deb` para o Debian.
Você tem que trabalhar com pacotes Debian independentes, principalmente quando os desenvolvedores empacotam e lançam softwares em sites diferentes. Para instalar um pacote Debian, você terá que usar o comando `dpkg`, ou pacote Debian.

Você também pode listar os pacotes Debian instalados na máquina usando `dpkg -l`. O L significa lista, neste caso. Tem muitos programas aqui. Está um pouco desorganizado.

Isso mesmo. O comando "grep". Digamos que queremos procurar o pacote que você quer. `dpkg -l | grep pacote`.
Lembre-se: o comando "pipe" usa a saída padrão de um comando que, neste caso, é a saída de "dpkg -l". Em seguida, ele envia a saída à entrada padrão do comando sendo direcionado.

### Linux: arquivos compactados

O 7-Zip também está disponível para Linux. `7z --help`
Uma ferramenta que muitas pessoas usam que já está instalada na maioria das distros Linux é o comando `tar`
Saiba que cada tipo de arquivo pode exigir comandos específicos para extrair. Bom, você viu o que são os pacotes independentes no Windows e no Linux, além de conhecer alguns tipos de arquivo comuns.

### Linux: dependências de pacote

Baixei o navegador Google Chrome no meu computador e quero instalá-lo com `sudo dpkg -i google-chrome`. Espera um pouco: que erro é esse?
*Problemas de dependência impedem a configuração de google-chrome-stable.*
Isso quer dizer que não é possível instalar o Google Chrome porque ele depende de outro pacote que não está instalado nesta máquina.
Então, antes de instalarmos o Chrome, temos que instalar este pacote: *lib app indicator one*. Apesar de um instalador de pacotes independente, como o dpkg, ser mais rápido, ele não instala dependências de pacote.

No Linux, essas dependências podem ser outros pacotes ou algo como bibliotecas compartilhadas. Bibliotecas compartilhadas do Linux similares às DLLs do Windows são bibliotecas de código que outros programas podem usar. Então, o que fazer em caso de erro de dependência? Você pode instalar as dependências individualmente, com certeza. Mas, em alguns casos, talvez haja mais do que só uma dependência. Você até ver 10 delas. Principalmente no Linux. Não é tão divertido instalar programas diversas vezes só para fazer um programa funcionar. Por sorte, é aí que entram os gerenciadores de pacotes. Os gerenciadores de pacotes surgem com o objetivo de facilitar a instalação e a remoção de pacotes, incluindo a instalação de dependências de pacote.

### Linux: gerenciador de pacotes Apt

O gerenciador de pacotes APT é usado para ampliar os recursos do pacote. Ele facilita muito a instalação de pacotes. Ele instala dependências de pacote, facilita a busca dos pacotes que podemos instalar, apaga pacotes de que não precisamos e muito mais.

Vamos ver como instalaremos o Gimp, um editor gráfico de código aberto, usando o APT.
`sudo apt install gimp`
*Veja esta linha aqui. Ela significa: "0 atualizados, 18 recém-instalados, 0 a remover e 16 não atualizados. Isso nos dá uma boa visão de como estamos lidando com os pacotes na máquina.*
Vamos remover esse pacote.
`sudo apt remove gimp`
Veja que isso remove as dependências que não usamos mais porque não precisamos do Gimp.

Os PPAs são hospedados nos servidores do Launchpad. O Launchpad é um site de propriedade da Canonical Limited. Ele permite que desenvolvedores de software de código aberto desenvolvam, gerenciem e distribuam softwares. Você pode adicionar PPAs como se fossem um link de repositório convencional, mas tenha um pouco de cuidado ao usá-los no lugar dos repositórios do desenvolvedor original. O software de PPA não é tão seguro quanto repositórios de fontes confiáveis como o Ubuntu. Em alguns casos, ele pode ter software defeituoso ou até malicioso.

Um outro ponto importante dos repositórios é que os gerenciadores de repositório são atualizados regularmente. Se você quer ter as atualizações de pacote mais recentes, atualize seus repositórios de pacote com o comando `APT update` seguido de `APT upgrade` esses comando atualiza a lista de pacotes nos seus repositórios para você ter o software mais recente disponível, Mas não instala nem atualiza os pacotes. Para fazer isso, depois de ter uma lista atualizada de pacotes, você pode usar o `APT upgrade` para instalar todos os pacotes desatualizados automaticamente.
**Antes de instalar o novo software, o ideal é executar "APT update" para garantir que você receba o software mais atual para os repositórios.**
**É uma boa idea também executar "APT upgrade" para instalar eventuais pacotes atualizados disponíveis na sua máquina.**
**Você pode usar o comando "apt--help" para saber mais sobre os comandos disponíveis para o APT.**
