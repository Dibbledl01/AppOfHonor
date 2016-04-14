var express = require("express");
var parser = require("body-parser");
var mongoose = require("./db/connection");
var app = express();

var Month = mongoose.model("Month");

app.use(parser.json({urlencoded: true}));
app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/months", function(req, res){
  Month.find().then(function(months){
    res.json(months);
  });
});

app.post("/api/months", function(req, res){
  Month.create(req.body).then(function(month){
    res.json(month);
  });
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(3001, function(){
  console.log("Something's working!");
});
