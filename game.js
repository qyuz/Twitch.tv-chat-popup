var streamViewersQuery, $streamViewers;

streamViewersQuery = '.js-streams.streams.items .info';
$streamViewers = $(streamViewersQuery);

console.log('stream viewers', $streamViewers);

$('body').on('click', streamViewersQuery, function() {
	var $meta, $title, $info, channelHref;
	
	console.log('info', $info = $(this));
	console.log('meta', $meta = $info.closest('.meta'));
	console.log('title', $title = $meta.find('.title'));
	console.log('channelHref', channelHref = 'http://www.twitch.tv' + $title.find('a').attr('href'));
	
	openWindow(channelHref, window.POPUP_WIDTH_PERC);
});
