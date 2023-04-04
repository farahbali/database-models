exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('price').del()
    .then(function () {
      // Inserts seed entries
      return knex('price').insert([
        {id:1, price: 5.99 },
        {id:2, price: 6.99 },
        {id:3, price: 7.99 },
        {id:4, price: 8.99 },
        {id:5, price: 18.99 },
      ]);
    });
};
