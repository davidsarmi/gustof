"use strict";
const { password } = require("@gustof/utils");

function setupUser(userModel) {
  async function createUser(user) {
    user.contrasena = password.generateHash(user.contrasena);
    const result = await userModel.create(user);
    return result.toJSON();
  }
  async function updateUser(uuid, user) {
    const cond = { where: { uuid } };
    const result = await userModel.update(user, cond);
    return result
      ? userModel.findOne(cond)
      : new Error("no se actualizo ningun registro de usuarios");
  }
  async function deletUser(uuid) {
    const cond = { where: { uuid } };
    const result = await userModel.destroy(cond);
    return !!result;
  }
  function findAllUser() {
    return userModel.findAll();
  }
  function findUserUuid(uuid) {
    const cond = { where: { uuid } };
    return userModel.findOne(cond);
  }
  async function singin(credentials) {
    let dataFail = "datos incorrectos";
    const cond = { where: { cedula: credentials.cedula } };
    const user = await userModel.findOne(cond);
    if (!user) {
      return {
        message: dataFail,
        login: false
      };
    }
    if (!password.compareHash(credentials.contrasena, user.contrasena)) {
      return {
        message: dataFail,
        login: false
      };
    }
    return {
      message: `Bienvenido`,
      user,
      login: true
    };
    console.log(mensaje);
  }

  return {
    createUser,
    updateUser,
    deletUser,
    findAllUser,
    findUserUuid,
    singin
  };
}

module.exports = setupUser;
