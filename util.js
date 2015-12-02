window.POPUP_WIDTH_PERC = 25;

function openWindow(url, screenWidthPercentage) {
	var a = window,
	b = document,
	c = encodeURIComponent,
	d = a.open(url + '/chat?popout=', 'bkmk_popup', 'left=' + ((a.screenX || a.screenLeft) + 10) + ',top=' + ((a.screenY || a.screenTop) + 10) + ',height=' + screen.height + 'px,width=' + screen.width / 100 * screenWidthPercentage + 'px,resizable=1,alwaysRaised=1');
}

function added(query, handler, interval) {
	var composedQuery, $els, processedClassName;
	
	processedClassName = 'twitch-popup-chat';
	composedQuery = query + ':not(.' + processedClassName + ')';
	console.log(composedQuery);
	setInterval(function() {
		$els = $(composedQuery);
		if ($els.length) {
			handler($els);
			$els.addClass(processedClassName);
		}
	}, interval || 1000);
}
