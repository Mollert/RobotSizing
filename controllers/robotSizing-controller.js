
var express = require("express");
var request = require('request')
var router = express.Router();

var robotsArray = require("../seed/robots.js");

router.get("/", function(req, res) {
	res.render("index");
// 	console.log("Made the main page get");
});

module.exports = router;