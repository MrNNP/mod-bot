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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var botName = "lol idk";
var ModBot;
(function (ModBot) {
    var Interact;
    (function (Interact) {
        var staticMessages;
        (function (staticMessages) {
            staticMessages.onlyYandN = '**ONLY REPLY WITH A Y OR N UNLESS OTHER OPTIONS ARE PROVIDED**';
            staticMessages.setupQuestions = [
                new discord_js_1.MessageEmbed().setTitle('Do you want to use progressive punishments?'),
                new discord_js_1.MessageEmbed().setTitle('What kind of punishments do you want to use?'),
                new discord_js_1.MessageEmbed().setTitle('What task do you want in purgatory?'),
            ];
            function setupStartMsg(guildName, userName, highestRole) {
                return "Setting up " + botName + " for " + guildName + " by " + userName + " with highest role of " + highestRole + ".";
            }
            staticMessages.setupStartMsg = setupStartMsg;
        })(staticMessages = Interact.staticMessages || (Interact.staticMessages = {}));
        function askDiscUser(msg) {
            var filter = function (m) { return m.member.id == msg.member.id; };
            return msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] });
        }
        Interact.askDiscUser = askDiscUser;
        function discordEmbed(title) {
            var res = new discord_js_1.MessageEmbed;
            res.setTitle(title);
            return res;
        }
        Interact.discordEmbed = discordEmbed;
        function questionDiscUser(question, msg) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var msgs, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        return [4 /*yield*/, msg.channel.send(question)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, askDiscUser(msg)];
                                    case 2:
                                        msgs = _a.sent();
                                        resolve(msgs.first());
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        reject(error_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        }
        Interact.questionDiscUser = questionDiscUser;
        function askDiscUserwOptions(question, msg, options, again) {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var res_1, _a, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 5, , 6]);
                            if (!again) {
                                question.addField('Your options are:', "there are " + options.length + " options, answer with one of them");
                                question.setTimestamp();
                                options.forEach(function (option) { question.addField(option[0], option[1], true); });
                            }
                            return [4 /*yield*/, questionDiscUser(question, msg)];
                        case 1:
                            res_1 = _b.sent();
                            if (!(options.findIndex(function (index) { return res_1.content.toLowerCase() == index[0]; }) == -1)) return [3 /*break*/, 3];
                            _a = resolve;
                            return [4 /*yield*/, askDiscUserwOptions(question, msg, options, true)];
                        case 2:
                            _a.apply(void 0, [_b.sent()]);
                            return [3 /*break*/, 4];
                        case 3:
                            resolve(res_1.content.toLowerCase());
                            return [2 /*return*/];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_2 = _b.sent();
                            try {
                                reject();
                            }
                            catch (erroror) {
                                console.log(error_2 + '\n\n\n\n\n\n and \n\n\n' + erroror);
                                reject();
                            }
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
        }
        Interact.askDiscUserwOptions = askDiscUserwOptions;
    })(Interact = ModBot.Interact || (ModBot.Interact = {}));
    var Moderation;
    (function (Moderation) {
        var blanketMod;
        (function (blanketMod) {
            ;
        })(blanketMod = Moderation.blanketMod || (Moderation.blanketMod = {}));
    })(Moderation = ModBot.Moderation || (ModBot.Moderation = {}));
    var Punishments;
    (function (Punishments) {
        var punishmentTypes;
        (function (punishmentTypes) {
            punishmentTypes[punishmentTypes["purgatory"] = 0] = "purgatory";
            punishmentTypes[punishmentTypes["mute"] = 1] = "mute";
            punishmentTypes[punishmentTypes["kick"] = 2] = "kick";
        })(punishmentTypes = Punishments.punishmentTypes || (Punishments.punishmentTypes = {}));
        var purgatoryPunishment;
        (function (purgatoryPunishment) {
            purgatoryPunishment[purgatoryPunishment["math"] = 0] = "math";
            purgatoryPunishment[purgatoryPunishment["messages"] = 1] = "messages";
        })(purgatoryPunishment = Punishments.purgatoryPunishment || (Punishments.purgatoryPunishment = {}));
        function createPurgChannel(msg, user) {
            return __awaiter(this, void 0, void 0, function () {
                var parent, chanName, indexOfChannel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getParent(msg.guild.channels)];
                        case 1:
                            parent = _a.sent();
                            if (parent.children.array().length >= 40) {
                                //@ts-expect-error
                                return [2 /*return*/, parent.children.first];
                            }
                            chanName = "purgatory-for-" + user.user.discriminator;
                            indexOfChannel = parent.children.array().findIndex(function (channel) { return channel.name == chanName; });
                            console.log(indexOfChannel);
                            if (indexOfChannel == -1) {
                                return [2 /*return*/, msg.guild.channels.create(chanName, {
                                        parent: parent,
                                        reason: 'Purgatory Channel',
                                        type: 'text',
                                        permissionOverwrites: [
                                            {
                                                id: user.id,
                                                allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                            },
                                            {
                                                id: msg.guild.roles.everyone,
                                                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                            }
                                        ]
                                    })];
                            }
                            else {
                                //@ts-expect-error
                                return [2 /*return*/, parent.children.array()[indexOfChannel]];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Punishments.createPurgChannel = createPurgChannel;
        function givePurgRole(msg, user) {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var roles, indexOfRole, role_1, _a, _b, error_3;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 7, , 8]);
                            return [4 /*yield*/, msg.guild.roles.fetch()];
                        case 1:
                            roles = _c.sent();
                            indexOfRole = roles.cache.array().findIndex(function (role) { return role.name == 'In Purgatory'; });
                            if (!(indexOfRole == -1)) return [3 /*break*/, 4];
                            return [4 /*yield*/, roles.create({
                                    data: {
                                        name: 'In Purgatory',
                                        color: "#36393F",
                                        mentionable: false,
                                        permissions: []
                                    },
                                    reason: 'Purgatory Role'
                                })];
                        case 2:
                            role_1 = _c.sent();
                            msg.guild.channels.cache.forEach(function (channel) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, channel.overwritePermissions(__spreadArrays([
                                                {
                                                    id: role_1.id,
                                                    deny: [
                                                        "VIEW_CHANNEL", "SEND_MESSAGES"
                                                    ]
                                                }
                                            ], channel.permissionOverwrites.array()), 'Create purgatory role')];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            _a = resolve;
                            return [4 /*yield*/, msg.member.roles.add(role_1)];
                        case 3:
                            _a.apply(void 0, [_c.sent()]);
                            return [3 /*break*/, 6];
                        case 4:
                            _b = resolve;
                            return [4 /*yield*/, user.roles.add(roles.cache.array()[indexOfRole])];
                        case 5:
                            _b.apply(void 0, [_c.sent()]);
                            _c.label = 6;
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            error_3 = _c.sent();
                            reject(error_3.toString());
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            }); });
        }
        Punishments.givePurgRole = givePurgRole;
        function getParent(channels) {
            return __awaiter(this, void 0, void 0, function () {
                var indexofParent;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            indexofParent = channels.cache.array().findIndex(function (channel) { return channel.name == 'PURGATORY'; });
                            if (!(indexofParent == -1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, channels.create('PURGATORY', { type: 'category' })];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: 
                        //@ts-ignore
                        return [2 /*return*/, channels.cache.array()[indexofParent]];
                    }
                });
            });
        }
        function addStrike(userId, msg) {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var index, Duser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            index = db.getMemberIndex(userId);
                            if (!(index == -1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, msg.guild.members.fetch(userId)];
                        case 1:
                            Duser = _a.sent();
                            db.raw.users.push({
                                id: Duser.id,
                                strikes: 1
                            });
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }
        Punishments.addStrike = addStrike;
    })(Punishments = ModBot.Punishments || (ModBot.Punishments = {}));
})(ModBot || (ModBot = {}));
exports["default"] = ModBot;
