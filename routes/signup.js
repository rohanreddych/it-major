const { User, validate } = require("../models/signupmodel");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	const { error } = validate(req.body);
	if (error) {
		return res.status(412).send(error.details[0].message);
	}
	let user = await User.findOne({ email: req.body.email });
	if (user) {
		return res.status(469).send("2");
	} else {
		user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		await user.save();
		// User.register(user, req.body.password, function (err, usr) {
		// 	if (err) {
		// 		res.json({
		// 			success: false,
		// 			message: "Your account could not be saved. Error: ",
		// 			err,
		// 		});
		// 	} else {
		// 		res.json({
		// 			success: true,
		// 			message: "Your account has been saved",
		// 		});
		// 	}
		// });
		// return res.status(200).send("Success, Go to Login Page!");
		return res.status(200).json({ message: "1" });
	}
});

router.get("/", (req, res) => {
	res.sendFile("signup.html", { root: "public" });
});

module.exports = router;
