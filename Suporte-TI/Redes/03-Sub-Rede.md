# Sub-rede

Imagine que você tem uma rede grande com muitos dispositivos. Para que os dispositivos possam se comunicar uns com os outros, eles precisam ter um endereço IP único. No entanto, se a rede for muito grande, pode haver muitos endereços IP disponíveis que não estão sendo usados.

A sub-rede é uma maneira de dividir uma rede grande em redes menores, chamadas de sub-redes. Isso permite que os dispositivos em uma sub-rede compartilhem um conjunto de endereços IP.

## Máscara de sub-rede

A máscara de sub-rede é um número binário que informa aos dispositivos qual parte do endereço IP é o ID da rede e qual parte é o ID da máquina.

Por exemplo, a máscara de sub-rede 255.255.255.0 diz que os três primeiros octetos do endereço IP são o ID da rede e o último octeto é o ID da máquina.

### Como funciona

Quando um dispositivo envia um pacote de dados, o roteador verifica a máscara de sub-rede do pacote para determinar a qual sub-rede o pacote pertence. O roteador então encaminha o pacote para o destino apropriado na sub-rede.

#### Exemplo

Considere um dispositivo com o endereço IP 192.168.1.100 e uma máscara de sub-rede 255.255.255.0.

O ID da rede deste dispositivo é 192.168.1.

O ID da máquina deste dispositivo é 100.

## CIDR

CIDR significa _Classless Inter-Domain Routing (Roteamento entre Domínios Sem Classe)._
É uma maneira de descrever blocos de endereço IP de forma mais flexível do que o sistema de classes de endereço original.

### Como funciona o CIDR?

O CIDR usa máscaras de sub-rede para dividir um bloco de endereço IP em sub-redes. As máscaras de sub-rede são números binários que definem quais bits de um endereço IP pertencem à rede e quais bits pertencem ao host.

#### Por exemplo

Vamos supor que uma empresa precise de 500 endereços IP. Antes do CIDR, a empresa teria que implementar duas redes de classe C. Isso significaria que a empresa teria que gerenciar duas tabelas de roteamento.

Com o CIDR, a empresa pode criar um bloco de endereços de /23. Isso significa que a empresa terá 512 endereços IP disponíveis. Além disso, a empresa só precisará gerenciar uma tabela de roteamento.
