ALTER TABLE
	pessoas
ADD COLUMN
	nome_coluna VARCHAR(45);
    
ALTER TABLE
	pessoas
DROP COLUMN
	nome_coluna;

ALTER TABLE
	pessoas
RENAME COLUMN
	nome_coluna
TO
	novo_nome_coluna;

ALTER TABLE
	pessoas
DROP COLUMN
	novo_nome_coluna;
    
ALTER TABLE
	pessoas
ADD COLUMN
	nascimento DATE;
    
UPDATE 
	pessoas
SET
	nascimento = '1990-01-01';
    
ALTER TABLE
	pessoas
ALTER COLUMN
	nascimento SET NOT NULL;
    
ALTER TABLE
	pessoas
RENAME COLUMN
	idade
TO
	altura;
    
UPDATE
	pessoas
SET
	altura = 1;
    
ALTER TABLE
	pessoas
ALTER COLUMN
	altura
TYPE DECIMAL(3,2);

UPDATE
	pessoas
SET
	altura = 1.70
WHERE
	nome = 'Maykel';
    
UPDATE 
	pessoas
SET
	modulo = 'M1'
WHERE
	nascimento = '1990-01-01';

ALTER TABLE
	pessoas
ADD CONSTRAINT
	email_unico UNIQUE(email);

SELECT
	*
FROM
	pessoas
WHERE
	id = (
    	SELECT
      		id
     	FROM
      		pessoas
      	WHERE
      		email = 'maykel@kenzie.com.br'
    );
    
UPDATE 
	pessoas
SET
	modulo = 'M4'
WHERE
	email = (
    	SELECT
      		email
      	FROM
      		pessoas
      	WHERE
      		nome = 'Fabio'
    )
RETURNING *;


DELETE FROM
	pessoas
WHERE
	altura = 1.70
RETURNING nome, email;


UPDATE
	pessoas
SET
	altura = 1.75
WHERE
	modulo::varchar LIKE 'M%';
    
UPDATE
	pessoas
SET
	nascimento = '1998-02-01'
WHERE
	nome ILIKE 'f%';
    

INSERT INTO
	pessoas (nome, altura, email, modulo, nascimento)
VALUES
	('Maykel', 1.80, 'maykel@kenzie.com.br', 'M3', '1997-03-03');
    
SELECT
	*
FROM
	pessoas;

SELECT
	*
FROM
	pessoas
WHERE
	id = '6bc0631b-63b7-4d8e-8f4f-89973019a0c0';
    
UPDATE
	pessoas
SET
	email = 'fabio.junior@kenzie.com.br'
WHERE
	id = '257e710a-c7fb-4f46-975b-280aab1deed9'
RETURNING *;


DELETE FROM
	pessoas
WHERE
	email LIKE 'f%';
    
ALTER TABLE
	pessoas
ADD COLUMN
	ativo BOOLEAN;
    
UPDATE
	pessoas
SET
	ativo = true;
    
UPDATE
	pessoas
SET
	ativo = false
WHERE
	email = 'alexandre@email.com.br'
RETURNING *;
