"use strict";
// congig de la bade de datos
const { db: config } = require("@gustof/config");

// controladores
const setupUser = require("./lib/users");
const setupTable = require("./lib/table");
const setupOrder = require("./lib/order");

// modelos
const setupDatabase = require("./lib/db");
const setupUserModel = require("./models/User.model");
const setupBillModel = require("./models/Bill.model");
const setupCompanyModel = require("./models/Company.model");
const setupAdd_OrderModel = require("./models/AddOrder.model");
const setupDetail_EntryModel = require("./models/DetailEntry.model");
const setupDetail_OrderModel = require("./models/DetailOrder.model");
const setupEntryModel = require("./models/Entry.model");
const setupOrderModel = require("./models/Order.model");
const setupRecipeModel = require("./models/Recipe.model");
const setupProductModel = require("./models/Product.model");
const setupRaw_MaterialModel = require("./models/RawMaterial.model");
const setupTableModel = require("./models/Table.model");
const setupIngredientsModel = require("./models/Ingredients.model");

// const setupAgent = require('./lib/agent')

module.exports = async function() {
  const sequelize = setupDatabase(config);
  const UserModel = setupUserModel(config);
  const BillModel = setupBillModel(config);
  const CompanyModel = setupCompanyModel(config);
  const AddOrderModel = setupAdd_OrderModel(config);
  const DetailEntryModel = setupDetail_EntryModel(config);
  const DetailOrderModel = setupDetail_OrderModel(config);
  const EntryModel = setupEntryModel(config);
  const OrderModel = setupOrderModel(config);
  const RecipeModel = setupRecipeModel(config);
  const ProductModel = setupProductModel(config);
  const RawMaterialModel = setupRaw_MaterialModel(config);
  const TableModel = setupTableModel(config);
  const IngredientsModel = setupIngredientsModel(config);

  UserModel.hasMany(BillModel);
  BillModel.belongsTo(UserModel);

  CompanyModel.hasMany(BillModel);
  BillModel.belongsTo(CompanyModel);

  OrderModel.hasMany(BillModel);
  BillModel.belongsTo(OrderModel);

  TableModel.hasMany(OrderModel);
  OrderModel.belongsTo(TableModel);

  EntryModel.hasMany(DetailEntryModel);
  DetailEntryModel.belongsTo(EntryModel);

  RawMaterialModel.hasMany(DetailEntryModel);
  DetailEntryModel.belongsTo(RawMaterialModel);

  ProductModel.hasMany(DetailEntryModel);
  DetailEntryModel.belongsTo(ProductModel);

  RawMaterialModel.hasMany(RecipeModel);
  RecipeModel.belongsTo(RawMaterialModel);

  ProductModel.hasMany(RecipeModel);
  RecipeModel.belongsTo(ProductModel);

  OrderModel.hasMany(DetailOrderModel);
  DetailOrderModel.belongsTo(OrderModel);

  ProductModel.hasMany(DetailOrderModel);
  DetailOrderModel.belongsTo(ProductModel);

  ProductModel.hasMany(AddOrderModel);
  AddOrderModel.belongsTo(ProductModel);

  DetailOrderModel.hasMany(AddOrderModel);
  AddOrderModel.belongsTo(DetailOrderModel);

  RecipeModel.hasMany(IngredientsModel);
  IngredientsModel.belongsTo(RecipeModel);

  RawMaterialModel.hasMany(IngredientsModel);
  IngredientsModel.belongsTo(RawMaterialModel);

  await sequelize.authenticate();

  const User = setupUser(UserModel);
  const Table = setupTable(TableModel);
  const Order = setupOrder(OrderModel);

  return {
    async setup() {
      await sequelize.sync({ force: true });
    },
    User,
    Table,
    Order
  };
};
