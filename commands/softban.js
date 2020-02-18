const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!");

  let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!banMember) return message.channel.send("Please mention a user!")

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason given!"

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")

  banMember.send(`You have been softbanned in ${message.guild.name} for: ${reason}`).then(() =>
    message.guild.ban(banMember, {
      days: 1,
      reason: reason
    })).then(() => message.guild.unban(banMember.id, {
    reason: "Softban"
  })).catch(err => console.log(err))

  message.channel.send(`${banMember.user.username} has been successfully softbanned!`)
}

module.exports.config = {
  name: "softban",
  aliases: []
}
