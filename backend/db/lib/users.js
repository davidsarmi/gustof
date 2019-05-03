'use strict'

function setupUser(userModel){
  async function createUser(user) {
    const result = await userModel.create(user)
    return result.toJSON()
  }
  async function updateUser(uuid, user) {
    const cond = { where: { uuid } }
    const result = await userModel.update(user, cond)
    return result ? userModel.findOne(cond) : new Error('no se actualizo ningun registro de usuarios')
  }
  async function deletUser(uuid){
    const cond = { where: { uuid } }
    const result = await userModel.destroy(cond)
    return result ? true : false
  }
  function findAllUser() {
    return userModel.findAll()
  }
  function findUserUuid(uuid) {
    const cond = { where: { uuid } }
    return userModel.findOne(cond)
  }

  return {
    createUser,
    updateUser,
    deletUser,
    findAllUser,
    findUserUuid
  }

}

module.exports = setupUser