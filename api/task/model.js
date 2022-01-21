// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .groupBy('t.task_id')
        .select("t.*", "project_name", "project_description")
    return rows
}

module.exports = {
    getAll
}