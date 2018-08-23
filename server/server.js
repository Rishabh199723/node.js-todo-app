var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');

var express=require('express');
var bodyparser=require('body-parser');
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });


//
// var user = new User({
//   email: 'rishabh@example.com   '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
//this all content is not needed now
var app=express();
app.use(bodyparser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000,()=>{
  console.log('Started on port 3000');
});
module.exports={
  app
}