module.exports = app => {

    const blogs = require('../controllers/blog.controller')
    const router = require('express').Router()

    router.post('/', blogs.create)
    router.get('/', blogs.findAll)
    router.get('/:id', blogs.findOne)
    router.put('/:id', blogs.update)
    router.delete('/:id', blogs.delete)

    app.use('/api/blogs', router)
}