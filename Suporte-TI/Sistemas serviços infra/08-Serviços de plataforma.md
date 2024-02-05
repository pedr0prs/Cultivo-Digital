# Serviços de plataforma

## Revisão de serviços web

Os serviços de plataforma oferecem uma plataforma para desenvolvedores criarem e implantarem aplicativos de software por completo, sem ter que lidar com manutenção de SO, hardware de servidor, rede ou outros serviços necessários ao uso das ferramentas da plataforma. Um servidor web em que instalamos nossos aplicativos web ou o software de desenvolvimento que usamos para codificar os aplicativos são exemplos de serviços de plataforma.

Nos dias atuais, a maioria das empresas tem presença digital. Quer seja um site que promova seus negócios, ou até mesmo um site que seja o negócio. Empresas que têm serviços web armazenam seus serviços em um servidor web. Um servidor web armazena e apresenta conteúdo a clientes pela internet. Você pode acessar o serviço web usando um nome de domínio, como `google.com`.

Um servidor web armazena arquivos web e executa um serviço HTTP ou servidor HTTP que processa solicitações HTTP. Lembre-se de que **HTTP é como a web formata e transfere páginas web. Um servidor web é como um servidor físico armazena arquivos e o software do servidor HTTP.** Quando o seu navegador faz uma solicitação para buscar uma página web a partir de um URL, ele envia uma solicitação HTTP que é processada pelo servidor HTTP. Em seguida, o servidor HTTP envia uma resposta HTTP com o conteúdo solicitado.

Existem vários softwares de servidor HTTP por aí. Mas o mais usado é o servidor **HTTP Apache, mais conhecido como Apache. O Apache tem código aberto e é gratuito.** Ela ajuda a apresentar uma grande parcela das páginas web na Internet. Vamos ver como um servidor web apresenta conteúdo à web. Vou instalar o software de servidor Apache Web no Linux. Você não precisa entender os detalhes da configuração. Só quero que veja como é fácil executar um serviço web.

`sudo apt-get install Apache2 -y`

Agora que nossos serviços de servidor web estão em execução na máquina, podemos começar a hospedar conteúdo web. A máquina em que estamos hospedando o conteúdo é essa máquina aqui mesmo.

Lembre-se de que nosso computador possui um endereço IP associado 1.2.7.0.0.1 ou um nome de host do hostlocal. O próprio host local é reservado para esse finalidade. Portanto, não é possível obter o host local do nome de domínio. Bom, agora que sabemos a localização das máquinas, vamos colocar essa localização no navegador.

E é isso: o conteúdo do nosso servidor web local em execução na máquina. Os arquivos que vemos aqui vêm com a instalação padrão do Apache. Mas se quisermos transferir para esse servidor nosso próprio conteúdo web, basta irmos à pasta em que este arquivo está armazenado e trocá-lo pelo conteúdo web.

Lembre-se: **como esse conteúdo está hospedado em nossa máquina local, precisaremos usar o DNS para dizer ao mundo que nosso servidor web existe.**

Os administradores do sistema são responsáveis por criar o conteúdo exibido. Mas eles podem ser responsáveis por tornar o conteúdo disponível. Se você é especialista em suporte de TI e tem um serviço web para gerenciar, precisa ter uma boa noção de como isso funciona.

## O que é um servidor de banco de dados

Os bancos de dados permitem armazenar, consultar, filtrar e gerenciar grandes quantidades de dados. Quando se cria um produto web, os dados quase sempre ficam em um banco de dados. Os servidores de banco de dados contam com software especializado em execução com o qual você pode ler e gravar.

Sistemas de banco de dados comuns, como MySQL e PostgreSQL, são muito usados para desenvolvimento de aplicativos e web e análise de dados. Esses sistemas de banco de dados exigem conhecimento de linguagens especiais ou sintaxes para analisar e filtrar essa enormidade de dados. Administrar e gerenciar um banco de dados pode ser muito complexo.

Perder dados preciosos pode custar muito caro à empresa. Existe uma especialização profissional dentro da TI exclusiva para gerenciar bancos de dados: o administrador de banco de dados.

## Resolução de problemas em serviços de rede

### O site está fora do ar

Servidores web e servidores em geral são suscetíveis a falhas, como qualquer outra máquina. Resolver problemas em um servidor web envolve muitas variáveis. Não vamos discutir um cenário específico de resolução de problemas aqui, mas vamos mostrar algumas ferramentas simples de resolução de problemas para diagnosticar um servidor web ou navegador: **os códigos de status HTTP.**

