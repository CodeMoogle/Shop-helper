const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	label: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	expireDate: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
})

module.exports = Goods = mongoose.model('item', itemSchema)
