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

app.get("/api/months/:name", function(req, res){
  Month.findOne(req.params).then(function(month){
  res.json(month);
  });
});

app.delete("/api/months/:name", function(req, res){
  Month.findOneAndRemove(req.params).then(function(){
  res.json({success: true});
  });
});

app.patch("/api/months/:name", function(req, res){
  Month.findOneAndUpdate(req.params, req.body, {new: true}).then(function(month){
  res.json(month);
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

app.patch("/:name/tasks", function(req, res){
  MaidOfHonor.findOne(req.params).then(function(maidofhonor){
    maidofhonor.tasks.forEach(function(task){
      if(task._id === req.body.task._id){
        task = req.body.task;
      }
    });
  });
    maidofhonor.save().then(function(updatedMaidOfHonor){
      res.json(updatedMaidOfHonor);
  });
});

app.listen(3001, function(){
  console.log("Something's working!");
});
