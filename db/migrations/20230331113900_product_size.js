
exports.up = function(knex) {
    return knex.schema
    .createTable('product_size', (table) => {
      table.increments();
      table.integer('size_id').references('id').inTable('size');
      table.integer('product_id').references('id').inTable('product');
      table.timestamps(true, true);
    })
};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('product_size')
};
