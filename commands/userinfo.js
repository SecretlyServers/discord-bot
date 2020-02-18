const config = require("../config.json");
const Discord = require("discord.js");
var moment = require('moment');

module.exports.run = async (bot, message, args) => {
  var joined = moment(message.member.joinedAt).format('ll');
  var registered = moment(message.author.createdAt).format('ll');
  let uEmbed = new Discord.RichEmbed()
    .setColor("#c471ed")
    .setThumbnail(message.author.displayAvatarURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("Joined", `${joined}`, true)
    .addField("Registered", `${registered}`, true)
    .addField(`Roles [${message.member.roles.size}]`, `${message.member.roles.map(role => role).join(" ")}`)
  message.channel.send({
    embed: uEmbed
  });
}

module.exports.config = {
  name: "userinfo",
  aliases: ["ui"]
}