Quando queremos ir a Google.com, o navegador envia uma solicitação HTTP ao servidor HTTP no servidor web. Em troca, recebemos uma resposta HTTP. Às vezes, essa resposta retorna o conteúdo que queremos. Quase sempre é retornada uma mensagem de status da resposta. Códigos de status HTTP são códigos ou números que indicam uma mensagem de informação ou do erro que ocorreu na tentativa de acesso a um recurso da web. Conhecer os códigos de status HTTP comuns vem a calhar quando se tem um erro de site para resolver. Eles geralmente dão informações úteis que podem ajudar a isolar a causa raiz. Este é um código de status HTTP comum que você já deve ter visto. O temido erro "404: página não encontrada", que indica que o URL inserido não aponta para nada.

Vamos ver o que acontece se digitarmos "google.com/asdf".
Recebo esta mensagem de erro. O URL "/asdf" solicitado não foi encontrado neste servidor. É exatamente o que eu esperava que acontecesse. Digitei um endereço sabendo que não existia e o site confirmou isso para mim. Mas como sabemos que esse é um erro de código 404? Dependendo do erro HTTP do site, mensagens podem ser exibidas direto na página ao tentar acessá-la. Mas, para ter certeza absoluta, basta você ir lá e ver a resposta HTTP. Fazer isso é um pouco trabalhoso. Hoje, os navegadores têm ferramentas integradas para diagnosticar problemas no navegador web ou no próprio site. Como estou usando o Chrome, vou usar uma Ferramenta do desenvolvedor do Chrome, então vamos lá.

Clico aqui para chegar às ferramentas. Em seguida, clico em Ferramentas do desenvolvedor. Isso abrirá as Ferramentas do desenvolvedor na lateral do meu navegador. As Ferramentas do desenvolvedor são um ótimo recurso para testa e depurar problemas com o site ou o navegador. Por agora, o importante é ver o código de resposta HTTP. Para fazer isso, vou acessar a aba "Network" e atualizar a página.

Se estou tentando acessar google.com/asdf, verei minha solicitação na área esquerda do painel. Se eu clicar nele, verei os códigos de status dizendo: "404 não encontrado". bastante bom, certo? Os códigos de status HTTP que começam com 4xx indicam um problema no lado do cliente. O cliente tenta fazer algo que ele não pode, como inserir um URL incorreto. Acesse algo que não estava autorizado a fazer, etc.

Os outros códigos de status HTTP comuns que você pode ver começam com 5xx. Esses erros indicam um problema no lado do servidor. O servidor da web que hospeda esse conteúdo da web está com problemas e esperançosamente, seus administradores do servidor estão investigando. Os códigos de status HTTP nos dizem mais do que apenas erros. Eles também podem nos dizer quando nossa solicitação foi bem-sucedida, o que é indicado pelos códigos que começam com 2xx.
Os códigos de status HTTP podem nos dizer muito sobre um problema com um site. Se você encontrar alguém com quem não está familiarizado, basta procurar. Eles provavelmente lhe dirão exatamente qual é o problema.

## Conceito da nuvem

Ao usar software como serviço, ou SaaS, o software já está pré-configurado e o usuário não se envolve profundamente na configuração da nuvem. Ao escolher uma solução de e-mail em nuvem, como o Gmail, uma de armazenamento em nuvem, como o Dropbox ou um pacote de produtividade em nuvem, como o Microsoft Office 365, são poucas as opções selecionáveis ou personalizáveis. O provedor de nuvem gerencia tudo relacionado ao serviço para você, incluindo: decidir se hospedará VMs, reservar capacidade suficiente para atender às suas necessidades, retornando com a mesma frequência e confiabilidade e mais.

Quando você usa Infraestrutura como Serviço ou IaaS, por outro lado, você está hospedando seus próprios serviços na nuvem. Precisa decidir como você quer que a infraestrutura seja exibida dependendo do que quer executar nela.
Por exemplo, você precisa decidir qual dos muitos tipos de máquinas disponíveis usará e que tipo de armazenamento eles precisarão.

**Dica profissional: comece com pequeno, depois selecione instâncias mais poderosas conforme necessário. Quando você configurar recursos da nuvem é necessário considerar as regiões.**

Uma região é uma localização geográfica que contém vários centros de dados. Cada um desses centros de dados é chamado "zona", e cada zona é independente das outras. Se um deles falhar por algum motivo, os outros ainda estarão disponíveis e os serviços poderão ser migrados sem afetar visivelmente os usuários.

