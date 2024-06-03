var database = require("../database/config")

function responderPost(comentario) {
    console.log('ESTOU NO comentariosModel.js | Na função responderPost()');

    var query = `
    INSERT INTO comentarios 
    (conteudo, fkPost, fkCriadorComentario)
    VALUES
    ('${comentario.conteudo}', ${comentario.idPost}, ${comentario.idCriadorComentario});`;

    return database.executar(query);
}

function buscarPostSelecionado(idPost) {
    console.log('ESTOU NO comentariosModel.js || Na função buscarPostSelecionado()');

    var query = `
    SELECT *
    FROM post AS p
    JOIN usuario AS u
    ON p.fkCriadorPost = u.id
    WHERE p.id = ${idPost};
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function buscarComentarios(idPost) {
    console.log('ESTOU NO comentariosModel.js || Na função buscarComentarios()');

    var query = `
    SELECT 
        coment.conteudo,
        coment.dtComentario,
        u.username
    FROM comentarios AS coment
    INNER JOIN usuario AS u
    ON coment.fkCriadorComentario = u.id
    WHERE fkPost = ${idPost}
    ORDER BY coment.id DESC;
    `

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

module.exports = {
    responderPost,
    buscarPostSelecionado,
    buscarComentarios
};