
var express = require("express");
var request = require('request');
var router = express.Router();

var robots = require("../dBase/robots.js");

router.get("/", function(req, res) {
	res.render("index");
});

router.post("/moreDetails", function(req, res) {
	var type = req.body.condensed;
	var expanded = "";
	for ( i=0 ; i<robots.length ; i++ ) {
		if (robots[i].condensed === type ) {
			expanded = robots[i].model;
		};
	}
	var mount = {
		"forModel": expanded,
		"forImage": type
	};
	res.render("mounting", {mount});
});

router.get("/contact", function(req, res) {
  res.render("contact");
});

module.exports = router;