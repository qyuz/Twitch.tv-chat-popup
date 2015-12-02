console.log('streams', $('.js-streams.streams.items'));
$('.js-streams.streams.items').on('click', '.info', function() {
	var $meta, $title, $info, channelHref;
	
	console.log('info', $info = $(this));
	console.log('meta', $meta = $info.closest('.meta'));
	console.log('title', $title = $meta.find('.title'));
	console.log('channelHref', channelHref = 'http://www.twitch.tv' + $title.find('a').attr('href'));
	
	openWindow(channelHref, window.POPUP_WIDTH_PERC);
});
