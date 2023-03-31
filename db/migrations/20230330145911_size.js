
exports.up = function(knex) {
    return knex.schema
    .createTable('size', (table) => {
      table.increments();
      table.string('size').notNullable();
      table.timestamps(true, true);
    })
};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('size')
};
