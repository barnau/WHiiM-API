'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	message: String,
	photoURL: String,
	sentBy: String,
	setnByID: String,
	timeStamp: {type: Date, default: Date.now}
});

var BasicUserSchema = new Schema({
	name: String,
	id: String
});

var UserArraySchema = new Schema({
	user: [BasicUserSchema]
});

var ViewedEventSchema = new Schema({
	eventId: String
});

var GroupSchema = new Schema({
	hasNewChatEntry: {type: Boolean, default: false},
	key: String,
	timeOfLastMessage: Date,
	title: String
});

var NotificationSchema = new Schema({
	active: {type: Boolean, default: true},
	eventKey: String,
	ownerName: String,
	pending: {type: Boolean, default: true},
	photoURL: String,
	prefix: {type: String, default: "wants to join"},
	timeStamp: {type: Date, default: Date.now},
	title: String
})



var EventSchema = new Schema({
	category: String,
	coords: [Number],
	description: String,
	name: String,
	requiredUsers: {type: Number, default: 1},
	timeStamp: {type: Date, default: Date.now}
});

EventSchema.method("appendUserId",function(event, id, callback) {
	Object.assign(this, event, {ownerId: id});
	this.parent().save(callback);
});

EventSchema.pre("save", function(next) {
	console.log(this.parent());
	next();
})


var UserSchema = new Schema({
	aboutMe: String,
	age: Number,
	category: {type: String, default: "Select an activity"},
	displayName: String,
	email: String,
	photoURL: String,
	events: [EventSchema],
	groups: [GroupSchema],
 	notifications: [NotificationSchema],
 	viewedEvents: [ViewedEventSchema],
 	radius: {type: Number, default: 5}
	
});

var MessageArraySchema = new Schema({
	messages: [MessageSchema]
});

var User = mongoose.model("User", UserSchema);
var Event = mongoose.model("Event", EventSchema);
module.exports.User = User;
module.exports.Event = Event;