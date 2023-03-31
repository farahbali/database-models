exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('price').del()
    .then(function () {
      // Inserts seed entries
      return knex('price').insert([
        { price: 5.99 },
        { price: 6.99 },
        { price: 7.99 },
        { price: 8.99 },
        { price: 18.99 },
        { price: 1.99 },
      ]);
    });
};
