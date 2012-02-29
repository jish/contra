var Contra = (function() {

	var a = 65
		, b = 66
		, left = 37
		, up = 38
		, right = 39
		, down = 40
		, handlers = []
		, pattern = [up, up, down, down, left, right, left, right, b, a]
		, position = 0;

	if(document.addEventListener) {
		document.addEventListener('keyup', check);
	}  else if (document.attachEvent) {
		document.attachEvent('onkeypress', check);
	}
	
	function check(evt) {
		if (pattern[position] === evt.keyCode) {
			position++;
		} else {
			position = 0;
		}

		if (position === pattern.length) {
			win();
			position = 0;
		}
	}

	function win() {
		var body = document.getElementsByTagName('body')[0];
		body.className = body.className + ' contra';

		for(var i = 0, l = handlers.length; i<l; i++) {
			handlers[i].call();
		}
	}
	
	return {
		addHandler: function(handler) {
			handlers.push(handler);
		}
	}
	
}());
