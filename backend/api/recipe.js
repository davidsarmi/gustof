"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { recipeNew } = req.body;
    const { Recipe } = await db();
    const result = await Recipe.createRecipe(recipeNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { recipeUpdate } = req.body;
    const { Recipe } = await db();
    const result = await Recipe.updateRecipe(uuid, recipeUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Recipe } = await db();
    const result = await Recipe.deletRecipe(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { Recipe } = await db();
    const result = await Recipe.findAllRecipe();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Recipe } = await db();
    const result = await Recipe.findRecipeUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
