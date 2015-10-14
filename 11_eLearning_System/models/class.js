var mongoose = require('mongoose');

// Class Schema

var classSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  instructor:{
    type: String
  },
  lessons:[{
    lesson_number: {type: Number},
    lesson_title: {type: String},
    lesson_body:{type: String}
  }]
});

var Class =  module.exports = mongoose.model('Class', classSchema);


// Fetch All Classes
module.exports.getClasses = function(callback, limit){
    Class.find(callback).limit(limit);
};

// Fetch Single Class
module.exports.getClassById = function(id, callback){
  Class.findById(id, callback);
};
