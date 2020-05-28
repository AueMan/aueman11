const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "БОТЫ")
    let role1 = message.guild.roles.find(role => role.name === "..  ☾ ˚ South Star˚　.    ˚.*")
    let role2 = message.guild.roles.find(role => role.name === ".   ⌀ * Star Guard .  ×  ˚.")
    let role3 = message.guild.roles.find(role => role.name === "*.   × EventMod.  ⌀  ˚.")
    let role4 = message.guild.roles.find(role => role.name === "・🚀  .*  ⊹Nitro Booster˚ .")
    let role5 = message.guild.roles.find(role => role.name === "✦　˚ .Comet lost in space ˚     ⊹")
    let role6 = message.guild.roles.find(role => role.name === "👮‍♂ › Модер Discord")
    let role7 = message.guild.roles.find(role => role.name === "👨‍✈ › Пр.Модератор Discord")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "emoji_55")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "emoji_12")
    let em5 = message.guild.emojis.find(emoji => emoji.name === "emoji_48")
    let em6 = message.guild.emojis.find(emoji => emoji.name === "sef")
    let em7 = message.guild.emojis.find(emoji => emoji.name === "heart")
    let em8 = message.guild.emojis.find(emoji => emoji.name === "heart3")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`Описание ролей сервера

    ▸ ${role} - Боты которые были созданы нами. ${em4}

    ▸ ${role1} - Cмотрящие сервера, или-же главная администрация. 

    ▸ ${role2} - Модерация сервера. 

    ▸ ${role3} - Управляющий инвентами. ${em6}

    ▸ ${role4} - Тот кто помогает ${em1} серверу быть лучше :) ${em3}

    ▸ ${role5} - Эту роль имеют только лучшие в мире люди.${em8}`)

    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "ro"
};
