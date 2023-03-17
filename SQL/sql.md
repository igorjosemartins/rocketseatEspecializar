# SQL

-> vamos usar SQLite com o Beekeeper `https://www.beekeeperstudio.io`

-> baixar o arquivo `database.sqlite` do repositório `https://github.com/jakeliny/Discover-SQL`



## Unindo Tabelas

-> baixar o arquivo `unindo_tabelas.sqlite` do repositório `https://github.com/jakeliny/Discover-SQL`


### JOIN

-> o comando `JOIN` serve para trazer o conteúdo de 2 ou mais tabelas para uma só

-> o comando `ON` serve para dizer qual será o relacionamento entre as tabelas selecionadas

-> aqui estamos pegando toda a tabela de `funcionarios`, adicionando a tabela `departamentos`, e pegando o conteúdo de cada `id_dept` para a coluna de `id_departamentos`

-> o comando abaixo faz:
    -> pega a tabela `funcionarios`
    -> adiciona a tabela `departamentos`
    -> pega o conteúdo de cada `id` da tabela `departamentos`, e mostra na coluna `id_departamentos` na tabela `funcionarios`

```sql
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```

-> como resultado temos a adição da coluna `descricao` da tabela `departamentos` na tabela `funcionarios`


## JOIN com WHERE

-> mesma lógica do anterior, porém agora podemos filtrar o `id ` da tabela `departamentos`

```sql
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
WHERE departamentos.id_dept = 2
```

-> como resultado temos apenas os registros que possuem o `id` 2


### JOIN especificando campos

-> no `SELECT` podemos especificar quais atributos queremos que apareceram no resultado

-> no caso gostaria que me retornasse apenas o nome, cpf e qual departamento o funcionario trabalha

```sql
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao 
FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
WHERE departamentos.id_dept = 2
```


### Alias

-> esse comando só funciona dentro do `SELECT`

-> serve para simplificar o nome de entidades e atributos

-> para entidades:
    -> `funcionarios as func`

-> para atributos:
    -> `func.nome as "Nome"`

```sql
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento" 
FROM funcionarios as func
JOIN departamentos as dept
ON departamentos.id_dept = funcionarios.id_departamento
```


### LEFT OUTER JOIN

-> faz com que todo o conteudo da tabela apareça, mesmo que não tenha o relacionamento do `ON`

-> no caso temos um registro que não tem departamento, portanto não aparece quando buscamos com o comando que relaciona as duas tabelas

-> pra isso usamos `LEFT OUTER` antes do `JOIN`, que serve justamente para mostrar todo o conteúdo da tabela selecionada

-> o `LEFT` diz que ele irá pegar todo o conteúdo da tabela de sua esquerda, ou seja que vier antes dele no comando

```sql
SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```



## Comandos Avançados

-> baixar o arquivo `escola.sqlite` do repositório `https://github.com/jakeliny/Discover-SQL`


### ORDER BY

-> ordena uma coluna em ordem crescente

-> para ordernar decrescente usar `DESC`

-> sintaxe: `ORDER BY` + `atributo`

```sql
SELECT * FROM aluno
ORDER BY cpf
```


### LIMIT

-> serve para colocar um limite de dados

-> LIMIT 1, irá trazer o primeiro resultado

```sql
SELECT * FROM aluno LIMIT 2
```


### OFFSET

-> usado junto com o `LIMI`

-> serve para ignorar X dados

-> o comando abaixo irá:
    -> pegar todo o conteúdo da tabela `funcionarios`
    -> pega os 4 primeiros resultados
    -> ignora os 2 primeiros resultados
        -> logo irá pegar o 3, 4, 5, 6

```sql
SELECT * FROM funcionarios
LIMIT 4 OFFSET 2
```


### COUNT

-> conta quantos dados tem em algum atributo

-> existem 10 dados (funcionarios) no atributo `nome`

```sql
SELECT COUNT(nome) FROM funcionarios
```


### GROUP BY

-> agrupa dados semelhantes
    -> se tiver mais de um registro com o mesmo id, ele irá agrupar ao invés de contar ambos

-> leva como parâmetro o campo que voce quer selecionar

-> o comando irá fazer:
    -> mostrar o `id_departamento`
    -> e a quantidade de vezes que ele aparece
        -> ex: `id_departamento` = 1 | `count(id_departamento)` = 2
            -> o id 1 apareceu 2 vezes

```sql
SELECT count(id_departamento)
FROM funcionarios
GROUP BY id_departamento
```


### JOIN, GROUP BY e COUNT juntos

-> continuando o exemplo anteriro, agora podemos usar o `JOIN`, para ao invés de mostrar o `id_departamento`, mostrar o nome do departamento com o atributo `descricao`

-> o comando irá:
    -> mostrar a descrição do departamento
    -> quantos funcionarios tem em cada departamento
    -> pela tabela funcionarios
    -> adicionando a tabela departamentos
    -> relacionando os atributos iguais das duas tabelas (`id_departamento`)
    -> agrupando os resultados por id_dept

```sql
SELECT departamentos.descricao, count(funcionarios.id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
```


### HAVING

-> contar quantos funcionarios existem em cada departamento
    -> só quero mostrar os departamentos que tenham mais de 2 funcionarios
    -> poderíamos usar um `WHERE count(funcionarios.id_departamento) >= 2`, porém ele só funciona em campos isolados, no nosso caso é um campo agrupado `GROUP BY`
    -> portanto usamos o `HAVING`

```sql
SELECT departamentos.descricao, count(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
HAVING count(funcionarios.id_departamento) >= 2
```



## Comando nas Tabelas


### CREATE TABLE

-> criação de uma entidade através de códigos SQL

```sql
CREATE TABLE aluno(
    matricula INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf INTEGER UNIQUE,
    responsavel TEXT
)

CREATE TABLE professor(
    id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf INTEGER UNIQUE,
    materia TEXT
)

CREATE TABLE aulas(
    id_professor INTEGER,
    matricula INTEGER,
    FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
    FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)
```


### ALTER TABLE

-> edição de entidades e atributos através de códigos SQL

```sql

ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno
```


### DROP TABLE

-> exclusão de entidades através de códigos SQL

```sql
DROP TABLE alunos

DROP TABLE professores

DROP TABLE aulas
```