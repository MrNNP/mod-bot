import { Message } from "discord.js"
import ModBot from "../../prototypes/proto";

export default (msg:Message):Promise<ModBot.DbObjs.guildObj>=>{
  return new Promise<ModBot.DbObjs.guildObj>(async(resolve, reject) => {
      let currentQuestion:any = ()=>{}
      msg.channel.send(ModBot.Interact.staticMessages.setupStartMsg(msg.guild.name,msg.member.displayName,msg.member.roles.highest.name));
      
      msg.channel.send(ModBot.Interact.staticMessages.onlyYandN);  
      
      let strikes;
      
      currentQuestion = async()=>{
        strikes =
          await ModBot.Interact.questionDiscUser(ModBot.Interact.staticMessages.setupQuestions[0],msg)
          .catch(currentQuestion);
          //TODO: work on getting right answer from user
        }
      currentQuestion();
      
      let ptype = await ModBot.Interact.questionDiscUser(ModBot.Interact.staticMessages.setupQuestions[1],msg);
      switch(ptype.content.toLowerCase()){
        case "p":
          let purgtype = await ModBot.Interact.questionDiscUser(ModBot.Interact.staticMessages.setupQuestions[2],msg);
          
          let pptype:ModBot.Punishments.purgatoryPunishment;
          
          if(purgtype.content.toLowerCase() == 'a') {
          
            pptype = ModBot.Punishments.purgatoryPunishment.math;
          
          } else if(purgtype.content.toLowerCase() == 'b'){
          
            pptype = ModBot.Punishments.purgatoryPunishment.messages;
          
          } else {
          
            reject('That was not one of the options, try again')
          
            return;
          
          }
          
          resolve({
            id:msg.guild.id,
            
            users:[],
            
            strikes:strikes.content.toLowerCase() == 'y'? true:false,
            pOptions:{

              type:ModBot.Punishments.punishmentTypes.purgatory,
  
              currentPunishments:[],
    
              purgatoryType:pptype
          }
        }) 
    }   
  
  })
}