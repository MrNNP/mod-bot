"use strict";
exports.__esModule = true;
var proto_1 = require("../../prototypes/proto");
exports["default"] = (function (msg) {
    msg.channel.send("Setting up for server " + msg.guild.name + ", being set up by " + msg.member.displayName + ", with highest role of " + msg.member.roles.highest.name + ".");
    var guildObj = {};
    msg.channel.send("**ANSWER ALL QUESTIONS WITH ONLY Y or N UNLESS OTHER OPTIONS ARE GIVEN**");
    var prevQuestion = function (msg) {
        msg.channel.send("Do you want to use increasing punishments? This is where punishment lengths increase depending on number of previous infractions");
        proto_1.askDiscUser(msg).then(function (msgs) {
            var msg = msgs.first();
            if (msg.content.toUpperCase() == 'Y') {
                guildObj.increasingPunishments = true;
            }
            else if (msg.content.toUpperCase() == 'N') {
                guildObj.increasingPunishments = false;
            }
            else {
                msg.channel.send("**ANSWER ALL QUESTIONS WITH ONLY Y or N UNLESS OTHER OPTIONS ARE GIVEN**");
                prevQuestion(msg);
                return;
            }
            prevQuestion = function (msg) {
                msg.channel.send("Got " + guildObj.increasingPunishments + " for the last question");
                msg.channel.send("Next question, what kind of punishments do you want to enable? Your options are purgatory, kick, and mute.\nIn purgatory, you have to complete a task before you are allowed back into the rest of the server\nKick just kicks people\nMute makes it so they cannot speak untill they are unmuted, either manually or after a certain amount of time");
                msg.channel.send("**ANSWER THIS QUESTION WITH P, K OR M**");
                proto_1.askDiscUser(msg).then(function (msgs) {
                    msg = msgs.first();
                    switch (msg.content.toUpperCase()) {
                        case 'P':
                            guildObj.punishmentType = proto_1.punishmentTypes.purgatory;
                            break;
                        case 'M':
                            guildObj.punishmentType = proto_1.punishmentTypes.mute;
                            break;
                        case 'K':
                            guildObj.punishmentType = proto_1.punishmentTypes.kick;
                            break;
                        default:
                            prevQuestion(msg);
                            return;
                            break;
                    }
                    console.log(guildObj);
                });
            };
            prevQuestion(msg);
        });
    };
    prevQuestion(msg);
});
