const { Router } = require('express')
const num_to_english_router = require('./num-to-english')

const router = Router()

router.get('/num_to_english', num_to_english_router)

module.exports = router
