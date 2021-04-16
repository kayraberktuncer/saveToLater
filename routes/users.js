const express = require('express')
const router = express.Router()
const {
  allUser,
  newUser,
  createUser,
  getSingleUser,
  getEditUser,
  putEditUser,
  deleteUser,
} = require('../controllers/users')

router.get('/', allUser)

router.get('/new', newUser)

router.post('/', createUser)

router.get('/:id', getSingleUser)

router.get('/:id/edit', getEditUser)

router.put('/:id', putEditUser)

router.delete('/:id', deleteUser)

module.exports = router
