added(	
		'.meta',
		function($metas) {
			console.log($metas);
			$metas.each(function(idx, meta) {
				var $meta, $title, $info;
				
				console.log(meta);
				$meta = $(meta);
				$(el).css('cursor', 'pointer');
				$meta.find('.info').click(function(ev, el) {
					console.log('.info')
					
					openWindow('http://google.com', 100)
				});
			})
		}
	)
