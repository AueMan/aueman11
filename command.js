const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let hi = message.guild.channels.find(channel => channel.name === "⌜привет⌟🌏") 
    let info = message.guild.channels.find(channel => channel.name === "⌞руководство⌝") 
    let rules = message.guild.channels.find(channel => channel.name === "⌜правила⌟")
    let roles = message.guild.channels.find(channel => channel.name === "⌞всё∽о∽ролях⌝")
    let cmd = message.guild.channels.find(channel => channel.name === "⌜команды⌟")
    let spam = message.guild.channels.find(channel => channel.name === "∦флуд⌄")
    let jb = message.guild.channels.find(channel => channel.name === "⌃жалобы∦")
    let sun = message.guild.channels.find(channel => channel.name === "⌄общий∦")
    let musichelp = message.guild.channels.find(channel => channel.name === "∦команды∽ботов")
    let musiczak = message.guild.channels.find(channel => channel.name === "∦заказ∽музыки")
    let update = message.guild.channels.find(channel => channel.name === "⌞новости⌝")
    let accept = message.guild.channels.find(channel => channel.name === "⌜заявки∽на∽пост⌟")
    let anon = message.guild.channels.find(channel => channel.name === "⌞анонсы⌝")
    let audit = message.guild.channels.find(channel => channel.name === "⋞bot💻actions⋟")
    let role1 = message.guild.roles.find(role => role.name === "Prison ⛏")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "emoji_55")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "emoji_6")



    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`

    - Так, ты наверное уже прочитал приветствие и правила, молодец.. теперь

    - познакомимся с каналами и их содержимым..

    
    Каналы категории **..  ☾ ˚ Информация˚　.    ˚.*** 

    ▸ ${hi} - Приветствие для новых участников..

    ▸ ${info} - Твой навигатор по серверу => ты кстате тут :>

    ▸ ${rules} - Правила или же конституция сервера.

    ▸ ${roles} - Роли нашего сервера и всё о них.

    ▸ ${cmd} - Команды нашего бота.

    ▸ ${update} - Обновления и новости сервера.

    ▸ ${accept} - тут можно подать заявку на модератора.

    ▸ ${anon} - тут будут выходить анонсы о грядущих обновлениях.


    Каналы категории **чаты: **  ${em2}
    ▸ ${sun} - Основное общение на любые темы.

    ▸ ${spam} - Канал, созданный для флуда.

    ▸ ${jb} - Тут показываются жалобы игроков..

    ▸ ${musiczak} - Канал, созданный для заказа музыки..

    ▸ ${musichelp} - Канал с описанием всех команд музыкальных ботов. ${em3}`)
    .setImage("https://media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "ruc"
};
