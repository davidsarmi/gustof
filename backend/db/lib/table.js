'use strict'

function setupTable(tableModel){
  async function createTable(table){
    const result = await tableModel.create(table)
    return result.toJSON()
  }
  return {
    createTable
  }
}

module.exports = setupTable