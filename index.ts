import src from './src/src';
import * as Discord from 'discord.js';
import ModBot from './src/prototypes/proto';
const prefix = '$';
const bot:Discord.Client = new Discord.Client();



bot.once('ready', () => {
    console.log('Online')
});

let testuser:ModBot.DbObjs.userObj = {
    id:'489542372787486731',
    strikes:0
};


bot.on('message',async msg=>{
    if(msg.content.startsWith(prefix)){
    let args:Array<string> = msg.content.substring(prefix.length).split(' ');
    if(args[0]!='setup'&&(db.getGuildIndex(msg.guild.id)==-1)){
        msg.reply('You need to setup up the bot first');
        return;
    }
    switch(args[0]){
        case 'setup': 
            await src.commands.user.setup(msg).then(guildObj => db.raw.guild.push(guildObj));
           msg.channel.send('Setup successful. You can now start to use the bot.');
        break;
        case 'convict':
        testuser.id = msg.mentions.members.first().id;
           await src.commands.discord.purgatory(msg,testuser).catch(err=>console.error(err));
           msg.channel.send('so did it work?')
        break;    
        }
    }
    
});
bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ'); 