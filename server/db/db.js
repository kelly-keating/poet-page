const config = require('../../knexfile').development
const db = require('knex')(config)

function getAllPoems() {
    return db('Poems')
}

module.exports = {
    getAllPoems
}
