const express = require("express");
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;

router.get("/", (req, res) => {
	const client = new MongoClient(process.env.orders, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	if (req.session.admin) {
		var data = [];
		var data2 = [];
		var data3 = [];
		client.connect().then(async function (err) {
			const collection = client.db("search").collection("orders");
			console.log(req.session.userid);
			var cursor = await collection.find();
			// console.log(allcs);
			if ((await cursor.count()) === 0) {
				res.render("orders", { data: 0, data2: 0 });
			}

			await cursor.forEach((i) => {
				data.push(i["userid"]);
				data2.push(i["ourl"]);
				data3.push(i);
			});
			// console.log(data3);
			// console.log(data, data2);
			res.render("orders", { data: data, data2: data2 });
			client.close();
		});
	} else {
		res.redirect("/");
	}
});

module.exports = router;
