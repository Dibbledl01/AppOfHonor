var mongoose = require("./connection");
var seedData = require("./seeds");

var Month = mongoose.model("Month");

Month.remove().then(function(){
  Month.create(seedData).then(function(){
    process.exit();
  });
});
