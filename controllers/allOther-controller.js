
var express = require("express");
var request = require('request');
var router = express.Router();

router.get("/", function(req, res) {
	res.render("index");
// 	console.log("Made the main page get");
});

router.post("/moreDetails", function(req, res) {
	var type = req.body.condensed;
//	console.log(type);
	var mount = {
		"condensed": type
	};
	res.render("mounting", {mount});
});

router.get("/contact", function(req, res) {
  res.render("contact");
});

module.exports = router;