# Tríade CIA

**CIA, confidencialidade, integridade e disponibilidade (availability).**

Estes três princípios básicos são o alicerce do que é amplamente conhecido como a tríade CIA, um modelo direcionador para a criação de políticas de segurança da informação. Estes três princípios ajudarão você a desenvolver políticas de segurança em seu local de trabalho e em seus ambientes pessoais.

**Confidencialidade significa manter as coisas ocultas.** Em TI, significa manter os dados ocultos e seguros contra olhares intrusivos. Um método particular de confidencialidade que você provavelmente usa todos os dias é a proteção por senha. Somente você, talvez seu cônjuge, deve saber a senha para obter acesso à sua conta bancária on-line. Para que a confidencialidade funcione, você precisa limitar o acesso aos seus dados. Somente quem precisa saber deve obter o acesso.

**Integridade significa manter os dados corretos e inalterados.** Os dados que enviamos ou recebemos devem permanecer os mesmos durante toda o caminho. Imagine que você esteja baixando um arquivo da Internet e que o site de onde você está baixando diga que o arquivo tem três megas. Aí, quando você faz o download, ele tem cerca de 30 megas. Trata-se de um sinal vermelho. Algo aconteceu durante o download, algo potencialmente inseguro. Um arquivo indesejado pode estar no seu disco rígido.

**Disponibilidade (availability), significa que as informações que temos estejam prontamente acessíveis para as pessoas quando elas precisem.** Isso pode significar muitas coisas, como estar preparado para a perda de dados ou falha do sistema. Os ataques de segurança são criados para furtar de você todo tipo de coisa, tempo, coisas materiais, sua dignidade. Alguns furtam o tempo que você precisará para fazer com que os serviços voltem a funcionar. Alguns ataques de segurança tomam seu sistema como refém até você pagar um resgate. Parece assustador, e é por isso que você está aqui para aprender a impedir que esses tipos de ataques aconteçam.

## Termos de segurança essenciais

O primeiro é **risco:** _possibilidade de sofrer uma perda em caso de ataque ao sistema._

O próximo termo é **vulnerabilidade:** _falha de sistema que pode ser explorada para comprometer o sistema._

Outro termo importante é **exploração:** _software usado para tirar proveito de um bug ou vulnerabilidade de segurança._

O próximo termo é **ameaça:** _possibilidade de perigo e exploração de uma vulnerabilidade._

A próxima é **hacker:** _o hacker no mundo da segurança é alguém que tenta invadir ou explorar um sistema._
Há os hackers de chapéu preto _blackhat_, que tentam entrar nos sistemas **para fazer algo prejudicial.** Há também os hackers de chapéu branco _whitehat_, que tentam encontrar pontos fracos nos sistemas e alertam os proprietários desses sistemas para que eles podem consertá-los antes que alguém faça algo prejudicial. Embora existam outros tipos de hackers, estes são os dois principais e os mais importantes para entendermos agora.

O último termo é **ataque:** _uma tentativa real de causar danos a um sistema._ É muito importante estar ciente das possíveis ameaças e vulnerabilidades do seu sistema para que você possa se preparar melhor contra elas.

### Software malicioso

O malware é um tipo de software prejudicial que pode ser usado para obter informações sensíveis ou excluir/modificar arquivos. Basicamente, ele pode ser usado para toda e qualquer finalidade indesejada. Os tipos mais comuns de malware são vírus, worms, adware, spyware, trojans, root kids, backdoors, botnets, é uma lista enorme.

**Os vírus são os tipos mais conhecidos de malware e funcionam da mesma maneira que um vírus em seu corpo.** Em um vírus de computador, o vírus se anexa a algum tipo de código executável, como um programa. Quando o programa está rodando, ele usa muitos arquivos, cada um dos quais fica suscetível a se infectar com o vírus. Então, o vírus se replica nesses arquivos, faz a tarefa maligna que tem que fazer e repete isso até se espalhar o máximo que puder.

**Os worms são parecidos com os vírus, mas em vez de se grudarem em algo para se espalharem, os worms podem viver por conta própria e se espalhar através de canais como a rede.** Um caso famoso de worm foi o ILOVEYOU, ou "bug do amor", que se espalhou em milhões de máquinas com Windows. O worm se espalhava por e-mail. Alguém enviava uma mensagem por e-mail com o assunto "I Love You" e um anexo, que era o worm disfarçado de arquivo de texto de uma carta de amor. O arquivo técnico era, na verdade, um executável que, quando era aberto, executava muitos ataques: fazia várias cópias de si mesmo para vários arquivos e pastas, iniciava softwares prejudiciais, substituía arquivos e, em seguida, ocultava-se depois dos malfeitos. O worm se espalhou furtando endereços de e-mail do computador das vítimas e de clientes de bate-papo. Depois, ele passou a enviar esse email para todos da lista de endereços. O vírus do amor se espalhou por todo o mundo e causou bilhões de dólares de prejuízo, nada romântico. Este é apenas uma das muitas razões  pelas quais você nunca deve abrir anexos de e-mails que você não reconhece.

