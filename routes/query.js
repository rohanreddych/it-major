const querycont = require("../controller/query");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	if (!req.session.loggedin) {
		res.redirect("../login");
	}
});

router.post("/search", async (req, res) => {
	// res.send(req.body.query);
	var url = "https://www.olx.in/items/q-" + req.body.query;
	var result = await querycont.searchResults(url);
	// );
	// res.send("213");
	if (result == 1) {
		res.render("dash", { data: false });
	}
	res.render("dash", { data: result });
});

module.exports = router;
