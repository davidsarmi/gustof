"use strict";

function setupIngredients(ingredientsModel) {
  async function createIngredients(ingredients) {
    const result = await ingredientsModel.create(ingredients);
    return result.toJSON();
  }
  async function updateIngredients(uuid, ingredients) {
    const cond = { where: { uuid } };
    const result = await ingredientsModel.update(ingredients, cond);
    return result
      ? ingredientsModel.findOne(cond)
      : new Error("no se actualizo ningun registro de ingredientes");
  }
  async function deletIngredients(uuid) {
    const cond = { where: { uuid } };
    const result = await ingredientsModel.destroy(cond);
    return !!result;
  }
  function findAllIngredients() {
    return ingredientsModel.findAll();
  }
  function findIngredientsUuid(uuid) {
    const cond = { where: { uuid } };
    return ingredientsModel.findOne(cond);
  }

  return {
    createIngredients,
    updateIngredients,
    deletIngredients,
    findAllIngredients,
    findIngredientsUuid
  };
}

module.exports = setupIngredients;
