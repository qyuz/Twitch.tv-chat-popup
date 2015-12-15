var followingViewersQuery, $followingViewers;

followingViewersQuery = '.following-col .viewers';
$followingViewers = $(followingViewersQuery);

console.log('following viewers', $followingViewers);

$('body').on('click', followingViewersQuery, function() {
	var $viewers, $channel, $profilePhoto, channelHref;
	
	console.log('viewers', $viewers = $(this));
	console.log('channel', $channel = $viewers.closest('.channel.js-channel'));
	console.log('profilePhoto', $profilePhoto = $channel.find('.profile-photo'));
	console.log('channelHref', channelHref = $profilePhoto.attr('href'));
	
	openWindow(channelHref, window.POPUP_WIDTH_PERC);
});
