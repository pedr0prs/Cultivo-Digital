# Roteamento

Roteamento é o processo de enviar pacotes de dados de um dispositivo para outro na rede. Os roteadores são dispositivos de rede responsáveis pelo roteamento.

## Como funciona o roteamento?

O roteamento básico tem apenas algumas etapas:

O roteador recebe um pacote de dados por uma de suas interfaces.
O roteador examina o endereço IP de destino do pacote.
O roteador procura a rede de destino desse IP na tabela de roteamento.
O roteador encaminha o pacote pela interface mais próxima da rede remota.

- Exemplo:

Vamos supor que um computador na rede A envie um pacote de dados para um computador na rede B.
O roteador conectado à rede A recebe o pacote e examina o endereço IP de destino. O endereço IP de destino é o endereço IP do computador na rede B. O roteador procura a rede de destino desse IP na tabela de roteamento. A tabela de roteamento indica que a rede de destino está conectada à interface do roteador conectada à rede B. O roteador encaminha o pacote pela interface conectada à rede B.

### Complexidade do roteamento

O roteamento pode ser muito complexo. Os roteadores geralmente são conectados a muitas redes. O tráfego pode ter que atravessar dezenas de roteadores antes de chegar ao destino final. Os roteadores-núcleo da Internet normalmente são conectados em uma malha, o que significa que um pacote pode seguir por diversos caminhos.

## Tabela de roteamento

As tabelas de roteamento são usadas pelos roteadores para determinar o caminho que os pacotes de dados devem seguir para chegar ao seu destino.

### Estrutura

As tabelas de roteamento geralmente têm quatro colunas:

- **Rede de destino:** O endereço IP da rede de destino.
- **Próximo salto:** O endereço IP do próximo roteador que deve receber o pacote.
- **Total de saltos:** O número de roteadores que o pacote deve atravessar para chegar ao destino.
- **Interface:** A interface do roteador que deve ser usada para enviar o pacote.

#### Funcionamento

Quando um roteador recebe um pacote, ele verifica o endereço IP de destino do pacote na tabela de roteamento. Se o endereço IP de destino estiver na tabela, o roteador usará o próximo salto especificado na tabela para enviar o pacote.

Se o endereço IP de destino não estiver na tabela, o roteador pode usar uma tabela de rota default ou pode descartar o pacote.

##### Complexidade

As tabelas de roteamento podem ser muito complexas. Os roteadores da Internet podem ter tabelas de roteamento com milhões de linhas. Isso ocorre porque a Internet é uma rede muito grande e complexa, com muitas redes diferentes.

## Protocolos de gateway interno

Os protocolos de gateway interno se dividem em duas categorias:

- **Protocolos de roteamento pelo estado do link:** Esses protocolos compartilham informações sobre o estado de cada interface de rede de um roteador. Isso inclui informações como a velocidade da conexão, o atraso e a confiabilidade.
- **Protocolos de vetor de distância:** Esses protocolos compartilham informações sobre a distância de cada rede a partir de um roteador. A distância é geralmente medida em termos de número de saltos.

### Protocolos de vetor de distância

Os protocolos de vetor de distância são um padrão mais antigo. Eles são simples e eficientes, mas não fornecem informações completas sobre o estado de um sistema autônomo.

### Protocolos de roteamento pelo estado do link

Os protocolos de roteamento pelo estado do link são mais sofisticados do que os protocolos de vetor de distância. Eles fornecem informações completas sobre o estado de um sistema autônomo, o que permite que os roteadores tomem decisões mais informadas sobre o melhor caminho para enviar pacotes de dados.

#### Vantagens e desvantagens

Os protocolos de vetor de distância são mais simples e eficientes do que os protocolos de roteamento pelo estado do link. No entanto, eles fornecem menos informações, o que pode levar a decisões de roteamento menos precisas.

Os protocolos de roteamento pelo estado do link fornecem mais informações, o que pode levar a decisões de roteamento mais precisas. No entanto, eles são mais complexos e exigem mais recursos do que os protocolos de vetor de distância.

## Protocolos de gateway externo

Os protocolos de gateway externo são usados para enviar dados entre roteadores que representam as bordas de sistemas autônomos diferentes.

### Sistemas autônomos

A internet é uma teia enorme de sistemas autônomos. Os roteadores-núcleo da internet precisam conhecer os sistemas autônomos para direcionar o tráfego da forma certa.

### O objetivo dos roteadores-núcleo

O objetivo dos roteadores-núcleo é levar dados ao roteador de borda de um sistema autônomo.

#### A IANA

A IANA é uma organização sem fins lucrativos que ajuda a gerenciar tarefas como a alocação de endereços IP.

---
_A menos que você vá trabalhar em um provedor de serviços de Internet, conhecer mais detalhes do funcionamento dos protocolos de gateway externo não contribui muito para a maioria das pessoas em TI._
