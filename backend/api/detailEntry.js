'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@gustof/utils')
const db = require('@gustof/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { detailEntryNew } = req.body
    const { DetailEntry } = await db()
    const result = await DetailEntry.createDetailEntry(detailEntryNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const {detailEntryUpdate } = req.body
    const { DetailEntry } = await db()
    const result = await DetailEntry.updateDetailEntry(uuid, detailEntryUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { DetailEntry } = await db()
    const result = await DetailEntry.deletDetailEntry(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { DetailEntry } = await db()
    const result = await DetailEntry.findAllDetailEntry()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { DetailEntry } = await db()
    const result = await DetailEntry.findDetailEntryUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
