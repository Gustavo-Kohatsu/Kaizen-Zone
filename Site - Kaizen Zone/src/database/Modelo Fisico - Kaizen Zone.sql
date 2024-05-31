CREATE USER 'kohatsu'@'localhost' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON kaizen.* TO 'kohatsu'@'localhost';

-- drop DATABASE kaizen;
CREATE DATABASE kaizen;
USE kaizen;

CREATE TABLE usuario (
id INT AUTO_INCREMENT,
username VARCHAR(50),
senha VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
nascimento DATE,
bio TEXT,

PRIMARY KEY (id)
);

CREATE TABLE post (
id INT AUTO_INCREMENT,
titulo VARCHAR(50) NOT NULL,
conteudo VARCHAR(1800) NOT NULL,
tipo VARCHAR(45) NOT NULL, CHECK (tipo IN ('teorias', 'competitivo', 'noticias')), -- NOT NULL
dtPost DATETIME DEFAULT CURRENT_TIMESTAMP,
fkCriadorPost INT,

PRIMARY KEY (id),
FOREIGN KEY (fkCriadorPost) REFERENCES Usuario (id)
);

CREATE TABLE comentarios (
id INT AUTO_INCREMENT,
conteudo TEXT,
dtComentario DATETIME DEFAULT CURRENT_TIMESTAMP,
fkPost INT,
fkCriadorComentario INT,

PRIMARY KEY (id),
FOREIGN KEY (fkPost) REFERENCES Post (id),
FOREIGN KEY (fkCriadorComentario) REFERENCES Usuario (id)
);

INSERT INTO usuario
(username, senha, email, nascimento)
VALUES
('Kohatsu', '123', 'gustavokohatsu8@gmail.com', '2004-07-24');

insert into post
(titulo, conteudo, fkCriadorPost)
VALUES
('Fortnite Capítulo 1', 'Como ganhei a FNCS Championship', 1);

select * from usuario;
select * from post;
SELECT 
	COUNT(id) AS totalPost 
FROM post where fkcriadorpost = 2;

SELECT 
	COUNT(tipo) AS postTeoria 
FROM post WHERE tipo = 'teorias' AND fkCriadorPost = 1;

SELECT 
	COUNT(tipo) AS postCompetitivo 
FROM post WHERE tipo = 'competitivo' AND fkCriadorPost = 1;

SELECT 
	COUNT(tipo) AS postNoticias 
FROM post WHERE tipo = 'noticias' AND fkCriadorPost = 1;



