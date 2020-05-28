const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`



 **Эмоции и действия с участниками** 

!hug - обнять одного или всех участников сервера. 
!cry - расплакаться. 
!sad - начать грустить.
!kiss - поцеловать. 
!lick - лизнуть. 
!smile - улыбнуться.

 **Серверные команды** 

!help - команды для игроков сервера.
!moderhelp - команды для модерации сервера.

**Команды могут и будут пополняться**`)

    .setImage("https://media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "help"
};
