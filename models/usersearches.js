var mongoose = require("mongoose");

var searchSchema = new mongoose.Schema({
	userid: {
		type: String,
		required: true,
	},
	ourl: {
		type: String,
		required: true,
	},
});

var conn = mongoose.createConnection(
	"mongodb+srv://newuser:tzui8PS9wYLYegb@auth.iq95u.mongodb.net/search?retryWrites=true&w=majority"
);

var search = conn.model("search", searchSchema);

module.exports = search;
