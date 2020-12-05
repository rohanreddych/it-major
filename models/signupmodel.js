var mongoose = require("mongoose");
const Joi = require("joi");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 1024,
	},
	admin: {
		type: String,
	},
});
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

function validateUser(user) {
	const schema = Joi.object({
		name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
	});
	return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
