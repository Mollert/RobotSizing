
var robots = [
	{
		"model": "LR Mate-200iD",
		"payload": 7,
		"reach": 717,
		"5thOffset": 80,
		"moment": {
			"4thAxis": 16.6,
			"5thAxis": 16.6,
			"6thAxis": 9.4
		},
		"inertia": {
			"4thAxis": 0.47,
			"5thAxis": 0.47,
			"6thAxis": 0.15
		},
		"condensed": "LRMate200iD"
	},
	{
		"model": "M-10iA",
		"payload": 6,
		"reach": 1420,
		"5thOffset": 100,
		"moment": {
			"4thAxis": 15.7,
			"5thAxis": 9.8,
			"6thAxis": 5.9
		},
		"inertia": {
			"4thAxis": 0.63,
			"5thAxis": 0.22,
			"6thAxis": 0.06
		},		
		"condensed": "M10iA"
	},
	{
		"model": "M-20iB25",
		"payload": 25,
		"reach": 1778,
		"5thOffset": 100,
		"moment": {
			"4thAxis": 51,
			"5thAxis": 51,
			"6thAxis": 31
		},
		"inertia": {
			"4thAxis": 2.20,
			"5thAxis": 2.20,
			"6thAxis": 1.20
		},		
		"condensed": "M20iB25"
	},
	{
		"model": "M-710iC50",
		"payload": 50,
		"reach": 2050,
		"5thOffset": 175,
		"moment": {
			"4thAxis": 206,
			"5thAxis": 206,
			"6thAxis": 127
		},
		"inertia": {
			"4thAxis": 28,
			"5thAxis": 28,
			"6thAxis": 11
		},		
		"condensed": "M710iC50"
	},
	{
		"model": "R-2000iC165F",
		"payload": 165,
		"reach": 310,
		"5thOffset": 215,
		"moment": {
			"4thAxis": 940,
			"5thAxis": 940,
			"6thAxis": 490
		},
		"inertia": {
			"4thAxis": 89,
			"5thAxis": 89,
			"6thAxis": 46
		},		
		"condensed": "R2000iC165F"
	},
	{
		"model": "M-900iB350",
		"payload": 360,
		"reach": 2655,
		"5thOffset": 260,
		"moment": {
			"4thAxis": 1960,
			"5thAxis": 1960,
			"6thAxis": 1050
		},
		"inertia": {
			"4thAxis": 260,
			"5thAxis": 260,
			"6thAxis": 160
		},		
		"condensed": "M900iB350"
	}
];

module.exports = robots;

// moments are in Nm
// inertia is in kg m^2
