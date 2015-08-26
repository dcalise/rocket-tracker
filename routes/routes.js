var express = require('express');
var UserModel = require('./../models/user');
var MatchModel = require('./../models/matches');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rocket Tracker - Track Your Rocket League Stats Online!' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/users', function(req, res, next) {
	var user = new UserModel();
   	res.render('users', { title: 'User List', users: user.getData() });
});

router.get('/user/:id', function(req, res, next) {
	var user = new UserModel(req.params.id)
  var match = new MatchModel(req.params.id)
  	res.render('user', {
  		title: 'User specific',
  		user: user.getData(),
  		platform: user.getPlatform(),
      match: match.getData()
  	});
});

router.get('/search', function(req, res, next) {
  var val = req.query.q;
  console.log(val);
});

module.exports = router;
