var comentariosModel = require("../models/comentariosModel");

function responderPost(req, res) {
    var comentario = req.body.comentarioJSON;

    for (let valor of Object.keys(comentario)) {

        if (comentario[valor] == undefined) {
            res.status(400).send(`Seu ${valor} está indefinido!`)
            return false
        }
    }

    comentariosModel.responderPost(comentario)
        .then(function (resultado) {
            res.json(resultado)

        }).catch(function (error) {
            console.log(error);
            console.log(`\nHouve um erro ao realizar o cadastro! Erro: ${error.sqlMessage}`)
            res.status(500).json(error.sqlMessage);
        })
}

function buscarPostSelecionado(req, res) {
    var idPost = req.params.idPost;

    comentariosModel.buscarPostSelecionado(idPost)
    .then(function (result) {
        if (result.length > 0) {
            res.status(200).json(result)

        } else {
            res.status(204);send('Nenhum resultado encontrado!')
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar o post. ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage)
    })
}

function buscarComentarios(req, res) {
    var idPost = req.params.idPost;

    comentariosModel.buscarComentarios(idPost)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);

        } else {
            res.status(204).send('Nenhum resultado encontrado!');

        }
    }).catch(function(erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar as últimas medidas: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    responderPost,
    buscarPostSelecionado,
    buscarComentarios
};