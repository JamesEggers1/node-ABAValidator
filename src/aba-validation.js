var namespace;
(function(ns){
	"use strict";
	ns.ABAValidator = (function(){
		function validate(routingNumber){
			var trimmed = routingNumber.trim()
				, length = trimmed.length
				, n = 0;

			if (length !== 9) {
				return false;
			}

			if (!/^[0-9]+$/.test(trimmed)) {
				return false;
			}

			for (var i = 0; i < length; i += 3) {
				n += (parseInt(trimmed.charAt(i), 10) * 3)
					+ (parseInt(trimmed.charAt(i + 1), 10) * 7)
					+ (parseInt(trimmed.charAt(i + 2), 10));
			}

			if (n !== 0 && n % 10 === 0) {
				return true;
			} else {
				return false;
			}
		}
		
		return {
			validate: validate
		};
	} ());
}((typeof window === "undefined") ? exports : namespace || window));