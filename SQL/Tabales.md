# Tabelas

As tabelas são organizadas em linhas e colunas, as **linhas são frequentemente chamadas de registros e as colunas de campos.**

Os campos de uma tabela são **limitados àqueles definidos quando o banco de dados foi criado, mas o número de linhas é ilimitado.**

## Boas práticas

Os nomes das tabelas devem estar em **letras minúsculas e não devem incluir espaços `-` usamos sublinhados no lugar de espaços.** E, idealmente, o nome de uma tabela se referiria a um grupo coletivo (como `inventário`), mas também é aceitável que a tabela **tenha um nome no plural** (como `produtos`).

### registros

**Um registro é uma linha de uma tabela.** Ele contém dados sobre uma observação individual.

#### Campos

**Um campo é uma coluna em uma tabela.** Ele contém uma informação sobre todas as observações da tabela.

Como os nomes dos campos devem ser digitados ao consultar um banco de dados com SQL, a nomenclatura dos campos é importante. Geralmente, os nomes dos campos devem estar em **letras minúsculas e não devem envolver espaços.** O nome de um campo deve ser **singular e não plural** porque se refere às informações contidas nesse campo para um único registro. É por isso que nossa tabela possui os campos `card_num` e `name` em vez de `card_nums` e `names`. Da mesma forma, **dois campos de uma tabela não podem ter o mesmo nome.** Finalmente, **os nomes dos campos nunca devem compartilhar um nome com a tabela em que estão alojados,** para que fique claro em todos os casos se um campo ou tabela está sendo referido.

##### Assentos atribuídos

Um identificador exclusivo, às vezes chamado de `chave`, é exatamente o que parece: **um valor exclusivo que identifica um registro para que possa ser distinguido de outros registros na mesma tabela. Esse valor geralmente é um número.**

###### Quanto mais, melhor

**Ter mais tabelas, cada uma com um assunto claramente marcado, é geralmente melhor do que ter menos tabelas onde as informações sobre vários assuntos são combinadas.**

Sempre podemos usar SQL  para coletar informações de várias tabelas relacionadas e conectá-las se uma pergunta exigir, mas os tópicos da tabela devem permanecer separados.
