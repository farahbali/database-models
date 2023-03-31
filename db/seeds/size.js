exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('size').del()
    .then(function () {
      // Inserts seed entries
      return knex('size').insert([
        {id: 1, size: 'Small', price_id: 1},
        {id: 2, size: 'Medium', price_id: 2},
        {id: 3, size: 'Large', price_id: 3},
        {id: 4, size: 'Extra Large', price_id: 4},
        {id: 5, size: '1 l', price_id: 5}
      ]);
    });
};
