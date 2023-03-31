
exports.up = function(knex) {
    return knex.schema
    .createTable('price', (table) => {
      table.increments();
      table.decimal('price').notNullable();
      table.integer('size_id').references('id').inTable('size');
      table.integer('type_id').references('id').inTable('type');
      table.timestamps(true, true);
    })
};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('price')
};
