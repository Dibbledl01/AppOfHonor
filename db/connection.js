var mongoose = require("mongoose");

var MonthSchema = {
  name: String,
  list: String,
  task: String,
  description: String,
  completed: Boolean
};

mongoose.model("Month", MonthSchema);

mongoose.connect("mongodb://localhost/appofhonor");

module.exports = mongoose;
