const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const users = require("./routes/signup");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
var morgan = require("morgan");
const login = require("./routes/login");
// const qhandler = require("./routes/query");
const homeh = require("./routes/home");
const adminh = require("./routes/admin");
const usertracking = require("./routes/usertracking");
const orders = require("./routes/orders");
const dotenv = require("dotenv");
dotenv.config();
var session = require("express-session");
const querycont = require("./controller/query");

//write state and city dat ahere
const statedata = require("./public/assets/js/states");
const citydata = require("./public/assets/js/cities");
const catdata = require("./public/assets/js/category");
var scat = catdata[0].shift();
const port = 5000;
// console.log(citydata);

mongoose.connect(process.env.mainjs, {
	dbName: "auth",
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
app.use(
	session({ secret: "XASDASDA", resave: false, saveUninitialized: true })
);
app.use(morgan("tiny"));
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/logout", (req, res) => {
	req.session.destroy(function hand(err) {
		console.log(err);
	});
	res.redirect("/");
});

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.use("/signup", users);

app.use("/login", login);

app.get("/city", (req, res) => {
	// console.log(citydata);
	// console.log(citydata.cities, citydata[1]);
	if (req.session.loggedin) {
		res.render("city", {
			name: citydata.cdata[0],
			link: citydata.cdata[1],
		});
	} else {
		res.redirect("/");
	}
});

app.get("/state", (req, res) => {
	res.render("state", {
		name: statedata.sdata[0],
		link: statedata.sdata[1],
	});
});

app.use("/home", homeh);

app.post("/search", async (req, res) => {
	var url = "https://www.olx.in/items/q-" + req.body.search1;
	var result = await querycont.searchResults(url);
	if (result == 1) {
		res.render("searcherror", { source: 1 });
		return;
	}
	res.render("search", { data: result, name: req.body.search1 });
});

app.use("/admin", adminh);

app.get("/category", (req, res) => {
	// var url = "https://www.olx.in/sitemap/categories";

	// delete catdata[0][0];
	console.log(catdata[0], catdata[1]);
	res.render("category", {
		scat: scat,
		cat: catdata[0],
		catlink: catdata[1],
	});
});

app.use("/orders", orders);

app.use("/usertracking", usertracking);

// app.use("/query", qhandler);
app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => console.log(`app Started on port ${port}!`));
