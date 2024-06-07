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
FOREIGN KEY (fkCriadorPost) REFERENCES usuario (id)
);

CREATE TABLE comentarios (
id INT AUTO_INCREMENT,
conteudo VARCHAR(280),
dtComentario DATETIME DEFAULT CURRENT_TIMESTAMP,
fkPost INT,
fkCriadorComentario INT,

PRIMARY KEY (id),
FOREIGN KEY (fkPost) REFERENCES post (id),
FOREIGN KEY (fkCriadorComentario) REFERENCES usuario (id)
);

CREATE TABLE perguntas (
id INT AUTO_INCREMENT,
pergunta VARCHAR(100) NOT NULL,

PRIMARY KEY (id)
);

CREATE TABLE alternativas (
id INT AUTO_INCREMENT,
resposta VARCHAR(45) NOT NULL,
fkPerguntas INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (fKPerguntas) REFERENCES perguntas (id)

);

CREATE TABLE alternativa_escolhida (
id INT AUTO_INCREMENT,
fkUsuario INT NOT NULL,
fkPerguntas INT NOT NULL,
fkAlternativas INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
FOREIGN KEY (fKPerguntas) REFERENCES perguntas (id),
FOREIGN KEY (fkAlternativas) REFERENCES alternativas (id)

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
('FORTNITE FNCS CHAMPIONSHIP ', 'Anunciaram FNCS Championship!! A premiação será em torno de 1 milhão e será no modo duplas, finalmente chegou!!', 'noticias', 1),
('COMPREI UM FUSCA AMARELO CANÁRIO!', 'BRINCADEIRA, HAHA!! APENAS COMPREI O PASSE DE BATALHA, ESTOU MUITO FELIZ!', 'noticias', 3);

INSERT INTO comentarios
(conteudo, fkPost, fkCriadorComentario)
VALUES
('Estou muito empolgado! Acredito que vou conseguir pegar pelo menos um top 10 nesse campeonato! Vou me esforçar muito!', 1, 6),
('Meu Deus! O que tem haver uma coisa com a outra?! Mas que bom, o passe de batalha tem diversos itens diversificados...', 2, 5);

INSERT INTO perguntas
(pergunta)
VALUES
('Qual sua função dentro do jogo em partidas competitivas?'),
('Quantas horas você joga Fortnite por dia?'),
('Qual é o seu modo de jogo favorito no Fortnite?'),
('Qual é o seu nível atual no Passe de Batalha?');

INSERT INTO alternativas
(resposta, fKPerguntas)
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

INSERT INTO alternativa_escolhida
(fkUsuario, fkAlternativas, fKPerguntas)
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
