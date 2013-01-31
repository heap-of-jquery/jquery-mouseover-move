/*
License - you must retain this notice in ALL redistributions

Copyright 2013 Giuseppe Burtini      https://github.com/gburtini

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this library except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
   
*/

(function($) {
	var transition = function(_to) {
		var $floaty = jQuery(this);

		if(typeof _to == "undefined")
			_to = $floaty.hasClass("right") ? "left" : "right";

		var settings = $floaty.data("floaty");
		if(settings.frozen)
			return false;

		if(settings.animating)
			return false;

		settings.animating = true;
		$floaty.data("floaty", settings);

		var offsets = $floaty.offset();
		switch(_to) {
			case "left":
				$floaty.css({
					right: 'auto',
					left: offsets.left
				}).animate({
					left: settings.side
				}, settings.speed, function() {
					// clear animate status
					settings.animating = false;
					$floaty.data("floaty", settings);
				}).removeClass("right").addClass("left");
			break;
	
			case "right":
				var rt = ($(window).width() - (offsets.left + $floaty.outerWidth()));

				$floaty.css({
					left: 'auto', 
					right: rt
				}).animate({
					right: settings.side
				}, settings.speed, function() {
					settings.animating = false;
					$floaty.data("floaty", settings);
				}).removeClass("left").addClass("right");
			break;
		}
	};

	var methods = {
		create: function(options) {
			var defaults = {
				side: '50px',
				bottom: '50px',
				start: 'right',         // or left, nothing else.
				speed: 100
			}, settings = $.extend(defaults, options);

			var $floaty = jQuery(this);
			$floaty.data("floaty", {
				side: settings.side,
				bottom: settings.bottom,
				speed: settings.speed,
				frozen: false
			});
		
			var cssSettings = {
				position: 'absolute',
				bottom: settings.bottom
			};
			cssSettings[settings.start] = settings.side;

			$floaty.css(cssSettings).addClass(settings.start);
			$floaty.mouseover(function() { transition.apply($floaty) });
		},

		move: transition,
		freeze: function() {
			var $floaty = jQuery(this);
			var data = $floaty.data("floaty");
			data.frozen = true;
			$floaty.data("floaty", data);
		},
		unfreeze: function() {
			var $floaty = jQuery(this);
			var data = $floaty.data("floaty");
			data.frozen = false;
			$floaty.data("floaty", data);
		}
	};

	$.fn.mouseoverMove = function(method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.create.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.mouseoverMove ' );
		}   
	};
})(jQuery);
