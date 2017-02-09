$(document).ready(function () {
	var scrollAmount;
	$(window).scroll(function(){

		scrollAmount = $(window).scrollTop();
		if(scrollAmount > 10 && !$('.section-left').hasClass('full-width')){
			$('.section-left').animate({
				right: "0%" }, 800, function(){
				});
			$('.section-left').addClass('full-width');
			
		} else if (scrollAmount <= 10 && $('.section-left').hasClass('full-width')){
			$('.section-left').animate({
				right: "50%" }, 800, function(){
				});
			$('.section-left').removeClass('full-width');
		}

		if(scrollAmount < $('#intro').outerHeight() + $(window).height()){
				$('#intro').show();
			} else{
				$('#intro').hide();
			}

		if(scrollAmount > $('#intro').outerHeight()){
			$('#intro').css('top',  ((scrollAmount - $('#intro').outerHeight()) * 0.2) * -1);
		}else{
			$('#intro').css('top', '0');
		}

	});
});