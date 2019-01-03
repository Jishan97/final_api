var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo1} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
var todo = new Todo1({
    text:req.body.text,

});

todo.save()
.then((doc)=>{
res.send(doc)
})
.catch(e=>res.send(e))
})



app.get('/todos',(req,res)=>{
    Todo1.find().then((todos)=>{
            res.send(todos)
    })
    .catch(e=>console.log(e))
})

app.get('/todos/:id',(req,res)=>{

    var id = req.params.id;
    Todo1.findById(id).then((todo)=>{
        if(!todo) {
            return res.status(404).send();
        }
        res.send(todo);

    }).catch((e)=>{
        res.status(400).send();
    })
  
    
})

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;

    Todo1.findByIdAndRemove(id)
    .then((todo)=>{
     res.send(todo)
    }).catch((e)=>{
       res.status(400).send();             
    })
})

app.listen(port,()=>{
    console.log('running');
});
