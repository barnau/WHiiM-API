'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	message: String,
	photoURL: String,
	sentBy: String,
	setnByID: String
	timeStamp: {type: Date, default: Date.now}
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
	viewedEvents: [ViewedEventSchema]
});

var MessageArraySchema = new Schema({
	messages: [MessageSchema]
})