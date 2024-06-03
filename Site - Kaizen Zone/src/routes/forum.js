var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/listarPosts", function (req, res) {
    forumController.listarPosts(req, res);
});

module.exports = router;