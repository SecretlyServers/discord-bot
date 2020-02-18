const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!");

  let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!banMember) return message.channel.send("Please mention a user!")

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason given!"

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")

  message.guild.ban(banMember, {
    days: 1,
    reason: reason
  }).catch(err => console.log(err))

  message.channel.send(`${banMember.user.username} has been successfully banned!`)
}

module.exports.config = {
  name: "ban",
  aliases: []
}
