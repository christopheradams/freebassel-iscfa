(function() {
	var Bassel, root;

	Bassel = (function() {

		function Bassel(params) {
			this.options = params;
		}

		Bassel.prototype.run = function() {

			var backgrounds = this.options.backgrounds;
			var captions = this.options.captions;
			var showCaptions = this.options.showCaptions;

		  $.vegas('slideshow', {
			backgrounds: backgrounds,
			walk: function(step) {
				if (showCaptions) {
					var html = "<div class='caption'>" + captions[step] + "</div>";	
					$('#message').html(html);
				}
			}
		  });
		  $.vegas('overlay', {
			src:'js/vendor/vegas/overlays/01.png'
		  });

		  $.vegas('pause');

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: $.vegas('previous'); // left
        break;

        case 39: $.vegas('next'); // right
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

		return true;

		};
		
		return Bassel;
	})();

	root = typeof exports !== "undefined" && exports !== null ? exports : window;

	root.Bassel = Bassel;

}).call(this);
