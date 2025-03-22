const rateLimit = require('rate-limit')

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minute
	max: 10,
	message: 'Вы заблокированы на 5 минут, попробуйте позже',
	headers: true
})

module.exports = limiter
