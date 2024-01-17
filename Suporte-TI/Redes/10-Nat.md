# NAT

A tradução de endereços de rede (NAT) é uma técnica que permite que um dispositivo, geralmente um roteador ou um firewall, traduza um endereço IP de origem em um endereço IP de destino diferente. O NAT pode ser usado por vários motivos, incluindo segurança, eficiência e compatibilidade.

## Como funciona o NAT?

Quando um dispositivo envia um pacote de dados, ele inclui o endereço IP de origem e o endereço IP de destino. O NAT funciona substituindo o endereço IP de origem pelo endereço IP do dispositivo que está fazendo o NAT. O NAT também pode alterar o endereço IP de destino, se necessário.

### Tipos de NAT

**Existem dois tipos principais de NAT:**

- **NAT estático:** O NAT estático é usado para atribuir um endereço IP de destino específico a um endereço IP de origem específico. O NAT estático é frequentemente usado para dispositivos que precisam ser acessados ​​de forma externa, como servidores web ou servidores de e-mail.
- **NAT dinâmico:** O NAT dinâmico é usado para atribuir um endereço IP de destino aleatório a um endereço IP de origem. O NAT dinâmico é frequentemente usado para dispositivos que não precisam ser acessados ​​de forma externa, como computadores domésticos ou dispositivos móveis.

#### Usos do NAT

**O NAT pode ser usado para vários propósitos, incluindo:**

- **Segurança:** O NAT pode ser usado para ocultar endereços IP de dispositivos internos, tornando-os mais difíceis de serem atacados.
- **Eficiência:** O NAT pode ser usado para economizar endereços IP, permitindo que vários dispositivos compartilhem um único endereço IP público.
- **Compatibilidade:** O NAT pode ser usado para permitir que dispositivos com endereços IP não compatíveis se comuniquem uns com os outros.

##### Exemplo de NAT

**Vamos supor que temos duas redes:**

- **Rede A: 10.1.1.0/24**
- **Rede B: 192.168.1.0/24**

Um dispositivo na rede A, com o endereço IP 10.1.1.100, deseja enviar um pacote de dados para um dispositivo na rede B, com o endereço IP 192.168.1.100. Se o NAT não estiver sendo usado, o pacote de dados seria enviado diretamente para o dispositivo na rede B.

No entanto, se o NAT estiver sendo usado, o pacote de dados será enviado para o roteador que conecta as duas redes. O roteador então substituirá o endereço IP de origem do pacote de dados pelo seu próprio endereço IP, que é 192.168.1.1. O roteador então encaminhará o pacote de dados para o dispositivo na rede B.

Quando o dispositivo na rede B receber o pacote de dados, ele verá que o endereço IP de origem é 192.168.1.1. O dispositivo na rede B então enviará uma resposta para o endereço IP de origem, que é 192.168.1.1. O roteador, sabendo que o endereço IP de destino real é 10.1.1.100, substituirá o endereço IP de destino do pacote de dados antes de enviá-lo para o dispositivo na rede A.

## NAT e a camada de transporte

O NAT na camada de rede é muito fácil de entender. Um endereço IP é traduzido para outro por meio de um dispositivo, geralmente um roteador.
Mas na camada de transporte, as coisas ficam um pouco mais complicadas e várias técnicas adicionais entram em jogo para garantir que tudo funcione corretamente.

Com o NAT um-para-muitos, falamos sobre como centenas ou milhares de computadores podem ter seu tráfego de saída traduzido via NAT para um único IP. Isso é muito fácil de entender quando o tráfego é de saída, mas um pouco mais complicado quando se envolve o tráfego de retorno.

Agora temos centenas de respostas direcionadas no mesmo IP e o roteador deste IP precisa descobrir quais respostas vão para cada computador. A maneira mais simples de fazer isso é por meio da preservação de portas.

A preservação de portas é uma técnica em que a porta de origem escolhida por um cliente é a mesma porta usada pelo roteador. Lembre-se de que as conexões de saída escolhem uma porta de origem aleatoriamente entre as portas efêmeras ou as portas da faixa de 49.152 a 65.535.

Na configuração mais simples, um roteador configurado para fazer NAT no tráfego de saída só acompanha qual é essa porta de origem e a usa para direcionar o tráfego de volta ao computador certo.

Outro conceito importante sobre o NAT e a camada de transporte é o redirecionamento de portas. O redirecionamento de portas é uma técnica em que uma porta de destino específica pode ser configurada para ser sempre entregue a nós específicos. Essa técnica permite um completo mascaramento de IP, mantendo os serviços que podem responder ao tráfego de entrada.

## NAT, espaço de endereçamento não roteável e os limites do IPv4

A IANA é responsável pela distribuição de endereços IP desde 1988. Desde então, a internet tem crescido em um ritmo incrível. Há muito tempo que se prevê o esgotamento dos 4,2 bilhões de endereços IPv4 possíveis e isso já quase ocorreu.

Há algum tempo, a IANA é responsável pela atribuição de blocos de endereços aos cinco registros regionais de internet, ou RIRs. Os cinco RIRs são o AFRINIC, que atende o continente da África, o ARIN, que atende os Estados Unidos, o Canadá e partes do Caribe, o APNIC, responsável pela maior parte da Ásia, da Austrália, da Nova Zelândia e das Ilhas do Pacífico, o LACNIC, que abrange a América Central e a América do Sul, além de partes do Caribe não cobertas pelo ARIN. E, finalmente, o RIPE, que atende a Europa, a Rússia, o Oriente Médio e partes da Ásia Central. Esses cinco RIRs são responsáveis pela atribuição de blocos de endereços IP às organizações dentro de suas áreas geográficas , mas a maioria já se esgotou. A IANA atribuiu o último bloco de rede não alocado /8 a vários RIRs em 3 de fevereiro de 2011. Então, em abril de 2011, o APNIC ficou sem endereços. Depois foi o RIPE, em setembro de 2012. O LACNIC ficou sem endereços para atribuição em junho de 2014. E o ARIN passou por isso em setembro de 2015. Só o AFNIC tem IPs livres, mas devem se esgotar em 2018.

O IPv6 deve resolver esses problemas. Mas a implementação do IPv6 em todo o mundo vai levar algum tempo. Por enquanto, continuamos crescendo e angariando mais pessoas e dispositivos para se conectar, mas sem endereços IP, é necessário encontrar uma solução alternativa.

**Principais componentes dessa solução:**

o NAT e espaço de endereço não roteável. Lembre-se de que o espaço de endereço não roteável foi definido pela RFC1918 e consiste em vários intervalos de IP diferentes que qualquer um pode usar. E um número ilimitado de redes podem usar o espaço de endereço não roteável internamente porque os roteadores de internet não encaminham tráfego para ele.

Isso significa que nunca há colisão global de endereços IP quando as pessoas usam esses espaços de endereço. O espaço de endereço não roteável é amplamente utilizável hoje graças às tecnologias como o NAT. Com o NAT, você pode ter centenas ou milhares de máquinas usando o espaço de endereçamento não roteável.

No entanto, com apenas um único IP público, todos esses computadores ainda podem enviar e receber tráfego da internet. Tudo que você precisa é de um único endereço IPv4 e, via NAT, um roteador com esse IP pode representar muitos e muitos computadores por trás dele.

Não é uma solução perfeita, mas até que o IPv6 se torne globalmente disponível, o espaço de endereçamento não roteável e o NAT terão de dar conta.
