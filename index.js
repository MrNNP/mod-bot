"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var bot = new Discord.Client();
bot.once('ready', function () {
    console.log('Online');
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');
