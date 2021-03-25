"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var proto_1 = require("../../prototypes/proto");
exports["default"] = (function (msg) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        function errorTimeout() {
            msg.channel.send("You ran out of time, or an error occured. Try again.");
            reject('Timeout-didnt respond in time');
        }
        var response, ppoption, _a, resObj;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    msg.channel.send(proto_1["default"].Interact.staticMessages.setupStartMsg(msg.guild.name, msg.member.displayName, msg.member.roles.highest.name))["catch"](errorTimeout);
                    return [4 /*yield*/, proto_1["default"].Interact.askDiscUserwOptions(proto_1["default"].Interact.staticMessages.setupQuestions[1], msg, [['p', 'For purgatory, where user has to complete a task before unmute'], ['m', 'For the user to be muted'], ['k', 'For the user to be kicked']])["catch"](errorTimeout)];
                case 1:
                    response = _c.sent();
                    _a = response;
                    switch (_a) {
                        case 'p': return [3 /*break*/, 2];
                        case 'm': return [3 /*break*/, 4];
                        case 'k': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2:
                    response = proto_1["default"].Punishments.punishmentTypes.purgatory;
                    return [4 /*yield*/, proto_1["default"].Interact.askDiscUserwOptions(proto_1["default"].Interact.staticMessages.setupQuestions[2], msg, [['math', 'for the purgatory task to be a math problem'], ['msgs', 'for the purgatory task to be a task where a certain number of messages need to be sent']])["catch"](errorTimeout)];
                case 3:
                    ppoption = _c.sent();
                    if (ppoption == 'math') {
                        ppoption = proto_1["default"].Punishments.purgatoryPunishment.math;
                    }
                    else
                        ppoption = proto_1["default"].Punishments.purgatoryPunishment.messages;
                    return [3 /*break*/, 6];
                case 4:
                    response = proto_1["default"].Punishments.punishmentTypes.mute;
                    return [3 /*break*/, 6];
                case 5:
                    response = proto_1["default"].Punishments.punishmentTypes.kick;
                    _c.label = 6;
                case 6:
                    _b = {
                        id: msg.guild.id,
                        users: []
                    };
                    return [4 /*yield*/, proto_1["default"].Interact.askDiscUserwOptions(proto_1["default"].Interact.staticMessages.setupQuestions[0], msg, [['y', 'yes'], ['n', 'no']])["catch"](errorTimeout)];
                case 7:
                    resObj = (_b.strikes = (_c.sent()) == 'y' ? true : false,
                        _b.pOptions = {
                            type: response,
                            purgatoryType: ppoption,
                            currentPunishments: []
                        },
                        _b);
                    resolve(resObj);
                    return [2 /*return*/];
            }
        });
    }); });
});
