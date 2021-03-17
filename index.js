"use strict";
exports.__esModule = true;
var src_1 = require("./src/src");
var Discord = require("discord.js");
var bot = new Discord.Client();
bot.once('ready', function () {
    console.log('Online');
});
bot.on('message', function (msg) {
    console.log(src_1["default"].blanketMod(msg, 10));
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');
