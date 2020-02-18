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
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "Muted",
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false
        })
      })
    } catch (e) {
      console.log(e.stack);
    }
  }

  mutee.addRole(muterole.id).then(() => {
    mutee.send(`You have been muted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} was successfully muted!`)
  })
}

module.exports.config = {
  name: "mute",
  aliases: []
}
