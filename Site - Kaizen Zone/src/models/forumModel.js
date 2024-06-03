var database = require("../database/config")

function listarPosts() {
    console.log('Estou na função listaPosts do forumModel.js!');

    var query = `
    SELECT 
        p.id,
        p.titulo, 
        p.conteudo, 
        p.dtPost, 
        u.username 
    FROM post as p
    JOIN usuario as u
    ON p.fkCriadorPost = u.id 
    ORDER BY p.id DESC;
    `

    console.log(`Executando a instrução SQL: \n ${query}`);
    return database.executar(query);
}

module.exports = {
    listarPosts
}; 