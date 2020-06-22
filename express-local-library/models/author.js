const { mongo } = require("mongoose");

const mongoose = require
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxlength: 100},
  family_name: {type: String, required: true, maxlength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
});

//Virtual for author's full name
// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
AuthorSchema.virtual('name').get(function() {
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name
  }
  if(!this.first_name || !this.family_name) {
    fullname = '';
  }

  return fullname;
});

//virtual for authors lifespan
AuthorSchema.virtual('lifespan').get(function() {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

//virtual for author's URL
AuthorSchema.virtual('url').get(function() {
  return '/catalog/author' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);