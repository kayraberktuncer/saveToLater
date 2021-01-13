const User = require('../models/user')
const Book = require('../models/book')

const allUser = async (req, res) => {
    let searchOptions = {}
    if (req.query.name !== null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const users = await User.find(searchOptions)
        res.render('users/index', {
            users: users,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
}

const newUser = (req, res) => {
    res.render('users/new', { user: new User() })
}

const createUser = async (req, res) => {
    const user = new User({
        name: req.body.name
    })
    try {
        const newUser = await user.save()
        res.redirect(`users/${newUser}`)
    } catch {
        res.render('users/new', {
            user: user,
            errorMessage: 'Error creating User'
        })
    }
}

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const books = await Book.find({ user: user.id }).limit(5).exec()
        res.render('users/show', {
            user: user,
            booksByUser: books
        })
    } catch {
        res.redirect('/')
    }
}

const getEditUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.render('users/edit', { user: user })
    } catch {
        res.redirect('/users')
    }
}

const putEditUser = async (req, res) => {
    let user
    try {
        user = await User.findById(req.params.id)
        user.name = req.body.name
        await user.save()
        res.redirect(`/users/${user.id}`)
    } catch {
        if (user == null) {
            res.redirect('/')
        } else {
            res.render('users/edit', {
                user: user,
                errorMessage: 'Error updating User'
            })

        }
    }
}

const deleteUser = async (req, res) => {
    let user
    try {
        user = await User.findById(req.params.id)
        await user.remove()
        res.redirect('/users')
    } catch {
        if (user == null) {
            res.redirect('/')
        } else {
            res.redirect(`/users/${user.id}`)
        }
    }
}

module.exports = {
    allUser,
    newUser,
    createUser,
    getSingleUser,
    getEditUser,
    putEditUser,
    deleteUser
}