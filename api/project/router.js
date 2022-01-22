// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
            if (projects.project_completed === 0) {
                    res.json(projects)
            } else {
                res.json(projects)
            }
    } catch (err) {
        next(err)
    }   
})

router.post('/', (req, res, next) => {
    const project = req.body

    Project.add(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router