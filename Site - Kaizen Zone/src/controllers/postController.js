var postModel = require("../models/postModel");

function publicar(req, res) {
    var titulo = req.body.tituloPost;
    var conteudo = req.body.conteudoPost;
    var tipo = req.body.tipoPost;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("Título está indefinido!");

    } else if (conteudo == undefined) {
        res.status(400).send("Conteúdo está indefinido!");

    } else if (tipo == undefined) {
        res.status(400).send("Tipo do post está indefinido!");

    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");

    } else {
        postModel.publicar(titulo, conteudo, tipo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(`Houve um erro ao realizar o post: ${erro.sqlMessage}`);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function pegarQtdPostsUser(req, res) {
    var idUsuario = req.params.idUsuario;

    postModel.pegarQtdPostsUser(idUsuario)
    .then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar o que foi solicitado! ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage)
    })
}

function pegarQtdPostsTotal(req, res) {
    postModel.pegarQtdPostsTotal()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function (error) {
        console.log(error);
        console.log(`Houve um erro ao buscar o que foi solicitado! ${error.sqlMessage}`);
        res.status(500).json(error.sqlMessage)

    })
}

function pegarPostTeoria(req, res) {
    var idUsuario = req.params.idUsuario;

    postModel.pegarPostTeoria(idUsuario)
    .then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar o que foi solicitado! ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage)
    })
}

function pegarPostCompetitivo(req, res) {
    var idUsuario = req.params.idUsuario;

    postModel.pegarPostCompetitivo(idUsuario)
    .then
    (function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar o que foi solicitado! ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage)
    })

}

function pegarPostNoticia(req, res) {
    var idUsuario = req.params.idUsuario;

    postModel.pegarPostNoticia(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log(`Houve um erro ao buscar o que foi solicitado! ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    publicar,
    pegarQtdPostsUser,
    pegarQtdPostsTotal,
    pegarPostTeoria,
    pegarPostCompetitivo,
    pegarPostNoticia
}; 