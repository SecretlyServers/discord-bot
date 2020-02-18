const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) || !message.guild.owner) return message.channel.send("Insufficient permission!");

  if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")

  let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!mutee) return message.channel.send("Please mention a user!");

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason given!"

  let muterole = message.guild.roles.find(r => r.name === "Muted")
  if (!muterole) return message.channel.send("There is no mute role!")

  mutee.removeRole(muterole.id).then(() => {
    mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} was successfully unmuted!`)
  })
}

module.exports.config = {
  name: "unmute",
  aliases: []
}
