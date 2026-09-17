const express = require('express')
const pool = require('../config/db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await pool.query('SELECT 1')

    res.status(200).json({
      status: 'ok',
      server: 'running',
      database: 'connected',
    })
  } catch (error) {
    console.error('Health check database error:', error.message)

    res.status(500).json({
      status: 'error',
      server: 'running',
      database: 'disconnected',
    })
  }
})

module.exports = router
