const express = require('express')
const router = express.Router()
const { indexController, booksApi, usersApi } = require('../controllers/index')

router.get('/', indexController)
router.get('/books/api', booksApi)
router.get('/users/api', usersApi)

module.exports = router
