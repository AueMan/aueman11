const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

    let role = message.guild.roles.find(role => role.name === "Звёздочка - Твоя помощница 💫")
    let role1 = message.guild.roles.find(role => role.name === "Prison ⛏")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "emoji_55")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "emoji_6")
    let c = message.guild.channels.find(channel => channel.name === "⌜правила⌟") 
    let c1 = message.guild.channels.find(channel => channel.name === "∦флуд⌄")
    let c2 = message.guild.channels.find(channel => channel.name === "﹥ивенты")
    let c3 = message.guild.channels.find(channel => channel.name === "⌃жалобы∦")
    let c4 = message.guild.channels.find(channel => channel.name === "⌄общий∦")
    let c5 = message.guild.channels.find(channel => channel.name === "╏наказания")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`
    
    > Привет! Я ~ ${role}, та, кто поможет тебе.   ${em1}

    - Кратко о правилах:

    - Ведите себя прилично, руководствуйтесь здравым смыслом 

    - Не флудите бессмысленными сообщениями

    - За рекламу чего-либо вы можете получить бан ${em3}
    
    - Соблюдайте Discord ToS и Community Guidelines
    - Полные правила - ${c} ${em2} 
    

    ${c1} - для отображения действий модерации
    ${c4} - общение на любые другие темы.
    ${c3} - для жалоб на участников дискорд сервера
    
    > Инвайт на сервер:
    https://discord.gg/9BpuJKH${em4}`)
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "hi"
};