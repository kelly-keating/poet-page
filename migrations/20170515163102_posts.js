exports.up = (knex, Promise) => {
  return knex.schema.createTable('Poems', function (table) {
    table.increments().primary()
    table.string('title')
    table.string('author')
    table.string('lines')
    table.integer('linecount')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Posts')
}
