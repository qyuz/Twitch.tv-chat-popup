window.POPUP_WIDTH_PERC = 25;

function openWindow(url, screenWidthPercentage) {
	var a = window,
	b = document,
	c = encodeURIComponent,
	d = a.open(url + '/chat?popout=', 'bkmk_popup', 'left=0,top=0,height=985px,width=336px,resizable=1,alwaysRaised=1');
}
