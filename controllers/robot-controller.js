
var express = require("express");
var request = require('request');
var router = express.Router();

var robots = require("../dBase/robots.js");

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
/*
router.post("/retrieveData", function(req, res) {
	var data = req.body;
	console.log(data);

//	res.render("results", {results});
});
*/

router.post("/retrieveData", function(req, res) {
	var data = req.body;
	console.log(data);
	var results = {
	"condensed": "LRMate200iD",
	"model": "LR Mate-200iD",
	"reach": "717",
	"capacity": "7",
	"capacityPercent": "52",	
	"moment4": "5.4",
	"moment4Percent": "2",	
	"moment5": "16.1",
	"moment5Percent": "24",		
	"moment6": "13.6",
	"moment6Percent": "62",
	"xInertia": "9.22",
	"xInertiaPercent": "88",
	"yInertia": "4.15",
	"yInertiaPercent": "68",	
	"zInertia": "7.60",
	"zInertiaPercent": "71"
	}
	res.render("results", {results});
});

module.exports = router;