'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@gustof/utils')
const db = require('@gustof/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { tableNew } = req.body
    const { Table } = await db()
    const result = await Table.createTable(tableNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router