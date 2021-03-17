"use strict";
exports.__esModule = true;
var db_1 = require("./database/db");
var cmds_1 = require("./commands/cmds");
var blanketMod_1 = require("./blanketModeration/blanketMod");
var handler = {
    db: db_1["default"],
    commands: cmds_1["default"],
    blanketMod: blanketMod_1["default"]
};
exports["default"] = handler;
