const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "*.   × EventMod.  ⌀  ˚.")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart")
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`❌ У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`❌ **Пример:** !game 12:20 **Указывайте время по МСК**`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`⠀⠀⠀⠀⠀⠀⠀           ⠀⠀
${em1}Ведущий: <@${message.author.id}>
${em3}Проведёт игру..
${em2}Время проведения: ** ${botmessage} (ПО МСК)**
    
    
    . ︶︶︶. ̥ᔗ ${em1} [Подключиться](https://discord.gg/YhAfYt8) ${em2} ᔚ ̥ . ︶︶︶.
    `)
    .setImage('https://images-ext-1.discordapp.net/external/iwP3aqmHk6v4MtVKcGSrhYAoiTiVuQqAhoG3V3MnZtY/https/media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "game"
};
