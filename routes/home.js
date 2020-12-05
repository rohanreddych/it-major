const express = require("express");
const router = express.Router();
const querycont = require("../controller/query");

router.get("/", async (req, res) => {
	if (req.session.loggedin) {
		var url = "https://www.olx.in/";
		var result = await querycont.searchResults(url);
		if (result == 1) {
			res.render("searcherror");
			return;
		} else {
			res.render("dash", { data: result });
		}
	} else {
		res.redirect("/login");
	}
});

// router.post("/search", async (req, res) => {
// 	var url = "https://www.olx.in/items/q-" + req.body.search1;
// 	var result = await querycont.searchResults(url);
// 	res.render("search", { data: result });
// });

module.exports = router;
