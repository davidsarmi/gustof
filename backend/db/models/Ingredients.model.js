'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('Ingredients', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    materia: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    receta: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
