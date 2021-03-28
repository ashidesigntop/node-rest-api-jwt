const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const addUsersSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 phoneNumber: {
    type: String,
   },
 email: {
    type: String,
   },
 released_on: {
  type: Date,
  trim: true,
  required: true
 }
});
module.exports = mongoose.model('addUsers', addUsersSchema)