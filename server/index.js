const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// set up express
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server has started on port: ${PORT}`)
})

// set up mongoose
mongoose.connect(
	process.env.MONGODB_CONNECTION_STRING,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	error => {
		if (error) throw error
		console.log('MongoDB connection established')
	}
)

// set up routes
app.use('/users', require('./routes/userRouter'))
