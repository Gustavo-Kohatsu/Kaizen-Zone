var database = require("../database/config");

function publicar(titulo, conteudo, tipo, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, conteudo, idUsuario);

    var instrucaoSql = `
    INSERT INTO post 
    (titulo, conteudo, tipo, fkCriadorPost)
    VALUES
    ('${titulo}', '${conteudo}', '${tipo}', ${idUsuario});
    `;
    console.log(`Executando a instrução SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function pegarQtdPostsUser(idUsuario) {
    console.log('Estou no postModel.js - Na função pegarQtdPostsUser!!');
    var query = `
    SELECT 
        COUNT(id) AS totalPostUsuario 
    FROM post 
    WHERE fkCriadorPost = ${idUsuario};
    `;

    console.log(`Executando a instrução/query SQL: \n ${query}`);
    return database.executar(query);

}

function pegarQtdPostsTotal() {
    console.log('Estou no postModel.js - Na função pegarQtdPostsTotal!');
    var query = `
    SELECT 
	    COUNT(id) AS totalPost 
    FROM post;
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function pegarPostTeoria(idUsuario) {
    console.log('Estou no postModel.js - Na função pegarPostTeoria !')
    var query = `
    SELECT 
	    COUNT(tipo) AS postTeoria 
    FROM post 
    WHERE tipo = 'teorias' and fkCriadorPost = ${idUsuario};
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);

}

function pegarPostCompetitivo(idUsuario) {
    console.log('Estou no postModel.js - Na função pegarPostCompetitivo !')
    
    var query = `
    SELECT 
	    COUNT(tipo) AS postCompetitivo 
    FROM post 
    WHERE tipo = 'competitivo' AND fkCriadorPost = ${idUsuario};
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function pegarPostNoticia(idUsuario) {
    console.log('Estou no postModel.js - Na função pegarPostNoticia !')

    var query = `
    SELECT 
	    COUNT(tipo) AS postNoticias 
    FROM post 
    WHERE tipo = 'noticias' AND fkCriadorPost = ${idUsuario};
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

module.exports = {
    publicar,
    pegarQtdPostsUser,
    pegarQtdPostsTotal,
    pegarPostTeoria,
    pegarPostCompetitivo,
    pegarPostNoticia
}; 