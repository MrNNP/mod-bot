import { Message } from "discord.js"
import ModBot from "../../prototypes/proto";
const questionDiscUser = ModBot.Interact.questionDiscUser;

export default (msg:Message):Promise<ModBot.DbObjs.guildObj>=>{
  return new Promise<ModBot.DbObjs.guildObj>(async(resolve, reject) => {
      msg.channel.send(ModBot.Interact.staticMessages.setupStartMsg(msg.guild.name,msg.member.displayName,msg.member.roles.highest.name));
      msg.channel.send(ModBot.Interact.staticMessages.onlyYandN);  
    try {
      let guildObj:ModBot.DbObjs.guildObj = {
        id:msg.guild.id,
        users:[],
        strikes: ((await questionDiscUser(ModBot.Interact.staticMessages.setupQuestions[1], msg)).content == 'Y'?true:false),
        pOptions :{
          type:await ModBot.Interact.askWhichPunishmentType(msg),
          currentPunishment:[]
        } 
      };
        resolve(guildObj);    
    } catch (error) {
        reject(error);
    }

   })
}