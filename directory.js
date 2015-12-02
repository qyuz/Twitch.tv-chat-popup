// added(	
		// '.viewers',
		// function($viewers) {
			// console.log($viewers);
			// $viewers.each(function(idx, el) {
				// var $el, channelHref, widthPerc;
				
				// $el = $(el);
				// channelHref = $el.closest('.channel.js-channel').find('.profile-photo').attr('href');
				// widthPerc = 25;
				
				// $el.click(() => openWindow(channelHref, widthPerc));
				// //$el.css('cursor', 'pointer');
			// });
		// }
	// )
console.log($('.following-col'))
$('.following-col').on('click', '.viewers', function() {
	var $el, channelHref;
	
	$el = $(this);
	channelHref = $el.closest('.channel.js-channel').find('.profile-photo').attr('href');
	
	$el.click(() => openWindow(channelHref, window.POPUP_WIDTH_PERC));
	
	console.log('yo')
})
