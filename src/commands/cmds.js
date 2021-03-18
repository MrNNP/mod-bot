"use strict";
exports.__esModule = true;
var kick_1 = require("./discord/kick");
var mute_1 = require("./discord/mute");
var setup_1 = require("./user/setup");
var cmds = {
    discord: { kick: kick_1["default"], mute: mute_1["default"] },
    user: {
        setup: setup_1["default"]
    }
};
exports["default"] = cmds;
