// ==UserScript==
// @name         YouTube Auto Confirm
// @namespace    https://waryor.com/
// @version      0.1.3
// @description  Auto-Clicks on "Yes" when asked "Video paused. Continue watching?"
// @author       RustyPrimeLUX
// @match        https://www.youtube.com/watch?v=*
// @downloadURL  https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoConfirm.js
// @updateURL    https://raw.githubusercontent.com/RustyPrime/UserScripts/master/YouTube_AutoConfirm.js
// @grant        none
// ==/UserScript==

(function() {
    var checkDelay = 2000; // checks every 2 seconds if the pop-up has appeared


    var popUp = null;
    'use strict';
    setInterval(function(){
        if(popUp === null){
            popUp = document.querySelector("paper-dialog.ytd-popup-container");
        }
        if(popUp !== undefined){
            if(popUp !== null){
                if(popUp.hasAttribute("aria-hidden")){
                    if(popUp.getAttribute("aria-hidden") !== true && popUp.getAttribute("aria-hidden") !== "true"){
                        FindAndClickButton(popUp);
                    }
                }
                else{
                    FindAndClickButton(popUp);
                }
            }
        }
    }, checkDelay);

    function FindAndClickButton(popUp){
        var button = popUp.querySelector("paper-button#button yt-formatted-string#text");
        if(button.textContent === "Yes"){
            console.log("clicking on yes");
            button.click();
        }
    }
})();

