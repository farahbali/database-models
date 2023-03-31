
exports.up = function(knex) {
    return knex.schema
    .createTable('product', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('description');
      table.json('exclude_extra');
      table.string('image');
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('product')
};
