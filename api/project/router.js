// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
            if (projects.project_completed === 0) {
                    res.json(projects).stringify({project_completed: false})
            } else {
                res.json(projects).stringify({project_completed: true})
            }
    } catch (err) {
        next(err)
    }   
})

module.exports = router