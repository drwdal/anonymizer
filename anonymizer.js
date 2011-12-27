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
		if(link.href && link.href.match(/https?:\/\//)) {
			link.href = "data:text/html," +
					"<!doctype html><html><head>" + 
						"<title>Redirecting...</title>" +
						"<meta http-equiv=\"refresh\" content=\"0; url=" + link.href + "\">" +
					"</head></html>";
		}
	}
};

