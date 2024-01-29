# Solução de problemas e o futuro das redes

Redes de computadores podem ser algo extremamente complicado. São muitas camadas, protocolos e dispositivos envolvidos. E às vezes isso faz com que as coisas não funcionem como deveriam. Não é nenhuma surpresa. Muitos dos protocolos e dispositivos que abordamos têm funções integradas para ajudar a evitar alguns desses problemas. Essas funções são conhecidas como **detecção e recuperação de erros.**

A detecção de erros é a capacidade de um protocolo ou programa determinar que algo deu errado. A recuperação de erros é a capacidade de um protocolo ou programa aplicar uma correção. Mas, mesmo com todas essas proteções, os erros ainda aparecem. Erros de configuração, falhas de hardware e incompatibilidades de sistema são alguns deles.

## Ping: protocolo de mensagens de controle de internet

Quando uma rede começa a ter problemas, a dificuldade mais comum é a impossibilidade de estabelecer conexão com algo. Pode ser um servidor que você não consegue acessar ou um site que não é sendo carregado. Talvez você só acesse seus ativos na sua LAN e não consiga se conectar a nada na internet. Seja qual for o problema, ser capaz de diagnosticar erros de conectividade é uma parte importante da resolução de problemas de rede.

Quando um erro de rede ocorre, o dispositivo que o detecta precisa informar à origem do tráfego problemático. Talvez um roteador não esteja conseguindo rotear para um destino ou uma determinada porta esteja inacessível. Pode até ser que o TTL de um datagrama IP tenha expirado e não haverá mais saltos a tentar.

O ICMP é usado mais por roteadores ou hosts remotos para se comunicar com a origem da transmissão quando a transmissão falha. A composição de um pacote ICMP é bem simples. Ele tem um cabeçalho com alguns campos e uma seção de dados usada pelo host para descobrir quais das transmissões geraram o erro.

Essa ferramenta se chama `ping.` Quase todos os sistemas operacionais tem alguma versão dela e há muito tempo. O ping é um programa supersimples e sua base é a mesma, seja qual for o sistema operacional. Com o ping, você consegue enviar um tipo especial de mensagem **ICMP** chamado _solicitação de eco_. Uma solicitação de eco ICMP é apenas perguntar ao destino: "_Está por aí?_" Se o destino estiver funcionando e puder se comunicar na rede, retornará um tipo de mensagem de resposta de eco ICMP. Você pode acionar o comando ping pela linha de comando em qualquer sistema operacional moderno. Em seu uso mais básico, basta digitar ping e um IP de destino ou um nome de domínio completo.

O resultado do comando ping é muito similar em todos os diferentes sistemas operacionais. Cada linha do resultado geralmente exibe o endereço que enviou a resposta de eco ICMP e quanto tempo a comunicação de ida e volta levou. Ele também mostra o TTL restante e o tamanho da mensagem ICMP em bytes. Quando o comando termina, algumas estatísticas são exibidas, como o percentual de pacotes transmitidos e recebidos, o tempo médio de ida e volta, e algumas outras informações.

_No Linux e no Mac OS, o comando ping é executado até um usuário final enviar um evento de interrupção. Para fazer isso, basta pressionar as teclas "Ctrl" e "C" ao mesmo tempo. No Windows, o ping tem como padrão enviar apenas quatro solicitações de eco. Em todos os ambientes, o ping suporta vários sinalizadores de linha de comando que permitem alterar coisas como o número de solicitações de eco a enviar, o tamanho delas, e a rapidez no envio._

## Traceroute

O `Traceroute` é um utilitário incrível que permite descobrir os caminhos entre dois nós e fornece informações sobre cada salto no caminho. O funcionamento do traceroute se dá por uma técnica de manipulação inteligente do campo TTL no nível do IP.

O traceroute usa o campo TTL definindo-o como 1 para o primeiro pacote, depois como 2 para o segundo, 3 para o terceiro e assim por diante. Ao executar essa pequena ação inteligente, o traceroute garante que o primeiro pacote enviado será descartado pelo primeiro salto de roteador. Isso gera uma mensagem de tempo excedido ICMP. O segundo pacote chegará ao segundo roteador, o terceiro, até ao terceiro roteador, e assim por diante. Isso continua até que o pacote finalmente chegar ao seu destino. Para cada salto, o traceroute envia três pacotes idênticos. Assim como com o ping, a saída de um comando "traceroute" é bem simples.

_Em cada linha, você verá o número do salto e o tempo de ida e volta de todos os três pacotes. Você também verá o IP do dispositivo em cada salto, e um nome de host, se o traceroute conseguir decifrar um. No Linux e no Mac OS, o traceroute envia pacotes UDP para portas de número muito alto. No Windows, o comando tem um nome abreviado, tracert, e usa solicitações de eco ICMP por padrão. Em todas as plataformas, o traceroute tem mais opções a especificar com sinalizações de linha de comando. Duas outras ferramentas semelhantes ao traceroute são o "mtr" no Linux e no MacOS e o `pathping` no Windows._

