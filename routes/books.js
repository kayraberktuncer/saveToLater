const express = require('express')
const router = express.Router()
const {
  getAllBooks,
  getNewBook,
  createBook,
  showBook,
  getEditBook,
  putEditBook,
  deleteBook,
} = require('../controllers/books')

router.get('/', getAllBooks)

router.get('/new', getNewBook)

router.post('/', createBook)

router.get('/:id', showBook)

router.get('/:id/edit', getEditBook)

router.put('/:id', putEditBook)

router.delete('/:id', deleteBook)

module.exports = router
