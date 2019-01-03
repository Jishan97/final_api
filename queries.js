const {mongoose} = require('./db/mongoose');
const {Todo1} = require('./models/todo');

var id = '5c2dba71dd83a140376c8b3d';

Todo1.find({
    _id:id
})
.then((todo)=>{
console.log(todo)
});

