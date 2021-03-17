"use strict";
exports.__esModule = true;
var noMassPing = function (msg, pingLimit) {
    if (msg.mentions.everyone) {
        return {
            flagged: true,
            algo: 'noMassPing',
            message: msg,
            deleted: false
        };
    }
    if (msg.mentions.members.size > (msg.guild.memberCount / pingLimit)) {
        return {
            flagged: true,
            algo: 'noMassPing',
            message: msg,
            deleted: false
        };
    }
    return {
        flagged: false,
        algo: 'noMassPing',
        message: msg,
        deleted: false
    };
};
exports["default"] = noMassPing;
