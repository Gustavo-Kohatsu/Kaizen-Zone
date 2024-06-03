/*
CREATE USER 'kohatsu'@'localhost' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON kaizen.* TO 'kohatsu'@'localhost';
*/

drop DATABASE if exists kaizen;
CREATE DATABASE kaizen;
USE kaizen;

CREATE TABLE usuario (
id INT AUTO_INCREMENT,
username VARCHAR(50),
senha VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
nascimento DATE,
PRIMARY KEY (id)
);

CREATE TABLE post (
id INT AUTO_INCREMENT,
titulo VARCHAR(50) NOT NULL,
conteudo VARCHAR(1000) NOT NULL,
tipo VARCHAR(45) NOT NULL, CHECK (tipo IN ('teorias', 'competitivo', 'noticias')), -- NOT NULL
dtPost DATETIME DEFAULT CURRENT_TIMESTAMP,
fkCriadorPost INT,

PRIMARY KEY (id),
FOREIGN KEY (fkCriadorPost) REFERENCES Usuario (id)
);

CREATE TABLE comentarios (
id INT AUTO_INCREMENT,
conteudo VARCHAR(280),
dtComentario DATETIME DEFAULT CURRENT_TIMESTAMP,
fkPost INT,
fkCriadorComentario INT,

PRIMARY KEY (id),
FOREIGN KEY (fkPost) REFERENCES Post (id),
FOREIGN KEY (fkCriadorComentario) REFERENCES Usuario (id)
);

CREATE TABLE questions (
id INT AUTO_INCREMENT,
pergunta VARCHAR(100) NOT NULL,

PRIMARY KEY (id)
);

CREATE TABLE answers (
id INT AUTO_INCREMENT,
resposta VARCHAR(45) NOT NULL,
fkQuestions INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (fKQuestions) REFERENCES questions (id)

);

CREATE TABLE answersUsuario (
id INT AUTO_INCREMENT,
fkUsuario INT NOT NULL,
fkQuestions INT NOT NULL,
fkAnswers INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
FOREIGN KEY (fkQuestions) REFERENCES questions (id),
FOREIGN KEY (fkAnswers) REFERENCES answers (id)

);

INSERT INTO usuario
(username, senha, email, nascimento)
VALUES
('Kohatsu', '123', 'gustavokohatsu8@gmail.com', '2004-07-24'),
('Yuji', '123', 'kaikyuji@sptech.school', '2004-07-24'),
('Angela', '123', 'angelayumi@sptech.school', '1999-12-13'),
('Neide', '123', 'neideh.kohatsu@hotmail.com', '1970-11-19'),
('Edson Tadashi', '123', 'tna.comercial.ltda@gmail.com', '1966-10-16'),
('Ronaldo', '123', 'ronaldohiga@gmail.com', '1980-10-20');


insert into post
(titulo, conteudo, tipo, fkCriadorPost)
VALUES
('FORTNITE FNCS CHAMPIONSHIP ', 'Anunciaram FNCS Championship!! A premiação será em torno de 1 milhão e será no modo duplas, finalmente chegou!!', 'noticias', 1);

INSERT INTO questions
(pergunta)
VALUES
('Qual sua função dentro do jogo em partidas competitivas?'),
('Quantas horas você joga Fortnite por dia?'),
('Qual é o seu modo de jogo favorito no Fortnite?'),
('Qual é o seu nível atual no Passe de Batalha?');

INSERT INTO answers
(resposta, fkQuestions)
VALUES
('Não jogo competitivamente', 1),
('IGL (In-Game Leader)', 1),
('Fragger', 1),
('Suporte', 1),
('Pathmaker (Construtor de caminhos)', 1),

('Menos de 1 hora', 2),
('1 a 2 horas', 2),
('2 a 4 horas', 2),
('4 a 6 horas', 2),
('Mais de 6 horas', 2),

('Solo / Duplas', 3),
('Trio / Esquadrão (Squads)', 3),
('Arenas Competitivas', 3),
('Salve o Mundo (Save the World)', 3),
('Modo Criativo', 3),

('Não comprei o Passe de Batalha', 4),
('Nível 1 - 40', 4),
('Nível 41 - 80', 4),
('Nível 81 - 100', 4),
('Acima do Nível 100', 4);

INSERT INTO answersUsuario
(fkUsuario, fkAnswers, fkQuestions)
VALUES
(1, 1, 1),
(1, 6, 2),
(1, 11, 3),
(1, 16, 4),

(2, 2, 1),
(2, 7, 2),
(2, 12, 3),
(2, 17, 4),

(3, 3, 1),
(3, 8, 2),
(3, 13, 3),
(3, 18, 4),

(4, 4, 1),
(4, 9, 2),
(4, 14, 3),
(4, 19, 4),

(5, 5, 1),
(5, 10, 2),
(5, 15, 3),
(5, 20, 4),

(6, 4, 1),
(6, 6, 2),
(6, 12, 3),
(6, 18, 4);
