SELECT COUNT(*) total_imoveis FROM imoveis;

SELECT MAX(preco) mais_caro FROM imoveis;

SELECT MIN(preco) mais_barato FROM imoveis;

SELECT AVG(preco) media_preco FROM imoveis;

SELECT ROUND(AVG(preco), 2) media_preco FROM imoveis;

SELECT LOWER(endereco) endereco, categoria FROM imoveis;

SELECT LOWER(endereco) endereco, UPPER(categoria) categoria FROM imoveis;

ALTER TABLE
	imoveis
ALTER COLUMN
	preco TYPE FLOAT;
    
SELECT ROUND(AVG(preco)::NUMERIC, 2) media_preco FROM imoveis;

SELECT
	LOWER(endereco) endereco, categoria
FROM
	imoveis
WHERE
	categoria = 'casa';
    
SELECT
	*
FROM
	imoveis
ORDER BY categoria;

SELECT
	*
FROM
	imoveis
ORDER BY categoria DESC;

SELECT
	UPPER(endereco), preco, categoria
FROM
	imoveis
ORDER BY preco ASC;

SELECT
	UPPER(endereco), preco, categoria
FROM
	imoveis
ORDER BY preco DESC;

SELECT
	UPPER(endereco), preco, categoria
FROM
	imoveis
WHERE
	categoria = 'apartamento'
ORDER BY preco;

SELECT
	*
FROM
	imoveis
LIMIT 5 OFFSET 3;

SELECT
	UPPER(endereco), preco, categoria
FROM
	imoveis
WHERE
	categoria = 'apartamento'
ORDER BY preco LIMIT 2 OFFSET 2;


SELECT
	COUNT(*) total_imoveis, categoria
FROM
	imoveis
GROUP BY categoria;


UPDATE imoveis
	SET categoria = 'CASA'
WHERE id = 15;


SELECT
	COUNT(*) total_imoveis, UPPER(categoria)
FROM
	imoveis
GROUP BY UPPER(categoria);


UPDATE
	imoveis
SET 
	vendido = true
WHERE
	id = 21;

SELECT
	AVG(preco) media_preco, UPPER(categoria)
FROM
	imoveis
GROUP BY
	UPPER(categoria), vendido
HAVING
	vendido = false;
    
SELECT
	AVG(preco) AS media_preco, UPPER(categoria) AS categoria
FROM
	imoveis
WHERE
	vendido = false
GROUP BY
	UPPER(categoria);