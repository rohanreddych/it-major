var express = require("express");
// var mongoose = require("mongoose");
var router = express.Router();
// const search = require("../models/usersearches");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.usertracking, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// var db = mongoose.createConnection(
// 	"mongodb+srv://newuser:tzui8PS9wYLYegb@auth.iq95u.mongodb.net/search?retryWrites=true&w=majority",
// 	{ useNewUrlParser: true, useUnifiedTopology: true }
// );

// var db = mongoose.connection;

// const searchModel = db.model("search", searchSchema);

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

router.post("/orders", async (req, res) => {
	var uid = req.session.userid;
	var orderUrl = req.body.url;
	console.log(req.session.userid);
	console.log(req.body.url);
	// var search = new search({
	// userid: uid,
	// ourl: orderUrl,
	// });
	// await search.save();
	client.connect().then(async function (err) {
		const collection = client.db("search").collection("orders");
		// perform actions on the collection object
		// console.log(uid);
		var resp = await collection.insertOne({ userid: uid, ourl: orderUrl });
		client.close();
	});
	res.sendStatus(200);
	// db.orders.insertOne({ userid: uid, ourl: orderUrl });
});

module.exports = router;
