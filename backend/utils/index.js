'use strict'

const cache = require('./cache')
const terminate = require('./terminate')
const { getLogger, logHandler } = require('./logger')
const password = require('./password')

module.exports = {
  cache,
  terminate,
  getLogger,
  logHandler,
  password
}
