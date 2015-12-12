// javascript for benin project. Lea Cohen. MMART 167. Dec.2015



//mouse enter/leave fade

$(document).ready(function(){
	$('h3').mouseenter(function(){
		$(this).fadeTo('slow', 0.6);
	});
	$('h3').mouseleave(function(){
		$(this).fadeTo('slow', 1);
	});
});



// show/hide sections with toggle

$(document).ready(function(){
	$('.row h3').click(function(){
		$(this).next('.toggle-item').slideToggle();
	});

});




// make toggle hamburger navbar close when a link is clicked

$(document).ready(function() {
	$('.navbar-nav li a').click(function(event) {
	$('.navbar-collapse').collapse('hide');
	
	});

});