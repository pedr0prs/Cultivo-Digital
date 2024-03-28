# Módulo 9: Proteção de Sistema e Endpoint

|----------------------------------------------------------|
|Tópico                    |        Objetivo               |
|----------------------------------------------------------|
|Defesa de sistemas e disp.|  usar processos e procedimentos para protege-los|
|Proteção antimalware      | métodos de mitigação de malware|
|Prevenção de instrução em host | recomendar medidas de sec. de endpoint|
|Sec. das aplicações       | Usar ferramentas de investigação de malware para saber mais sobre os recursos|
|-----------------------------------------------------------------|

## O que aprendi nesse módulo

- **Defesa de sistemas e dispositivos:** Para proteger um sistema operacional, os administradores devem remover todos os programas e serviços desnecessários e garantir que as correções de segurança e as atualizações estejam instaladas. Uma empresa deve estabelecer procedimentos para monitorar informações relacionadas à segurança, avaliar atualizações e instalar atualizações usando um plano documentado. Além disso, eles devem identificar possíveis vulnerabilidades ao estabelecer um parâmetro para comparar o desempenho de um sistema.

Malware inclui vírus, worms, cavalos de Troia, keyloggers, spyware, e adware. Todos eles invadem a privacidade, roubam informações, danificam o sistema ou excluem e corrompem os dados. Use software antimalware confiável. Vírus sem arquivo usam linguagens de script como o Windows PowerShell e são difíceis de detectar. Linguagens de script como Python, Bash ou VBA podem ser usadas para criar malware. Remova o software não compatível imediatamente.

Os patches são atualizações de código que os fabricantes fornecem para evitar que um vírus ou um worm recém-descoberto façam um ataque bem-sucedido. Patches e atualizações são frequentemente combinados em um service pack. Uma ferramenta de gerenciamento de patches pode ser usada para gerenciar patches localmente. Também é importante atualizar aplicativos de terceiros, como Adobe Acrobat, Java e Chrome, para lidar com vulnerabilidades. Um firewall baseado em host é executado em um dispositivo para restringir a atividade de rede de entrada e saída desse dispositivo. O software HIDS monitora chamadas e acesso ao sistema de arquivos para detectar solicitações mal-intencionadas. O HIPS monitora um dispositivo em busca de ataques e anomalias. O EDR monitora e coleta continuamente dados de um dispositivo de endpoint e, em seguida, analisa os dados e responde a todas as ameaças. As ferramentas de DLP garantem que dados confidenciais não sejam perdidos ou acessados por usuários não autorizados. O NGFW combina um firewall tradicional com outras funções de filtragem de dispositivos de rede. A criptografia é uma ferramenta usada para proteger os dados usando um algoritmo para transformar dados e torná-los ilegíveis.

O recurso Windows Encrypting File System (EFS) permite que os usuários criptografem arquivos, pastas ou um disco rígido inteiro. A integridade de inicialização garante que o sistema seja confiável e não tenha sido alterado enquanto o sistema operacional é carregado. A inicialização segura é um padrão de segurança para garantir que um dispositivo inicialize usando software confiável. A inicialização medida pode identificar aplicativos não confiáveis que tentam carregar e também permite que o antimalware seja carregado mais cedo.

Os administradores devem ter políticas e contramedidas em vigor para software não corrigido, downloads de usuários não autorizados, malware, dispositivos autônomos, violações de política de uso aceitável e mídia não autorizada. Proteja o equipamento físico com fechaduras de cabo, fechaduras de portas cifradas, gaiolas de Faraday para bloquear campos eletromagnéticos e etiquetas RFID para identificar e rastrear itens. Proteção Antimalware

Os endpoints são hosts na rede que podem acessar ou ser acessados por outros hosts na rede. Com a IoT, outros tipos de dispositivos agora são endpoints. Cada ponto de extremidade é uma forma potencial de software malicioso ter acesso a uma rede. Nem todos os endpoints estão dentro de uma rede. Muitos endpoints se conectam a redes remotamente através de VPN. O perímetro da rede está sempre se expandindo. Vários dispositivos de segurança de rede são necessários para proteger o perímetro da rede contra acesso externo. Muitos ataques são originados de dentro da rede; portanto, proteger uma LAN interna também é importante. Depois que um host interno é infiltrado, ele pode se tornar um ponto de partida para um invasor obter acesso a dispositivos críticos do sistema. Há dois elementos de LAN internos para proteger: endpoints e infra-estrutura de rede.

