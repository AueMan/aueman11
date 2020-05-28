const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) =>{
    try{
        function send (msg){
            message.channel.send(msg);
        }
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`У вас нет прав`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!args[0]) return send(`Вы не указали пользователя`);
    if(!rUser) return send(`Пользователь не найден`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`нее... Вы не можете дать ему предупреждение!`);

    profile[rUser.id].warns++;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#fffe60")
    .setDescription("Предупреждение")
    .addField("Модератор",message.author.username)
    .addField("Выдал предупреждение",`${rUser.user.username}`)
    .addField("Количество предупреждений",`${profile[rUser.id].warns}/3`)
    .setDescription(`**Если данный варн выдан не верно пишите [сюда](https://vk.com/0nmichalevich)**`)
    .setImage("https://media.discordapp.net/attachments/575680577831698432/675426372570710016/-1.png");        

    message.channel.send(embed);
    }catch(err){
    if(err.name === "ReferenceError")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
}

};
module.exports.help = {
    name: "warn"
};
