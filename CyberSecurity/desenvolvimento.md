# Modulo 3:Atacando a fundação

cibernética devem entender como os atores de ameaças usam recursos de protocolos comuns em ataques cibernéticos.

Este módulo fornece uma visão geral dos campos de pacotes IP da Camada 3 e dos campos de segmento TCP e UDP da Camada 4, e discute as vulnerabilidades de cada um.

**Objetivo do módulo:** explicar como as vulnerabilidades do TCP/IP permitem ataques à rede.

|--------------------------------------------------------------------------------------------------|
| Tópico                      |                     Objetivo                                       |
|-----------------------------|--------------------------------------------------------------------|
| Detalhe PDU IP              | Explicar a estrutura de cabeçalho IPv4 e IPv6                      |
| Vulnerabilidades IP         | "" como as vulnerabilidades IP possibilitam ataques de rede        |
| Vulnerabilidades TCP E UDP  | "" como as vulnerabilidades TPC e UDP possibilitam ataques de rede |
|----------------------------------------------------------------------------------------------------|

## O que aprendi nesse módulo

- **Detalhes de PDU IP:** O IP foi projetado como um protocolo sem conexão de Camada 3. O cabeçalho IPv4 consiste em vários campos, enquanto o cabeçalho IPv6 contém menos campos. É importante que os analistas de segurança entendam os diferentes campos dos cabeçalhos IPv4 e IPv6.

- **vulnerabildiades de IP:** Existem diferentes tipos de ataques que visam IP. Os ataques comuns relacionados a IP incluem:

- Ataques ICMP
- Ataques de negação de serviço (DoS)
- Ataques Distribuídos de Negação de Serviço (DDoS)
- Ataque de Falsificação de Endereços
- Ataque man-in-the-middle (MiTM)
- sequestro de sessão

O ICMP foi desenvolvido para transportar mensagens de diagnóstico e relatar condições de erro quando rotas, hosts e portas não estão disponíveis.
Os agentes de ameaças usam o ICMP para ataques de reconhecimento e varredura.
Os agentes de ameaças também usam ICMP para ataques DoS e DDoS.
Os agentes de ameaças geralmente usam técnicas de amplificação e reflexão para criar ataques de negação de serviço (DoS).
Os atores da ameaça também usam ataques de exaustão de recursos para consumir os recursos de um host de destino para travá-lo ou para consumir os recursos de uma rede.
Os ataques de falsificação de endereço IP ocorrem quando um agente de ameaça cria pacotes com informações falsas de endereço IP de origem para ocultar a identidade do remetente ou para se passar por outro usuário legítimo.
Os ataques de falsificação de endereços podem ser falsificação não cega para sequestrar uma sessão ou falsificação cega para criar um ataque DoS.
Os ataques de falsificação de endereço MAC são usados quando os atores de ameaças têm acesso à rede interna.

- **Vulnerabilidade TCP e UDP:** As informações do segmento TCP e do datagrama UDP aparecem imediatamente após o cabeçalho IP. É importante entender cabeçalhos da Camada 4 e suas funções na comunicação de dados.
O TCP fornece entrega confiável, controle de fluxo e comunicação com estado. A comunicação com monitoração de estado TCP entre duas partes ocorre durante o handshake TCP de três vias.

Os atores de ameaças podem realizar uma variedade de ataques relacionados ao TCP:

- Varreduras de porta TCP
- Ataque de Inundação de SYN TCP
- Ataque de redefinição de TCP
- Ataque de sequestro de sessão TCP

O segmento UDP (ou seja, datagrama) é muito menor do que o segmento TCP, o que o torna muito desejável para uso por protocolos que fazem transações simples de solicitação e resposta, como DNS, DHCP, SNMP e outros. Os atores de ameaças podem conduzir ataques de inundação UDP que varrem todas as portas UDP conhecidas em um servidor tentando encontrar portas fechadas. Isso pode criar uma situação DoS.

