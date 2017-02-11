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

	$('html').on ('DOMMouseScroll', function (e) {
		var delta = e.originalEvent.detail;

		if(scrollAmount + $(window).height() == $(document).height()){
			if(delta > 0 && $('.wrapper').hasClass('full-width')){
				$('.wrapper').animate({
					right: "-50%" }, 800, function(){
				});
				$('.wrapper').removeClass('full-width');
			} else if(delta < 0 && !$('.wrapper').hasClass('full-width')){
				$('.wrapper').animate({
					right: "0%" }, 800, function(){
						$('.wrapper').addClass('full-width');
				});
				e.preventDefault();
			}
		}
	});

	var animating = "false";

	$('html').on ('mousewheel', function (e) {

		var delta = e.originalEvent.wheelDelta;

		if(scrollAmount + $(window).height() == $(document).height()){
			if(delta < 0 && $('.wrapper').hasClass('full-width') && animating == "false"){
				animating = "true";
				$('.wrapper').animate({
					right: "-50%" }, 800, function(){
						$('.wrapper').removeClass('full-width');
						animating = "false";
				});
			} else if(delta > 0 && !$('.wrapper').hasClass('full-width')){
				e.preventDefault();
				if(animating == "false"){
					animating = "true";
					$('.wrapper').animate({
						right: "0%" }, 800, function(){
							$('.wrapper').addClass('full-width');
							animating = "false";
					});
				}
			}
		}
	});


});