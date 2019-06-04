var mongoose = require('mongoose')

var user = new mongoose.Schema({
	name: {
			type: String,
			unique: true,
			required: true,
			trim: true
	}
})

user.set('timestamps', true)

module.exports = mongoose.model('user', user)