### Modulo 4: Atacando o que fizemos

**Objetivo do módulo:** Recomendar medidas para mitigar as ameaças.

|Tópico                     |      Objetivo                  |
|---------------------------|--------------------------------|
|Serviço IP                 | Explicar vulnerabilidades de serviço IP|
| Serviços corporativos     | Explicar vulnerabilidades de aplicativos de rede permitem ataques de rede|
|Mitigando ataques de rede comuns | Recomendar medida básicas de mitigação de ameaças.|
|----------------------------------------------------------------|


#### O que aprendi nesse módulo

- **Serviço IP:** Os hosts transmitem uma solicitação ARP para outros hosts no segmento de rede para determinar o endereço MAC de um host com um endereço IP específico. Qualquer cliente pode enviar uma resposta ARP não solicitada denominada "ARP gratuito". Esse recurso do ARP também significa que qualquer host pode reivindicar ser o proprietário de qualquer IP / MAC que escolher. Um ator de ameaça pode envenenar o cache ARP de dispositivos na rede local, criando um ataque MiTM para redirecionar o tráfego.

O protocolo Domain Name Service (DNS) define um serviço automatizado que combina nomes de recursos com o endereço de host IP numérico necessário. Inclui o formato da mensagem para consultas, respostas e dados. Ele usa registros de recursos (RR) para identificar o tipo de resposta DNS. O DNS é crucial para a operação de uma rede e deve ser protegido de acordo. Muitas organizações usam os serviços de servidores DNS abertos publicamente para fornecer respostas às consultas. Os resolvedores abertos DNS são vulneráveis a várias atividades mal-intencionadas, incluindo envenenamento de cache DNS, em que registros falsificados são fornecidos ao resolvedor aberto. Ataques de amplificação e reflexão DNS são outro tipo de ataque no qual a natureza benigna do protocolo DNS é explorada para causar ataques DOS/DDoS. Em ataques de utilização de recursos DNS, um ataque DoS é iniciado contra o próprio servidor DNS. Os atores de ameaças geralmente se escondem usando técnicas furtivas de DNS, como Fast Flux, em que servidores mal-intencionados mudam rapidamente seu endereço IP. Os atores de ameaças usam o Double IP Flux, no qual os atores de ameaças mudarão rapidamente seu nome de domínio para mapeamento IP e seu servidor de nomes autoritativo. Os agentes de ameaças também podem usar o domínio sombreado para ocultar a origem de seus ataques, reunindo credenciais de contas de domínio para criar silenciosamente vários subdomínios a serem usados durante os ataques. O DNS na empresa às vezes é negligenciado como um protocolo que pode ser usado por botnets. Os agentes de ameaças que usam o tunelamento DNS colocam tráfego que não é de DNS, dentro do tráfego DNS. Esse método geralmente contorna soluções de segurança. Para poder interromper o túnel DNS, um filtro que inspecione o tráfego DNS deve ser usado. Os servidores DNS dinâmicos são populares entre os atores de ameaças e o tráfego que usa DNS dinâmico deve ser uma preocupação especial do analista de segurança cibernética.

O DHCP usa uma simples troca de mensagens broadcast e unicast para fornecer aos hosts informações de endereçamento. Um ataque de spoofing de DHCP ocorre quando um servidor DHCP invasor está conectado à rede e fornece falsos parâmetros de configuração IP aos clientes legítimos. O servidor não autorizado pode fornecer informações incorretas do gateway, informações do servidor DNS ou informações de endereçamento IP.

