const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`

 **Музыкальный Bot Ритм** 

!play - включит в очередь выбранную композицию.
!np - покажет активную композицию.
!skip - проголосовать за пропуск композиции.
!lyrics - выдает текст песни, если он имеется.
!pause - поставит на паузу текущую композицию.
!resume - продолжит воспроизведение поставленной на паузу композиции.
!queue - покажет очередь.
!stop - остановит бота.
!leave - бот покинет канал.

**Музыкальный Bot Груви** 

-play - включить выбранную композицию.
-next - пропустит композицию.
-back - вернет предыдущую композицию.
-song - покажет текущую композицию.
-pause - остановит композицию.
-clear - очистит список.
`)
    .setImage("https://media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png")
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "musich"
};