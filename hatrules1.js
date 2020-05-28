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
    .setDescription(` ** Правила игры "Шляпа" **

     - Цель игры – за ограниченное время объяснить партнёру как можно больше слов, загаданных ведущим(${role1}).
     - Для игры необходимо от 4 до 10 человек. Игроки разбиваются на пары (**кто с кем хочет**).
     - ${role1} даёт по 4 слова игроку из пары и  1 минуты на, то что бы подумать. 
     
     - Загадываемые слова — в единственном числе (если оно есть; «ножницы» и т.п. загадывать можно). ${em1}
     Слово считается отгаданным, если отгадывающий произнёс его в любой форме (например, «Мама мыла…» — «Раму», если загадано «Рама»). 
     Слово считается отгаданным, если отгадывающий произнёс слово, звучащее так же, как написанное на бумажке, так называемый омофон 
     (например, «Такой с колчаном» — «Лук», если загадано «Луг»).
     Можно также совмещать эти правила (например, «Я вступаю в…» — «Брак», если загадано «Брага»).${em3}
     - Объясняющему запрещено произносить слова, однокоренные* загаданному слову. Слова, имеющие ту же приставку или суффикс, что и загаданное, произносить можно, 
     не сообщая при этом, что у загаданного слова такая же приставка или суффикс. Объясняющему запрещено произносить аббревиатуры, 
     одна из букв которых обозначает загаданное слово (например, нельзя говорить «МГУ» для «Университет»).`)
    .setImage('https://images-ext-1.discordapp.net/external/iwP3aqmHk6v4MtVKcGSrhYAoiTiVuQqAhoG3V3MnZtY/https/media.discordapp.net/attachments/714582333285597184/714600357493473330/-1123123.png')
    bot.send(embed);
};
module.exports.help = {
   name: "hatr1"
};