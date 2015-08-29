// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id : Number,
  linkedin_id : String,
  first_name : String,
  last_name : String,
  job_title : String,
  company_id : Number,
  gender : String,
  mentor : Boolean,
  mentee : Boolean,
  description : String,
  email : String,
  contact : String,
  availability : String,
  profile_pic : String,
  strong_skills : Array,
  weak_skills : Array
});

module.exports = mongoose.model('User', userSchema);

// module.exports allows us to pass this to other files when it is called
// var User = mongoose.model('User', userSchema);