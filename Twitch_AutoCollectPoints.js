// ==UserScript==
// @name         Twitch_AutoCollectPoints
// @namespace    https://waryor.com
// @version      0.1
// @description  Automaticly collects twitch points when watching a streamer
// @author       RustyPrimeLUX
// @match        https://www.twitch.tv/*
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/Twitch_AutoCollectPoints.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/Twitch_AutoCollectPoints.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var debug = false;
    setInterval(function(){
        if(debug)console.log("checking");
        var item = document.querySelector(".claimable-bonus__icon");
        if(item != undefined){
             item.click();
        }
        if(debug)console.log(item);
    }, 10000);
})();
