'use strict';
var express = require("express");
var router = express.Router();
var User = require("../models/models").User

router.param("uID", function(req, res, next, id) {
	User.findById(id, function(err, doc) {
		if(err) return next(err);
		if(!doc) {
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.user = doc;
		return next();
	})
})


//Route to get all users
router.get("/", function(req, res, next) {
	User.find({}, function(err, users) {
		if(err) return next(err);
		res.json(users);
	});
});
//Route post user
router.post("/", function(req, res, next) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if(err) return next(err);
		res.status(201);
		res.json(user);
	});
});
//Route get user by id
router.get("/:uID", function(req, res, next) {
	res.json(req.user);
});
//Route get user's groups
router.get("/:uID/groups", function(req, res, next) {
	req.user.groups.find
});
//post new group
router.post("/:uID/groups", function(req, res, next) {
	req.user.groups.push(req.body);
	req.user.save(function(err, user) {
		if(err) return next(err);
		res.status = 201;
		res.json(user);
	})
});

// //Route get viewed events
// router.get("/:uID/viewedEvents", function(req, res, next) {
	
// });

router.post("/:uID/viewedEvents", function(req, res, next) {
	req.user.viewedEvents.push(req.body);
	req.user.save(function(err, user) {
		if(err) return next(err);
		res.status(201);
		res.json(user);
	})
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