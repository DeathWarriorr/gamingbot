const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
const { fstat } = require('fs');
const { format } = require('path');
bot.on('ready', () => {
    console.log('Gamingbot göreve hazır!');
}
);
const fs = require("fs");




let prefix = '!'

bot.setMaxListeners(30)







bot.on('message',msg =>{
    if(msg.content.startsWith(prefix + 'ping')) {
        msg.reply('**pong**');
    } 
});
bot.on('message',msg =>{
    if(msg.content === 'sa') {
        msg.reply('<a:dc:716372950017769485> **Aleyküm selam:)** <a:dc:716372950017769485>');
    } 
});

bot.on('message',msg =>{
    if(msg.content === 'Sa') {
        msg.reply('<a:dc:716372950017769485> **Aleyküm selam:)** <a:dc:716372950017769485>');
    } 
});




bot.on('message',msg =>{
    if(msg.content === 'amk') {
        msg.reply('Küfür Ettiğin için Mutelendin Mutenin Açılması için Mod veya Yöneticiye dm den ulaş!');
        msg.member.roles.add("751414253117898843"); 
    }
});

bot.on('message',msg =>{
    if(msg.content === 'yarrak') {
        msg.reply('Küfür Ettiğin için Mutelendin Mutenin Açılması için Mod veya Yöneticiye dm den ulaş!');
        msg.member.roles.add("751414253117898843"); 
    }
});

bot.on('message',msg =>{
    if(msg.content === 'günaydın') {
        msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author}`).setColor("RANDOM").setImage("https://media1.tenor.com/images/c3baf0b8725769669b659ce4f2c5ff36/tenor.gif?itemid=18343907"))
    }
});





bot.on('message',msg =>{
    if(msg.content === 'SA') {
        msg.reply('<a:dc:716372950017769485> **Aleyküm selam:)** <a:dc:716372950017769485>');
    } 
});

 bot.on('message',msg =>{
     if(msg.content === '!botpp') {
       msg.reply('<:botpp:715481069952041026>');
     }
 });

 bot.on('message',msg =>{
    if(msg.content === '!emoji') {
       msg.reply('<:botpp:715481069952041026>, <:killahakan:715841246513332255> , <:angryspinel:715841122181840997> , <:sadspinel:715841058742730764> , <:d_:715840997355159595> , <:xd:715840977126031371> , <:re3:715839028066254928> ,<a:discord:716372950017769485> , <a:dc:716594885591040022> , <a:slime:716595970347106374> , <a:slime1:716597583870427146>')
              
}
});

bot.on('message',msg =>{
    if(msg.content === '!rgbslime') {
       msg.reply('<a:slime1:716597583870427146>')
    }
});




bot.on('message',msg =>{
    if(msg.content === '!botsunucu') {
       msg.reply('**botun sahibinin sunucusu**  https://discord.gg/J4jqNAR  ||** ~~botun sahibi иxϟ Ɇ₥łⱤⱧ₳₦#4088~~**||')
    }

});





bot.on('message',msg =>{
    if(msg.content === '!banayetkiver') {
        msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author}`).setColor("RANDOM").setImage("https://thumbs.gfycat.com/CreepyWeightyBittern-max-1mb.gif"))

    }
});


bot.on('message',msg =>{
    if(msg.content === '!çayiç') {
        msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author}`).setColor("RANDOM").setImage("https://media1.tenor.com/images/41423af310a71d21c719d0dd9aa58f27/tenor.gif?itemid=12320945"))

    }
});


bot.on("ready", () => {
    console.log('Oynuyor değiştirme işlemi başladı!')
    bot.user.setStatus('dnd')
    setInterval(() => {
        setTimeout(() => {
bot.user.setActivity("иxϟ Ɇ₥łⱤⱧ₳₦# tarafından kodlandı.", { type: "PLAYING" });
        }, 10000);
        setTimeout(() => {
bot.user.setActivity("https://discord.gg/J4jqNAR", { type: "PLAYING" });
        }, 20000)
    }, 30000)
});



bot.on("message", message => {
    if(message.content.startsWith(prefix + "temizle")){
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return        message.channel.send("Yetkin yok kullanamassın")
      let args = message.content.split(' ').slice(1)
       if(isNaN(args[0])) return message.channel.send("Lütfen Sayı Girin");
        if(args[0] > 100) return message.channel.send("Lütfen 1 İle 100 Arasında Sayı Girin!")
         message.channel.bulkDelete(args[0])
  }
  });

  





bot.login(settings.token);