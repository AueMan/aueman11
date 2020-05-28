const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`Вы не указали Содержимое!`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor("Prison", "https://cdn.discordapp.com/attachments/615196526729232384/705776182972514415/mint.png")
    .setColor([255,255,0])
    .setDescription(botmessage)
    .setImage('https://media.discordapp.net/attachments/635917406568710144/638343117140918283/-6.gif')
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
    name: "new"
};