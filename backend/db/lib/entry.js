'use strict'

function setupEntry (entryModel) {
  async function createEntry (entry) {
    const result = await entryModel.create(entry)
    return result.toJSON()
  }
  async function updateEntry (uuid, entry) {
    const cond = { where: { uuid } }
    const result = await entryModel.update(entry, cond)
    return result ? entryModel.findOne(cond) : new Error('no se actualizo ningun registro de entrada')
  }
  async function deletEntry (uuid) {
    const cond = { where: { uuid } }
    const result = await entryModel.destroy(cond)
    return !!result
  }
  function findAllEntry () {
    return entryModel.findAll()
  }
  function findEntryUuid (uuid) {
    const cond = { where: { uuid } }
    return entryModel.findOne(cond)
  }

  return {
    createEntry,
    updateEntry,
    deletEntry,
    findAllEntry,
    findEntryUuid
  }
}

module.exports = setupEntry
