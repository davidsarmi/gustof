'use strict'
//congig de la bade de datos
const { db:config } = require('@gustof/config')

//controladores
const setupUser = require('./lib/users')
const setupTable = require('./lib/table')

//modelos
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/User.model')
const setupBillModel = require('./models/Bill.model')
const setupCompanyModel= require('./models/Company.model')
const setupAdd_OrderModel= require('./models/AddOrder.model')
const setupDetail_EntryModel= require('./models/DetailEntry.model')
const setupDetail_OrderModel= require('./models/DetailOrder.model')
const setupEntryModel= require('./models/Entry.model')
const setupOrderModel= require('./models/Order.model')
const setupIngredientsModel= require('./models/Ingredients.model')
const setupProductModel= require('./models/Product.model')
const setupRaw_MaterialModel= require('./models/RawMaterial.model')
const setupTableModel= require('./models/Table.model')

// const setupAgent = require('./lib/agent')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const BillModel = setupBillModel(config)
  const CompanyModel=setupCompanyModel(config)
  const AddOrderModel=setupAdd_OrderModel(config)
  const DetailEntryModel=setupDetail_EntryModel(config)
  const DetailOrderModel=setupDetail_OrderModel(config)
  const EntryModel=setupEntryModel(config)
  const OrderModel=setupOrderModel(config)
  const IngredientsModel=setupIngredientsModel(config)
  const ProductModel=setupProductModel(config)
  const RawMaterialModel=setupRaw_MaterialModel(config)
  const TableModel=setupTableModel(config) 

  UserModel.hasMany(BillModel)
  BillModel.belongsTo(UserModel)

  CompanyModel.hasMany(BillModel)
  BillModel.belongsTo(CompanyModel)

  OrderModel.hasMany(BillModel)
  BillModel.belongsTo(OrderModel)

  TableModel.hasMany(OrderModel)
  OrderModel.belongsTo(TableModel)

  DetailEntryModel.hasMany(EntryModel)
  EntryModel.belongsTo(DetailEntryModel)

  RawMaterialModel.hasMany(DetailEntryModel)
  DetailEntryModel.belongsTo(RawMaterialModel)

  DetailEntryModel.hasMany(ProductModel)
  ProductModel.belongsTo(DetailEntryModel)

  RawMaterialModel.hasMany(IngredientsModel)
  IngredientsModel.belongsTo(RawMaterialModel)

  IngredientsModel.hasMany(ProductModel)
  ProductModel.belongsTo(IngredientsModel)

  OrderModel.hasMany(DetailOrderModel)
  DetailOrderModel.belongsTo(OrderModel)

  DetailOrderModel.hasMany(ProductModel)
  ProductModel.belongsTo(DetailOrderModel)

  AddOrderModel.hasMany(ProductModel)
  ProductModel.belongsTo(AddOrderModel)

  DetailOrderModel.hasMany(AddOrderModel)
  AddOrderModel.belongsTo(DetailOrderModel)
  
  await sequelize.authenticate()

  const User = setupUser(UserModel)
  const Table = setupTable(TableModel)

  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
    Table
  }
}