## Teste de conectividade de portas

O `Netcat` no Linux e Mac OS e o `Test-NetConnection` no Windows.

O Netcat pode ser executado pelo comando `nc` e tem dois argumentos obrigatórios: _um host e uma porta._

`nc google.com:80` criaria uma tentativa de estabelecer conexão na porta 80 com google.com. Se a conexão falhar, o comando será fechado. Se der certo, você verá o cursor piscando, esperando mais dados. Essa é uma maneira de enviar dados da camada de aplicação ao serviço de escuta do seu próprio teclado.

_Se você só tem curiosidade pelo status de um relatório, basta enviar o comando com uma sinalização -Z, que significa modo de entrada/saída zero. Uma sinalização -V, que significa "detalhado", também funciona neste cenário. Isso torna a saída do comando útil para olhos humanos, diferentemente da saída não detalhada, que é melhor para scripts._

Netcat com as sinalizações -Z e -V, a saída do comando simplesmente diz se é possível se conectar à porta em questão ou não.
No Windows, o Test-NetConnection é um comando com algumas funções semelhantes. Se você executar Test-NetConnection com só um host especificado, ele terá como padrão uma solicitação de eco ICMP, muito parecido com o "ping". Mas mostra muito mais dados, incluindo o protocolo da camada de enlace de dados usado.

## Ferramentas de resolução de nomes

A ferramenta mais comum é conhecida como `nslookup.` E está disponível em todos os três sistemas operacionais de que falamos aqui: Linux, Mac e Windows. Um uso comum do nslookup é bem simples. Você executa o comando `nslookup` seguido do _nome do host_. E o resultado mostra qual servidor foi utilizado para fazer a solicitação e o resultado da resolução.

`nslookup twitter.com` e o registro A seria retornado.

O nslookup é muito mais do que apenas isso. Ele conta com um modo interativo que permite definir outras opções e executar muitas consultas em uma linha. Para iniciar uma sessão interativa do nslookup, basta digitar `nslookup`.
Você verá uma um sinal de positivo (>) agindo como o sinal. No modo interativo, você pode fazer muitas solicitações em sequência. Também pode executar alguns ajustes extras para aprofundar sua detecção e solução de problemas. Ainda no modo interativo, se você digitar o servidor seguido de um endereço, tentará fazer todas as consultas de resolução de nome a seguir usando esse servidor no lugar do servidor de nomes padrão.

Você também pode digitar `set type =` seguido de um tipo de registro de recurso. Por padrão, o nslookup retornará os registros A. Mas com isso, você consegue solicitar explicitamente AAAA ou MX ou até registros de texto associados à máquina.

Se você quer ver exatamente o que acontece, é só digitar `set debug`. Isso fará a ferramenta exibir os pacotes de resposta completos, incluindo solicitações intermediárias e seu conteúdo.

**Atenção: são muitos dados que podem conter detalhes como o TTL restante, se for uma resposta em cache, até o o número de série do arquivo de zona em que a solicitação foi feita.**

## Servidores DNS Públicos

Ver o DNS funcionando é uma parte importante de uma boa rede. Os provedores de internet quase sempre dão acesso a um servidor de nomes recursivo como parte do serviço prestado.

O uso desses servidores DNS públicos é uma técnica bem bacana para solucionar diversos problemas de resolução de nome com que você possa se deparar. Algumas pessoas usam esses servidores de nome para todas as necessidades de resolução.

Por muito tempo, os servidores DNS públicos foram como um conhecimento tribal, passado de um sysadmin para outro. Na antiga lei dos sysadmins, diziam que, por muitos anos, os servidores DNS públicos mais usados eram os gerenciados pelas comunicações da Level 3. Um dos maiores provedores do mundo. A Level 3 é, na verdade, enorme. O negócio deles é basicamente vender conectividade à rede deles a outros provedores que lidam direto com os consumidores, não com os usuários finais.

Os endereços IP dos servidores DNS públicos da Level 3 variam de 4.2.2.1 a 4.2.2.6. Esses IPs são fáceis de lembrar, mas sempre foram cercados de mistério. Apesar de estarem disponíveis para o público em geral, há quase 20 anos, não são um serviço que a Level 3 oficialmente reconheceu ou anunciou.

Por quê? Talvez a gente nunca saiba. É um dos grandes mistérios da nossa antiga lei dos sysadmins. De qualquer forma, outras opções fáceis de lembrar são os IPs do DNS público do Google. O Google opera servidores de nome públicos nos IPs 8.8.8.8 e 8.8.4.4. Ao contrário dos IPs da Level 3, esses são oficialmente reconhecidos e documentados pelo Google e disponíveis para todos.

