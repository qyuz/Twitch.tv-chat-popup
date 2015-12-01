added(	
		'.viewers',
		function($viewers) {
			console.log($viewers);
			$viewers.each(function(idx, el) {
				var $el, channelHref, widthPerc;
				
				$el = $(el);
				channelHref = $el.closest('.channel.js-channel').find('.profile-photo').attr('href');
				widthPerc = 25;
				
				$el.click(() => openWindow(channelHref, widthPerc));
				$el.css('cursor', 'pointer');
			});
		}
	)
