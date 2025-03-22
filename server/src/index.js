const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./api/router/userRouter')
const helmet = require('helmet')
const limiter = require('./api/utils/limiter')
const rateLimit = require('express-rate-limit')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI
const CLIENT_URL = process.env.CLIENT_URL

// middlewares
const allowedOrigins = [CLIENT_URL]
app.use(helmet())
app.use(
	cors({
		methods: ['GET', 'POST'],
		origin: allowedOrigins
	})
)
app.use(morgan(':method :url :status'))
app.use(express.json())
app.use(limiter)

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(err => {
		console.error('Connection to MongoDB failed', err)
	})

// routers
app.use(router)

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({
		message: 'Internal Server Error'
	})
})

app.listen(PORT, () => {
	console.log(`server is listening port: ${PORT}`)
})
