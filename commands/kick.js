const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!");

  let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!kickMember) return message.channel.send("Please mention a user!");

  let reason = args.slice(1).join(" ")
  if (!reason) reason = "No reason given!"

  if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")

  kickMember.kick().catch(err => console.log(err))

  message.channel.send(`${kickMember.user.username} has been successfully kicked!`)
}

module.exports.config = {
  name: "kick",
  aliases: []
}
