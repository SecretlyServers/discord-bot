const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != "672162447066398721") return message.channel.send("Insufficient permission!");

  if (!args[0]) return message.channel.send("Please provide a command!")

  let commandName = args[0].toLowerCase()

  try {
    delete require.cache[require.resolve(`./${commandName}.js`)]
    bot.commands.delete(commandName)
    const pull = require(`./${commandName}.js`)
    bot.commands.set(commandName, pull)
  } catch (e) {
    return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
  }

  message.channel.send(`The command \`${args[0].toUpperCase()}\` was successfully reloaded`)
}

module.exports.config = {
  name: "reload",
  aliases: []
}
