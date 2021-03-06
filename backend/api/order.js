"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { OrderNew } = req.body;
    const { Order } = await db();
    const result = await Order.createOrder(OrderNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.put("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { orderUpdate } = req.body;
    const { Order } = await db();
    const result = await Order.updateOrder(uuid, orderUpdate);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Order } = await db();
    const result = await Order.deletOrder(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { Order } = await db();
    const result = await Order.findAllOrder();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Order } = await db();
    const result = await Order.findOrderUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
