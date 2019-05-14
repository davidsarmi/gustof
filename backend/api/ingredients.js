"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { ingredientsNew } = req.body;
    const { Ingredients } = await db();
    const result = await Ingredients.createIngredients(ingredientsNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { ingredientsUpdate } = req.body;
    const { Ingredients } = await db();
    const result = await Ingredients.updateIngredients(uuid, ingredientsUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Ingredients } = await db();
    const result = await Ingredients.deletIngredients(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { Ingredients } = await db();
    const result = await Ingredients.findAllIngredients();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Ingredients } = await db();
    const result = await Ingredients.findIngredientsUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
