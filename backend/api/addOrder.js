"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { addOrderNew } = req.body;
    const { AddOrder } = await db();
    const result = await AddOrder.createAddOrder(addOrderNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { addOrderUpdate } = req.body;
    const { AddOrder } = await db();
    const result = await AddOrder.updateAddOrder(uuid, addOrderUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { AddOrder } = await db();
    const result = await AddOrder.deletAddOrder(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { AddOrder } = await db();
    const result = await AddOrder.findAllAddOrder();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { AddOrder } = await db();
    const result = await AddOrder.findAddOrderUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
