const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let hEmbed = new Discord.RichEmbed()
    .setColor("#c471ed")
    .setAuthor("Help")
    .addField("Commands", "``addrole`` ``alpaca`` ``ban`` ``bird`` ``camel`` ``cat`` ``dog`` ``duck`` ``eval`` ``fox`` ``help`` ``kick`` ``lizard`` ``llama`` ``meme`` ``mute`` ``panda`` ``ping`` ``reload`` ``removerole`` ``say`` ``seal`` ``serverinfo`` ``shutdown`` ``softban`` ``unban`` ``unmute`` ``uptime`` ``urban`` ``userinfo`` ``wolf``")
  message.channel.send({
    embed: hEmbed
  });
}

module.exports.config = {
  name: "help",
  aliases: []
}
