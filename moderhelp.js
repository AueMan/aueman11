const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`**Мод.команды:** 
   ** !say** - сообщение Отправляется сообщение от лица бота.
   ** !clear** {число сообщений от 1 до 10} - число Очищает чат от флуда или сообщений иного характера.
   ** !new [новости]** {число сообщений от 1 до 10} - публикуется новость.

**Виды наказания:** 
    **!mute {время в сек}** - даёт временный мут.
    **!unmute** - Убирает мут аккаунта.
    **!warn** - Выдается предупреждение аккаунту.
    **!unwarn** - Убирает предупреждение аккаунту.

**Для .   × EventMod.  ⌀  ˚.** 
   ** !game ** - [Время проведения ПО МСК!] 
   ** Пример: !game 18:00 **
   ** Команду используйте только в канале "Анонсы" **  
   
    **Удачного модерирования, не забывай кушать :>** `)
    .setImage("https://media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png")
    bot.send(embed);
};
module.exports.help = {
   name: "moderhelp"
};
