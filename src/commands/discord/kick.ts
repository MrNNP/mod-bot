import { GuildMember } from "discord.js";
import ModBot from "../../prototypes/proto";

export default (user:GuildMember):ModBot.Moderation.ActionReturn=>{
       try{
        user.kick();
       }catch(err){
        return {
            success:false,
            error:err
        }
    }
           return {
               success:true
            }
        
}

