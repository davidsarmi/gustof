"use strict";

function setupProduct(productModel) {
  async function createProduct(product) {
    const result = await productModel.create(product);
    return result.toJSON();
  }
  async function updateProduct(uuid, product) {
    const cond = { where: { uuid } };
    const result = await productModel.update(product, cond);
    return result
      ? productModel.findOne(cond)
      : new Error("no se actualizo ningun registro de productos");
  }
  async function deletProduct(uuid) {
    const cond = { where: { uuid } };
    const result = await productModel.destroy(cond);
    return !!result;
  }
  function findAllProduct() {
    return productModel.findAll();
  }
  function findProductUuid(uuid) {
    const cond = { where: { uuid } };
    return productModel.findOne(cond);
  }

  return {
    createProduct,
    updateProduct,
    deletProduct,
    findAllProduct,
    findProductUuid
  };
}

module.exports = setupProduct;
