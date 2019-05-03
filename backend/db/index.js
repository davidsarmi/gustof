'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupBillModel = require('./models/bill.model')
const setupCompanyModel= require('./models/company.model')
const setupAdd_OrderModel= require('./models/add_order.model')
const setupDetail_EntryModel= require('./models/detail_entry.model')
const setupDetail_OrderModel= require('./models/detail_order.model')
const setupEntryModel= require('./models/entry.model')
const setupOrderModel= require('./models/Order.model')
const setupIngredientsModel= require('./models/model.model')
const setupProductModel= require('./models/product.model')
const setupRaw_MaterialModel= require('./models/raw_material.model')
const setupTableModel= require('./models/table.model')

// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const BillModel = setupBillModel(config)
  const CompanyModel=setupCompanyModel(config)
  const Add_orderModel=setupAdd_OrderModel(config)
  const Detail_EntryModel=setupDetail_EntryModel(config)
  const Detail_OrderModel=setupDetail_OrderModel(config)
  const EntryModel=setupEntryModel(config)
  const OrderModel=setupOrderModel(config)
  const IngredientsModel=setupIngredientsModel(config)
  const ProductModel=setupProductModel(config)
  const Raw_MaterialModel=setupRaw_MaterialModel(config)
  const TableModel=setupTableModel(config) 

  UserModel.hasMany(BillModel)
  BillModel.belongsTo(UserModel)

  CompanyModel.hasMany(BillModel)
  BillModel.belongsTo(CompanyModel)

  OrderModel.hasMany(BillModel)
  BillModel.belongsTo(OrderModel)

  TableModel.hasMany(OrderModel)
  OrderModel.belongsTo(TableModel)

  Detail_EntryModel.hasMany(EntryModel)
  EntryModel.belongsTo(Detail_EntryModel)

  Raw_MaterialModel.hasMany(Detail_EntryModel)
  Detail_EntryModel.belongsTo(Raw_MaterialModel)

  Detail_EntryModel.hasMany(ProductModel)
  ProductModel.belongsTo(Detail_EntryModel)

  Raw_MaterialModel.hasMany(IngredientsModel)
  IngredientsModel.belongsTo(Raw_MaterialModel)

  IngredientsModel.hasMany(ProductModel)
  ProductModel.belongsTo(IngredientsModel)

  OrderModel.hasMany(Detail_OrderModel)
  Detail_OrderModel.belongsTo(OrderModel)

  Detail_OrderModel.hasMany(ProductModel)
  ProductModel.belongsTo(Detail_OrderModel)

  Add_orderModel.hasMany(ProductModel)
  ProductModel.belongsTo(Add_orderModel)

  Detail_OrderModel.hasMany(Add_orderModel)
  Add_orderModel.belongsTo(Detail_OrderModel)
  

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
