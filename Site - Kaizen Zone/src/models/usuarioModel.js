var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, username, email, nascimento FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, senha, email, dtNascimento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, dtNascimento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (username, senha, email, nascimento) VALUES ('${nome}', '${senha}', '${email}', '${dtNascimento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarID(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var query = `
        SELECT 
            id
        FROM usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log(`Executando a query SQL: \n${query}`);
    return database.executar(query);

}

function pegarDadosPergunta1() {
    console.log(`Estou no usuarioModel.js - Na função pegarDadosPergunta1() !`);

    var query = `SELECT COUNT(altEsc.fkAlternativas) AS total_perg1, altEsc.fkAlternativas, altEsc.fKPerguntas FROM alternativa_escolhida AS altEsc INNER JOIN alternativas AS a ON altEsc.fkAlternativas = a.id INNER JOIN perguntas AS q ON altEsc.fKPerguntas = q.id INNER JOIN usuario AS u ON altEsc.fkUsuario = u.id WHERE altEsc.fKPerguntas = 1 AND altEsc.fkAlternativas IN (1, 2, 3, 4, 5) GROUP BY altEsc.fkAlternativas, altEsc.fKPerguntas ORDER BY altEsc.fkAlternativas;
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function pegarDadosPergunta2() {
    console.log(`Estou no usuarioModel.js - Na função pegarDadosPergunta2() !`);

    var query = `SELECT COUNT(altEsc.fkAlternativas) AS total_perg2, altEsc.fkAlternativas, altEsc.fKPerguntas FROM alternativa_escolhida AS altEsc INNER JOIN alternativas AS a ON altEsc.fkAlternativas = a.id INNER JOIN perguntas AS q ON altEsc.fKPerguntas = q.id INNER JOIN usuario AS u ON altEsc.fkUsuario = u.id WHERE altEsc.fKPerguntas = 2 AND altEsc.fkAlternativas IN (6, 7, 8, 9, 10) GROUP BY altEsc.fkAlternativas, altEsc.fKPerguntas ORDER BY altEsc.fkAlternativas;
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function pegarDadosPergunta3() {
    console.log(`Estou no usuarioModel.js - Na função pegarDadosPergunta2() !`);

    var query = `SELECT COUNT(altEsc.fkAlternativas) AS total_perg3, altEsc.fkAlternativas, altEsc.fKPerguntas FROM alternativa_escolhida AS altEsc INNER JOIN alternativas AS a ON altEsc.fkAlternativas = a.id INNER JOIN perguntas AS q ON altEsc.fKPerguntas = q.id INNER JOIN usuario AS u ON altEsc.fkUsuario = u.id WHERE altEsc.fKPerguntas = 3 AND altEsc.fkAlternativas IN (11, 12, 13, 14, 15) GROUP BY altEsc.fkAlternativas, altEsc.fKPerguntas ORDER BY altEsc.fkAlternativas;
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

function pegarDadosPergunta4() {
    console.log(`Estou no usuarioModel.js - Na função pegarDadosPergunta2() !`);

    var query = `SELECT COUNT(altEsc.fkAlternativas) AS total_perg4, altEsc.fkAlternativas, altEsc.fKPerguntas FROM alternativa_escolhida AS altEsc INNER JOIN alternativas AS a ON altEsc.fkAlternativas = a.id INNER JOIN perguntas AS q ON altEsc.fKPerguntas = q.id INNER JOIN usuario AS u ON altEsc.fkUsuario = u.id WHERE altEsc.fKPerguntas = 4 AND altEsc.fkAlternativas IN (16, 17, 18, 19, 20) GROUP BY altEsc.fkAlternativas, altEsc.fKPerguntas ORDER BY altEsc.fkAlternativas;
    `;

    console.log(`Executando a query SQL: \n ${query}`);
    return database.executar(query);
}

module.exports = {
    autenticar,
    cadastrar,
    pegarID,
    pegarDadosPergunta1,
    pegarDadosPergunta2,
    pegarDadosPergunta3,
    pegarDadosPergunta4
};