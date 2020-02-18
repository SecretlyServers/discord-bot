const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!");

  let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
  if (!rMember) return message.channel.send("Please mention a user!")
  let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
  if (!role) return message.channel.send("Please mention a role!")

  if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I have insufficient permission!")

  if (rMember.roles.has(role.id)) {
    return message.channel.send(`${rMember.displayName}, already has the role!`)
  } else {
    await rMember.addRole(role.id).catch(e => console.log(e.message))
    message.channel.send(`The role ${role.name} has been added to ${rMember.displayName}!`)
  }
}

module.exports.config = {
  name: "addrole",
  aliases: ["ar"]
}
