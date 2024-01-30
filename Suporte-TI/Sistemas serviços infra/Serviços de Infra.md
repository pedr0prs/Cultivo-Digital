# O que são serviços de infraestrutura de TI

Os serviços de infraestrutura de TI permitem que a organização funcione. Dentre eles estão a conexão com a Internet, o gerenciamento de redes por meio da configuração de hardware de rede, a conexão de computadores em uma rede interna etc.

## O papel dos serviços de infraestrutura de TI na administração de sistemas

Existem muitos serviços de infraestrutura de TI que mantêm uma empresa em funcionamento. Em uma empresa menor, uma única pessoa pode se encarregar de todos esses serviços. Em empresas maiores, há equipes de administradores para gerenciar apenas um serviço.

Os serviços em nuvem são serviços acessados através da Internet, como o Gmail. Podemos acessar nossas contas do Gmail a partir de qualquer dispositivo de computação contanto que estejamos conectados à Internet.

### Tipos de serviços de infraestrutura de TI

Você pode configurar diferentes servidores para executar seus serviços, como um servidor para o serviço de armazenamento de arquivos. Você pode comprar ou alugar hardware para esses servidores, configurá-los e armazená-los na empresa ou em outro local. Basicamente, você gerencia esses servidores de ponta a ponta. Existe outra opção. Se você não quer gerenciar as tarefas de hardware e atualização de segurança dos sistemas operacionais dos servidores, você pode usar a **nuvem para manter sua própria infraestrutura, o que chamamos de Infraestrutura como Serviço, ou IaaS.** Os provedores de IaaS oferecem máquinas virtuais pré-configuradas que você pode usar como se fossem servidores físicos. Alguns provedores de IaaS famosos são Amazon Web Services e as instâncias Elastic Compute Cloud ou EC2, Linode, que roda servidores virtuais, Windows Azure e o Google Compute Engine.

A rede interna da sua empresa não vai ser como sua rede doméstica. Você terá vários computadores que precisam estar em uma determinada sub-rede. Você precisará atribuir endereços IP estaticamente ou por meio de DHCP. O hardware de rede terá que ser configurado e provavelmente será necessário disponibilizar Internet sem fio. O DNS precisa estar funcionando e assim por diante. Se sua empresa for grande, geralmente é uma equipe dedicada que cuidará da rede. Mas nas empresas menores, você provavelmente será responsável pela configuração da rede.

A rede pode ser integrada a um provedor IaaS, mas, nos últimos anos, ela tornou-se um serviço autônomo na nuvem: **Rede como Serviço, ou NaaS.** O NaaS permite que as empresas terceirizem seus serviços de rede parar não terem que lidar com hardware de rede, que é muito caro. As empresas também não precisam configurar sua própria segurança de rede, gerenciar o roteamento, configurar a WAN e Internet privada etc.

Os softwares certos devem estar disponíveis para os usuários da sua empresa. Já vimos como instalar e manter os softwares nas máquinas. Você terá que gerenciar licenças, itens de segurança, atualizações e a manutenção de cada máquina. A alternativa da nuvem em vez de manter seus próprios softwares é conhecida como **Software como Serviço, ou SaaS.** Em vez de instalar um processador de texto em todas as máquinas, você pode usar o Microsoft Office 365 ou a suíte do Google G. Esses dois serviços que você pode adquirir permitem editar documentos do Word, fazer planilhas, montar apresentações e muito mais, tudo a partir do navegador de Internet.

Dependendo do produto, pode ser necessário um banco de dados para armazenar informações. Por fim, se estiver sendo veiculado conteúdo web, como um website, será necessário publicar o produto na Internet. Se você estiver montando toda essa estrutura, pode ser necessário configurar um banco de dados e um servidor web. O ambiente de desenvolvimento de programação também precisará ser instalado em todas as máquinas que precisarem dele. Se você quiser uma solução completa para criar e implantar um aplicativo web, você pode usar algo que chamamos de **Plataforma como Serviço, ou PaaS.** Ele oferece toda uma plataforma que permite criar códigos, armazenar informações em um banco de dados e servir seu aplicativo em uma única plataforma.

O último serviço de infraestrutura de TI de que falaremos é o **gerenciamento de usuários, acesso e autorização.** O serviço de diretório centraliza seus usuários e os computadores da organização em um local para que você possa adicionar, atualizar e remover usuários e computadores. Alguns serviços de diretório famosos que você pode usar são Windows Active Directory, OpenLDAP. Os serviços de diretório também podem ser implantados na nuvem usando provedores de **Diretório como Serviço, ou DaaS.**

Esta é uma visão geral dos serviços de infraestrutura de TI mais comuns que você vai encontrar nas tarefas de administração de sistemas. Embora os serviços em nuvem sejam uma ótima opção, é muito importante entender como o serviço funciona e como fazer a manutenção antes de contar com um serviço na nuvem. Embora os serviços na nuvem sejam amplamente usados na área e tenham muitas vantagens, também há desvantagens. Dentre elas estão os custos recorrentes e a necessidade de depender dos provedores. Vamos ensinar os detalhes técnicos e a implementação desses serviços comuns de infraestrutura de TI.

