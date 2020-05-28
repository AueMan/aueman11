const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setColor([255,255,0])
    .setImage('ссылка на png!')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "png1"
};