
var express = require("express");
var request = require('request');
var router = express.Router();

var robots = require("../dBase/robots.js");

function figInertia(side1, side2, mass) {
	var b = side1 / 1000;
	var c = side2 / 1000;	
	var a = (mass/12) * (Math.pow(b, 2) + Math.pow(c, 2));
	a = a.toFixed(2);
	return a;
}

function disForMoment(distance1, distance2) {
	if (distance1 === 0) {
		var a = distance2.toFixed(1);
		return a;
	}
	else if (distance2 === 0) {
		var b = distance1.toFixed(1);		
		return b;		
	}
	else {
		var c = Math.sqrt(Math.pow(distance1, 2) + Math.pow(distance2, 2));
		c = c.toFixed(1);
		return c;
	}
}

function fig6Moment(distance, mass) {
	var a = (distance / 1000) * (mass * 9.81);
	a = a.toFixed(1);	
	return a;
}

function fig45Moment(distanceZ, distance5th, mass) {
	var a = ((distanceZ + distance5th) / 1000) * (mass * 9.81);
	a = a.toFixed(1);	
	return a;
}

function figPercent(numberVar, numberMain) {
	var a = numberVar / numberMain * 100;
	a = a.toFixed(1);	
	return a;
}

function convertInMm(length) {
	var a = length * 25.4;
	a = a.toFixed(1);	
	return a;
}

function convertkgmmNm(length, mass) {
	var a = lenght * mass * 0.0098;
	a = a.toFixed(1);	
	return a;
}

function convertLbKg(mass) {
	var a = mass / 2.205;
	a = a.toFixed(1);
	return a;
}



router.post("/retrieveData", function(req, res) {
	var data = req.body;
	console.log(data);

	var selection = 5000;
	for ( i=0 ; i < robots.length ; i++ ) {
		if ( data.robotReach < robots[i].reach && data.partMass < robots[i].payload ) {
  			if (selection > robots[i].reach ) {
				selection = robots[i].reach;
				var value = i;
			}
		}
	}

	var capacityPercent = figPercent(data.partMass, robots[value].payload),
	var moment4 = fig45Moment(data.gravityZ, robots[value].offset5th, data.partMass);
	var moment4Percent = figPercent(moment4, robots[value].moment.axis4th);
	var moment5Percent = figPercent(moment4, robots[value].moment.axis5th);
	var moment6Dis = disForMoment(data.gravityX, data.gravityY);
	var moment6 = fig6Moment(moment6Dis, data.partMass);
	var moment6Percent = figPercent(moment6, robots[value].moment.axis6th);
	var xInertia = figInertia(data.sizeY, data.sizeZ, data.partMass);
	var xInertiaPercent = figPercent(xInertia, robots[value].inertia.axis4th);
	var yInertia = figInertia(data.sizeX, data.sizeZ, data.partMass);
	var yInertiaPercent = figPercent(yInertia, robots[value].inertia.axis5th);
	var zInertia = figInertia(data.sizeX, data.sizeY, data.partMass);
	var zInertiaPercent = figPercent(zInertia, robots[value].inertia.axis6th);

	var results = {
		"condensed": robots[value].condensed,
		"model": robots[value].model,
		"reach": robots[value].reach,
		"capacity": robots[value].payload,
		"capacityPercent": capacityPercent,
		"moment4": moment4,
		"moment4Percent": moment4Percent,
		"moment5": moment4,
		"moment5Percent": moment5Percent,
		"moment6": moment6,
		"moment6Percent": moment6Percent,
		"xInertia": xInertia,
		"xInertiaPercent": xInertiaPercent,
		"yInertia": yInertia,
		"yInertiaPercent": yInertiaPercent,
		"zInertia": zInertia,
		"zInertiaPercent": zInertiaPercent
	};
	res.render("results", {results});
});



/*
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
*/

module.exports = router;