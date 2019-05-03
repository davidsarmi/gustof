'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    sexo: {
      type: Sequelize.ENUM('F', 'M'),
      allowNull: false
    },
    apellido: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cedula: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    contrasena: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}

