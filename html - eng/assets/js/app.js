// IIFE with jQuery Wrapper
(function ($) {
	'use strict';
	/*----------------------------------*/
	/* Document Ready
	/*----------------------------------*/
	$(document).ready(function () {
		var clicks = 0;
		$('footer .title').on('click', function(){
			$('footer ul').removeClass('menu-active');
			const id = $(this).attr('data-item');
			$('#'+id).addClass('menu-active');
		});

		

	});// DOM Ready
}(jQuery)); // IIFE