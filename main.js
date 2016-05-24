/**
 * Created by per on 2016-05-24.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    "use strict";
    const sendScriptToPage = function(tabId, changeInfo, tab) {
        if (changeInfo.status === "complete" && tab && tab.url && tab.url.indexOf("http") === 0) {
            console.log ("executeScript ");
            chrome.tabs.executeScript(tabId, {
                file: "content.js", allFrames: true
            });
        }
    };
    chrome.tabs.onUpdated.addListener(sendScriptToPage);
});