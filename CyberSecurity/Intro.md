# Cybersecurity Essentials: Segurança de endpoint (ESec)

Esse curso foi disponibilizado pela cisco e fornece o conhecimento e as habilidades fundamentais que, como técnico de segurança cibernética, usarei todos os dias no trabalho e você está convidado em fazer parte disso.

Essa leitura vai te oferecer:

- Explicar como os agentes de ameaças executam alguns dos tipos mais comuns de ataques cibernéticos.
- Explicar os princípios de segurança de rede.
- Explicar como as vulnerabilidades de TCP/IP possibilitam ataques de rede.
- Use comandos para verificar a vulnerabilidade de aplicativos e serviços de rede.
- Solucionar problemas em uma rede sem fio.
- Explicar como os dispositivos e serviços são usados para melhorar a segurança de rede.
- Explicar os recursos de segurança do sistema operacional Windows.
- Implementar a segurança básica do Linux.
- Avalie a proteção do endpoint e os impactos do malware.
- Use as melhores práticas de segurança digital para proteger arquivos.

---
[Packet Tracer (Programa oferecido pela cisco)](https://skillsforall.com/resources/lab-downloads)

Packet Tracer é uma ferramenta que permite simular redes reais. Ele fornece três menus principais:

- Você pode adicionar dispositivos e conectá-los através de cabos ou sem fio.
- Você pode selecionar, excluir, inspecionar, rotular e agrupar componentes dentro da rede.
- Você pode gerenciar sua rede abrindo uma rede existente/amostra, salvando sua rede atual e modificando seu perfil de usuário ou preferências.

---

## Modulo 1: Ameaças, vulnerabilidades e ataques à segurança cibernética

| **Tópico**      | **Objetivo**           |
|---------------- | ---------------------- |
| Ameaça comuns   | Explicar as ameaças    |
| Disfarce        | Identificar os métodos |
| Ataques         | Descrever os ataques   |
| "" Móveis       | ""  "" Móveis          |
| Ataques a app   | "" "" aplicações       |

### O que aprendi neste módulo

- **Domínios de ameaça:** Um domínio de ameaça é uma área de controle, autoridade ou proteção que os invasores podem explorar para obter acesso a um sistema. As categorias de ameaças digitais incluem ataques e erros de software, sabotagem, erro humano, roubo, falhas de hardware, interrupção de serviços públicos e desastres naturais. As ameaças internas são geralmente realizadas por funcionários atuais ou antigos e por outros parceiros de contrato. A fonte de uma ameaça externa geralmente vem de invasores amadores ou qualificados que podem explorar vulnerabilidades em dispositivos de rede ou usar técnicas de engenharia social. Um domínio de usuário inclui qualquer pessoa com acesso ao sistema de informações de uma organização. As ameaças comuns aos usuários incluem políticas de segurança mal aplicadas, roubo de dados, mídia e downloads não autorizados, VPNs e sites não autorizados e destruição de sistemas, aplicativos ou dados. Dispositivos individuais, LANs e nuvens públicas e privadas também são vulneráveis a ataques. Há ameaças complexas, como um APT e um ataque de algoritmo. Os criminosos digitais usam programas de backdoor para obter acesso não autorizado a um sistema ignorando os procedimentos normais de autenticação. Backdoors concedem aos cibercriminosos acesso contínuo a um sistema, mesmo que a organização tenha corrigido a vulnerabilidade original usada para atacar o sistema. A maioria dos rootkits explora vulnerabilidades de software para obter acesso a recursos e modificar arquivos do sistema. Os Rootkits também podem modificar as ferramentas forenses e de monitoramento do sistema, tornando-os muito difíceis de detectar.

Uma teia escura é um conteúdo da Web criptografado que não é indexado por mecanismos de pesquisa convencionais e requer software, autorização ou configurações específicas para acessar. IOCs, como assinaturas de malware ou nomes de domínio, fornecem evidências de violações de segurança. O AIS permite a troca em tempo real de indicadores de ameaças de segurança digital usando linguagens padronizadas e estruturadas chamadas STIX e TAXII.

- **Disfarce:** A engenharia social é uma estratégia não técnica que tenta manipular indivíduos para realizar determinadas ações ou divulgar informações confidenciais. Pretexting é quando um indivíduo mente para obter acesso a dados privilegiados. Os ataques de contrapartida são uma solicitação de informações pessoais em troca de algo. Fraude de identidade é usar a identidade roubada de uma pessoa para obter bens ou serviços por meio de engano.

As táticas de engenharia social incluem se passar por uma figura de autoridade, intimidação, consenso ("todo mundo está fazendo isso"), fingir que algo é escasso ou que uma situação é urgente, criando familiaridade e confiança com um funcionário para, eventualmente, aproveitá-la no acesso. A ressaca é olhar sobre a ressaca do alvo para obter informações valiosas, como PINs, códigos de acesso ou detalhes de cartão de crédito. Os criminosos nem sempre precisam estar perto de suas vítimas para escapar da onda, eles podem usar binóculos ou câmeras de segurança para obter essas informações. O mergulho no lixo está passando pelo lixo de um alvo para ver quais informações foram jogadas fora. Piggybacking ou tailgating é quando um criminoso segue uma pessoa autorizada para obter entrada física em um local seguro ou em uma área restrita. Outros métodos de engano incluem fraudes de faturas, ataques de watering hole, typosquatting, prepending e campanhas de influência.

As organizações precisam promover a conscientização sobre as táticas de engenharia social e educar adequadamente os funcionários sobre as medidas de prevenção.

- **Ataques Cibernéticos:** Malware é qualquer código que pode ser usado para roubar dados, contornar controles de acesso, causar danos ou comprometer um sistema. Um vírus é um tipo de programa de computador que, quando executado, se replica e se anexa a outros arquivos inserindo seu próprio código nele. Um worm é um programa de software malicioso que se replica explorando independentemente vulnerabilidades nas redes. Um Trojan (Cavalo de Tróia) é um malware que realiza operações maliciosas mascarando sua verdadeira intenção. Uma bomba lógica é um programa malicioso que espera por um gatilho para detonar o código malicioso. Ransomware é projetado para manter um sistema de computador ou os dados que ele contém cativos até que um pagamento seja feito. Os ataques de DoS funcionam criando uma quantidade enorme de tráfego ou enviando pacotes mal-intencionados que não podem ser identificados por um aplicativo, fazendo com que o dispositivo receptor funcione lentamente ou trava. Os ataques DDoS são semelhantes, mas se originam de várias fontes coordenadas. Os ataques de DNS incluem spoofing e sequestro.

Os ataques de camada 2 incluem endereço MAC, spoofing de IP e ARP, inundação de MAC, homem no celular e homem no meio. Os ataques de dia zero exploram vulnerabilidades de software antes que elas se tornem conhecidas. O registro de teclado (keylogging) registra pressionamentos de teclas e configura o software keylogger para enviar o arquivo de log para o criminoso. Esse arquivo de log pode revelar nomes de usuário, senhas, sites visitados etc.

Para se defender contra esses ataques, use firewalls, mantenha-se atualizado sobre atualizações e correções, distribua a carga de trabalho entre sistemas de servidor e bloqueie pacotes ICMP externos com firewalls.

- **Ataques a dispositivos móveis e sem fio:** Grayware é um aplicativo indesejado que se comporta de maneira irritante ou indesejável. SMiShing são mensagens de texto falsas que solicitam que você acesse um site mal-intencionado ou ligue para um número de telefone fraudulento, o que pode resultar no download de malware no dispositivo. Um ponto de acesso não autorizado é um ponto de acesso sem fio instalado em uma rede segura sem autorização. Um ataque de gêmeos do mal é onde o access point do invasor é configurado para parecer uma opção de conexão melhor. O congestionamento de radiofrequência está congestionando deliberadamente a transmissão de uma estação de rádio ou satélite para impedir que um sinal sem fio chegue à estação receptora.

Bluejacking envia mensagens não autorizadas ou imagens chocantes para outro dispositivo Bluetooth. Bluesnarfing é quando um invasor copia informações do dispositivo de um alvo usando Bluetooth. WEP e WPA são protocolos de segurança projetados para proteger redes sem fio. O WPA2 é um protocolo de segurança aprimorado. Ao contrário do WEP, um invasor não pode recuperar a chave de criptografia do WPA2 observando o tráfego de rede.

Para se defender contra ataques a dispositivos móveis e sem fio: altere as configurações padrão. Restrinja o posicionamento do access point colocando esses dispositivos fora do firewall ou em uma DMZ. Use ferramentas de WLAN para detectar access points não autorizados ou estações de trabalho não autorizadas. Tenha uma política para acesso de convidado a uma rede Wi-Fi. Os funcionários devem usar uma VPN de acesso remoto para acesso à WLAN.

- **Aplicativo e outros ataques:** XSS é uma vulnerabilidade encontrada em muitos aplicativos da web. Os tipos de ataques de injeção de código incluem XML, SQL, DLL e LDAP. Um estouro de buffer ocorre quando os dados são gravados além dos limites de um buffer. A execução remota de código está explorando as vulnerabilidades do aplicativo para executar qualquer comando com os privilégios do usuário autorizado. Outros ataques a aplicativos incluem CSRF, condição de corrida, tratamento de entrada incorreto, tratamento de erro, API, reprodução, passagem de diretório e esgotamento de recursos.

Escreva um código sólido para se defender contra ataques a aplicativos. Trate e valide toda a entrada de fora de uma função como se fosse hostil. Mantenha todos os softwares atualizados. Spam é um e-mail não solicitado que geralmente é um método de publicidade. Alguns spam são enviados em massa por computadores infectados por vírus ou worms. Phishing é quando um usuário é contatado por e-mail ou mensagem instantânea por um agente de ameaças que se disfarça de pessoa legítima. O spear phishing envia e-mails personalizados para uma pessoa específica com base nas informações que o invasor conhece sobre elas. Outros golpes comuns incluem vishing, farmácia e caça às baleias. Outros tipos de ataques incluem ataques físicos a equipamentos, ataques adversários de inteligência artificial, ataques à cadeia de fornecimento e ataques na nuvem.

Use um software antivírus para se defender contra ataques de e-mail e navegadores. Nunca assuma que os anexos de e-mail são seguros. Sempre verifique os anexos antes de abri-los. Torne-se um membro do Grupo de Trabalho Anti-Phishing (APWG). Todos os softwares devem ser mantidos atualizados.

#### Módulo 2: Protegendo redes

| Tópico              | Objetivo                              |
|---------------------|---------------------------------------|
| Situação Atual      | Explicar ameaças                      |
| Quem está atacando? | Explicar como ameças à rede evoluíram |
---

##### O que aprendi nesse módulo

- **Situação Atual:** A segurança da rede está diretamente relacionada à continuidade dos negócios de uma organização. As violações de segurança de rede podem interromper o comércio eletrônico, causar a perda de dados comerciais, ameaçar a privacidade das pessoas e comprometer a integridade das informações. Essas violações podem resultar em perda de receita para empresas, roubo de propriedade intelectual, ações judiciais e até ameaçar a segurança pública. Muitas ferramentas estão disponíveis para ajudar os administradores de rede a adaptar, desenvolver e implementar técnicas de mitigação de ameaças, incluindo o Cisco Talos Intelligence Group. Um vetor de ataque é um caminho pelo qual um atacante poder obter acesso a um servidor, equipamento ou rede. Os vetores de ataque são originários de dentro ou de fora da rede corporativa. É provável que os dados sejam o ativo mais valioso de uma organização. Vários controles de prevenção contra perda de dados (DLP) devem ser implementados, combinando medidas estratégicas, operacionais e táticas. Os vetores comuns de perda de dados incluem e-mail e redes sociais, dispositivos de dados não criptografados, dispositivos de armazenamento em nuvem, mídia removível, cópia impressa e controle de acesso inadequado.

- **Quem está atancando nossa rede?** Compreender a segurança da rede requer que você entenda os seguintes termos: ameaça, vulnerabilidade, superfície de ataque, exploração e risco. A gestão de riscos é o processo que equilibra os custos operacionais de provisão de medidas de proteção com os ganhos obtidos através da proteção do ativo. Quatro formas comuns de gerenciar riscos são: a aceitação de riscos, a prevenção de riscos, a redução de riscos e a transferência de riscos. Hacker é um termo usado para descrever um ator de ameaça. Os hackers White hat são hackers éticos que usam suas habilidades para propósitos bons, éticos e legais. Hackers Grey hat são indivíduos que cometem crimes e fazem coisas antiéticas, mas não para ganho pessoal ou para causar danos. Os hackers Black hat são criminosos que violam a segurança do computador e da rede para ganho pessoal ou por motivos maliciosos, como ataques a redes. Os atores de ameaças incluem crianças de script, corretores de vulnerabilidade, hacktivistas, criminosos cibernéticos e hackers patrocinados pelo Estado. Muitos ataques de rede podem ser evitados compartilhando informações sobre IOCs. Muitos governos estão promovendo a segurança cibernética. CISA e NCSA são exemplos de tais organizações.
