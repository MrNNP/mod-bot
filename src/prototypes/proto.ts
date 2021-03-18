import { Message } from "discord.js";

export interface basicOptions{
    length:number,
    userId:number,
    guildId:number
}
export interface blanketModerationReturn {
    flagged:boolean,
    message:Message,
    messageAfter?:Message,
    deleted:boolean,
    algo:'noGhostPing'|'noMassPing'
};

export interface moderationAlgoExport{
   check:Function,
   event:string 
}

export enum punishmentOptions{
    math=0, messages=1
}
export interface puratoryOptions extends basicOptions{
    punishment:punishmentOptions,
    strength:number
}
export interface muteOptions extends basicOptions{
    roleId:number
}
export interface commandReturn{
    error?:boolean|string,
    success:boolean,
    extraInfo?:puratoryOptions|muteOptions
}