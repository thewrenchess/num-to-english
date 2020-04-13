const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const api_routes = require('./routes')

const PORT = process.env.PORT || 800

const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/', api_routes)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send({ error: err })
})

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})
