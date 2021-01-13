const express = require('express')
const router = express.Router()
const {getAllBooks, getNewBook, createBook, 
    showBook, getEditBook, putEditBook, 
    deleteBook} = require('../controllers/books')

// All Books Route
router.get('/', getAllBooks)

// New Book Route
router.get('/new', getNewBook)

// Create Book Route
router.post('/', createBook)

// Show Book Route
router.get('/:id', showBook)

// Edit Book Route
router.get('/:id/edit', getEditBook)

// Update Book Route
router.put('/:id', putEditBook)

// Delete Book Page
router.delete('/:id', deleteBook)

module.exports = router