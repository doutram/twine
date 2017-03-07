// Inspired by https://dribbble.com/shots/2810563-Messages-UI-UX-Animation

$(function() {
	$(".Email").on("click", function() {
		$(this).addClass("active")
		$(".Email").not(".active").addClass("deactive")
		$(".hamburger").addClass("active");
		$(".EmailFull").addClass("active");
		$(".headerLabel h1").text("MESSAGE");
	})
	$(".hamburgerWrapper").on("click", function() {
		$(".Email.active").removeClass("active")
		$(".Email.deactive").removeClass("deactive")
		$(".hamburger").removeClass("active");
		$(".EmailFull").removeClass("active");
		$(".headerLabel h1").text("INBOX");
	})
})