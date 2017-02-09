$(document).ready(function () {
	var scrollAmount;
	$(window).scroll(function(){

		scrollAmount = $(window).scrollTop();

		if(scrollAmount > 10 && !$('.section-left').hasClass('full-width')){
			$('.section-left').animate({
				right: "0%" }, 500, function(){
				});
			$('.section-left').addClass('full-width');
			
		} else if (scrollAmount <= 10 && $('.section-left').hasClass('full-width')){
			$('.section-left').animate({
				right: "50%" }, 500, function(){
				});
			$('.section-left').removeClass('full-width');
		}

		if(scrollAmount > $('#intro').outerHeight()){
			$('#intro').animate({
				top: "-100%" }, 1000, function(){
				});
		}

	});
});