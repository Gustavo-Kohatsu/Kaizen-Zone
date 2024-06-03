var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post('/responderPost', function (req, res) {
    comentariosController.responderPost(req, res)

});

router.get('/post/:idPost', function(req, res) {
    comentariosController.buscarPostSelecionado(req, res)
});

router.get('/comment/:idPost', function(req, res) {
    comentariosController.buscarComentarios(req, res)
})

module.exports = router;