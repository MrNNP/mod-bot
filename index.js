const Discord = require('discord.js');

const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Online')
});

bot.on('message', (msg) => {
    if (msg.mentions.everyone) {
        try {
            msg.channel.send('why ping');

        } catch (error) {
            errorMessage(msg, error);
        }
        msg.member.kick('they pinged').catch(err => {
            errorMessage(msg, err)
        });
    }
    
    if (msg.mentions.members.array().length >= (msg.guild.memberCount / 2)) {
        try {
            msg.channel.send('i must ban you now');

        } catch (error) {
            errorMessage(msg, error);
        }
        msg.member.kick('they pinged').catch(err => {
            errorMessage(msg, err)
        });
    }

});

var errorMessage = (msg, error) => {
    try {
        msg.channel.send(`i couldn't take action for some reason. here is the error if you want to try and understand ||${error}||`);

    } catch (err) {
        console.log(err);
    }


}

bot.login('ODIxMjI2NDYxNzQ1OTA1NzA0.YFAovg.KIbjBDRv7hRrkFGkyxwSNiWYOoQ');