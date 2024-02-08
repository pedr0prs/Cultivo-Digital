# Tabelas

As tabelas são organizadas em linhas e colunas; no mundo dos bancos de dados, as linhas são frequentemente chamadas de registros e as colunas de campos. Os campos de uma tabela são limitados àqueles definidos quando o banco de dados foi criado, mas o número de linhas é ilimitado.

## Boas práticas

Os nomes das tabelas devem estar em letras minúsculas e não devem incluir espaços - usamos sublinhados no lugar de espaços. E, idealmente, o nome de uma tabela se referiria a um grupo coletivo (como "inventário"), mas também é aceitável que a tabela tenha um nome no plural (como "produtos").

### registros

Um registro é uma linha de uma tabela. Ele contém dados sobre uma observação individual. Observando a tabela de clientes, vemos que a tabela possui quatro registros: um para cada um dos clientes. O cadastro de Jasmin indica que ela se tornou associada em 2022 e deve dois dólares e cinco centavos em multas.

#### Campos

Um campo é uma coluna em uma tabela. Ele contém uma informação sobre todas as observações da tabela. O campo "nome" na tabela de usuários lista todos os nomes dos usuários de nossa biblioteca.

---
Como os nomes dos campos devem ser digitados ao consultar um banco de dados com SQL, a nomenclatura dos campos é importante. Geralmente, os nomes dos campos devem estar em letras minúsculas e não devem envolver espaços. O nome de um campo deve ser singular e não plural porque se refere às informações contidas nesse campo para um único registro. É por isso que nossa tabela possui os campos "card_num" e "name" em vez de "card_nums" e "names". Da mesma forma, dois campos de uma tabela não podem ter o mesmo nome. Finalmente, os nomes dos campos nunca devem compartilhar um nome com a tabela em que estão alojados, para que fique claro em todos os casos se um campo ou tabela está sendo referido.

##### Assentos atribuídos

Um identificador exclusivo, às vezes chamado de “chave”, é exatamente o que parece: um valor exclusivo que identifica um registro para que possa ser distinguido de outros registros na mesma tabela. Esse valor geralmente é um número. Na tabela de usuários, faz sentido usar o campo card_num como identificador exclusivo para cada usuário, e não o campo nome, porque é possível que, à medida que nossa pequena biblioteca cresce, dois usuários possam ter o mesmo nome.

###### Quanto mais, melhor

Ter mais tabelas, cada uma com um assunto claramente marcado, é geralmente melhor do que ter menos tabelas onde as informações sobre vários assuntos são combinadas. Dê uma olhada nas mesas de clientes e caixas. Agora, aqui está como seriam nossas tabelas de clientes e caixas se tentássemos combiná-las. São os mesmos dados, mas muito menos claros porque agora contêm informações duplicadas. Embora possamos ver que Izzy tem dois checkouts e Maham não tem nenhum, a coluna card_num não é mais exclusiva por causa dos múltiplos checkouts de Izzy. Sempre podemos usar SQL  para coletar informações de várias tabelas relacionadas e conectá-las se uma pergunta exigir, mas os tópicos da tabela devem permanecer separados.
