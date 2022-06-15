CREATE TABLE IF NOT EXISTS usuarios(
	id BIGSERIAL PRIMARY KEY,
  	nome VARCHAR(65) NOT NULL,
  	email VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios_imoveis(
	id BIGSERIAL PRIMARY KEY,
  	horario_visita TIMESTAMP NOT NULL,
  	id_imovel INTEGER NOT NULL,
  	FOREIGN KEY (id_imovel) REFERENCES imoveis(id) ON DELETE CASCADE,
  	id_usuario INTEGER NOT NULL,
  	FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE RESTRICT
);

INSERT INTO
	usuarios(nome, email)
VALUES
	('Fabio', 'fabio@kenzie.com.br'),
	('Alexandre', 'alexandre@kenzie.com.br'),
	('Felipe', 'felipe@kenzie.com.br'),
	('Pedro', 'pedro@kenzie.com.br'),
	('Maykel', 'maykel@kenzie.com.br');

SELECT * FROM usuarios;
SELECT * FROM imoveis;

INSERT INTO
	usuarios_imoveis(horario_visita, id_usuario, id_imovel)
VALUES
	('2022-06-15 12:00:00', 1, 11),
	('2022-06-16 12:00:00', 1, 12),
	('2022-06-17 12:00:00', 1, 4),
	('2022-06-15 13:00:00', 2, 11),
	('2022-06-16 13:00:00', 2, 12),
	('2022-06-17 13:00:00', 2, 4),
	('2022-06-15 12:00:00', (SELECT id FROM usuarios WHERE email = 'pedro@kenzie.com.br'), 3),
	('2022-06-16 12:00:00', (SELECT id FROM usuarios WHERE email = 'pedro@kenzie.com.br'), 5),
	('2022-06-17 12:00:00', (SELECT id FROM usuarios WHERE email = 'pedro@kenzie.com.br'), 6),
	('2022-06-18 12:00:00', (SELECT id FROM usuarios WHERE email = 'pedro@kenzie.com.br'), 9);
    
SELECT * FROM usuarios_imoveis ORDER BY id_imovel;

SELECT
	COUNT(*)
FROM
	usuarios_imoveis
WHERE
	horario_visita = '2022-06-15 12:00:00' AND id_imovel = 11;

SELECT
	u.nome nome_usuario,
    ui.horario_visita,
    i.valor
FROM
	usuarios u
JOIN usuarios_imoveis ui ON ui.id_usuario = u.id
JOIN imoveis i ON ui.id_imovel = i.id
WHERE u.email = 'fabio@kenzie.com.br';

SELECT
	u.nome nome_usuario,
    ui.horario_visita,
    i.valor
FROM
	usuarios_imoveis ui
JOIN usuarios u ON u.id = ui.id_usuario
JOIN imoveis i ON i.id = ui.id_imovel
WHERE u.email = 'fabio@kenzie.com.br';

SELECT 
	u.nome nome_usuario,
    ui.horario_visita,
    i.valor,
    e.logradouro,
    e.cep,
    e.complemento,
    e.cidade
FROM
	usuarios_imoveis ui
JOIN usuarios u ON u.id = ui.id_usuario
JOIN imoveis i ON i.id = ui.id_imovel
LEFT JOIN enderecos e ON e.id_imovel = i.id
WHERE u.email = 'pedro@kenzie.com.br';

--ESSA QUERIE PODE ACARRETAR EM UM PROBLEMA DE PERFORMANCE POR FAZER O JOIN DUAS VEZES COM A TABELA DE IMOVEIS
SELECT 
	u.nome nome_usuario,
    ui.horario_visita,
    ca.nome categoria,
    i.valor,
    e.logradouro,
    e.cep,
    e.complemento,
    e.cidade
FROM
	usuarios_imoveis ui
JOIN usuarios u ON u.id = ui.id_usuario
JOIN imoveis i ON i.id = ui.id_imovel
LEFT JOIN enderecos e ON e.id_imovel = i.id
JOIN imoveis im ON im.id = ui.id_usuario
JOIN categorias ca ON ca.id = im.id_categoria
WHERE u.email = 'pedro@kenzie.com.br';

SELECT
	COUNT(*) quantidade_visitas
FROM
	usuarios u
JOIN usuarios_imoveis ui ON ui.id_usuario = u.id
WHERE u.email = 'fabio@kenzie.com.br';

SELECT
	ROUND(AVG(valor), 2)
FROM
	imoveis i
JOIN usuarios_imoveis ui ON ui.id_imovel = i.id
JOIN usuarios u ON ui.id_usuario = u.id
WHERE u.email = 'fabio@kenzie.com.br';

