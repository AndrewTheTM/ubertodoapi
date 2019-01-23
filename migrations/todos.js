knex.schema.withSchema('ubertodo_test').createTable('todos', function (table) {
  table.increments();
  table.string('todoName');
  table.string('todoDescription')
  table.boolean('done');
});

knex.schema.withSchema('ubertodo_test').createTable('todosCategories', function(table){
  table.increments();
  table.string('category');
  table.foreign('task_id')
    .references('todos.id');
});
