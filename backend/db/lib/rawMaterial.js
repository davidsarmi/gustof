"use strict";
"use strict";

function setupRawMaterial(rawMaterialModel) {
  async function createRawMaterial(rawMaterial) {
    const result = await rawMaterialModel.create(rawMaterial);
    return result.toJSON();
  }
  async function updateRawMaterial(uuid, rawMaterial) {
    const cond = { where: { uuid } };
    const result = await rawMaterialModel.update(rawMaterial, cond);
    return result
      ? rawMaterialModel.findOne(cond)
      : new Error("no se actualizo ningun registro de materia prima");
  }
  async function deletRawMaterial(uuid) {
    const cond = { where: { uuid } };
    const result = await rawMaterialModel.destroy(cond);
    return !!result;
  }
  function findAllRawMaterial() {
    return rawMaterialModel.findAll();
  }
  function findRawMaterialUuid(uuid) {
    const cond = { where: { uuid } };
    return rawMaterialModel.findOne(cond);
  }

  return {
    createRawMaterial,
    updateRawMaterial,
    deletRawMaterial,
    findAllRawMaterial,
    findRawMaterialUuid
  };
}

module.exports = setupRawMaterial;
