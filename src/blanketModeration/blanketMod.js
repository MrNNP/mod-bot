"use strict";
exports.__esModule = true;
var noMassPing_1 = require("./algos/noMassPing");
var algos = [];
algos.push(noMassPing_1["default"]);
var checkBlanketMod = function (msg, pingLimit) {
    return algos.map(function (algo) { return algo.check(msg, pingLimit); });
};
exports["default"] = checkBlanketMod;
