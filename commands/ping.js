const config = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.reply(`${bot.ping}ms`)
}

module.exports.config = {
  name: "ping",
  aliases: []
}
