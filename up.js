const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let roles = message.guild.roles.find(role => role.name === "@everyone") 
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "emoji_55")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "emoji_6")

    let embed = new Discord.RichEmbed()
    .setAuthor("Глобальное обновление.. Milky Way")
    .setColor("#3a92ff")
    .setDescription(`
                                            ${roles}
    - ${em1} 
    `)
    .setImage("https://media.discordapp.net/attachments/713304224275890218/713308256876888074/12312312312.png?width=617&height=475") 
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "up"
};
