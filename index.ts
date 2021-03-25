import src from './src/src';
import * as Discord from 'discord.js';
const prefix = '$';
const bot:Discord.Client = new Discord.Client();

bot.once('ready', () => {
    console.log('Online')
});

bot.on('message',async msg=>{
    if(msg.content.startsWith(prefix)){
    let args:Array<string> = msg.content.substring(prefix.length).split(' ');
    switch(args[0]){
        case 'setup':
            await src.commands.user.setup(msg).then(guildObj => src.db.setDBitem(guildObj.id,guildObj));
            msg.channel.send('Setup successful. You can now start to use the bot.');
        break;
        
    } 
    }
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ'); 