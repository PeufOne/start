var express = require('express')
var router = express.Router()
var User = require('../models/user')

router
	.get('/', function(req, res, next) {
		User.find(req.query, (err, users) => {
			if (!err) {
	  			res.json(users)
			}else next(err)
		})
	})
	.post('/', function(req, res, next) {
		var user = new User(req.body)
		user.save(err => {
			if (!err) {
				res.json({success: true, user})
			}else next(err)
		})
	})

module.exports = router
