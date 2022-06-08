CREATE TABLE IF NOT EXISTS imoveis(
	id BIGSERIAL PRIMARY KEY,
  	endereco VARCHAR(60) NOT NULL,
  	preco DECIMAL(8,2) NOT NULL,
  	categoria VARCHAR(12) NOT NULL,
  	vendido BOOLEAN NOT NULL
);

INSERT INTO
	imoveis(endereco, preco, categoria, vendido)
VALUES
	('Rua 1, 1234', 150000, 'casa', false),
	('Rua 2, 1234', 250000, 'casa', false),
	('Rua 3, 1234', 300000, 'apartamento', false),
	('Rua 4, 1234', 100000, 'apartamento', false),
	('Rua 5, 1234', 240000, 'casa', false),
	('Rua 6, 1234', 50000, 'casa', false);
    
SELECT * FROM imoveis;

BEGIN;

UPDATE
	imoveis
SET
	vendido = true
WHERE
	categoria = 'casa'
RETURNING *;

DELETE FROM imoveis WHERE vendido = 'true';

COMMIT;
ROLLBACK;
