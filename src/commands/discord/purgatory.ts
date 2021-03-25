import { Message, TextChannel } from "discord.js";
import ModBot from "../../prototypes/proto";

async function banish(msg:Message,user:ModBot.DbObjs.userObj):Promise<ModBot.Punishments.options.puratoryOptions>{
return new Promise<ModBot.Punishments.options.puratoryOptions>(async(resolve, reject) => {
    let dUser = await msg.guild.members.fetch(user.id);
    await ModBot.Punishments.givePurgRole(msg,dUser);
    
    let purgChannel:TextChannel = await ModBot.Punishments.createPurgChannel(msg,dUser);
 
    msg.member.setNickname('In PURGATORY');

    purgChannel.send(ModBot.Interact.discordEmbed('Welcome to purgatory.'));
    





})



}



export default banish;