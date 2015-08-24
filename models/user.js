/** Module dependencies */
// var rest = require('restler');
var fs = require('fs');
var JSONfile = require('./../users.json');

/** Class */
var User = function(id) {
	
	var data = null;

	/** Public methods */
	this.getData = function() {

		if (data !== null) {

			return data;

		} else {
			if (id) {
				for(i = 0; i < JSONfile.users.length; i++) {
					if (id === JSONfile.users[i].id) {
						data = JSONfile.users[i];
						break;
					}
				}
				return data;
			}
			return JSONfile.users;
			
		}

	};

	this.getPlatform = function() {
		if (id) {
			for(i = 0; i < JSONfile.users.length; i++) {
				if (id === JSONfile.users[i].id) {
					data = JSONfile.users[i];
					break;
				}
			}
			if (data.platform === 'pc') {
				return '<i class="fa fa-desktop"></i>'
			} //else ps4
		}			
	};

	return this;
};

module.exports = User;