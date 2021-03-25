import src from './src/src';
import * as Discord from 'discord.js';
let testlol = true;
const bot:Discord.Client = new Discord.Client();

bot.once('ready', () => {
    console.log('Online')
});

bot.on('message',msg=>{
    if(msg.author.id == '296456091661762571'&&testlol){
        testlol =false;
        src.commands.user.setup(msg).then(guildObj=>{
     
            msg.channel.send(JSON.stringify(guildObj)).then(()=>{
                bot.destroy();
            });
            
        }).catch(err=>{console.log(err)});
    }
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ'); 