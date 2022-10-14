const db = require("../models")
const Blog = db.blogs

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!" })

    return
  }

  const blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date
  })

  blog
    .save(blog)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Blog."
      })
    })
}

exports.findAll = (req, res) => {
  Blog
    .find({ })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving blogs."
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Blog
    .findById(id)
    .then(data => {
        if (!data) {
            res.status(404).send({ message: "Not found Tutorial with id " + id })

            return
        }
      
        res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving Blog with id: ${id}` })
    })
}

exports.update = (req, res) => {
  if (!req.body)
    return res.status(400).send({
      message: 'Update data can not be empty!'
    })

  const id = req.params.id

  Blog
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
            message: `Cannot update Blog with id: ${id}.`
        })

        return
      }
      
      res.send({ message: "Blog was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Blog with id: ${id}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Blog
    .findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete Blog with id: ${id}.`
            })

            return
        }

        res.send({
            message: "Blog was deleted successfully!"
        })

    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      })
    })
}