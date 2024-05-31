var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.post("/publicar/:idUsuario", function (req, res) {
    postController.publicar(req, res);
});

router.get("/pegarQtdPostsUser/:idUsuario", function (req, res) {
    postController.pegarQtdPostsUser(req, res);
});

router.get("/pegarQtdPostsTotal", function (req, res) {
    postController.pegarQtdPostsTotal(req, res);
});

router.get("/pegarPostTeoria/:idUsuario", function(req, res) {
    postController.pegarPostTeoria(req, res);
});

router.get("/pegarPostCompetitivo/:idUsuario", function (req, res) {
    postController.pegarPostCompetitivo(req, res);
});

router.get("/pegarPostNoticia/:idUsuario", function (req, res) {
    postController.pegarPostNoticia(req, res);
});

module.exports = router;