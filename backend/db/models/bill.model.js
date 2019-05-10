const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('Bill', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    pedido: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cliente: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    empresa: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    forma_pago: {
      type: Sequelize.ENUM('efectivo', 'tarjeta'),
      allowNull: false
    }
  })
}
