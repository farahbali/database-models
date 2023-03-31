exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          id: 1, 
          name: 'Pizza',
          description: 'We have Classic pizza ',
          exclude_extra: { gluten: true },
          image: '5522225ededede7'
        },
        {
          id: 2, 
          name: 'Burgers',
          description: '',
          exclude_extra: { gluten: true, dairy: true },
          image: '5o522225ededede7'
        },
        {
          id: 3, 
          name: 'Soda',
          description: 'Classic soda made with cola syrup',
          exclude_extra: { caffeine: true },
          image: '5522225opededede7'
        },
      ]);
    });
};
