const Discord = require("discord.js")

module.exports = {
      komut: "ping",
      açıklama: "botun pingini ölçer.",
      alternatifler: ['ping','p','gecikmesüresi'],
      kullanım: "!ping",
      yetki: '',


};

module.exports.baslat = (client, message) => {
      //mesaj gönderme
      message.channel.send(new Discord.RichEmbed)
    .setDescription("Botun ping değeri aşşada gösterilmektedir")
    .setColor("RANDOM")
    .setTitle("Ping ölçüm tablosu")
    .setFooter(Gamingbot)
    .setTimestamp()
    .setAuthor(message.author.username,message.authot.avatarURL) 
    




      message.channel.send("Botun gecikme süresi: " + Math.raund(client.ping) + " MS")






};