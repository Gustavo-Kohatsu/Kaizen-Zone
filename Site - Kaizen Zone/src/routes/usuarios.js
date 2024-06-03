var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/pegarID", function (req, res) {
    usuarioController.pegarID(req, res);
});

router.get("/pegarDadosPergunta1", function(req, res) {
    usuarioController.pegarDadosPergunta1(req, res);
});

router.get("/pegarDadosPergunta2", function(req, res) {
    usuarioController.pegarDadosPergunta2(req, res);
});

router.get("/pegarDadosPergunta3", function(req, res) {
    usuarioController.pegarDadosPergunta3(req, res);
});

router.get("/pegarDadosPergunta4", function(req, res) {
    usuarioController.pegarDadosPergunta4(req, res);
});

module.exports = router;