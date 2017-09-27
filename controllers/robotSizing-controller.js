
var express = require("express");
var request = require('request');
var router = express.Router();

var robotsArray = require("../dBase/robots.js");


router.get("/", function(req, res) {
	res.render("index");
// 	console.log("Made the main page get");
});

//router.post("/retrieveData", function(req, res) {
//	var data = req.body;
//	console.log(data);
//	res.render("index", {fakeFunders, nm});
//});

module.exports = router;