**O adware é uma das formas mais visíveis de malware que você encontrará e a maioria de nós o vê todos os dias.** O adware é apenas um software que exibe anúncios e coleta dados. Às vezes, nós mesmos baixamos adware de forma consciente. Isso acontece quando você concorda com termos de serviço de softwares gratuitos em troca da exibição anúncios. Outras vezes, ele pode ser instalado sem seu consentimento e pode realizar outras ações prejudicias além de simplesmente exibir anúncios.

**O cavalo de troia (Trojan) é um malware que se disfarça como uma coisa, mas faz outra coisa,** assim como o cavalo de troia da história, que foi aceito na cidade pelos cidadãos de Troia. O cavalo de troia dos computadores tem que ser aceito pelo usuário, ou seja, o programa tem que ser executado pelo usuário. Ninguém instalaria um malware em sua máquina de propósito, por isso os Trojans tentam enganar e se disfarçam como outro software.

**O spyware é um tipo de malware que visa a espionar você, podendo monitorar suas telas , as teclas pressionadas, as webcams e, em seguida, envia ou relata todas essas informações para outra pessoa.**

**O keylogger é um tipo comum de spyware usado para registrar cada tecla que você aperta.** Ele consegue capturar todas as mensagens que você digita, suas informações confidenciais, suas senhas e muito mais.

**O ransomware é um tipo de ataque que sequestra seus dados ou mantém seu sistema como refém até que você pague algum tipo de resgate.** Esse ataque parece uma forma de diminuir a disponibilidade da segurança.

E se os invasores pudessem não só fazer coisas prejudiciais, como roubar dados, mas também pudesse furtar recursos dos nossos computadores, como a CPU? Bem, lamento dizer que isso realmente existe. Existe malware consegue utilizar a máquina de outra pessoa para executar uma tarefa que é controlada centralmente pelo invasor. Essas máquinas comprometidas são conhecidas como bots. Se houver um conjunto de um ou mais bots, chamamos essa rede de dispositivos de **botnet**. As botnets são projetadas para utilizar a capacidade das máquinas conectadas à Internet para executar alguma função distribuída.

**A backdoor é uma forma de entrar em um sistema se outros métodos não forem permitidos, é uma entrada secreta dos invasores.** As backdoors são mais instaladas depois que um invasor obtém acesso ao seu sistema e deseja manter esse acesso. Mesmo que você descubra que seu sistema esteja comprometido, você pode não perceber que existe uma backdoor em seu sistema. Se você perceber, deverá bloqueá-la antes que mais danos sejam causados.

Outra forma de malware que pode ser problemática é o rootkit. **O rootkit é um kit para o root (administrador), ou seja, um conjunto de softwares ou ferramentas que um administrador usaria.** Ele permite a modificação do nível de administração de um sistema operacional. O rootkit pode ser difícil de detectar porque ele pode se ocultar do sistema usando o próprio sistema. O rootkit pode estar executando muitos processos prejudiciais, mas, ao mesmo tempo, esses processos não são exibidos no gerenciador de tarefas porque ele consegue ocultar sua própria presença.

**A bomba lógica é um tipo de malware instalado de propósito. Depois que ocorre determinada hora ou evento, ela executa o programa prejudicial.** Há um caso famoso de bomba lógica que aconteceu em 2006, quando um administrador de sistema insatisfeito de um banco colocou uma bomba lógica e derrubou os serviços de uma empresa na tentativa de reduzir os preços das ações. O ex-funcionário foi pego e indiciado por fraude, sendo condenado a oito anos de prisão. A bomba não foi tão lógica assim.

## Ataque as redes

Um ataque de rede simples de conceituar, mas que pode causar muitos danos, é o ataque de **envenenamento de cache DNS.** O DNS funciona obtendo informações sobre endereços IP e nomes para facilitar a localização de um site. O ataque de envenenamento de cache DNS funciona enganando um servidor DNS para que ele aceite um registro DNS falso e aponte você para um servidor DNS comprometido. Em seguida, ele fornece endereços DNS falsos quando você tenta acessar sites verdadeiros, o envenenamento de cache DNS consegue se espalhar para outras redes também. Se outros servidores DNS estiverem obtendo informações de DNS de um servidor comprometido, eles oferecerão essas entradas falsas de DNS para outros hosts.

