const { Router } = require('express')
const { convert_number_to_english } = require('../helpers/convert-number-to-english')

const router = Router()

router.get('/num_to_english', (req, res) => {
  const {
    query: {
      number
    }
  } = req

  if (!number) {
    return res
      .status(400)
      .json({
        error: 'missing number'
      })
  }

  try {
    const num_in_english = convert_number_to_english(number)
    return res.json({
      status: 'ok',
      num_in_english
    })
  } catch (err) {
    return res
      .status(400)
      .json({
        error: err.message
      })
  }
})

module.exports = router