- **Serviços Corporativos:** Os navegadores da World Wide Web são usados por quase todos. Bloquear completamente a navegação na Web não é uma opção porque as empresas precisam de acesso à Web. Os analistas de segurança cibernética devem ter uma boa compreensão de como um ataque padrão baseado na Web funciona. Os estágios comuns de um ataque típico da Web incluem a vítima, sem saber, visitar uma página da Web que foi comprometida por malware. A página Web comprometida redireciona o usuário para um site que hospeda códigos mal-intencionados. O navegador é feito para visitar este site e código malicioso infecta seu computador. Isso é conhecido como um drive-by download. Independentemente do tipo de ataque que está sendo usado, o objetivo principal do ator da ameaça é garantir que o navegador da Web da vítima acabe na página da web do ator da ameaça, que, em seguida, serve o exploit malicioso para a vítima. Alguns sites mal-intencionados aproveitam plug-ins vulneráveis ou vulnerabilidades do navegador para comprometer o sistema do cliente. Redes maiores dependem de IDSs para verificar arquivos baixados em busca de malware. Se detectado, o IDS emite alertas e registra o evento em arquivos de log para análise posterior. Os logs de conexão do servidor geralmente podem revelar informações sobre o tipo de varredura ou ataque. Os diferentes grupos de códigos de status de conexão incluem informações 1xx, 2xx bem-sucedido, redirecionamento 3xx, erro de cliente 4xx e erro de servidor 5xx. Para se defender contra ataques baseados na Web, as contramedidas que devem ser usadas incluem sempre atualizar o sistema operacional e os navegadores com patches e atualizações atuais, usar um proxy da Web para bloquear sites mal-intencionados, usar as melhores práticas de segurança do Open Web Application Security Project (OWASP) ao desenvolver a Web e educando os usuários finais mostrando-lhes como evitar ataques baseados na Web.

Há uma série de ataques que usam e-mail para transportar cargas de malware ou para phish para obter informações pessoais. Os servidores SMTP também podem ter vulnerabilidades e devem ser mantidos atualizados com patches. Os appliances de segurança de e-mail podem detectar e bloquear muitos tipos de ameaças de e-mail conhecidas, incluindo phishing, spam e malware.

Aplicativos Web geralmente se conectam a bancos de dados. Como esses bancos de dados podem conter informações confidenciais, eles são um alvo freqüente de ataques. Os ataques de injeção de código e injeção SQL exploram campos de entrada insuficientemente validados para enviar comandos para bancos de dados ou outros aplicativos, a fim de obter acesso a informações privadas. Os ataques XSS (Cross-Site Scripting) ocorrem quando os navegadores executam scripts mal-intencionados no cliente e fornecem aos agentes da ameaça acesso a informações confidenciais no host local.

O OWASP Top 10 Riscos de Segurança de Aplicativos Web foi projetado para ajudar as organizações a criar aplicativos Web seguros. É uma lista útil de potenciais vulnerabilidades que são comumente exploradas por atores de ameaças.

- **Mitigando ataques de rede comuns:** As seguintes práticas recomendadas são usadas para proteger uma rede: desenvolver uma política de segurança escrita, educar funcionários, controlar o acesso físico aos sistemas, usar senhas fortes, criptografar e senha- proteger dados confidenciais, implementar hardware e software de segurança, realizar backups e testar o backup de arquivos, desligue serviços e portas desnecessários, mantenha patches atualizados e execute auditorias e testes de segurança.

O principal meio de mitigar ataques de vírus e cavalos de Tróia é o software antivírus. Um profissional de segurança de rede deve estar ciente dos principais vírus e acompanhar as atualizações de segurança relacionadas aos vírus emergentes.

Worms são mais baseados em rede do que vírus. A resposta a um ataque de vermes pode ser dividida em quatro fases: contenção, inoculação, quarentena e tratamento.

Os ataques de reconhecimento podem ser mitigados de várias maneiras: implementar autenticação para garantir o acesso adequado, usar criptografia para inutilizar ataques de sniffer de pacotes, usar ferramentas anti-sniffer para detectar ataques de sniffer de pacotes, implementar uma infraestrutura comutada e usar um firewall e IPS. A criptografia também é eficaz para mitigar ataques de sniffer de pacotes. Várias técnicas estão disponíveis para mitigar ataques de acesso, incluindo: forte segurança de senha, princípio de confiança mínima, criptografia e aplicação do sistema operacional e patches de aplicativos.

