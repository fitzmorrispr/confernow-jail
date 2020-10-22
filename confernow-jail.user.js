//==UserScript==
// @name		ConferNow Jail
// @namespace		http://tampermonkey.net
// @updateURL		https://raw.githubusercontent.com/fitzmorrispr/confernow-jail/main/confernow-jail.user.js
// @license		Unlicense
// @version		1.0
// @description		Prevent ConferNow from escaping its iFrame(jail), except by opening a new tab(leaving the country).
// @author		fitzmorrispr
// @match		https://online.smc.edu/*
// @grant		all
// ==/UserScript==

function GuiltyByAssociation(guiltyselector, sibselector){
	var guiltyparties = document.querySelectorAll(guiltyselector);
	guiltyparties.forEach(el=>{
		var selectedsib = el.closest('div').querySelector(sibselector);
		var warningdiv = document.createElement('div');
		var warningtext = document.createTextNode("Please Ctrl-click the Continue button. (opens new tab/window)")
		warningdiv.appendChild(warningtext);
		warningdiv.setAttribute('class','before_external_content_info_alert');
		warningdiv.setAttribute('tabindex','-1');
		el.closest('div').insertBefore(warningdiv, selectedsib);
		selectedsib.removeAttribute('allowfullscreen');
		selectedsib.setAttribute('webkitallowfullscreen', 'false');
		selectedsib.setAttribute('mozallowfullscreen', 'false');
		selectedsib.setAttribute('sandbox','allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts');
	})
};
GuiltyByAssociation('form[data-tool-id="ccc-confer-demo.meets.cirqlive.com"]','iframe[id="tool_content"]');
