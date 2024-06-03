var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json(resultadoAutenticar);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");

    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");

    } else if (dtNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");

    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, senha, email, dtNascimento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);

                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pegarID(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.pegarID(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`);

                    if (resultado.length == 1) {
                        console.log(resultado);

                        res.json(resultado);
                    } else if (resultado.length == 0) {
                        res.status(403).send("ERRO! resultado.length é igual a 0");
                    } else {
                        res.status(403).send("HOUVE ALGUM ERRO no usuarioController.js - Na função pegarID() !");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro realizar a query! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function pegarDadosPergunta1(req, res) {
    usuarioModel.pegarDadosPergunta1()
    .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado!');
            }
        }).catch(function (error) {
            console.log(error);
            console.log(`Houve um erro ao buscar o que foi solicitado! ${error.sqlMessage}`);
            res.status(500).json(error.sqlMessage)
        })
}

function pegarDadosPergunta2(req, res) {
    usuarioModel.pegarDadosPergunta2()
    .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado!');
            }
        }).catch(function (error) {
            console.log(error);
            console.log(`Houve um erro ao buscar o que foi solicitado! ${error.sqlMessage}`);
            res.status(500).json(error.sqlMessage)
        })
}

function pegarDadosPergunta3(req, res) {
    usuarioModel.pegarDadosPergunta3()
    .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado!');
            }
        }).catch(function (error) {
            console.log(error);
            console.log(`Houve um erro ao buscar o que foi solicitado! ${error.sqlMessage}`);
            res.status(500).json(error.sqlMessage)
        })
}

function pegarDadosPergunta4(req, res) {
    usuarioModel.pegarDadosPergunta4()
    .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado!');
            }
        }).catch(function (error) {
            console.log(error);
            console.log(`Houve um erro ao buscar o que foi solicitado! ${error.sqlMessage}`);
            res.status(500).json(error.sqlMessage)
        })
}



module.exports = {
    autenticar,
    cadastrar,
    pegarID,
    pegarDadosPergunta1,
    pegarDadosPergunta2,
    pegarDadosPergunta3,
    pegarDadosPergunta4
}