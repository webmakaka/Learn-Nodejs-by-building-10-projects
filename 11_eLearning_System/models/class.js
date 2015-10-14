var mongoose = require('mongoose');

// Class Schema

var classSchema = mongoose.schema({
  title: {
    type: String
  },
  descritption: {
    type: String
  },
  instructor:{
    type: String
  },
  lessons:[{
    lesson_number: {type: number},
    lesson_title: {type: String},
    lesson_body:{type: String}
  }]
});

var Class =  module.exports = mongoose.model('Class', classSchema);


// Fetch All Classes
module.exports.getClasses = function(callback, limit){
    Class.find(callback).limit(limit);
};
