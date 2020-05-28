const {RichEmbed} = require('discord.js')
const strftime = require('strftime')
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author

    let day = 1000 * 60 * 60 * 24
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
    let profile = require('../xp.json');
    let embed = new RichEmbed()
        .setTitle(`**Профиль**`)
        .addField('Никнейм на сервере', `${argsUser}`)
        .addField('Дата регистрации в дискорде', `${strftime(`%d.%m.%Y в %H:%M`, new Date(argsUser.createdTimestamp))}\n(${diff1} дн. назад)`, true)
        .addField('Впервые на сервере', `${strftime(`%d.%m.%Y в %H:%M`, new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дн. назад)`, true)
        .addField('Роли', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role).join(', ') || 'Не имеет')
        .setColor(message.guild.member(argsUser).displayHexColor)
        .setTimestamp()
        .setThumbnail(argsUser.avatarURL)
        .setFooter(`ID: ${argsUser.id}`)
        .setImage('https://images-ext-1.discordapp.net/external/fjy1GLT7hrMRpNzOM5OEyJDJbe8GLU9651OT6Z-ftrw/https/avatanplus.com/files/resources/mid/5a7864f713d0b161664a6529.png')
    await message.channel.send(embed)
}
module.exports.help = {
name: "profile",
aliases: ["profile", "user", "info"],
description: "Returns user information",
usage: "[username | id | mention]",
run: (client, message, args) => {
    const member = getMember(message, args.join(" "));

    // не троогай
    const joined = formatDate(member.joinedAt);
    const roles = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join(", ") || 'none';

    // не троогай
    const created = formatDate(member.user.createdAt);
}
}