Para minimizar o número de ataques DoS, um pacote de software de utilização de rede deve estar sempre em execução. Os ataques DoS podem ser um componente de uma ofensiva maior. Os ataques DoS podem levar a problemas nos segmentos de rede dos computadores que estão sendo atacados. Historicamente, muitos ataques DoS foram provenientes de endereços falsificado.

##### Modulo 5: Wifi

|Tópico              |       Objetivo|
|--------------------|---------------|
|Comunicação sem fio | Mostrar com os dispositivos se comunicam|
|Ameaças WLAN        | Descreve-las |
|WLANs seguras       | trobleshooting|
|-------------------------------------|

###### O que aprendi neste módulo

- **Comunicações sem fio:** Os dispositivos de rede sem fio se conectam a um ponto de acesso (AP) ou WLC (Wireless LAN Controller) processando o padrão 802.11. O formato de quadro 802.11 é semelhante ao formato de quadro Ethernet, exceto que contém campos adicionais. Os dispositivos WLAN usam o acesso múltiplo com detecção de portadora com prevenção de colisão (CSMA / CA) como método para determinar como e quando enviar dados na rede. Para se conectar à WLAN, os dispositivos sem fio concluem um processo de três estágios para descobrir um AP sem fio, autenticar com o AP e associar com o AP. Os APs podem ser configurados de forma autônoma (individualmente) ou usando uma WLC para simplificar a configuração e o monitoramento de vários pontos de acesso.

- **Ameaças de WLAN:** As redes sem fio são suscetíveis a ameaças, incluindo: interceptação de dados, invasores sem fio, ataques de negação de serviço e pontos de acesso não autorizados. Os ataques de DoS sem fio podem ser o resultado de: dispositivos configurados incorretamente, um usuário mal-intencionado interferindo intencionalmente na comunicação sem fio e interferências acidentais. Um ponto de acesso não autorizado é um ponto de acesso ou roteador sem fio que foi conectado a uma rede corporativa sem autorização explícita. Quando conectado, um atacante pode usar o ponto de acesso não autorizado para capturar endereços MAC, capturar pacotes de dados, obter acesso aos recursos de rede ou iniciar um ataque MITM. Em um ataque MITM, o atacante é posicionado entre duas entidades legítimas para ler ou modificar os dados que passam entre as duas partes. Um ataque MITM sem fio popular é chamado de "Ponto de acesso gêmeo do mal", em que um agente de ameaças introduz um ponto de acesso não autorizado e o configura com o mesmo SSID que um pnto de acesso legítimo. Para impedir a instalação de APs não autorizados, as organizações devem configurar WLCs com políticas de pontos de acesso não autorizados.

- **WLANs seguras:** Para manter os invasores sem fio afastados e proteger os dados, dois recursos de segurança anteriores ainda estão disponíveis na maioria dos roteadores e pontos de acesso: camuflagem SSID e filtragem de endereço MAC. Existem quatro técnicas de autenticação de chave compartilhada disponíveis: WEP, WPA, WPA2 e WPA3 (dispositivos com WPA3 ainda não estão prontamente disponíveis). Os roteadores domésticos geralmente têm duas opções para autenticação: WPA e WPA2. WPA2 é o mais forte dos dois. Criptografia é usada para proteger os dados. Os padrões WPA e WPA2 usam os seguintes protocolos de criptografia: TKIP e AES. Em redes com requisitos de segurança mais rígidos, é necessária uma autenticação ou login adicional para conceder acesso a clientes sem fio. A opção do modo de segurança corporativa requer um servidor RADIUS de autenticação, autorização e contabilidade (AAA - Authentication, Authorization, and Accounting).

