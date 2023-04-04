exports.seed = function(knex) {
    return knex('product_size').del()
      .then(function () {
        return knex('product_size').insert([
          {id:1, size_id: 1, product_id: 1 },
          {id:2, size_id: 2, product_id: 1 },
          {id:3, size_id: 3, product_id: 1 },
          {id:4, size_id: 1, product_id: 2 },
          {id:5, size_id: 2, product_id: 2 },
          {id:6, size_id: 5, product_id: 3 },
        ]);
      });
  };
  