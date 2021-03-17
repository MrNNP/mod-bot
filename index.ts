import src from './src/src';
import * as Discord from 'discord.js';

const bot:Discord.Client = new Discord.Client();

bot.once('ready', () => {
    console.log('Online')
});

bot.on('message',msg=>{
    console.log(src.blanketMod(msg,10));
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');