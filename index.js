var express = require("express");
var app = express();

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/months", function(req, res){
  res.json([
    {name: "10-12 Months Out"},
    {name: "6-9 Months Out"},
    {name: "3-5 Months Out"},
    {name: "2 Months Out"},
    {name: "1 Month Out"},
    {name: "2 Weeks Out"},
    {name: "1 Week Out"},
    {name: "Night Before"},
    {name: "Day Of"}
  ]);
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(3001, function(){
  console.log("Something's working!");
});