O Software Antivírus/Antimalware é instalado em um host para detectar e mitigar vírus e malware. Ele faz isso usando três abordagens diferentes, baseadas em assinaturas (usando várias características de arquivos de malware conhecidos), heurística (usando recursos gerais compartilhados por vários tipos de malware) e baseado em comportamento (usando uma análise de comportamento suspeito). Muitos programas antivírus são capazes de fornecer proteção em tempo real analisando dados conforme eles são usados pelo endpoint. Um Firewall baseado em host restringe as conexões de entrada e saída a conexões iniciadas somente por esse host. Alguns softwares de firewall também podem impedir que um host se infecte e impedir que hosts infectados espalhem malware para outros hosts. A maioria dos softwares de segurança baseados em host inclui funcionalidade de registro que é essencial para operações de segurança cibernética. A proteção de endpoints em uma rede sem fronteiras pode ser realizada usando técnicas baseadas em rede, bem como baseadas em host.

- **Prevenção de intrusão baseada em host:** Firewalls baseados em host podem usar um conjunto de políticas predefinidas, ou perfis, para controlar pacotes que entram e saem de um computador. Eles também podem ter regras que podem ser diretamente modificadas ou criadas para controlar o acesso com base em endereços, protocolos e portas. Eles também podem ser configurados para emitir alertas se um comportamento suspeito for detectado. O registro varia dependendo do aplicativo de firewall. Normalmente, inclui a data e a hora do evento, se a conexão foi permitida ou negada, informações sobre os endereços IP de origem ou destino dos pacotes e as portas de origem e destino dos segmentos encapsulados. (Os firewalls distribuídos combinam recursos de firewalls baseados em host com gerenciamento centralizado.)

Alguns exemplos de firewalls baseados em host incluem Firewall do Windows Defender, iptables, nftables e TCP Wrappers. O HIDS protege os hosts contra malware conhecido e desconhecido. Pode realizar monitoramento e relatórios detalhados sobre a configuração do sistema e a atividade do aplicativo, análise de log, correlação de eventos, verificação de integridade, aplicação de políticas, detecção de rootkit e alertas. Um HIDS incluirá frequentemente um endpoint de servidor de gerenciamento. Como o software HIDS deve ser executado diretamente no host, ele é considerado um sistema baseado em agentes. Um HIDS usa estratégias proativas e reativas. Um HIDS pode impedir intrusões porque utiliza assinaturas para detectar malware conhecido e impedir que infecte um sistema.

As assinaturas não são eficazes contra ameaças novas ou de dia zero. Além disso, algumas famílias de malware exibem polimorfismo. Estratégias adicionais para detectar a possibilidade de sucesso de um ataque, incluem detecção baseada em anomalias e detecção baseada em políticas.

- **Segurança de aplicações:** Uma superfície de ataque é a soma total das vulnerabilidades em um determinado sistema que é acessível a um invasor. Pode consistir em portas abertas em servidores ou hosts, software que está sendo executado em servidores voltados para a Internet, protocolos de rede sem fio, dispositivos remotos e até mesmo usuários. A superfície de ataque continua a expandir-se. Mais dispositivos estão se conectando a redes através da Internet das Coisas (IoT) e BYOD (Traga seu próprio aparelho).

O Instituto SANS descreve três componentes da superfície de ataque: superfície de ataque de rede, superfície de ataque de software e superfície de ataque humano. Uma maneira de diminuir a superfície de ataque é limitar o acesso a ameaças potenciais criando listas de aplicativos proibidos. As listas brancas são criadas de acordo com uma linha de base de segurança estabelecida por uma organização. Sandboxing é uma técnica que permite que arquivos suspeitos sejam executados e analisados em um ambiente seguro. As sandboxes de análise automatizada de malware oferecem ferramentas que analisam o comportamento do malware. Essas ferramentas observam os efeitos da execução de malware desconhecido para que os recursos do comportamento de malware possam ser determinados e usados para criar defesas contra ele. O malware polimórfico muda com frequência e o novo malware aparece regularmente. O malware entrará na rede apesar dos sistemas de segurança baseados em host e perímetro mais robustos. HIDS e outros sistemas de detecção podem criar alertas sobre suspeita de malware que pode ter entrado na rede e executado em um host.

