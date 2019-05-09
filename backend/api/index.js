"use strict";

const { getLogger } = require("@gustof/utils");
const user = require("./user");
const table = require("./table");
const order = require("./order");
const company = require("./company");
const bill = require("./bill");

const log = getLogger(__dirname, __filename);
// prueba
module.exports = {
  home(req, res) {
    res.send({
      user: "/user",
      table: "/table",
      order: "/order",
      company: "/company",
      bill: "/bill"
    });
  },
  user,
  table,
  order,
  company,
  bill,
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
