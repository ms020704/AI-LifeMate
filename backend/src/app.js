const express = require('express')
const healthRoutes = require('./routes/healthRoutes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'AI LifeMate Backend Server Running',
  })
})

app.use('/api/health', healthRoutes)

module.exports = app
