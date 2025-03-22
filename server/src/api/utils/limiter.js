const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minute
	max: 10,
	handler: (req, res) => {
		console.log('ratelimiter')
		res.status(429).set('Content-Type', 'application/json').json({
			message: 'Вы заблокированы на 5 минут, попробуйте позже'
		})
	}
})

module.exports = limiter
