var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	if (req.session.admin) {
		res.sendFile("admin.html", { root: "public" });
	} else {
		res.redirect("/");
	}
});

module.exports = router;
