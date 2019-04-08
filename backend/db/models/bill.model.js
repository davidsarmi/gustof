'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('bill', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    forma_pago: {
      type: Sequelize.ENUM('efectivo', 'tarjeta'),
      allowNull: false
    }
  })
}
