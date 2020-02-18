const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sEmbed = new Discord.RichEmbed()
    .setColor("#c471ed")
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("Owner", `${message.guild.owner}`, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Channel Categories", `${message.guild.channels.filter(c => c.type === "category").size}`, true)
    .addField("Text Channels", `${message.guild.channels.filter(c => c.type === "text").size}`, true)
    .addField("Voice Channels", `${message.guild.channels.filter(c => c.type === "voice").size}`, true)
    .addField("Members", `${message.guild.memberCount}`, true)
    .addField("Humans", `${message.guild.members.filter(m => !m.user.bot).size}`, true)
    .addField("Bots", `${message.guild.members.filter(m => m.user.bot).size}`, true)
    .addField("Roles", `${message.guild.roles.size}`, true)
    .addField("Role List", `${message.guild.roles.map(role => role.name).join(", ")}`)
  message.channel.send({
    embed: sEmbed
  });
}

module.exports.config = {
  name: "serverinfo",
  aliases: ["si"]
}
