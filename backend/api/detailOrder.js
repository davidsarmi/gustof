"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { detailOrderNew } = req.body;
    const { DetailOrder } = await db();
    const result = await DetailOrder.createDetailOrder(detailOrderNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { detailOrderUpdate } = req.body;
    const { DetailOrder } = await db();
    const result = await DetailOrder.updateDetailOrder(uuid, detailOrderUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { DetailOrder } = await db();
    const result = await DetailOrder.deletDetailOrder(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { DetailOrder } = await db();
    const result = await DetailOrder.findAllDetailOrder();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { DetailOrder } = await db();
    const result = await DetailOrder.findDetailOrderUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
