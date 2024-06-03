var forumModel = require("../models/forumModel");

function listarPosts(req, res) {
    console.log(`ESTOU NO forumController.js | Na função listarPosts!`);
    forumModel.listarPosts()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log(`Erro ao realizar a query, mensagem do erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        }
    );

}

module.exports = {
    listarPosts
}; 