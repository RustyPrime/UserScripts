// ==UserScript==
// @name         Unity Forum $$anonymous$$ Replacer
// @namespace    none
// @version      1.0
// @description  replaces $$anonymous$$ back to 'hi'
// @author       RustyPrime
// @match        https://answers.unity.com/questions/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unity.com
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/UnityForum_$$anonymous$$_Replacer.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/UnityForum_$$anonymous$$_Replacer.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var body = document.querySelector("body");
    body.innerHTML = body.innerHTML.replaceAll('$$anonymous$$', 'hi');
})();