### Módulo 10: Princípios, práticas e processos de segurança cibernética

|-----------------------------------------------------------------|
|tópico                |         objetivo                         |
|as três dimensões     | usar hashes para verificar a integridade dos arquivos|
|estados dos dados    |  comparar os três estados dos dados       |
|Contramedidas de segurança | comparar os tipos de contramedidas de segurança|
|-----------------------------------------------------------------|

#### O que aprendi nesse módulo

- **As três dimensões:** A primeira dimensão do cubo de segurança cibernética identifica os objetivos para proteger o espaço cibernético. A confidencialidade dos dados impede a divulgação de informações a pessoas, recursos ou processos não autorizados. A integridade dos dados refere-se à precisão, consistência e confiabilidade dos dados. A disponibilidade de dados garante que as informações sejam acessíveis por usuários autorizados quando necessário. Use o acrônimo CIA para se lembrar desses três princípios. A segunda dimensão do cubo de segurança digital representa os três estados de dados possíveis: dados em trânsito, dados inativos ou armazenamento e dados em processo.

A terceira dimensão do cubo de segurança cibernética define os pilares nos quais basear suas defesas de segurança cibernética. São eles: 1. tecnologia, 2. políticas e práticas, e 3. melhoria da educação, treinamento e conscientização das pessoas.

Para obter confidencialidade sem usar criptografia, a tokenização é uma técnica de substituição que pode isolar os elementos de dados da exposição a outros sistemas de dados. O gerenciamento de direitos abrange o gerenciamento de direitos digitais (DRM) e o gerenciamento de direitos de informação (IRM). Ambos protegem os dados contra acesso não autorizado usando criptografia. Os tipos de informações confidenciais se dividem em três categorias: informações pessoais, informações comerciais e informações classificadas. Algumas empresas implantam tecnologias de aprimoramento da privacidade, incluindo anonimização, minimização de dados e tokenização para ajudar a resolver problemas de privacidade de dados.

Integridade é a precisão, consistência e confiabilidade dos dados em todo o seu ciclo de vida. Os métodos usados para garantir a integridade de dados incluem hashing, verificações de validação de dados, verificações de consistência dos dados e controles de acesso. A disponibilidade garante que as informações possam ser acessadas sempre que necessário. As ações que ajudam a garantir a disponibilidade incluem manutenção de equipamentos, atualizações de software e patches, testes de backup, planejamento de desastres, implementações de novas tecnologias, monitoramento de atividades e testes de disponibilidade.

- **Estados dos dados:** A segurança das informações exige que os dados sejam protegidos em todos os três estados: inativos, em trânsito e em processo. Os dados estão em repouso quando nenhum usuário ou processo os está acessando, solicitando ou alterando. Os dados podem ser armazenados em DAS, RAID, NAS, SAN ou na nuvem. O local é vulnerável a ataques mal-intencionados no host local. Os dados inativos também incluem dados de backup (quando não estão sendo gravados ou em trânsito). Os backups podem ser manuais ou automáticos. Os sistemas de armazenamento em rede, incluindo RAID, SAN e NAS, proporcionam maior desempenho e redundância. Eles lidam com muitos dados, representando um risco maior para a organização se o dispositivo falhar. Os desafios dos sistemas de armazenamento em rede incluem configuração, testes e monitoramento do sistema.

