import {Message} from 'discord.js';
import ModBot from '../../prototypes/proto';
const noMassPing = (msg:Message,pingLimit:number):ModBot.Moderation.blanketMod.Return=>{
    if(msg.mentions.everyone){
        return {
            flagged:true,
            algo:'noMassPing',
            message:msg,
            deleted:false
        };
    }
    if(msg.mentions.members.size>(msg.guild.memberCount/pingLimit)){
        return {
            flagged:true,
            algo:'noMassPing',
            message:msg,
            deleted:false
        };
    }
    return {
        flagged:false,
        algo:'noMassPing',
        message:msg,
        deleted:false
    };
}
export default {check:noMassPing, event:'message'};