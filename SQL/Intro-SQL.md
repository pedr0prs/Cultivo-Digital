# Apresentando bancos de dados

Um banco de dados armazena dados. Imaginemos que somos responsáveis ​​pelo armazenamento e organização dos dados de uma biblioteca. Poderíamos criar um banco de dados que contenha informações como os dados retratados aqui sobre clientes, livros e caixas. Essas informações ficam alojadas em objetos chamados tabelas, com dados organizados em linhas e colunas. Este banco de dados contém uma tabela de clientes, uma tabela de livros e uma tabela de checkouts.

Uma análise mais detalhada da tabela de usuários mostra que ela armazena vários dados sobre os usuários de nossa biblioteca, como número do cartão da biblioteca, nome, ano em que o usuário se tornou membro da biblioteca e o total de multas vencidas que o usuário deve à nossa biblioteca.

## Bancos de dados relacionais

Um banco de dados relacional define relacionamentos entre tabelas de dados dentro do banco de dados. Por exemplo, cada um dos usuários de nossa biblioteca pode estar associado a vários checkouts. Através destas relações, podemos tirar conclusões sobre os dados alojados em tabelas separadas na mesma base de dados e responder a perguntas como "Quais livros James consultou durante 2022?" ou "Quais livros são consultados com mais frequência?"

### Vantagens do banco de dados

Essas tabelas podem ser semelhantes à forma como os dados são organizados em aplicativos de planilhas, como Excel ou Planilhas Google, mas os bancos de dados são muito mais poderosos que as planilhas. Os bancos de dados podem armazenar muito mais dados e o armazenamento é mais seguro devido à criptografia.

Possivelmente, a maior vantagem de um banco de dados é que muitos usuários podem escrever consultas para coletar insights dos dados ao mesmo tempo. Quando um banco de dados é consultado, os dados armazenados dentro do banco de dados não mudam: em vez disso, as informações do banco de dados são acessadas e apresentadas de acordo com as instruções da consulta. O que nos leva à estrela deste show:

#### SQL

SQL, é a abreviação de Structured Query Language. É a linguagem de programação mais utilizada para criar, consultar e atualizar bancos de dados relacionais. Quando estivermos familiarizados com os dados que temos e em qual tabela eles estão armazenados, podemos usar SQL para começar a escrever consultas para responder perguntas sobre nossa biblioteca.