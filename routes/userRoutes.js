'use strict';
var express = require("express");
var router = express.Router();
var User = require("../models/models").User;
var Event = require("../models/models").Event;

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
	});
});

router.param("gID", function(req, res, next, id) {
	req.group = req.user.groups.id(id);
	if(!req.group) {
		err = new Error("Not Found");
		err.status = 404;
		return next(err);
	}
	return next();

});

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
// router.get("/:uID/groups", function(req, res, next) {
// 	req.user.groups.find
// });
//post new group
router.post("/:uID/groups", function(req, res, next) {
	req.user.groups.push(req.body);
	req.user.save(function(err, user) {
		if(err) return next(err);
		res.status = 201;
		res.json(user);
	})
});

router.put("/:uID/groups/:gID", function(req, res, next) {
	console.log(req.group);
	console.log(req.body)
	req.group.update(req.body, function(err, result) {
		if(err) return next(err);
		res.json(result);
	});
	
	// req.group.update(req.body, function(err, result) {
	// 	if(err) return next(err);
	// 	res.json(result);
	// });
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

// router.get("/:uID/events", function(req, res, next) {
// 	res.json({
// 		text: "hello from get users events"
// 	});
// });

router.post("/:uID/events", function(req, res, next) {
	req.user.events.push(req.body);
	req.user.save(function(err, user) {
		if (err) return next(err);
		res.status = 201;
		res.json(user);
	});
});

router.post("/:uID/notifications", function(req, res, next) {
	req.user.notifications.push(req.body);
	req.user.save(function(err, user) {
		if(err) return next(err);
		res.status = 201;
		res.json(user);
	});
});





module.exports = router;