Os grandes provedores de nuvem geralmente oferecem seus serviços em várias regiões diferentes em todo o mundo, e a região escolhida depende principalmente da localização dos usuários. Os menores provedores de nuvem podem oferecer menos regiões, mas podem ser os únicos fornecidos com a disponibilidade em sua cidade ou país. Não importa onde exatamente o centro de dados está localizado, mas os usuários podem obter mais latência se estiver mais longe deles.

Você também pode ouvir sobre nuvens públicas, privadas e híbridas.
A nuvem pública é o que chamamos de serviços em nuvem fornecidos por terceiros. O nome refere-se ao fato de que os provedores de nuvem oferecem serviços ao público.
Quando sua empresa possui os serviços e o restante de sua infraestrutura, no local ou em um centro de dados remoto, chamamos isso o nuvem privada.
E a nuvem híbrida é uma mistura de nuvem pública e privada. Algumas cargas de trabalho são executadas em servidores pertencentes à sua empresa, enquanto outras são executadas em servidores pertencentes a terceiros.
O truque para aproveitar ao máximo a nuvem híbrida é garantir que tudo seja integrado com sucesso, para que você pode acessar, migrar e gerenciar dados sem problemas, independentemente de onde esteja hospedado.

### Configurações comuns da infraestrutura de nuvem

Digamos que você tenha um servidor web oferecendo um site para clientes. Em uma configuração típica para esse tipo de serviço em nuvem, diversas máquinas virtuais apresentarão o mesmo site.

**Um balanceador de carga** faz com que cada VM receba um número equilibrado de consultas. Sempre que há uma solicitação pelo site, uma VM diferente será escolhida para enviar a resposta. Estes tipos de serviço geralmente são configurados para usar mais máquinas virtuais quando há muitas consultas. E para desativar algumas VMs quando o número de consultas diminui. Esse recurso é chamado de **escalonamento automático.** Ele permite que o serviço aumenta ou reduza sua capacidade quando precisar, e o proprietário do serviço só paga o custo das máquinas em uso no momento.

Como máquinas são desativadas quando a demanda é menor, os discos locais também desaparecem e devem ser considerados efêmeros ou de curta duração. Se você precisa manter dados, tem que criar recursos de armazenamento exclusivos para permanência de dados e conectá-los às VMs.

Geralmente, as VMs que operacionalizam sites ou serviços web estão conectadas a um banco de dados também em nuvem. Esse banco recebe dados de diversas máquinas por trás de um balanceador de carga. Mas o provedor de nuvem é quem gerencia esse processo, e o usuário não tem envolvimento. Para garantir que o serviço está sendo executado normalmente, você pode ativar alertas e monitoramento. Com isso, você pode detectar e corrigir problemas com o seu serviço antes de os usuários perceberem. A maioria dos provedores de nuvem têm soluções de alerta e monitoramento como parte dos serviços. Você pode configurar quando e como quer receber alertas se a infraestrutura de monitoramento detectar problemas de desempenho. Pode parecer difícil configurar recursos de nuvem, mas a maioria dos provedores torna esse processo fácil.

### Quando e como escolher a nuvem

A infraestrutura de nuvem não exige grande investimento inicial. Então, é o ideal se você não sabe por quanto tempo esse recurso será necessário. Se você está criando uma infraestrutura temporária ou tentando uma iniciativa que pode não durar, um serviço de nuvem deve ser a melhor opção. Optar pela infraestrutura de nuvem também faz sentido quando se tem demanda muito variável ao longo do ano. Se você administra um site que recebe muito tráfego em certa época, mas muito menos no restante do ano, não é uma boa ideia investir muito em uma infraestrutura que vai ficar ociosa na maior parte do tempo. Outro motivo para escolher a nuvem é a localização geográfica. Se os usuários, funcionários da empresa ou usuários externos dos serviços estão distribuídos pelo mundo, ter todo o serviço local não é o método mais eficaz. O ideal é usar um provedor que tenha data centers na localidade que você pretende atender ou perto.

Digamos que você tenha escolhido o modelo de nuvem para o seu caso, como escolher um dentre os muitos provedores de nuvem? Identifique suas necessidades específicas, compare os serviços oferecidos pelos diversos provedores e determine qual deles atende você melhor. A maioria dos provedores de nuvem oferece testes gratuitos, por isso, teste para saber se suas necessidades são atendidas e entender até que ponto a infraestrutura da sua empresa se integra aos provedores.

Enfim, nesta área, a tecnologia está evoluindo rapidamente, todo ano os provedores de nuvem oferecem mais serviços e soluções, por isso, não deixe se se atualizar sobre as novidades do setor antes de tomar uma decisão. É isso aí.
