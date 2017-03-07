"use strict";

// Inspired by https://dribbble.com/shots/2810563-Messages-UI-UX-Animation

$(function () {
	$("#Email1").on("click", function () {
		$(this).addClass("active");
		$("#Email1").not(".active").addClass("deactive");
		$(".hamburger").addClass("active");
		$("#one").addClass("active");
		$(".headerLabel h1").text("MESSAGE");
	});
	$(".hamburgerWrapper").on("click", function () {
		$(".Email.active").removeClass("active");
		$(".Email.deactive").removeClass("deactive");
		$(".hamburger").removeClass("active");
		$("#one").removeClass("active");
		$(".headerLabel h1").text("INBOX");
	});
});


"use strict";

// Inspired by https://dribbble.com/shots/2810563-Messages-UI-UX-Animation

$(function () {
	$("#Email2").on("click", function () {
		$(this).addClass("active");
		$(".Email").not(".active").addClass("deactive");
		$(".hamburger").addClass("active");
		$("#two").addClass("active");
		$(".headerLabel h1").text("MESSAGE");
	});
	$(".hamburgerWrapper").on("click", function () {
		$(".Email.active").removeClass("active");
		$(".Email.deactive").removeClass("deactive");
		$(".hamburger").removeClass("active");
		$("#two").removeClass("active");
		$(".headerLabel h1").text("INBOX");
	});
});


"use strict";

// Inspired by https://dribbble.com/shots/2810563-Messages-UI-UX-Animation

$(function () {
	$("#Email3").on("click", function () {
		$(this).addClass("active");
		$(".Email").not(".active").addClass("deactive");
		$(".hamburger").addClass("active");
		$("#three").addClass("active");
		$(".headerLabel h1").text("MESSAGE");
	});
	$(".hamburgerWrapper").on("click", function () {
		$(".Email.active").removeClass("active");
		$(".Email.deactive").removeClass("deactive");
		$(".hamburger").removeClass("active");
		$("#three").removeClass("active");
		$(".headerLabel h1").text("INBOX");
	});
});



//
//"use strict";
//
//// Inspired by https://dribbble.com/shots/2810563-Messages-UI-UX-Animation
//
//$(function () {
//	$(".Email").on("click", function () {
//		$(this).addClass("active");
//		$(".Email").not(".active").addClass("deactive");
//		$(".hamburger").addClass("active");
//		$(".EmailFull").addClass("active");
//		$(".headerLabel h1").text("MESSAGE");
//	});
//	$(".hamburgerWrapper").on("click", function () {
//		$(".Email.active").removeClass("active");
//		$(".Email.deactive").removeClass("deactive");
//		$(".hamburger").removeClass("active");
//		$(".EmailFull").removeClass("active");
//		$(".headerLabel h1").text("INBOX");
//	});
//});




