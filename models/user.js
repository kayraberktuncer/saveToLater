const mongoose = require('mongoose')
const Book = require('./book')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

userSchema.pre('remove', function (next) {
  Book.find({ user: this.id }, (err, books) => {
    if (err) {
      next(err)
    } else if (books.length > 0) {
      next(new Error('This user has books still'))
    } else {
      next()
    }
  })
})

module.exports = mongoose.model('User', userSchema)
