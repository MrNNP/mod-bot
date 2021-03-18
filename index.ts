import src from './src/src';
import * as Discord from 'discord.js';

const bot:Discord.Client = new Discord.Client();

bot.once('ready', () => {
    console.log('Online')
});

bot.once('message',msg=>{
    if(msg.author.id == '296456091661762571'){
        src.commands.user.setup(msg);
    }


});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');