// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const resource = req.body

    Resource.add(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router