"use strict";
exports.__esModule = true;
var src_1 = require("./src/src");
var Discord = require("discord.js");
var testlol = true;
var bot = new Discord.Client();
bot.once('ready', function () {
    console.log('Online');
});
bot.on('message', function (msg) {
    if (msg.author.id == '296456091661762571' && testlol) {
        testlol = false;
        src_1["default"].commands.user.setup(msg).then(function (guildObj) {
            msg.channel.send(JSON.stringify(guildObj)).then(function () {
                bot.destroy();
            });
        })["catch"](function (err) { console.log(err); });
    }
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');
