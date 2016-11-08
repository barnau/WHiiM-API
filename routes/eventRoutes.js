'use strict';
var express = require("express");
var router = express.Router();

//route get all events
router.get("/", function(req, res, next) {
	res.json({
		text: "hello from get all events"
	});
});
//route get event by id
router.get("/:eID", function(req, res, next) {
	res.json({
		text: "hello from get event by id: "  + req.params.eID
	});
});
//route post new event
router.post("/", function(req, res, next) {
	res.json({
		text: "hello from post new event"
	});
});
//route edit event
router.put("/:eID", function(req, res, next) {
	res.json({
		text: "hello from put/edit event: "  + req.params.eID
	});
});

module.exports = router;