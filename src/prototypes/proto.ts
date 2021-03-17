import { Message } from "discord.js";

export interface blanketModerationReturn {
    flagged:boolean,
    message:Message,
    messageAfter?:Message,
    deleted:boolean,
    algo:'noGhostPing'|'noMassPing'
};

