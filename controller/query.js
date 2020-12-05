const axios = require("axios");
const cheerio = require("cheerio");

async function fetchData(url) {
	try {
		console.log("Crawling data...");
		// make http call to url
		var resp = await axios(url);
	} catch (err) {
		console.log("erro");
		resp = 1;
	}
	return resp;
	// .then(function (data) {
	// 	return data;
	// })
	// .catch(function (err) {
	// 	return "error";
	// });
	// if (response.isAxiosError) {
	// 	console.log("Error hap");
	// 	return;
	// }
	// if (response.status != 200) {
	// 	console.error("Error occurred while fetching data");
	// 	return;
	// }
	// return response;
	// } catch (err) {
	// 	// console.log(err);
	// }
}

async function categoryRes(url) {
	var res = await fetchData(url);
	// console.log(res);
	if (res == 1) {
		return 1;
	}
	const html = res.data;
	const $ = cheerio.load(html);
	const ls = $("div > section > ._3s-F7 > ._1mpk1");
	var results = [];
	ls.each(function () {
		var title = $(this).find("._3vNZX").text();
		console.log(title);
		results.push(title);
	});
	return results;
}

async function searchResults(url) {
	var res = await fetchData(url);
	if (res == 1) {
		return 1;
	}
	const html = res.data;
	const $ = cheerio.load(html);
	const ls = $(".EIR5N");
	var results = [];
	ls.each(function () {
		var link = "https://www.olx.in" + $(this).find("a").attr("href");
		var title = $(this).find("a > div > ._2tW1I").text();
		var price = $(this).find("a > div > ._89yzn").text();
		var location = $(this).find("a > div > ._1KOFM > .tjgMj").text();
		var description = $(this).find("a > div > ._2TV13").text();
		var r = {
			link: link,
			name: title,
			price: price,
			location: location,
			description: description,
		};
		console.log(link, title, price, location);
		results.push(r);
	});
	return results;
}

module.exports.fetchData = fetchData;
module.exports.searchResults = searchResults;
module.exports.categoryRes = categoryRes;
