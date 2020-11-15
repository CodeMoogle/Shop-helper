const router = require('express').Router()
// middlewares
const auth = require('../middleware/auth')
// models
const Item = require('../models/ItemModel')

// routes
router.post('/', auth, async (req, res) => {
	try {
		const { label, quantity, expireDate } = req.body

		// Validation
		if (!label)
			return res
				.status(400)
				.json({ msg: 'Please fill in the field with the label of the product' })

		if (!quantity)
			return res.status(400).json({
				msg: 'Please fill in the field with the quantity of the product',
			})

		if (!expireDate)
			return res.status(400).json({
				msg: 'Please fill in the field with the expire date of the product',
			})

		const newItem = new Item({
			label,
			quantity,
			expireDate,
			userId: req.user,
		})

		const savedItem = await newItem.save()
		res.json(savedItem)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})
// get all user items
router.get('/all', auth, async (req, res) => {
	const item = await Item.find({ userId: req.user })
	res.json(item)
})
// delete item
router.delete('/:id', auth, async (req, res) => {
	const item = await Item.findOne({ userId: req.user, _id: req.params.id })
	if (!item) {
		return res.status(400).json({
			msg: 'No item found with this ID that belongs to the current user',
		})
	}
	const deletedItem = await Item.findByIdAndDelete(req.params.id)
	res.json(deletedItem)
})

module.exports = router