Há vários anos, houve um grande ataque de envenenamento de cache DNS no Brasil. Parece que os invasores conseguiram envenenar o cache DNS de alguns provedores locais inserindo registros DNS falsos para vários sites populares como Google, Gmail ou Hotmail. Quando alguém tentava visitar um desses sites, recebia um registro de DNS falso e era enviado para um servidor controlado pelo invasor, que hospedava um pequeno applet Java. O usuário era ludibriados e instalavam o applet, que na verdade era um Trojan bancário projetado para furtar dados de acesso a bancos. Este é um exemplo de danos reais que os ataques de envenenamento de cache DNS podem causar.

**O ataque "man-in-the-middle"** é um ataque que coloca o invasor no meio de dois hosts que acham que estão se comunicando diretamente um com o outro. O ataque monitora as informações entre esses hosts e consegue modificá-los no meio do caminho. Um ataque man-in-the-middle muito comum é o sequestro de sessão ou sequestro de cookies.

Outra maneira de fazer um ataque man-in-the-middle é com um _rogue access point_. O Rogue AP é um ponto de acesso não autorizado instalado na rede sem o conhecimento do administrador da rede. Às vezes, em ambientes corporativos, pode-se ligar um roteador na rede corporativa para se criar uma rede sem fio simples. Isso pode ser muito perigoso e pode dar acesso não autorizado a uma rede segura autorizada. Em vez do invasor conseguir acesso à rede conectando-se diretamente a uma porta de rede, ele podem estar do lado de fora do prédio e entrar pela rede sem fio.

Um último método man-in-the-middle de que falaremos é o chamado de gêmeo do mal. Ele parece com o Rogue AP, mas tem uma diferença pequena, mas importante: a premissa de um ataque gêmeo do mal é você se conectar a uma rede idêntica à sua. Esta rede idêntica é a a rede "gêmea do mal" e é controlada pelo nosso invasor. Depois que nos conectamos a ela, nosso tráfego poderá ser monitorado.

### Negação de serviço

**Um ataque de negação de serviço, ou DoS, é um ataque que tenta impedir o acesso a um serviço para usuários legítimos sobrecarregando a rede ou o servidor.** Os ataques DoS tentam utilizar os recursos de um serviço e impedir que os usuários reais o acessem.

**O ping da morte, ou POD, é um exemplo simples de ataque DoS.** Ele funciona enviando um ping adulterado para um computador. O ping é maior do que o protocolo da Internet consegue suportar e isso sobrecarrega o buffer. O sistema pode travar e até mesmo permitir a execução de códigos prejudiciais.

Outro exemplo é o **ping flood (inundação de ping)**, que envia muitos pacotes de ping para um sistema. Mais especificamente, ele envia solicitações de **eco ICMP**, já que o ping espera um número igual de respostas de eco ICMP. Se o computador não conseguir acompanhar, ele tende a ficar sobrecarregado e a travar.

Parecida com a inundação de ping, a inundação de **SYN também existe.** Lembre-se de que, para fazer uma conexão TCP, o cliente envia um pacote **SYN para o servidor ao qual ele deseja se conectar.** Em seguida, o servidor envia de volta uma mensagem **SYN-ACK**, então o cliente envia a mensagem **ACK**. Em uma inudanção SYN, o servidor é bombardeado com os pacotes **SYN.** O servidor envia de volta os pacotes SYN-ACK, mas o invasor não envia mensagens ACK. Isso significa que a conexão permanece aberta e utiliza os recursos do servidor. Outros usuários não conseguem se conectar ao servidor, o que é um grande problema. Como a conexão TCP fica meio aberta, também chamamos as inundações SYN de ataques semiabertos.

Os ataques DoS que aprendemos até agora só usam uma única máquina para fazer o ataque. Mas e se os invasores pudessem utilizar várias máquinas? Em um cenário muito mais assustador, eles conseguem derrubar serviços em maiores volumes e em maiores velocidades. O que mais assusta é que os invasores conseguem fazer isso.

Um ataque DoS que usa vários sistemas é chamado de **ataque de negação de serviço distribuído, ou DDoS.** Os ataques DDoS precisam de um grande volume de sistemas para fazer um ataque e geralmente contam com a ajuda de botnets. Nessa situação, eles têm acesso a grandes volumes de máquinas para realizar um ataque.

Em outubro de 2016, um ataque DDoS ocorreu em um provedor de serviços de DNS. A Dyn foi alvo de um DDoS. Solicitações falsas de pesquisas de DNS juntamente com inundações SYN feitas por botnets sobrecarregaram o sistema da empresa. A Dyn gerenciava DNS de vários sites grandes, como Reddit, GitHub, Twitter, etc. Então, quando o ataque ocorreu, os clientes também foram prejudicados e esses serviços ficaram inacessíveis.

#### Ataques do lado do cliente

Um exploit de segurança comum no desenvolvimento de software e que cresce cada vez mais na web é a possibilidade de um invasor injetar um código prejudicial. Chamamos esse tipos de ataques de **ataques de injeção.**

