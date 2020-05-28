const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

    let role1 = message.guild.roles.find(role => role.name === "1")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor("#fffe60")
    .setDescription(`Упс..
    Кажется Никита уснул и тут что-то забыл сделать..
     [Пни его](https://vk.com/0nmichalevich) что-бы он решил эту недоработку.. а то вобще уже обарзел.. `)
    .setImage("https://media.discordapp.net/attachments/713304224275890218/713308256876888074/12312312312.png?width=617&height=475") 
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "error"
};

