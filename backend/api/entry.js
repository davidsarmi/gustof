'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@gustof/utils')
const db = require('@gustof/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { entryNew } = req.body
    const { Entry } = await db()
    const result = await Entry.createEntry(entryNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { entryUpdate } = req.body
    const { Entry } = await db()
    const result = await Entry.updateEntry(uuid, entryUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Entry } = await db()
    const result = await Entry.deletEntry(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Entry } = await db()
    const result = await Entry.findAllEntry()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Entry} = await db()
    const result = await Entry.findEntryUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router