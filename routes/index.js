const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')
const { authenticator } = require('../middleware/auth')
router.use('/todos',authenticator, todos)
router.use('/users', authenticator, users)
router.use('/', home)



module.exports = router