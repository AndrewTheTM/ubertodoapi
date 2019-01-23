
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {todoName: 'Part I', todoDescription: 'Write Part I',done: false, category: ['work']},
        {todoName: 'Part II', todoDescription: 'Write Part II',done: false, category: ['work', 'home']},
        {todoName: 'Part III', todoDescription: 'Write Part III',done: false, category: ['home']}
      ]);
    });
};
