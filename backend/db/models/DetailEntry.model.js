'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('DetailEntry', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    producto: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cantidad: {
      type: Sequelize.TEXT,
      allowNull: false
    }
    
  })
}

