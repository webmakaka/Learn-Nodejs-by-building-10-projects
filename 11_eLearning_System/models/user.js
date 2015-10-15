var mongoose = require('mongoose');

// User Schema

var userSchema = mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password:{
    type: String
  },
  type:{
    type: String
  }
});

var User =  module.exports = mongoose.model('User', userSchema);


// Fetch All Classes
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

// Fetch Single Class
module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
};
