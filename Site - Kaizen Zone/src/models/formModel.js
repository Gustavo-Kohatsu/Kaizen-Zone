var database = require("../database/config");

function cadastrarResposta(dadosForm) {
    console.log('ESTOU NO formModel.js | Na função cadastrarResposta()');

    var query = `
    INSERT INTO answersUsuario
    (fkUsuario, fkQuestions, fkAnswers)
    VALUES
    (${dadosForm.fkUsuario}, ${dadosForm.fkQuestions}, ${dadosForm.fkAnswers});
    `;

    return database.executar(query);
}

module.exports = {
    cadastrarResposta
};