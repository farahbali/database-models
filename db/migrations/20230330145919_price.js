
exports.up = function(knex) {
    return knex.schema
    .createTable('price', (table) => {
      table.increments();
      table.decimal('price').notNullable();
      table.timestamps(true, true);
    })
};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('price')
};
