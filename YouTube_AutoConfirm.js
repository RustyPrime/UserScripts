// ==UserScript==
// @name         YouTube Auto Confirm
// @namespace    https://waryor.com/
// @version      0.1.3
// @description  Auto-Clicks on "Yes" when asked "Video paused. Continue watching?"
// @author       RustyPrimeLUX
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    var checkDelay = 2000; // checks every 2 seconds if the pop-up has appeared


    var popUp = null;
    'use strict';
    setInterval(function(){
        if(popUp === null){
            popUp = document.querySelector("yt-button-renderer#confirm-button");
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
        var button = popUp.querySelector("a");
        if(button !== undefined) button.click();
    }
})();
