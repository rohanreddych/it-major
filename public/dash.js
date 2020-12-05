// $("#search1").keypress(function (e) {
// 	if (e.which == 13) {
// 		var sp = document.getElementById("spinner");
// 		sp.hidden = false;
// 		$.ajax({
// 			type: "POST",
// 			url: "/home/search",
// 			data: { query: $("#search1").val() },
// 		}).done(function (data, status) {
// 			$("#spinner").hide();
// 			// alert("Data: " + data + "\nStatus: " + status);

// 			if (data == "404") {
// 				alert("Your search was invalid and not found on OLX servers.");
// 			} else {
// 				alert(data);
// 			}
// 		});
// 	}
// });
