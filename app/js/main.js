'use strict';

(function($){
	$(document).ready(function() {
		// Code

		$( '.questions__accordion' ).accordion({
			heightStyle: 'content'
		});


		$('.team-slider').slick();

		var dialog = $( "#modal" ).dialog({
			autoOpen: false,
			height: 400,
			width: 350,
			modal: true,
			buttons: {
				Cancel: function() {
					dialog.dialog( "close" );
				}
			}
		});

		$( ".button" ).click(function(e) {
			e.preventDefault();
			dialog.dialog( "open" );
		});

	});
})(jQuery);
