const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("PINK 🌞 FLAME", "https://cdn.discordapp.com/attachments/615196526729232384/705776182972514415/mint.png")
    .addField('Владелец', message.guild.owner, true) // параметры: название: string, значение: string, в линию?: boolean (true, false)
    .addField('ID', message.guild.id, true)
    .addField('Участники', `${message.guild.presences.size} в сети\n ${message.guild.memberCount} всего`, true)
    .addField('Каналы', `${message.guild.channels.filter( c =>   c.type ==  'text').size} текстовых\n${message.guild.channels.filter( c =>  c.type ==  'voice').size} голосовых`, true)
    .addField('Ролей', message.guild.roles.size, true)
    .addField('Смайликов', message.guild.emojis.size, true)
    .setFooter('Сервер создан') // параметры: текст: string, картинка: string
    .setTimestamp(new Date(message.guild.createdTimestamp)) // конверт времени
    .setColor(0x32d160) // цвет
    .setImage('https://cdn.discordapp.com/attachments/615196526729232384/705776182972514415/mint.png')
       await message.channel.send(embed) // отправка в канал
   }
   
   module.exports.help = {
    name: 'server' // название команды
   }