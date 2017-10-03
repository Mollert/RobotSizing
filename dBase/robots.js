
var robots = [
	{
		"model": "LR Mate-200iD",
		"payload": 7,
		"reach": 717,
		"offset5th": 80,
		"moment": {
			"axis4th": 16.6,
			"axis5th": 16.6,
			"axis6th": 9.4
		},
		"inertia": {
			"axis4th": 0.47,
			"axis5th": 0.47,
			"axis6th": 0.15
		},
		"condensed": "LRMate200iD"
	},
	{
		"model": "M-10iA",
		"payload": 6,
		"reach": 1420,
		"offset5th": 100,
		"moment": {
			"axis4th": 15.7,
			"axis5th": 9.8,
			"axis6th": 5.9
		},
		"inertia": {
			"axis4th": 0.63,
			"axis5th": 0.22,
			"axis6th": 0.06
		},		
		"condensed": "M10iA"
	},
	{
		"model": "M-20iB25",
		"payload": 25,
		"reach": 1778,
		"offset5th": 100,
		"moment": {
			"axis4th": 51,
			"axis5th": 51,
			"axis6th": 31
		},
		"inertia": {
			"axis4th": 2.20,
			"axis5th": 2.20,
			"axis6th": 1.20
		},		
		"condensed": "M20iB25"
	},
	{
		"model": "M-710iC50",
		"payload": 50,
		"reach": 2050,
		"offset5th": 175,
		"moment": {
			"axis4th": 206,
			"axis5th": 206,
			"axis6th": 127
		},
		"inertia": {
			"axis4th": 28,
			"axis5th": 28,
			"axis6th": 11
		},		
		"condensed": "M710iC50"
	},
	{
		"model": "R-2000iC165F",
		"payload": 165,
		"reach": 2655,
		"offset5th": 215,
		"moment": {
			"axis4th": 940,
			"axis5th": 940,
			"axis6th": 490
		},
		"inertia": {
			"axis4th": 89,
			"axis5th": 89,
			"axis6th": 46
		},		
		"condensed": "R2000iC165F"
	},
	{
		"model": "M-900iB360",
		"payload": 360,
		"reach": 2655,
		"offset5th": 260,
		"moment": {
			"axis4th": 1960,
			"axis5th": 1960,
			"axis6th": 1050
		},
		"inertia": {
			"axis4th": 260,
			"axis5th": 260,
			"axis6th": 160
		},		
		"condensed": "M900iB360"
	}
];

module.exports = robots;

// moments are in Nm
// inertia is in kg m^2
