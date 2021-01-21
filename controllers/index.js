const Book = require('../models/book')
const User = require('../models/user')

const indexController = async (req, res) => {
    let books
    try {
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
}

const booksApi = async(req,res) => {
    Book.find({}, (err, books) => {
        let bookMap = {};
    
        books.forEach((book) => {
            bookMap[book._id] = book.title;
        });
    
        res.send(bookMap);  
      });
}

const usersApi = async(req,res) => {
    User.find({}, (err, users) => {
        let userMap = {};
    
        users.forEach((user) => {
            userMap[user._id] = user.name;
        });
    
        res.send(userMap);  
      });
}

module.exports ={
    indexController,
    booksApi,
    usersApi
} 