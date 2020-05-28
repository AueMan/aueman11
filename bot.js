const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on('voiceStateUpdate', async(oldMember, newMember) => {
    let oldChannel = oldMember.voiceChannelID;
    let newChannel = newMember.voiceChannelID;
    let categ      = newMember.guild.channels.get('7117297780250379247'); //Айди категории в приватных каналах
    let chann      = newMember.guild.channels.get('711729778025037924'); //Айди канала в который должен будет зайти человек
    if(!categ && !chann) throw new TypeError('Не верно указан один из айди и/или такого канала не существует')
    let channels   = newMember.guild.channels.filter(i => i.parentID == categ.id);
    if(newChannel == chann.id && channels.size < 6) {
        let tempchann = await newMember.guild.createChannel(` ⟦🔮⟧ комната ${newMember.displayName}`, {
            parent: categ.id,
            type: 'voice'
        })
        newMember.setVoiceChannel(tempchann.id);
        newMember.privateVoice = tempchann;
    }
    if(newMember.privateVoice !== undefined && oldChannel == newMember.privateVoice.id && newChannel != chann.id){
        newMember.privateVoice.delete()
        newMember.privateVoice = undefined;
    }
});
bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.user.setPresence({ game: { name: '» Мой префикс ~ "!"' } });
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)
});
bot.on('guildMemberRemove', async member => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Участник вышел', member.user.avatarURL)
        .setDescription(`<@${member.user.id}>`)
        .setColor(0xf04747)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
    let channel = member.guild.channels.find(c => c.name == '⋞bot💻actions⋟')
    await channel.send(embed) 
})
    bot.on('guildMemberAdd', async member => {
        let channel = member.guild.channels.find(c => c.name == '⋞bot💻actions⋟')  
        let argsUser 
        if (member) argsUser = member.user
        else argsUser = message.author
        let role1 = member.guild.channels.find(channel => channel.name === "⌜привет⌟🌏")
        let role2 = member.guild.channels.find(channel => channel.name === "⌞руководство⌝")
        let role3 = member.guild.channels.find(channel => channel.name === "⌜правила⌟")
    let embed = new Discord.RichEmbed()
        .addField("Правила сервера:", `${role1}`, true) 
        .addField("Информация о сервере:", `${role2}`, true) 
        .setDescription(`Вжууух, привет, <@${member.user.id}> !
        Мы рады видеть тебя в **Milky Way~** 
        Рекомендуем ознакомиться с разделами ниже!`)
        .setColor("#3a92ff")
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setThumbnail("https://images-ext-1.discordapp.net/external/MJiFF_b3nUtqOpZ0pw1iPOai2FqDHlGCZzoIr1a12xg/%3Fwidth%3D473%26height%3D473/https/images-ext-1.discordapp.net/external/Z5D98MT7PfNlnKMp-PXlJoXZs5OfThLYCCIVkVfwtVs/https/media.discordapp.net/attachments/642066587129741344/662853963779145748/Pak.gif")
    await channel.send(embed)
    });
    
bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    if (message.content === "coinflip") {
        var flip = ["Орёл!", 
                    "Решка!"]
                var temp = flip[Math.floor(Math.random() * 2)] 
message.channel.send(temp)
    }
    if (message.content.includes("https://")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }
      if (message.content.includes("discord.gg")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }
      if (message.content.includes("www.")) {
        message.delete(1);
        message.channel.sendMessage("Осторожнее со ссылками, дорогуша... " + message.author)
      }

    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            warns:0,
            gamewarns:0,
        };
    };

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);

    });
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id; 
      });
bot.login(token);
