(function() {
	'use strict';

	$(document).ready(function() {
		$('.nav-icon').click(function() {
			$(this).toggleClass('open');
			$('.main-menu').toggleClass('open');
		});
	});

})();