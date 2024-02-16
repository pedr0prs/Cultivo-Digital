# Projeto final – apresentação de esboço

**Autenticação**
A autenticação será gerenciada de forma centralizada por um servidor LDAP e usará os geradores de senha de uso único como um segundo fator de autenticação.

**Site externo**
O site voltado para a clientes será veiculado via HTTPS, já que estaremos disponibilizando um site de comércio eletrônico para que os visitantes naveguem e comprem produtos, além de criar e acessar contas. Este site seria aberto ao público.

**Site interno**
O site interno do funcionário também será veiculado por HTTPS porque vai exigir autenticação dos funcionários para conceder acesso. Além disso, ele só poderá ser acessado através da rede interna da empresa e somente com uma conta autenticada.

**Acesso remoto**
Como os engenheiros precisam de acesso remoto aos sites internos e da linha de comando à estação de trabalho, será preciso usar uma solução de VPN de rede, como o OpenVPN. Para facilitar o acesso ao site interno, é recomendado usar um proxy reverso, além da VPN. Ambos usariam o servidor LDAP, mencionado anteriormente, para autenticação e autorização.

**Firewall**
Um firewall appliance de rede seria necessário. Ele teria regras para permitir tráfego para vários serviços, começando com uma regra de negação implícita e, depois, abertura seletiva de portas. As regras também serão necessárias para permitir o acesso público ao site externo e tráfego para o servidor proxy reverso e o servidor da VPN.

**Redes sem fio**
Para a segurança de redes sem fio, deve-se usar o 802.1X com EAP-TLS. Isso exigiria o uso de certificados de cliente, que também podem ser usados para autenticar outros serviços, como a VPN, o proxy reverso e a autenticação do site interno. O 802.1X é mais seguro e mais fácil de gerenciar à medida que a empresa cresce, o que faz dele uma melhor opção do que o WPA2.

**VLANs**
A incorporação de VLANs à estrutura de redes é recomendada como uma forma de segmentação de rede – ela facilita o gerenciamento do controle de acesso a diversos serviços. VLANs podem ser criadas para cargos ou funções amplas para dispositivos e serviços. Uma VLAN de engenharia pode ser usada para tornar todas as estações de trabalho de engenharia e serviços de engenharia ativos. Uma VLAN de infraestrutura pode ser usada para todos os dispositivos de infraestrutura, como APs sem fio, dispositivos de rede e servidores críticos, como o de autenticação. Uma VLAN de vendas pode ser usada para máquinas que não são de engenharia, e uma VLAN de convidado seria útil para outros dispositivos que não se enquadram nas outras categorias de VLAN.

**Segurança para notebooks**
Como a empresa manipula informações de pagamento e dados de usuários, a privacidade é uma grande preocupação. Os notebooks devem ter criptografia de disco completa (FDE) como requisito para criar uma proteção contra acesso não autorizado a dados caso um dispositivo seja perdido ou roubado. Também recomenda-se o uso de software antivírus para evitar infecções por malwares comuns. Para proteger contra ataques mais raros e ameaças desconhecidas, recomenda-se usar um software de lista de permissão binária, além do antivírus.

**Política de aplicativos**
Para aprimorar ainda mais a segurança das máquinas-cliente, uma política de aplicativos deve ser aplicada para restringir a instalação de softwares de terceiros apenas aos aplicativos relacionados às funções do trabalho. De forma mais específica, as categorias de aplicativo não confiáveis e legalmente questionáveis devem ser explicitamente banidas. Dentro dessa regra, estão softwares pirateados, geradores de chaves de licença e softwares crackeados.

Além das políticas que restringem algumas formas de software, deve haver também uma política que exija a instalação de correções de software em tempo hábil. Neste caso, entende-se por "tempo hábil" 30 dias a partir da disponibilização geral da correção.

**Política de privacidade de dados do usuário**
Como a empresa leva a privacidade dos usuários muito a sério, aplicar algumas políticas rígidas para o acesso a esses dados é uma necessidade. Os dados dos usuários só devem ser acessados para fins profissionais específicos relacionados a uma tarefa ou projeto. As solicitações devem envolver dados específicos e não serem de caráter exploratório e excessivamente amplas. As solicitações devem ser analisadas e aprovadas antes da concessão do acesso. Somente após a análise e aprovação, o indivíduo terá acesso aos dados do usuário específicos solicitados. As solicitações de acesso a dados de usuários também devem ter uma data de vencimento.

Além de acessar os dados do usuário, também é importante definir as políticas referentes ao gerenciamento e armazenamento de dados de usuários. Isso ajudará a impedir que os dados dos usuários sejam perdidos e caiam nas mãos erradas. Deve ser proibido o armazenamento de dados de usuários em dispositivos portáteis, como unidades USB ou discos rígidos externos. Se houver uma necessidade de exceção, deve-se usar um disco rígido portátil criptografado para transportar dados dos usuários. Os dados do usuário inativos devem sempre ficar em mídia criptografada para oferecer proteção contra acesso não autorizado.

**Política de segurança**
Para garantir que senhas fortes e seguras sejam usadas, deve-se aplicar a política de senhas abaixo:

- A senha deve ter um comprimento mínimo de 8 caracteres

- A senha deve conter no mínimo um caractere especial ou pontuação

- A senha deve ser alterada uma vez a cada 12 meses

Além desses requisitos para as senhas, todos os funcionários devem participar de treinamento de segurança obrigatório uma vez por ano. Esse treinamento deve abordar cenários comuns relacionados à segurança, ensinando a evitar ser vítima de ataques de phishing e boas práticas para manter o notebook seguro e destacando novas ameaças que surgiram desde o último curso ministrado.

**Sistemas de detecção ou prevenção de invasão**
Recomenda-se ter um sistema de detecção de invasão de rede para observar a atividade da rede procurando sinais de ataque ou infecção por malware. Isso agregaria bons recursos de monitoramento sem incomodar os usuários da rede. Um sistema de prevenção de invasão de rede (NIPS, Network Intrusion Prevention System) é recomendado para a rede em que os servidores que contêm os dados dos usuários estão. Eles contêm dados muito mais valiosos e que têm maior probabilidade de serem alvo de ataques. Além da prevenção contra invasões à rede, recomenda-se também instalar o software de detecção de invasão de host (HIDS) nesses servidores para aprimorar o monitoramento desses importantes sistemas.
