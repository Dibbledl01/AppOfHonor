var express = require("express");
var mongoose = require("./db/connection");
var app = express();

var Month = mongoose.model("Month");

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/months", function(req, res){
  Month.find().then(function(months){
    res.json(months);
  });
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(3001, function(){
  console.log("Something's working!");
});
