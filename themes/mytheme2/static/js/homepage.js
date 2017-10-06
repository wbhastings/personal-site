$(document).ready( function() {
	resizeHeader();
	$(window).resize(resizeHeader);
	log("hello world!");
});

function resizeHeader() {
	var windowHeight = $(window).height();
	$("#header-home").height(windowHeight);
}
