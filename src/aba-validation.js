var namespace;
(function(ns){
	"use strict";
	ns.ABAValidator = (function(){
		function validate(routingNumber){
			var match = routingNumber.match(/^\s*([\d]{9})\s*$/);
			if (!match) {
				return false;
			}

			var weights = [3, 7 ,1];
			var aba = match[1];

			var sum = 0;
			for (var i=0 ; i<9 ; ++i) {
				// using charAt for IE7 support
				sum += aba.charAt(i) * weights[i % 3];
			}

			return (sum !== 0 && sum % 10 === 0);
		}
		
		return {
			validate: validate
		};
	} ());
}((typeof window === "undefined") ? exports : namespace || window));
