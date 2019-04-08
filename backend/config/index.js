'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'gustof',
    username: process.env.DB_USER || 'gustof-user',
    password: process.env.DB_PASS || 'gustof12345',
    host: process.env.DB_HOST || '10.98.12.80',
    dialect: 'mysql'
  }
}

Object.assign(config, { pkg })

module.exports = config