Os ataques de injeção podem ser mitigados com bons princípios de desenvolvimento de software, como validação de dados de entrada e saneamento de dados.

Os ataques de **scripts de sites cruzados, ou XSS**, são um tipo de ataque de injeção onde o invasor consegue inserir códigos prejudiciais e colocar como alvo o usuário do serviço. Os ataques XSS são um método comum de fazer um sequestro de sessão. Basta incorporar um script prejudicial em um site e usuário executar o script sem saber no navegador. O script pode fazer coisas prejudiciais, como furtar cookies de uma vítima e ter acesso ao login em um site.

Outro tipo de ataque de injeção é o ataque de SQL. Diferentemente do XSS, que coloca um usuário como alvo, o ataque de injeção SQL coloca como alvo todo o site se este estiver usando um banco de dados SQL. Os invasores podem executar comandos SQL que permitem a exclusão de dados do site, a cópia desses dados e a execução de outros comandos prejudiciais.

##### Ataques de autenticação

As senhas são as proteções mais seguras e usadas para evitar acesso não autorizado à sua conta. Um ataque comum que ocorre para obter acesso a uma conta é um ataque de senha. Os ataques de senha utilizam softwares, como crackers de senhas, que tentam adivinhar sua senha.

Um ataque de senha comum é o de força bruta, que simplesmente experimenta continuamente diferentes combinações de caracteres até obter o acesso. Como esse ataque exige testes de muitas combinações de senhas, geralmente demora um pouco.

Você já viu um CAPTCHA ao entrar em um site? Os CAPTCHAs são usados para distinguir um ser humano real de uma máquina. Eles perguntam coisas como: você é humano,  é um robô ou é um dançarino? Em um ataque de senha, se você não tiver um CAPTCHA disponível, um sistema automatizado pode continuar tentando fazer login na sua conta até encontrar a combinação certa da senha. Mas com um CAPTCHA, esses ataques não conseguem ser executados.

O ataque de dicionário não testa combinações de força bruta como "abc1" ou "ABC1". Em vez disso, ele experimenta palavras que são comumente usadas em senhas, como senha, macaco, futebol.

A melhor maneira de evitar um ataque de senha é utilizar senhas fortes. Não inclua palavras reais que você encontraria em um dicionário e sempre use mistura de maiúsculas, minúsculas e símbolos.

###### Ataques fraudulentos

**A engenharia social é um método de ataque que se utiliza de interações com seres humanos em vez de computadores.** Dá para fortalecer suas proteções ao máximo.

Assim como nos maiores filmes de ficção científica, os humanos serão sempre o lado mais fraco e, no seu sistema de segurança, a engenharia social é um tipo de jogo em que os invasores usam técnicas de disfarce para obter acesso a informações pessoais. Eles tentam fazer com que um usuário execute algo e basicamente enganam a vítima para que ela faça tal coisa.

**O phishing ocorre quando um e-mail prejudicial é enviado para a vítima disfarçado de algo verdadeiro.** Um ataque de phishing comum é um e-mail dizendo que sua conta bancária foi violada. Depois, coloca-se um link para redefinir sua senha. Quando você vai para o link, parece o site do seu banco, mas é um site falso. Então, você é enganado e digita sua senha atual e suas credenciais para redefinir sua senha atual.

Outra variação de phishing é o **spear phishing**. Os dois esquemas de phishing têm os mesmos objetivos, mas o spear phishing busca especificamente indivíduos ou grupos. Os e-mails falsos podem conter algumas informações pessoais, como seu nome ou os nomes de amigos ou familiares. Assim, eles parecem mais confiáveis.

Outro ataque comum de engenharia social é o **spoofing de e-mail. Spoofing é quando uma fonte está disfarçada de algo diferente.** Pense em uma falsificação de e-mail. É o que acontece quando você recebe um e-mail com um endereço de remetente suspeito. Dá para você enviar um e-mail e parecer que ele tenha vindo de qualquer lugar, existente ou não.

Nem toda engenharia social ocorre digitalmente. De fato, um tipo de ataque acontece com contato físico. Chama-se **baiting**, que é usado para levar uma vítima a fazer algo. Por exemplo, um invasor pode deixar um pen-drive em algum lugar na esperança de que alguém vá ligá-lo em sua máquina para ver o que está nele, mas a pessoa vai acabar instalando um malware na máquina sem saber.

Outro ataque comum que pode ocorrer off-line é o chamado de **tailgating, que consiste basicamente em obter acesso a uma área ou edifício restritos seguindo um funcionário de verdade.** Na maioria dos ambientes corporativos, o acesso aos edifícios é restrito pelo uso de um cartão-chave ou outro método de entrada, mas o invasor pode usar táticas de engenharia social para levar um funcionário a pensar que ele está lá por uma razão legítima, como fazer a manutenção do prédio ou entregar encomendas.
