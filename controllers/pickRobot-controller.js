
var express = require("express");
var request = require('request');
var router = express.Router();

var robots = require("../dBase/robots.js");

// return distance for moment and inertia when center of gravity is off of robot center
function disOfHypotenuse(distance1, distance2) {
	distance1 = parseFloat(distance1);
	distance2 = parseFloat(distance2);
	if (distance1 === 0 && distance2 === 0) {
		return 0.0;
	}
	else if (distance1 === 0) {
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

// return the moment for the 6th axis (uses prior function as distance)
function fig6Moment(distance, mass) {
	var a = distance / 1000 * mass * 9.81;
	a = a.toFixed(1);	
	return a;
}

// return the moment for the 4th and 5th axes (adds "z" distance and robot offset)
function fig45Moment(distanceZ, distance5th, mass) {
	distanceZ = parseFloat(distanceZ);
	distance5th = parseFloat(distance5th);
	var a = (distanceZ + distance5th) / 1000 * mass * 9.81;
	a = a.toFixed(1);	
	return a;
}

// figures the part inertia for all three axes
function figPartInertia(side1, side2, mass) {
	var b = side1 / 1000;
	var c = side2 / 1000;	
	var a = mass / 12 * (Math.pow(b, 2) + Math.pow(c, 2));
	a = a.toFixed(2);
	return a;
}

// figures the inertia from around the robot 6th axis
function fig6AxisInertia(partIn, dist, mass) {
	dist = dist / 1000;
	var a = parseFloat(partIn) + (mass * Math.pow(dist, 2));
	a = a.toFixed(2);
	return a;
}

// figures the inertia from around the robot 4th and 5th axes
function fig45AxisInertia(partIn, dist, distZ, offset, mass) {
	partIn = parseFloat(partIn);
	distZ = parseFloat(distZ);
	offset = parseFloat(offset);
	dist = dist / 1000;
	var b = (distZ + offset) / 1000;
	var a = partIn + (mass * (Math.pow(b, 2) + Math.pow(dist, 2)));
	a = a.toFixed(2);
	return a;
}

// figures percentage of a number
function figPercent(numberVar, numberMain) {
	var a = numberVar / numberMain * 100;
	a = a.toFixed(1);	
	return a;
}

function convertInMm(length) {
	var a = length / 25.4;
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

// grabs all of user entered data, process data to be displayed, sent to results page
router.post("/retrieveData", function(req, res) {
	var data = req.body;

	if (data.robotReach === "") {
		data.robotReach = 0;
	}

	if (data.partMass === "") {
		data.partMass = 0;
	}

	if (data.unitSelector === "us") {
		data.robotReach = convertInMm(data.robotReach);
		data.partMass = convertLbKg(data.partMass);
		data.sizeX = convertInMm(data.sizeX);
		data.sizeY = convertInMm(data.sizeY);
		data.sizeZ = convertInMm(data.sizeZ);
		data.gravityX = convertInMm(data.gravityX);
		data.gravityY = convertInMm(data.gravityY);
		data.gravityZ = convertInMm(data.gravityZ);
	}

	var selection = 5000;
	for ( i=0 ; i < robots.length ; i++ ) {
		if ( data.robotReach <= robots[i].reach && data.partMass <= robots[i].payload ) {
  			if (selection > robots[i].reach ) {
				selection = robots[i].reach;
				var value = i;
			}
		}
	}

	var capacityPercent = figPercent(data.partMass, robots[value].payload);
	var moment4 = fig45Moment(data.gravityZ, robots[value].offset5th, data.partMass);
	var moment4Percent = figPercent(moment4, robots[value].moment.axis4th);
	var moment5Percent = figPercent(moment4, robots[value].moment.axis5th);
	var distanceFor6 = disOfHypotenuse(data.gravityX, data.gravityY);
	var moment6 = fig6Moment(distanceFor6, data.partMass);
	var moment6Percent = figPercent(moment6, robots[value].moment.axis6th);
	var partInertia = figPartInertia(data.sizeY, data.sizeZ, data.partMass);
	var xInertia = fig45AxisInertia(partInertia, data.gravityY, data.gravityZ, robots[value].offset5th, data.partMass)
	var xInertiaPercent = figPercent(xInertia, robots[value].inertia.axis4th);
	var partInertia = figPartInertia(data.sizeX, data.sizeZ, data.partMass);
	var yInertia = fig45AxisInertia(partInertia, data.gravityX, data.gravityZ, robots[value].offset5th, data.partMass)
	var yInertiaPercent = figPercent(yInertia, robots[value].inertia.axis5th);
	var partInertia = figPartInertia(data.sizeX, data.sizeY, data.partMass);
	var zInertia = fig6AxisInertia(partInertia, distanceFor6, data.partMass)
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

module.exports = router;
