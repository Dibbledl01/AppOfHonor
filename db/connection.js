var mongoose = require("mongoose");

var MonthSchema = {
  name: String
};

mongoose.model("Month", MonthSchema);

mongoose.connect("mongodb://localhost/appofhonor");

module.exports = mongoose;
