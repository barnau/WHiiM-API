'use strict';

var express = require("express");
var router = express.Router();

//route get all groups
router.get("/", function(req, res, next) {
	res.json({
		text: "hello from get all groups"
	});
});
//route post new group
router.post("/", function(req, res, next) {
	res.json({
		text: "hello from post new group"
	});
});
//route get group by id
router.get("/:gID", function(req, res, next) {
	res.json({
		text: "hello from get group by id: " + req.params.gID
	});
});

router.put("/:gID", function(req, res, next) {
	res.json({
		text: "hello from edit group, id: " + req.params.gID
	});
});
//route get group chat info
router.get("/chats/:cID", function(req, res, next) {
	res.json({
		text: "hello from get group chat info, cID: " + req.params.cID
	});
});
// route post new chat
router.post("/chats", function(req, res, next) {
	res.json({
		text: "hello from post new chat"
	});
});
//route edit chat
router.put("/chats/:cID", function(req, res, next) {
	res.json({
		text: "hello from edit chat, cID: " + req.params.cID
	});
});
//route get group messages info
router.get("/messages/:mID", function(req, res, next) {
	res.json({
		text: "hello from get group chat info, cID: " + req.params.mID
	});
});
// route post new messages
router.post("/messages", function(req, res, next) {
	res.json({
		text: "hello from post new messages array"
	});
});
//route edit chat
router.put("/messages/:mID", function(req, res, next) {
	res.json({
		text: "hello from edit messages, mID: " + req.params.mID
	});
});
//route get group users
router.get("/users/:uID", function(req, res, next) {
	res.json({
		text: "hello from get group users, mID: " + req.params.uID
	});
});
// route post new messages
router.post("/users", function(req, res, next) {
	res.json({
		text: "hello from post user to groups"
	});
});
//route edit users
router.put("/users/:uID", function(req, res, next) {
	res.json({
		text: "hello from edit messages, mID: " + req.params.uID
	});
});

module.exports = router;

