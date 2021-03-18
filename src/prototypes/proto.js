"use strict";
exports.__esModule = true;
exports.punishmentTypes = exports.askDiscUser = exports.punishmentOptions = void 0;
;
var punishmentOptions;
(function (punishmentOptions) {
    punishmentOptions[punishmentOptions["math"] = 0] = "math";
    punishmentOptions[punishmentOptions["messages"] = 1] = "messages";
})(punishmentOptions = exports.punishmentOptions || (exports.punishmentOptions = {}));
function askDiscUser(msg) {
    var filter = function (m) { return m.member.id == msg.member.id; };
    return msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] });
}
exports.askDiscUser = askDiscUser;
var punishmentTypes;
(function (punishmentTypes) {
    punishmentTypes[punishmentTypes["purgatory"] = 0] = "purgatory";
    punishmentTypes[punishmentTypes["mute"] = 1] = "mute";
    punishmentTypes[punishmentTypes["kick"] = 2] = "kick";
})(punishmentTypes = exports.punishmentTypes || (exports.punishmentTypes = {}));
