const { User, validate } = require("../models/signupmodel");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	console.log(user);
	console.log(user["_id"]);
	if (user) {
		if (user["password"] === req.body.password) {
			// console.log("matched");
			var ssn = req.session;
			ssn.loggedin = true;
			ssn.userid = user["email"];
			if (user["admin"]) {
				ssn.admin = "true";
			}
			return res.json({ message: "1" });
		} else {
			return res.status(469).send("2");
		}
	} else {
		return res.status(469).send("3");
	}
});

router.get("/", (req, res) => {
	ssn = req.session;
	console.log(ssn);
	if (ssn.admin == "1") {
		res.redirect("../admin");
	}
	if (ssn.loggedin) {
		res.redirect("../home");
	} else {
		res.sendFile("login.html", { root: "public" });
	}
});

module.exports = router;