Dados em trânsito são dados que estão sendo transmitidos - não estão em repouso nem em uso. Uma rede de tênis usa mídia removível para mover fisicamente os dados de um computador para outro. As redes com fio incluem mídia de cobre e fibra óptica e podem atender a uma rede de área local (LAN) ou abranger grandes distâncias em redes de longa distância (WAN). As redes com e sem fio usam pacotes ou unidades de dados. Protocolos padrão como o protocolo de Internet (IP) e o protocolo de transferência de hipertexto (HTTP) definem a estrutura e a formação de pacotes de dados. Os cibercriminosos podem capturar, salvar e roubar dados em trânsito. Os profissionais de segurança digital podem implementar VPNs usando SSLs, IPsec e vários outros métodos de criptografia. Os criminosos virtuais podem interceptar e modificar dados em trânsito. Os profissionais de segurança cibernética implantam sistemas de integridade de dados que testam a integridade e a autenticidade dos dados transmitidos para combater essas ações. Esses sistemas incluem hash e redundância de dados. Os criminosos virtuais podem usar dispositivos falsos ou não autorizados para interromper a disponibilidade dos dados, capturando-os em trânsito. Os sistemas de autenticação mútua exigem que o usuário se autentique no servidor e solicitam que o servidor se autentique no usuário.

Dados em processo (data in process) referem-se a dados durante a entrada inicial, modificação, computação ou saída

A proteção da integridade de dados começa com a entrada inicial dos dados. As organizações usam vários métodos para coletar dados, como entrada manual de dados, digitalização de formulários, carregamentos de arquivos e dados coletados dos sensores.

A corrupção durante o processo de entrada pode incluir rotulagem incorreta e formatos de dados incorretos ou incompatíveis, erros de entrada de dados ou sensores de sistema desconectados e/ou com mau funcionamento ou inoperantes. Quando dados são modificados de uma forma que impede que sejam legíveis ou utilizáveis, isso é chamado de corrupção de dados. Exemplos de corrupção dos dados de saída incluem o uso incorreto de delimitadores de dados, configurações de comunicação incorretas e configuração inadequada de impressoras. A modificação de dados inválida durante o processamento pode ter um impacto adverso, e é importante mitigar esses casos.

- **Contramedidas de segurança cibernéticas:** Os administradores podem instalar as seguintes contramedidas ou proteções baseadas em software em hosts ou servidores individuais: firewalls de software, scanners de rede e porta, analisadores de protocolo, scanners de vulnerabilidade e IDS baseado em host. Um programa de conscientização de segurança e políticas de segurança sólidas e abrangentes são extremamente importantes. Torne o treinamento de conscientização de segurança uma parte do processo de integração do funcionário Vincule a conscientização de segurança aos requisitos do trabalho ou às avaliações de desempenho Realizar sessões de treinamento presenciais usando gamificação e atividades. Complete cursos e módulos on-line

Um programa ativo de conscientização de segurança depende do ambiente e da rede da empresa, do nível de ameaça e da natureza e das demandas dos dados que a empresa mantém. O desenvolvimento da conscientização sobre segurança deve ser um processo contínuo porque novas ameaças e técnicas estão sempre surgindo.

Uma política de segurança abrangente demonstra o compromisso de uma organização com a segurança. Ele define as regras para o comportamento esperado e garante consistência nas operações do sistema e aquisição, uso e manutenção de software e hardware. Ela define as consequências legais das violações e oferece à equipe de segurança o apoio do gerenciamento. Os tipos de políticas de segurança incluem identificação e autenticação, senhas, uso aceitável, acesso remoto, manutenção de rede e tratamento de incidentes.

Os documentos de padrões fornecem as tecnologias necessárias para que usuários ou programas específicos. Além disso, eles especificam os requisitos ou critérios do programa que uma empresa deve seguir. Isso ajuda a equipe de TI melhorar a eficiência e simplicidade no design, manutenção e solução de problemas. Além das melhores práticas definidas por uma empresa, as diretrizes também estão disponíveis no seguinte: Centro de Recursos de Segurança de Computadores do National Institute of Standards and Technology (NIST), Guias de Configuração de Segurança da Agência de Segurança Nacional (NSA) e o padrão Common Criteria.

Documentos de procedimentos são mais longos e mais detalhados que os padrões e diretrizes. Eles incluem detalhes de implementação que geralmente contêm instruções e gráficos passo a passo.