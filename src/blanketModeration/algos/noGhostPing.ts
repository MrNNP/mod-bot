import {Message} from 'discord.js';
import { blanketModerationReturn } from '../../prototypes/proto';
const noGhostPingOnEdit = (msgBefore:Message,msgAfter:Message):blanketModerationReturn=>{
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