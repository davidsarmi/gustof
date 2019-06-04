"use strict";

function setupTable(tableModel) {
  async function createTable(table) {
    const result = await tableModel.create(table);
    return result.toJSON();
  }
  async function updateTable(uuid, table) {
    const cond = { where: { uuid } };
    const result = await tableModel.update(table, cond);
    return result
      ? tableModel.findOne(cond)
      : new Error("no se actualizo ningun mesa");
  }
  async function deletTable(uuid) {
    const cond = { where: { uuid } };
    const result = await tableModel.destroy(cond);
    return !!result;
  }
  function findAllTable() {
    return tableModel.findAll();
  }
  function findTableUuid(uuid) {
    const cond = { where: { uuid } };
    return tableModel.findOne(cond);
  }

  return {
    createTable,
    updateTable,
    deletTable,
    findAllTable,
    findTableUuid
  };
}

module.exports = setupTable;
