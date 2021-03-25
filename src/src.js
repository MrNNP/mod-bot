"use strict";
exports.__esModule = true;
//import db from './database/db';
var cmds_1 = require("./commands/cmds");
var blanketMod_1 = require("./blanketModeration/blanketMod");
var handler = {
    // db,
    commands: cmds_1["default"],
    blanketMod: blanketMod_1["default"]
};
exports["default"] = handler;
