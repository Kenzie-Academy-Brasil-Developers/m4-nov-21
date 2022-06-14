SELECT
	*
FROM
	enderecos
WHERE
	logradouro ~ '[A-Z].*$' AND numero <> '123';

CREATE TABLE IF NOT EXISTS categorias(
	id BIGSERIAL PRIMARY KEY,
  	nome VARCHAR(25) UNIQUE NOT NULL
);

ALTER TABLE
	imoveis
ADD COLUMN
	id_categoria INTEGER,
ADD FOREIGN KEY (id_categoria) REFERENCES categorias(id) ON DELETE RESTRICT;

INSERT INTO 
	categorias(nome)
VALUES
	('Casa'),
	('Apartamento'),    
	('Fazenda');
    
SELECT * FROM categorias;

SELECT * FROM imoveis;

UPDATE
	imoveis
SET id_categoria = 1
WHERE tamanho >= 100;

UPDATE
	imoveis
SET id_categoria = (SELECT id FROM categorias WHERE nome = 'Apartamento')
WHERE tamanho < 60
RETURNING *;

SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    i.tamanho
FROM
	categorias c
JOIN
	imoveis i ON c.id = i.id_categoria;
    
SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    i.tamanho
FROM
	categorias c
LEFT JOIN
	imoveis i ON c.id = i.id_categoria;
    
SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    i.tamanho
FROM
	imoveis i
LEFT JOIN
	categorias c ON c.id = i.id_categoria;
    

SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    i.tamanho
FROM
	categorias c
RIGHT JOIN
	imoveis i ON c.id = i.id_categoria;
    
SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    i.tamanho
FROM
	categorias c
FULL JOIN
	imoveis i ON c.id = i.id_categoria;

SELECT
    c.nome,
	COUNT(*) quantidade_imoveis
FROM
	categorias c
JOIN
	imoveis i ON c.id = i.id_categoria
GROUP BY c.nome;

SELECT
    c.nome,
	COUNT(*) quantidade_imoveis
FROM
	categorias c
JOIN
	imoveis i ON c.id = i.id_categoria
WHERE i.vendido <> true
GROUP BY c.nome;

SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    e.*
FROM
	categorias c
JOIN imoveis i ON c.id = i.id_categoria
JOIN enderecos e ON i.id = e.id_imovel;

SELECT
	c.nome nome_categoria,
    i.vendido,
    i.valor,
    e.*
FROM
	categorias c
JOIN imoveis i ON c.id = i.id_categoria
LEFT JOIN enderecos e ON i.id = e.id_imovel;

SELECT
	i.valor,
    e.logradouro
FROM
	imoveis i
JOIN
	enderecos e ON i.id = e.id_imovel;
    
SELECT
	*
FROM
	imoveis;
    
DELETE FROM
	imoveis
WHERE
	id = 2;

DELETE FROM
	categorias
WHERE
	id = 2
RETURNING *;

DELETE FROM
	categorias
WHERE
	id = 3
RETURNING *;
