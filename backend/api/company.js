"use strict";

const { Router } = require("express");
const { getLogger, cache } = require("@gustof/utils");
const db = require("@gustof/db");

const log = getLogger(__dirname, __filename);
const router = new Router();

router.post("/", async function(req, res, next) {
  try {
    const { companyNew } = req.body;
    const { Company } = await db();
    const result = await Company.createCompany(companyNew);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Company } = await db();
    const result = await Company.deletCompany(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/", async function(req, res, next) {
  try {
    const { Company } = await db();
    const result = await Company.findAllCompany();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
router.get("/:uuid", async function(req, res, next) {
  try {
    const { uuid } = req.params;
    const { Company } = await db();
    const result = await Company.findCompanyUuid(uuid);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
