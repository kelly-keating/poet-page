const config = require('../../knexfile').development
const db = require('knex')(config)

function getAllPoems() {
    return db('Poems')
}

function getPoemById(id) {
    return db('Poems')
        .where('id', id)
        .first()
}

module.exports = {
    getAllPoems,
    getPoemById
}
