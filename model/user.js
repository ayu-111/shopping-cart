var mongoose = require('mongoose');

var entry = mongoose.model('User', {
  name :{
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  pwd : {
    type : String,
    required : true
  },
  level : {
    type : String,
    required : true,
    default : "customer"
  }
});

module.exports = {entry};
