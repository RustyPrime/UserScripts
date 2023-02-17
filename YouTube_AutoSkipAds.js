// ==UserScript==
// @name         YouTube Auto Skip Ads
// @namespace    none
// @version      0.2
// @description  autoclicks on youtube's skip ad buttons once they appear, also auto-closes banner ads
// @author       RustyPrimeLUX
// @match        https://www.youtube.com/*
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoSkipAds.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoSkipAds.js
// @license      MIT
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

        var closeBannerBtn = document.querySelector("button.ytp-ad-overlay-close-button");
        if(closeBannerBtn != null && closeBannerBtn.offsetParent !== null){
            if(debug) console.log("clicking on close banner ad");
            closeBannerBtn.click();
        }
        else{
            if(debug) console.log("found no banner ads: skipBannerBtn=" + closeBannerBtn);
        }
    }, 2000);
    
})();
