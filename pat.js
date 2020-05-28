    
const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send(` для этого действия требуется пользователь. Попробуй pf!pat @имя`).then(msg => msg.delete(5 * 1000));

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/pat`);

    let embed = new Discord.RichEmbed()
        .setTitle("Поглаживание! c:")
        .setDescription(`**${message.author.username}** Погладил(а) **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("RANDOM")
    message.channel.send(embed)
};
module.exports.help = {
    name: "pat",
    category: '-',
    aliases: ['погладить']
};