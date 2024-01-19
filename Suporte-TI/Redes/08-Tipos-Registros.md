# Tipos de registros de recursos

Os registros de recursos são as informações armazenadas nos servidores DNS que associam nomes de domínio a endereços IP. Existem dezenas de tipos diferentes de registros de recursos, cada um com uma função específica.

Os tipos de registros de recursos mais comuns são:

- **Registro A:** Associa um nome de domínio a um endereço IP IPv4.
- **Registro AAAA:** Associa um nome de domínio a um endereço IP IPv6.
- **Registro CNAME:* Associa um nome de domínio a outro nome de domínio.
- **Registro MX:** Associa um nome de domínio a um servidor de e-mail.
- **Registro SRV:** Associa um nome de domínio a um serviço específico.

## Anatomia de um nome de domínio

Um nome de domínio é composto de três partes principais:

Domínio de nível superior (TLD): A parte mais à direita do nome de domínio, que indica o tipo de organização ou país ao qual o domínio está associado. Alguns exemplos de TLDs são .com, .net, .org, .edu, .gov, .br e .uk.
Domínio: A parte do meio do nome de domínio, que identifica a organização ou pessoa que possui o domínio.
Subdomínio: A parte mais à esquerda do nome de domínio, que pode ser usada para identificar um host ou serviço específico dentro de um domínio.
Por exemplo, o nome de domínio "www.google.com" é composto das seguintes partes:

TLD: .com
Domínio: google
Subdomínio: www
Zonas DNS

Uma zona DNS é um conjunto de registros de recursos que são armazenados em um único servidor DNS. As zonas DNS são organizadas em uma hierarquia, com cada zona sendo responsável por um nível específico de domínio.

Os servidores-raiz são responsáveis pela zona-raiz, que contém informações sobre os TLDs. Os servidores de nomes de TLD são responsáveis pelas zonas que cobrem seus respectivos TLDs. Os servidores autoritativos são responsáveis pelas zonas que cobrem domínios específicos.

A finalidade das zonas DNS é facilitar o gerenciamento de registros de recursos. À medida que o número de registros de recursos em um domínio aumenta, torna-se mais difícil gerenciar todos eles. Dividindo as configurações em várias zonas, os administradores de rede podem simplificar o gerenciamento.
