var mongoose = require("mongoose");

var TaskSchema = {
  name: String
}
var MonthSchema = {
  name: String,
  tasks [TaskSchema]
}

mongoose.model("Month", MonthSchema);

mongoose.connect("mongodb://localhost/appofhonor");

module.exports = mongoose;
