console.log('following', $('.following-col'));
$('.following-col').on('click', '.viewers', function() {
	var $viewers, $channel, $profilePhoto, channelHref;
	
	console.log('viewers', $viewers = $(this));
	console.log('channel', $channel = $viewers.closest('.channel.js-channel'));
	console.log('profilePhoto', $profilePhoto = $channel.find('.profile-photo'));
	console.log('channelHref', channelHref = $profilePhoto.attr('href'));
	
	openWindow(channelHref, window.POPUP_WIDTH_PERC);
});
