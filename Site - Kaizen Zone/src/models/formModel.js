var database = require("../database/config");

function cadastrarResposta(dadosForm) {
    console.log('ESTOU NO formModel.js | Na função cadastrarResposta()');

    var query = `
    INSERT INTO alternativa_escolhida
    (fkUsuario, fKPerguntas, fkAlternativas)
    VALUES
    (${dadosForm.fkUsuario}, ${dadosForm.fkQuestions}, ${dadosForm.fkAnswers});
    `;

    return database.executar(query);
}

module.exports = {
    cadastrarResposta
};