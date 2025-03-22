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
app.use(helmet())
app.use(limiter)
app.use(morgan(':method :url :status'))
app.use(express.json())
const allowedOrigins = [CLIENT_URL]
app.use(
	cors({
		methods: ['GET', 'POST'],
		origin: allowedOrigins
	})
)
app.use((err, req, res, next) => {
	if (err instanceof rateLimit.RateLimitExceeded) {
		return res.status(429).json({
			message: 'Вы заблокированы на 5 минут, попробуйте позже'
		})
	} else {
		return res.status(500).json({
			message: 'Internal Server Error'
		})
	}
})

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

app.listen(PORT, () => {
	console.log(`server is listening port: ${PORT}`)
})
