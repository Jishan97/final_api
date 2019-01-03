const mongoose = require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/App');

var  app = mongoose.model('app',{

    text:{
      type:String,
      required:true
    },
    completed:{
      type:Boolean
    },
    completedAt:{
      type:Number
    }

});

var newApp = new app({
    text:'cook everything',
    completed:true,
    completedAt:123
});


newApp.save().then((doc)=>{ 

    console.log(doc);

})
.catch(e=> console.log(e))

var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true
    }
})
  
  var user = new User({
      email:'shaikh.jishan1997@gmail.com'
  }).save()
  .then(doc=>console.log(doc))
  .catch(e=>console.log(e))