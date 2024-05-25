CREATE DATABASE kaizen;
USE kaizen;

CREATE USER 'kohatsu'@'localhost' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON kaizen.* TO 'kohatsu'@'localhost';

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
titulo VARCHAR(50),
conteudo TEXT,
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