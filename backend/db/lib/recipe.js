"use strict";

function setupRecipe(recipeModel) {
  async function createRecipe(recipe) {
    const result = await recipeModel.create(recipe);
    return result.toJSON();
  }
  async function updateRecipe(uuid, recipe) {
    const cond = { where: { uuid } };
    const result = await recipeModel.update(recipe, cond);
    return result
      ? recipeModel.findOne(cond)
      : new Error("no se actualizo ningun registro de receta");
  }
  async function deletRecipe(uuid) {
    const cond = { where: { uuid } };
    const result = await recipeModel.destroy(cond);
    return !!result;
  }
  function findAllRecipe() {
    return recipeModel.findAll();
  }
  function findRecipeUuid(uuid) {
    const cond = { where: { uuid } };
    return recipeModel.findOne(cond);
  }

  return {
    createRecipe,
    updateRecipe,
    deletRecipe,
    findAllRecipe,
    findRecipeUuid
  };
}

module.exports = setupRecipe;
