"use strict";

const http = require("http");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const {
  errorHandler,
  home,
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
  recipe
} = require("@gustof/api");
const { getLogger, logHandler, terminate } = require("@gustof/utils");

const app = express();
const server = http.createServer(app);
const log = getLogger(__dirname, __filename);
const port = +process.env.PORT || 8000;

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logHandler);
app.get("/", home);
app.use("/user", user);
app.use("/table", table);
app.use("/order", order);
app.use("/company", company);
app.use("/bill", bill);
app.use("/entry", entry);
app.use("/detailEntry", detailEntry);
app.use("/addOrder", addOrder);
app.use("/detailOrder", detailOrder);
app.use("/ingredients", ingredients);
app.use("/product", product);
app.use("/rawMaterial", rawMaterial);
app.use("/recipe", recipe);

app.use(errorHandler);

module.exports = server;

if (!module.parent) {
  server.listen(port, () => {
    log.info(`server listening on http://localhost:${port}`);
  });

  process.on("SIGINT", terminate(0, "SIGINT"));
  process.on("SIGTERM", terminate(0, "SIGTERM"));
  process.on("uncaughtException", terminate(1, "uncaughtException"));
  process.on("unhandledRejection", terminate(1, "unhandledRejection"));
}
