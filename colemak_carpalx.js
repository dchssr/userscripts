// ==UserScript==
// @name         Carpalx Layouts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add the Carpalx keyboard layout optimizations.
// @author       Dave Chesser <me@dchssr.site>
// @match        https://www.colemak.academy/
// @icon         https://www.colemak.academy/img/favicon.webp
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const data = {
	"layouts": {
	    "qfmlwy": {
		"KeyQ": "q",
		"KeyW": "f",
		"KeyE": "m",
		"KeyR": "l",
		"KeyT": "w",
		"KeyY": "y",
		"KeyU": "u",
		"KeyI": "o",
		"KeyO": "b",
		"KeyP": "j",
		"BracketLeft": "[",
		"BracketRight": "]",
		"Backslash": "\\",
		"KeyA": "d",
		"KeyS": "s",
		"KeyD": "t",
		"KeyF": "n",
		"KeyG": "r",
		"KeyH": "i",
		"KeyJ": "a",
		"KeyK": "e",
		"KeyL": "h",
		"Semicolon": ";",
		"Quote": "'",
		"KeyZ": "z",
		"KeyX": "v",
		"KeyC": "g",
		"KeyV": "c",
		"KeyB": "x",
		"KeyN": "p",
		"KeyM": "k",
		"Comma" : ",",
		"Period" : ".",
		"Slash" : "/",
		"shiftLayer" : "default",
	    },
	},
	"dictionaries": {
	    "qfmlwy": {
		"lvl1": "dstnaeh",
		"lvl2": "ri",
		"lvl3": "lwyu",
		"lvl4": "fmob",
		"lvl5": "vgcpk",
		"lvl6": "qjzx",
		"lvl7": alphabet,
	    },
	}
    };

    layoutMaps.qfmlwy = data.layouts.qfmlwy;
    levelDictionaries.qfmlwy = data.dictionaries.qfmlwy;

    let layoutSelector = document.getElementsByTagName("select");

    let qfmlwySelector = document.createElement("option");
    qfmlwySelector.setAttribute("value", "qfmlwy");
    qfmlwySelector.textContent = "QFMLWY";

    layoutSelector[0].appendChild(qfmlwySelector);
})();
