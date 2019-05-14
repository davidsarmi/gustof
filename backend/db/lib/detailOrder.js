"use strict";

function setupDetailOrder(detailOrderModel) {
  async function createDetailOrder(detailOrder) {
    const result = await detailOrderModel.create(detailOrder);
    return result.toJSON();
  }
  async function updateDetailOrder(uuid, detailOrder) {
    const cond = { where: { uuid } };
    const result = await detailOrderModel.update(detailOrder, cond);
    return result
      ? detailOrderModel.findOne(cond)
      : new Error("no se actualizo ningun registro de detalle pedido");
  }
  async function deletDetailOrder(uuid) {
    const cond = { where: { uuid } };
    const result = await detailOrderModel.destroy(cond);
    return !!result;
  }
  function findAllDetailOrder() {
    return detailOrderModel.findAll();
  }
  function findDetailOrderUuid(uuid) {
    const cond = { where: { uuid } };
    return detailOrderModel.findOne(cond);
  }

  return {
    createDetailOrder,
    updateDetailOrder,
    deletDetailOrder,
    findAllDetailOrder,
    findDetailOrderUuid
  };
}

module.exports = setupDetailOrder;
