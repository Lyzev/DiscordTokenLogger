<h1 align="center">Tampermonkey Tokenlogger</h1>

<p align="center">A Proof-Of-Concept for a Discord tokenlogger. (Tampermonkey Script / Browser Extension)</p>

<div align="center">
    <a href="https://discord.gg/5UmsQP4MFH"><img src="https://img.shields.io/discord/610120595765723137?logo=discord" alt="Discord"/></a>
    <br><br>
    <img src="https://img.shields.io/github/last-commit/Lyzev/Tokenlogger" alt="GitHub last commit"/>
    <img src="https://img.shields.io/github/commit-activity/w/Lyzev/Tokenlogger" alt="GitHub commit activity"/>
    <br>
    <img src="https://img.shields.io/github/languages/code-size/Lyzev/Tokenlogger" alt="GitHub code size in bytes"/>
    <img src="https://img.shields.io/github/contributors/Lyzev/Tokenlogger" alt="GitHub contributors"/>
</div>

## How it works

### 1. Get the Token
The script activates on any site and puts you instantly on [discord.com](https://discord.com/channels/@me). There it gets the token out of the local storage.

### 2. Hide the Token
Then it uses [Base64](https://de.wikipedia.org/wiki/Base64) to encode the token.

### 3. Redirect to a different page
Now the script redirects to a different page (e.g.: [YouTube](https://youtube.com)) and adds an [HTTP Parameter](https://de.wikipedia.org/wiki/Query-String) which is the [Base64](https://de.wikipedia.org/wiki/Base64) encoded token.

### 4. Webhook Request
On the different page (e.g.: [YouTube](https://youtube.com)) the script gets the token out of the url ([HTTP Parameter](https://de.wikipedia.org/wiki/Query-String)) and decodes it with [Base64](https://de.wikipedia.org/wiki/Base64). Finally, it just sends the webhook request to the provided webhook url and adds the token in the content.

## Usage

### Install
1. Download the tokenlogger.js file
2. Open Tampermonkey in your Browser
3. Go to the Utilities tab
4. Press the button 'Choose File' at 'Import from file'
5. Choose the downloaded tokenlogger.js file
6. Click on install in the tab that has opened
7. Have fun!

### Obfuscation
The tokenlogger can also be obfuscated. For example you can use [obfuscator.io](https://obfuscator.io/).

## Bugs and Suggestions

### Discord
If you need support, you can join [this](https://discord.gg/5UmsQP4MFH) Discord server.

### GitHub
Bug reports and suggestions should be made in this repo's [issue tracker](https://github.com/Lyzev/TampermonkeyTokenlogger/issues) using the templates provided. Please provide as much information as you can to best help us understand your issue and give a better chance of it being resolved.

## Important
Please note, this repository is for educational purposes only. No contributors, major or minor, are to fault for any actions done by this program.