## Infraestrutura física

### Sistemas operacionais de servidor

Quando você vai configurar um servidor, basicamente instala-se um serviço ou aplicativo nesse servidor, como um serviço de armazenamento FAS. O servidor de rede prestará esses serviços às máquinas que solicitarem. Talvez você tenha pensado que instalaria serviços ou usaria um sistema operacional como o Windows 10. Embora seja uma opção, em geral, em uma organização, instalam-se os serviços em um sistema operacional para servidores.

Os sistemas operacionais para servidores são sistemas operacionais comuns que são otimizados para funcionar em servidores. Há funções como permitir mais conexões de rede e mais capacidade de RAM. A maioria dos sistemas operacionais possui versões específicas para servidores. No Windows, há o Windows Server. No Linux, muitas distribuições vêm com versões para servidores, como o Ubuntu Server, que é otimizado para uso em servidor. O Mac OS também está disponível na versão Mac OS Server. Os sistemas operacionais para servidores são geralmente mais seguros e vêm com serviços adicionais já embutidos. Assim, você não precisa configurar esses serviços separadamente.

**Quando você instala serviços em um servidor, você deve usar um sistema operacional só para servidores.**

### Virtualização

Existem duas maneiras de rodar os serviços: **em hardware dedicado ou em uma instância virtualizada de um servidor.**
Quando você virtualiza um servidor e coloca muitas instâncias virtuais em um servidor, cada instância contém um serviço. Há muitas vantagens e desvantagens de rodar os serviços em cada uma dessas plataformas.

- **Desempenho:** um serviço rodando em hardware dedicado terá um melhor desempenho do que um serviço rodando em um ambiente virtualizado. Isso porque há um serviço usando uma única máquina, em vez de muitos serviços usando uma máquina.
- **Custo:** o hardware para servidores pode custar muito caro. Se você colocar um serviço em um hardware dedicado e tiver que fazer o mesmo para mais nove serviços, o preço fica muito alto. Um dos grandes benefícios da virtualização do serviço é poder ter dez serviços em execução em dez instâncias virtuais diferentes, tudo isso em um único servidor físico.

_Em um servidor comum, se você tiver só um serviço, ele provavelmente toma apenas de 10 a 20% do processamento, o restante do hardware fica ocioso. Você pode adicionar muito mais serviços ao servidor físico e ainda ter um limiar bom para utilização de recursos. É mais barato executar vários serviços em uma máquina do que executar muitos serviços em várias máquinas._

- **Manutenção:** os servidores requerem manutenção de hardware e atualizações rotineiras do sistema operacional. Às vezes é preciso colocar os servidores off-line para fazer essa manutenção. Com o serviço virtualizado, você pode interromper o serviço e migrá-lo para outro servidor físico, tendo todo o tempo de que precisa para a manutenção. O serviço virtualizado torna a manutenção do servidor muito mais fácil.

- **Pontos fracos:** quando você coloca um serviço em uma máquina física e a máquina tem problemas, você adentra um campo minado. Com o serviço virtualizado, você pode facilmente tirar os serviços de uma máquina física e rodar o mesmo serviço em uma máquina diferente como backup. Você também pode fazer isso com um servidor físico, mas isso pode custar caro se você tiver múltiplos serviços.

- **Dica de profissional:** você pode evitar falhas em uma máquina física se você tiver servidores redundantes configurados, ou seja, servidores duplicados como backup.

### Revisão de acesso remoto

Como administrador de sistemas ou agente de suporte de TI, você deve conseguir acessar remotamente outro servidor ou máquina do usuário para poder solucionar problemas ou fazer manutenção de onde quer que você esteja.
No Linux, a ferramenta de acesso remoto mais comum é o **OpenSSH.**

Para usar o SSH em outra máquina, você precisa instalar um cliente SSH na máquina a partir da qual quer se conectar. Em seguida, instale um servidor SSH na máquina à qual você quer se conectar.

Ir até a máquina cliente e executar este comando: `sudo apt-get install openssh-client`
Em seguida, você precisa instalar o OpenSSH servidor na máquina que você deseja acessar.

Lembre-se: **o SSH servidor é só um processo que escuta as conexões de entrada SSH.**

Então, vamos ao servidor instalar OpenSSH servidor. `sudo apt-get install openssh-server`

Perfeito! Parece que o servidor está funcionando. Então vamos voltar ao cliente e fazer um teste.
`ssh hostname@ip`
Ele solicita a senha, o que é algo bom. Perfeito! Como dá para ver, estou conectado ao meu servidor. E uma boa forma de testar isso é entrar na área de trabalho do meu servidor e criar uma pasta.

Agora, se eu voltar para meu servidor, que está nesta janela, e listar os arquivos, dá para ver a pasta. Agora você consegue usar o SSH em uma máquina a partir de outra máquina. O Windows tem ferramentas semelhantes que você pode usar. Uma ferramenta comum para acessar a CLI remotamente é **WinRM ou Putty.** O RDP também é comum caso queira acessar a GUI remotamente.
