const express = require('express')
const router = express.Router()
const { allUser, newUser, createUser,
    getSingleUser, getEditUser, putEditUser,
    deleteUser } = require('../controllers/users')

// All Users Route
router.get('/', allUser)

// New Users Route
router.get('/new', newUser)

// Create Users Route
router.post('/', createUser)

router.get('/:id', getSingleUser)

router.get('/:id/edit', getEditUser)

router.put('/:id', putEditUser)

router.delete('/:id', deleteUser)

module.exports = router