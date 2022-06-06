CREATE DATABASE demos;

CREATE TABLE IF NOT EXISTS primeira_tabela(
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL UNIQUE
);

INSERT INTO primeira_tabela (nome) VALUES ('Fabio'), ('Maykel');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE modulo AS ENUM ('M1', 'M2', 'M3', 'M4');

CREATE TABLE IF NOT EXISTS pessoas(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome VARCHAR(45) NOT NULL,
  idade INTEGER NOT NULL,
  CHECK(idade > 0),
  email VARCHAR(45) NOT NULL,
  modulo modulo
);

INSERT INTO pessoas
	(nome, idade, email) 
VALUES
	('Fabio', 23, 'fabio@kenzie.com.br'),
	('Maykel', 23, 'maykel@kenzie.com.br');
    
INSERT INTO pessoas
	(nome, idade, email, modulo) 
VALUES
	('Felipe', 20, 'felipe@kenzie.com.br', 'M4'),
	('Alexandre', 20, 'alexandre@email.com.br', 'M3');
    

SELECT nome, idade FROM pessoas;

SELECT *
	FROM pessoas
WHERE idade >= 23;

SELECT *
	FROM pessoas
WHERE id = 'e8d3a722-8293-453f-9e0e-d179feee45a7';

SELECT *
	FROM pessoas
WHERE idade >= 20;

SELECT *
	FROM pessoas
WHERE idade >= 20 AND modulo = 'M4';

SELECT *
	FROM pessoas
WHERE idade >= 23 OR modulo = 'M3';

SELECT *
	FROM pessoas
WHERE (idade >= 20 AND modulo = 'M3') OR nome = 'Fabio';

SELECT *
	FROM pessoas
WHERE email LIKE '%kenzie.com.br';

SELECT *
	FROM pessoas
WHERE email LIKE '%kenzie.com%';

SELECT *
	FROM pessoas
WHERE email ILIKE '%EMAIL.COM%';