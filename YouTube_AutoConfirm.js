// ==UserScript==
// @name         YouTube_AutoConfirm
// @namespace    https://waryor.com/
// @version      0.1.2
// @description  Auto-Clicks on "Yes" when asked "Video paused. Continue watching?"
// @author       RustyPrimeLUX
// @match        https://www.youtube.com/watch?v=*
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoConfirm.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoConfirm.js
// @grant        none
// ==/UserScript==

(function() {
    var checkDelay = 2000; // checks every 2 seconds if the pop-up has appeared

    'use strict';
    setInterval(function(){
        var popUp = document.querySelector("yt-confirm-dialog-renderer");
        if(popUp !== undefined && popUp !== null){
            var button = popUp.querySelector("paper-button#button yt-formatted-string#text");
            if(button.textContent === "Yes"){
                console.log("clicking on yes");
                button.click();
            }
        }
    }, checkDelay);
})();
