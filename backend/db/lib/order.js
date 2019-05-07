'use strict'

function setupOrder (OrderModel) {
  async function createOrder (order) {
    const result = await OrderModel.create(order)
    return result.toJSON()
  }
  return {
    createOrder
  }
}

module.exports = setupOrder
