'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@gustof/utils')
const db = require('@gustof/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { userNew } = req.body
    const { User } = await db()
    const result = await User.createUser(userNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { userUpdate } = req.body
    const { User } = await db()
    const result = await User.updateUser(uuid, userUpdate)
    res.send(result)
    
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.deletUser(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { User } = await db()
    const result = await User.findAllUser()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.findUserUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router