var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.sendFile(_dirname + "/public/index.html");
});

app.listen(3001, function(){
  console.log("Something's working!");
});
