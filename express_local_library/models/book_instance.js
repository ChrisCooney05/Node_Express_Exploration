const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  //reference to the associated book
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
  //enum sets allowed values and default sets the default.
});

//virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

BookInstanceSchema.virtual("DueBackFormatted").get(function () {
  return moment(this.due_back).format("Do MMMM, YYYY");
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
