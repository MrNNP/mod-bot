"use strict";
exports.__esModule = true;
var src_1 = require("./src/src");
var Discord = require("discord.js");
var bot = new Discord.Client();
bot.once('ready', function () {
    console.log('Online');
});
bot.once('message', function (msg) {
    if (msg.author.id == '296456091661762571') {
        src_1["default"].commands.user.setup(msg);
    }
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');
