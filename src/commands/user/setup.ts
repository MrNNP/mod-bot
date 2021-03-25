import { Message } from "discord.js"
import ModBot from "../../prototypes/proto";



export default (msg:Message):Promise<ModBot.DbObjs.guildObj>=>{
  return new Promise<ModBot.DbObjs.guildObj>(async(resolve, reject) => {
    function errorTimeout (){
    msg.channel.send(`You ran out of time, or an error occured. Try again.`)
      reject('Timeout-didnt respond in time');
      
    }
  
    
    

      msg.channel.send(ModBot.Interact.staticMessages.setupStartMsg(msg.guild.name,msg.member.displayName,msg.member.roles.highest.name)).catch(errorTimeout);
      

      let response:any = await ModBot.Interact.askDiscUserwOptions(ModBot.Interact.staticMessages.setupQuestions[1],msg,[['p','For purgatory, where user has to complete a task before unmute'],['m','For the user to be muted'],['k','For the user to be kicked']]).catch(errorTimeout);

      let ppoption:any;

      switch(response){

        case 'p':

        response = ModBot.Punishments.punishmentTypes.purgatory;

          ppoption = await ModBot.Interact.askDiscUserwOptions(ModBot.Interact.staticMessages.setupQuestions[2],msg,[['math','for the purgatory task to be a math problem'],['msgs','for the purgatory task to be a task where a certain number of messages need to be sent']]).catch(errorTimeout);

          if(ppoption == 'math'){

            ppoption = ModBot.Punishments.purgatoryPunishment.math;

          } else ppoption = ModBot.Punishments.purgatoryPunishment.messages;

          break;

        case 'm':

          response = ModBot.Punishments.punishmentTypes.mute;
        
          break;
        
        case 'k':
          response = ModBot.Punishments.punishmentTypes.kick;
      }
      
      let resObj:ModBot.DbObjs.guildObj = {
      
        id:msg.guild.id,
      
        users:[],
      
        strikes: (await ModBot.Interact.askDiscUserwOptions(ModBot.Interact.staticMessages.setupQuestions[0],msg,[['y','yes'],['n','no']]).catch(errorTimeout))=='y'?true:false,
      
        pOptions:{
      
          type:response,
      
          purgatoryType:ppoption,
      
          currentPunishments:[]
      
        }
      
      }
      
      resolve(resObj);
    
   

  })

}