A maioria dos servidores DNS públicos é disponibilizado por meio de anycast. Muitas outras organizações oferecem servidores DNS públicos, mas poucos são tão fáceis de lembrar quanto esses dois. Sempre pesquise antes de configurar seus dispositivos para usar esse tipo de servidor de nomes. O sequestro de solicitações de DNS externas com respostas de falha é um jeito fácil de redirecionar usuários para sites maliciosos. Sempre veja se o servidor de nomes é gerenciado por uma empresa de renome e procure usar os servidores de nomes oferecidos pelo seu provedor fora do ambiente de resolução de problemas. A maioria dos servidores DNS públicos também responde a solicitações de eco ICMP, por isso são ótimos para testar a conectividade geral com a Internet usando o ping.

### Registro e expiração de DNS

DNS é um sistema global gerenciado em uma hierarquia de camadas com a ICANN no nível superior. Os nomes de domínio precisam ser globalmente exclusivos para o sistema global funcionar. Você não pode simplesmente ter alguém para decidir usar um nome de domínio. Seria o caos. É aí que entra a ideia do registrador, uma organização responsável por atribuir nomes de domínio a outras organizações ou pessoas.

Originalmente, havia apenas alguns registradores. O mais conhecido era uma empresa chamada Network Solutions Inc. Ela foi responsável pelo registro de quase todos os domínios que não eram específicos dos países. Com o crescimento da popularidade da internet, acabou que surgiu muita demanda e concorrência nesse espaço. Em um dado momento, o governo dos Estados Unidos e a Network Solutions Inc. firmaram um acordo para permitir que outras empresas também vendessem nomes de domínio. Hoje, são centenas de empresas desse tipo no mundo.

Registrar um nome de domínio é bem simples. Basicamente, você cria uma conta no registrador, usa a IU web deles para procurar um nome de domínio e ver se ele ainda está disponível, depois você concorda com o preço e com a duração do registro. Depois de ter seu próprio nome de domínio, você pode fazer os servidores de nome do registrador agirem como os servidores de nome autoritativos para o domínio ou você pode configurar próprios servidores para darem autorização.

Os nomes de domínio também podem ser transferidos de uma parte a outra e de um registrador a outro. Isso geralmente funciona assim: o registrador destinatário gera uma sequência única de caracteres para provar que você detém o domínio e que tem permissão para transferi-lo a alguém. Você insere a sequência em um registro específico das configurações de DNS, normalmente um registro TXT. Quando essa informação for propagada, pode-se confirmar que você detém o domínio e que aprova a transferência. Depois disso, a propriedade passa para o novo proprietário ou registrador.

Uma parte importante do registro de nome de domínio é que esses registros têm uma duração específica. Normalmente, paga-se para registrar nomes de domínio por alguns anos. É importante ficar de olho no período de expiração dos nomes de domínio porque, depois de expirados, ficam disponíveis para qualquer pessoa que quiser registrá-los.

#### Arquivo de Host

Muito antes de o DNS ser uma tecnologia consolidada e disponível no mundo todo, ficou claro para os operadores de computador que eles precisavam de um sistema baseado em linguagem para se referir a dispositivos de rede.

Originalmente, os endereços de rede numerados eram correlacionados às palavras por meio de arquivos hosts. Um arquivo host é um arquivo simples que contém um endereço de rede em cada linha, seguido do nome do host que pode ser atribuído a ele.

Por exemplo, Uma linha de um arquivo host pode ser: 1.2.3.4 webserver. Isso significa que, no computador em que esse arquivo host está, o usuário pode usar "webserver", em vez de o IP 1.2.3.4.

Os arquivos hosts são avaliados pela pilha de rede do próprio sistema operacional. Isso significa que a presença de uma dado ali se converteria em qualquer lugar que você chamasse de endereço de rede. Continuando com o nosso exemplo de antes, o usuário pode digitar "webserver" na barra de URL de um navegador web, ou enviar o comando "pin web server". De ambas as formas, teríamos 1.2.3.4 como resultado da conversão.

Os arquivos hosts podem ser uma tecnologia antiga, mas estão por aqui todo esse tempo. Todos os sistemas operacionais modernos, incluindo os dos celulares e tablets, ainda usam arquivos hosts. Um dos motivos é um endereço IP especial que ainda não abordamos aqui: o endereço de loopback. Um endereço de loopback sempre aponta para si mesmo.

Portanto, um endereço de **loopback** é uma forma de enviar tráfego da rede para si mesmo. Enviar tráfego para um endereço de loopback é desviar de toda a infraestrutura de rede, fazendo o tráfego nunca sair do nó.

**O IP de loopback do IPv4 é 127.0.0.1. E, até hoje, ele é configurado em todos os sistemas operacionais modernos com uma entrada em um arquivo host.**

Quase todos os arquivos hosts existentes terão pelo menos uma linha `127.0.0.1 localhost`, provavelmente seguida de ":: 1 localhost", em que "::1" é o endereço de **loopback do IPV6.** Como o DNS está em todo lugar, os arquivos host não são muito usados mais. Mas ainda existem e é importante conhecê-los.
