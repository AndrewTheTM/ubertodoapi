const express = require('express');
const router = express.Router();

//TODO: This has to go and be replaced with a connection to pgsql
const inMemoryTodoDB = [
    {id:0,name:'Part I',description:'Write Part I', category: 'home', done:true},
    {id:1,name:'Part II',description:'Write Part II', category: 'home' done:false},
    {id:2,name:'Part III',description:'Write Part III', category: 'home' done:false},
    {id:3,name:'Part IV',description:'Write Part IV', category: 'work' done:false},
];

router.get('/',(req,res)=>{
  res.status(200)
    .json(inMemoryTodoDB);
});

module.exports = router;

router.get('/:id',(req,res)=>{

  //var id = req.query.id; // This gets ?id= ... reconfigure for category

  const { id } = req.params;

  const todoItem = inMemoryTodoDB.filter((todo)=> todo.id==id)[0];

  if(!todoItem){
    res.sendStatus(404);
  }
  else{
    res.status(200).json(todoItem);
  }
});

router.post('/',(req,res)=>{

  const { name,description,done } = req.body;

  // getting last used id from our Mock DB
  const lastId = inMemoryTodoDB[inMemoryTodoDB.length-1].id;
  const id = lastId + 1;

  const newTodo = { id,name,description,done };

  inMemoryTodoDB.push(newTodo);

  res.status(201)
    .location(`/api/todos/${id}`)
    .json(newTodo);

});

router.delete('/:id',(req,res)=>{

  const {id} = req.params;

  const todoItem = inMemoryTodoDB.filter((todo)=> todo.id==id)[0];

  if(!todoItem)
  {
    res.sendStatus(404);
    return;
  }
  inMemoryTodoDB.splice(inMemoryTodoDB.indexOf((todo)=>todo.id==id),1);

  res.sendStatus(200);

});

router.put('/:id/done',(req,res)=>{

  let  { done }  = req.body;
  const {id} = req.params;

  // check if its a boolean
  if(typeof(done) != 'boolean' )
  {
    res.sendStatus(400);
    return;
  }

  const exists = inMemoryTodoDB.filter((todo)=> todo.id==id).length > 0;

  if(!exists){
    res.sendStatus(404);
    return;
  }

  inMemoryTodoDB.map((todo)=>{
    if(todo.id == id) {
      todo.done = done;
    }
  });

  res.sendStatus(200);
});
