const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda")
    .setDescription("**Тебе выдана роль разделяющая обычные роли и лвл..**")
    .setFooter('Бот создан - специально для © MilkyWay Discord server  ')
    bot.send(embed);   
    
    let guildMember = message.member;
    guildMember.addRole('714860185126043689'); 
};
module.exports.help = {
    name: "lvl"
};