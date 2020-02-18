const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Insufficient permission!")

  let argsresult;
  let mChannel = message.mentions.channels.first()

  if (mChannel) {
    argsresult = args.slice(1).join(" ")
    mChannel.send(argsresult)
  } else {
    argsresult = args.join(" ")
    message.channel.send(argsresult)
  }
}

module.exports.config = {
  name: "say",
  aliases: []
}
