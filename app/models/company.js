var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  id : Number,
  company : String
});

module.exports = mongoose.model('Company', companySchema);