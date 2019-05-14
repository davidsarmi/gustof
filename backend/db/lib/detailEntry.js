'use strict'

function setupDetailEntry (detailEntryModel) {
  async function createDetailEntry (detailEntry) {
    const result = await detailEntryModel.create(detailEntry)
    return result.toJSON()
  }
  async function updateDetailEntry (uuid, detailEntry) {
    const cond = { where: { uuid } }
    const result = await detailEntryModel.update(detailEntry, cond)
    return result ? detailEntryModel.findOne(cond) : new Error('no se actualizo ningun registro de detalle entrada')
  }
  async function deletDetailEntry (uuid) {
    const cond = { where: { uuid } }
    const result = await detailEntryModel.destroy(cond)
    return !!result
  }
  function findAllDetailEntry () {
    return detailEntryModel.findAll()
  }
  function findDetailEntryUuid (uuid) {
    const cond = { where: { uuid } }
    return detailEntryModel.findOne(cond)
  }

  return {
    createDetailEntry,
    updateDetailEntry,
    deletDetailEntry,
    findAllDetailEntry,
    findDetailEntryUuid
  }
}

module.exports = setupDetailEntry
