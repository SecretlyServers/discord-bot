const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!");

  let bannedMember = await bot.fetchUser(args[0])
  if (!bannedMember) return message.channel.send("Please mention a user!");

  let reason = args.slice(1).join(" ")
  if (!reason) reason = "No reason given!"

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")
  try {
    message.guild.unban(bannedMember, {
      reason: reason
    })
    message.channel.send(`${bannedMember.tag} has been successfully unbanned!`)
  } catch (e) {
    console.log(e.message)
  }
}

module.exports.config = {
  name: "unban",
  aliases: []
}
