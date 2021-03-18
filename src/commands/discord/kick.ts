import { GuildMember } from "discord.js";
import { commandReturn } from "../../prototypes/proto";

export default (user:GuildMember):commandReturn=>{
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

