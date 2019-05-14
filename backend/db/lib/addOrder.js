"use strict";

function setupAddOrder(addOrderModel) {
  async function createAddOrder(addOrder) {
    const result = await addOrderModel.create(addOrder);
    return result.toJSON();
  }
  async function updateAddOrder(uuid, addOrder) {
    const cond = { where: { uuid } };
    const result = await addOrderModel.update(addOrder, cond);
    return result
      ? addOrderModel.findOne(cond)
      : new Error("no se actualizo ningun registro de agregar pedido");
  }
  async function deletAddOrder(uuid) {
    const cond = { where: { uuid } };
    const result = await addOrderModel.destroy(cond);
    return !!result;
  }
  function findAllAddOrder() {
    return addOrderModel.findAll();
  }
  function findAddOrderUuid(uuid) {
    const cond = { where: { uuid } };
    return addOrderModel.findOne(cond);
  }

  return {
    createAddOrder,
    updateAddOrder,
    deletAddOrder,
    findAllAddOrder,
    findAddOrderUuid
  };
}

module.exports = setupAddOrder;
