const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role1 = message.guild.roles.find(role => role.name === "*.   × EventMod.  ⌀  ˚.")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "emoji_55")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "emoji_6")
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#3a92ff")
    .setDescription(`
    -  Объясняющему запрещено произносить слова, созвучные загаданному слову (а также слова, имеющие общие морфемы с загаданным), 
    сообщая явно или намекая при этом (например, выделяя интонацией), 
    что слова созвучны (или имеют общие морфемы, например, «большезга»). Объясняющему запрещено произносить слова, не существующие в русском языке, 
    если такие слова вместе с загаданным и, возможно, 
    дополнительными буквами образуют существующее слово.${em1}
    - Ироки, не загадывающие и не отгадывающие слово в данный момент, не должны ни мешать, ни помогать играющей паре . 
    Не допускается никаким образом обсуждать ещё не отгаданные слова.
    - Время, отведённое на загадывание слов каждой парой игроков, —  2 минуты. После слов судьи «время» объясняющий перестаёт объяснять, 
    а у отгадывающего есть ещё 5 секунд  и одно слово на то, 
    чтобы дать ответ, после чего судья говорит «всё», и ответы больше не принимаются. Если загадывающий не смог остановиться после сигнала «время», 
    право трёх секунд отгадывающему не даётся.`)
    .setImage('https://images-ext-1.discordapp.net/external/iwP3aqmHk6v4MtVKcGSrhYAoiTiVuQqAhoG3V3MnZtY/https/media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png')
    bot.send(embed);
};
module.exports.help = {
   name: "hatr2"
};