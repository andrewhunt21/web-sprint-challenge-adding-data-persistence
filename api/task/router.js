// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const task = req.body

    Task.add(task)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router