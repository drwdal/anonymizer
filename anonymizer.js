/*
 *  Copyright (c) 2011 Michael Save <savetheinternet@omegasdg.com>
 *  
 *  I give permission for you to do whatever you'd like to do with this software.
 *
 */
 
window.onload = function () {
	var links = document.getElementsByTagName('a');
	for(var i = 0; i < links.length; i++) {
		var link = links[i];
		if(link.href && link.href.match(/(?:https?:)?\/\//)) {
			if(!window.opera && navigator.userAgent.search(/msie/i) == -1) {
				link.href = "data:text/html," +
						"<!doctype html><html><head>" + 
							"<title>Redirecting...</title>" +
							"<meta http-equiv=\"refresh\" content=\"0; url=" + link.href + "\">" +
						"</head></html>";
			} else {
				/* Opera and IE are completely retarded. */
				link.href = "javascript:prompt('Copy/paste this into your address bar:', '" + link.href + "');void 0;";
			}
		}
	}
};

