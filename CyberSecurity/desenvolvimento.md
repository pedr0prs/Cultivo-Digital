# Atacando a fundação

cibernética devem entender como os atores de ameaças usam recursos de protocolos comuns em ataques cibernéticos.

Este módulo fornece uma visão geral dos campos de pacotes IP da Camada 3 e dos campos de segmento TCP e UDP da Camada 4, e discute as vulnerabilidades de cada um.

**Objetivo do módulo:** explicar como as vulnerabilidades do TCP/IP permitem ataques à rede.

|--------------------------------------------------------------------------------------------------|
| Tópico                      |                     Objetivo                                       |
|-----------------------------|--------------------------------------------------------------------|
| Detalhe PDU IP              | Explicar a estrutura de cabeçalho IPv4 e IPv6                      |
| Vulnerabilidades IP         | "" como as vulnerabilidades IP possibilitam ataques de rede        |
| Vulnerabilidades TCP E UDP  | "" como as vulnerabilidades TPC e UDP possibilitam ataques de rede |
|--------------------------------------------------------------------------------------------------|

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