/** Module dependencies */
// var rest = require('restler');
var fs = require('fs');
var JSONfile = './users.json';
var obj;



/** Class */
var User = function(id) {
	
	var data = null;

	/** Public methods */
	this.getData = function() {
		if (data !== null) {
			return data;
		} else {
			if (id) {
				console.log('we have an id');
			}
			/** Do ajax call to get data (e.g. load the json file) */
			fs.readFile(JSONfile,'utf8',function(err,data){
				if (err) {
					console.log(err)
				} else {
					data = JSON.parse(data);
					return data
				}
			});
			

			/** When API is available, switch to restler to get data */
			
			// rest.get('./../users.json', function(err, response) {
			// 	if (err) {
			// 		console.log(err);
			// 	}
			
			// 	data = response;
			// 	console.log(data);
			// });		
		}
	};

	this.getWins = function() {
		var userData = this.getData();
	};

	return this;
};

module.exports = User;