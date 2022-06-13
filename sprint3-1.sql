CREATE TABLE IF NOT EXISTS imoveis(
  	id BIGSERIAL PRIMARY KEY,
	vendido BOOLEAN DEFAULT false,
  	valor DECIMAL(8,2) NOT NULL,
  	tamanho INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS enderecos(
	id BIGSERIAL PRIMARY KEY,
  	logradouro VARCHAR(20) NOT NULL,
  	cep VARCHAR(12) NOT NULL,
  	numero VARCHAR(5),
  	complemento VARCHAR(45),
  	cidade VARCHAR(25) NOT NULL,
  	estado VARCHAR(2) NOT NULL,
  	id_imovel INTEGER UNIQUE NOT NULL,
  	FOREIGN KEY (id_imovel) REFERENCES imoveis(id) ON DELETE CASCADE
);

INSERT INTO
	imoveis(valor, vendido, tamanho)
VALUES
	(10000.00, DEFAULT, 50),
	(20000.00, true, 70),
	(30000.00, DEFAULT, 40),
	(40000.00, DEFAULT, 100),
	(50000.00, true, 50),
	(60000.00, DEFAULT, 50),
	(70000.00, true, 250),
	(80000.00, DEFAULT, 125),
	(90000.00, true, 50),
	(100000.00, DEFAULT, 47),
	(110000.00, DEFAULT, 80),
	(120000.50, DEFAULT, 90),
	(130000.25, DEFAULT, 50);
    
SELECT * FROM imoveis;
    
INSERT INTO
	enderecos(logradouro, cep, numero, cidade, estado, id_imovel)
VALUES
	('Rua 1', '7100000', '123', 'Brasilia', 'DF', 1),
	('Rua 2', '7100000', '234', 'Goiania', 'GO', (SELECT id FROM imoveis WHERE tamanho = 70)),
	('Rua 3', '7100000', '345', 'Sao Paulo', 'SP', 3),
	('Rua 4', '7100000', '34', 'Sao Paulo', 'SP', 5),
	('Rua 5', '7100000', '345', 'Goiania', 'GO', 6),
	('Rua 6', '7100000', '322', 'Brasilia', 'DF', 7);
    
    
SELECT * FROM enderecos;
    
SELECT
	*
FROM
	imoveis i
JOIN
	enderecos e ON i.id = e.id_imovel;
    
SELECT
	e.logradouro,
    e.cidade,
    i.valor
FROM
	imoveis i
JOIN
	enderecos e ON i.id = e.id_imovel;

SELECT
	e.logradouro,
    e.cidade,
    i.vendido,
    i.valor
FROM
	enderecos e
JOIN
	imoveis i ON i.id = e.id_imovel
WHERE i.vendido = true;

SELECT
	e.logradouro,
    e.cidade,
    i.vendido,
    i.valor
FROM
	enderecos e
JOIN
	imoveis i ON i.id = e.id_imovel
WHERE i.vendido = true AND e.cidade = 'Goiania';

