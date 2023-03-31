exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('type').del()
    .then(function () {
      // Inserts seed entries
      return knex('type').insert([
        { type: 'Pizza Margherita', image: '52222edlpedlep', description: 'Classic pizza with tomato sauce and mozzarella cheese', price_id: 1, product_id: 1 },
        { type: 'Pepperoni Pizza', image: '52222edlpedlepe', description: 'Pizza with tomato sauce, mozzarella cheese, and pepperoni', price_id: 2, product_id: 1 },
        { type: 'Coca Cola', image: 'pmdee555de', description: 'Classic Coca Cola soda', price_id: 3, product_id: 3},
        {type: 'Cheeseburger', description: 'Classic cheeseburger with beef patty, cheese, lettuce, and tomato', image: 'hded5e588555',price_id: 4, product_id: 2},
        {type: 'Veggie Burger', description: 'Vegetarian burger with veggie patty, lettuce, tomato, and avocado', image: 'ded15555555de',price_id: 5, product_id: 2}
      ]);
    });
};
