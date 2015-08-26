/** Module dependencies */
// var rest = require('restler');
var fs = require('fs');
var JSONfile = require('./../matches.json');

/** Class */
var Match = function(id) {
	
	var data = null;

	/** Public methods */
	this.getData = function() {

		console.log(data);
		// if (data !== null) {

		// 	return data;

		// } else {
		// 	if (id) {
		// 		for(i = 0; i < JSONfile.matches.length; i++) {
		// 			if (id === JSONfile.matches[i].id) {
		// 				data = JSONfile.matches[i];
		// 				break;
		// 			}
		// 		}
		// 		return data;
		// 	}
		// 	return JSONfile.matches;
			
		// }

	};

	return this;
};

module.exports = Match;