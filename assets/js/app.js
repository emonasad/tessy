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

		// One page scrooling 
		// $('.scrollTo').click(function() {
		//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		//     var target = $(this.hash);
		//     var headerH='0';
		//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		//     if (target.length) {
		//       $('html, body').animate({
		//         scrollTop: target.offset().top-headerH+"px"
		//       }, 1000);
		//       return false;
		//     }
		//   }
		// });


	});// DOM Ready
}(jQuery)); // IIFE