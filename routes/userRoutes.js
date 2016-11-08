'use strict';
var express = require("express");
var router = express.Router();

//Route to get all users
router.get("/", function(req, res, next) {
	res.json({
		text: "Hello from get all students"
	});
});
//Route post user
router.post("/", function(req, res, next) {
	res.json({
		text: "hello from post student"
	});
});
//Route get user by id
router.get("/:uID", function(req, res, next) {
	res.json({
		text: "hello from get user by id"
	});
});
//Route get user's groups
router.get("/:uID/groups", function(req, res, next) {
	res.json({
		text: "hello from get user's groups"
	});
});
//post new group
router.post("/:uID/groups", function(req, res, next) {
	res.json({
		text: "hello from post new user group"
	});
});

//Route get viewed events
router.get("/:uID/viewedEvents", function(req, res, next) {
	res.json({
		text: "hello from get users viewed events"
	});
});

router.post("/:uID/viewedEvents", function(req, res, next) {
	res.json({
		text: "hello from post new viewed event"
	});
});

router.get("/:uID/events", function(req, res, next) {
	res.json({
		text: "hello from get users events"
	});
});

router.post("/:uID/events", function(req, res, next) {
	res.json({
		text: "hello from post new event"
	});
});




module.exports = router;