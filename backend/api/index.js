"use strict";

const { getLogger } = require("@gustof/utils");
const user = require("./user");
const table = require("./table");
const order = require("./order");
const company = require("./company");
const bill = require("./bill");
const entry = require("./entry");
const detailEntry = require("./detailEntry");
const addOrder = require("./addOrder");
const detailOrder = require("./detailOrder");
const ingredients = require("./ingredients");
const product = require("./product");
const rawMaterial = require("./rawMaterial");
const recipe = require("./recipe");

const log = getLogger(__dirname, __filename);
// prueba
module.exports = {
  home(req, res) {
    res.send({
      user: "/user",
      table: "/table",
      order: "/order",
      company: "/company",
      bill: "/bill",
      entry: "/entry",
      detailEntry: "/detailEntry",
      addOrder: "/addOrder",
      detailOrder: "/detailOrder",
      ingredients: "/ingredients",
      product: "/product",
      rawMaterial: "/rawMaterial",
      recipe: "/recipe"
    });
  },
  user,
  table,
  order,
  company,
  bill,
  entry,
  detailEntry,
  addOrder,
  detailOrder,
  ingredients,
  product,
  rawMaterial,
  recipe,

  errorHandler(err, req, res, next) {
    if (err) {
      let code = err.code || 500;
      const { id } = req;
      const { message, stack } = err;
      log.debug({ id, message: stack });
      log.error({ id, message });
      res.status(code).send({ error: message });
      return;
    }

    next();
  }
};
