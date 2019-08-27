$(document).ready(function(){
	$('[data-bs-hover-animate]')
		.click( function(){ 
			var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate'));
			setTimeout(function(elem) { elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')); }, 1000);
		 });

});
/*



$(document).ready(function(){
	$('[data-bs-hover-animate]')
		.touchstart( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.touchleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });
});


*/
