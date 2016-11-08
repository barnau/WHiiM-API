'use strict';
 var express = require("express");
 var app = express();

var userRoutes = require("./routes/userRoutes");
var eventRoutes = require("./routes/eventRoutes");
var groupRoutes = require("./routes/groupRoutes");

 var jsonParser = require("body-parser").json;
 var logger = require("morgan");

 app.use(logger("dev"));
 app.use(jsonParser());

 var mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/whiim");
 var db = mongoose.connection;

 db.on("error", function(err) {
 	console.log("Connection Error: ", err);
 });

 db.once("open", function() {
 	console.log("db connection successful");
 });

 app.use("/users", userRoutes);
 app.use("/events", eventRoutes);
 app.use("/groups", groupRoutes);

 var port = process.env.PORT || 3000;
 app.listen(port, function() {
 	console.log("Listening on port", port);
 })