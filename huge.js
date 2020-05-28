const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send(`для этого действия требуется пользователь. Попробуй !hug @имя`).then(msg => msg.delete(15 * 1000));
    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/hug`);

    let embed = new Discord.RichEmbed()
        .setTitle("Обнимашки! c:")
        .setDescription(`**${message.author.username}** Обнял(а) **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("RANDOM")
    message.channel.send(embed)
};
module.exports.help = {
    name: "hug",
};