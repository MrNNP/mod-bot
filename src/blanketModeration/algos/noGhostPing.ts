import {Message} from 'discord.js';
import  ModBot from '../../prototypes/proto';
const noGhostPingOnEdit = (msgBefore:Message,msgAfter:Message):ModBot.Moderation.blanketMod.Return=>{
    if(
        
       !(msgBefore.mentions.members.equals(msgAfter.mentions.members))
                                    ||
        (msgBefore.mentions.everyone != msgAfter.mentions.everyone)
        
        ){
            return {
                flagged:true,
                algo:'noGhostPing',
                deleted:false,
                message:msgBefore,
                messageAfter:msgAfter
            };

        }
    return {
        flagged:true,
        algo:'noGhostPing',
        deleted:false,
        message:msgBefore,
        messageAfter:msgAfter
    };
}
export default {noGhostPingOnEdit,event:'messageUpdate'};