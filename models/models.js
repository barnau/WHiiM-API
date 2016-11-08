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
	eventId: String,
	declined: {type: Boolean, default: false}
});

var GroupSchema = new Schema({
	hasNewChatEntry: {type: Boolean, default: false},
	key: String,
	timeOfLastMessage: Date,
	title: String
});

var NotificationSchema = new Schema({
	active: Boolean,
	eventKey: String,
	ownerName: String,
	pending: {type: Boolean, default: false},
	photoURL: String,
	prefix: String,
	timeStamp: {type: Date, default: Date.now},
	title: String
})



var EventSchema = new Schema({
	category: String,
	coords: [Number],
	description: String,
	eventKey: String,
	name: String,
	ownerId: String,
	ownerName: String,
	photoURL: String,
	requiredUsers: Number,
	timeStamp: {type: Date, default: Date.now}
});


var UserSchema = new Schema({
	aboutMe: String,
	age: Number,
	category: String,
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

module.exports.User = User;