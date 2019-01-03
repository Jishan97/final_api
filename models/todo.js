var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var  Todo = mongoose.model('Todo',{

//     text:{
//       type:String,
//       required:true
//     },
//     completed:{
//       type:Boolean,
//       default:false
//     },
//     completedAt:{
//       type:Number,
//       default:null
//     }

// });

// module.exports={Todo}



const todoSchema = new Schema({
  text:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

var Todo1 =  mongoose.model('Todo',todoSchema);

module.exports={Todo1}