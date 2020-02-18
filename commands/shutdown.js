const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != "672162447066398721") return message.channel.send("Insufficient permission!");

  try {
    await message.channel.send("Bot is shutting down...")
    process.exit()
  } catch (e) {
    message.channel.send(`Error: ${e.message}`)
  }
}

module.exports.config = {
  name: "shutdown",
  aliases: ["sd"]
}
