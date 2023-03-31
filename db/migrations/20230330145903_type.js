
exports.up = function(knex) {
    return knex.schema
    .createTable('type', (table) => {
      table.increments();
      table.string('type').notNullable();
      table.string('image');
      table.string('description');
      table.integer('product_id').references('id').inTable('product')
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('type')
};
