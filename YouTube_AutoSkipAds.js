// ==UserScript==
// @name         YouTube Auto Skip Ads
// @namespace    https://waryor.com/
// @version      0.1
// @description  autoclicks on youtube's skip ad buttons once they appear
// @author       RustyPrimeLUX
// @match        https://www.youtube.com/*
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoSkipAds.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoSkipAds.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var debug = false;
    setInterval(function(){

        var skipAdBtn = document.querySelector("div.ytp-ad-text.ytp-ad-skip-button-text");
        if(skipAdBtn != null){
            if(debug) console.log("clicking on skip ads");
            skipAdBtn.click();
        }
        else{
            if(debug) console.log("found no ads: skipAdBtn=" + skipAdBtn);
        }
    }, 2000);
    
})();
