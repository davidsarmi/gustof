"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { rawMaterialNew } = req.body;
    const { RawMaterial } = await db();
    const result = await RawMaterial.createRawMaterial(rawMaterialNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { rawMaterialUpdate } = req.body;
    const { RawMaterial } = await db();
    const result = await RawMaterial.updateRawMaterial(uuid, rawMaterialUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { RawMaterial } = await db();
    const result = await RawMaterial.deletRawMaterial(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { RawMaterial } = await db();
    const result = await RawMaterial.findAllRawMaterial();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { RawMaterial } = await db();
    const result = await RawMaterial.findRawMaterialUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
