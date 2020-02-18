const config = require("../config.json");
const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...")

  fetch("https://apis.duncte123.me/animal/bird")
    .then(res => res.json()).then(body => {
      if (!body) return message.reply("The API isn't functioning correctly!")

      let embed = new Discord.RichEmbed()
        .setColor("#c471ed")
        .setAuthor("Random Bird")
        .setImage(body.data.file)
      msg.edit(embed)
    })
}

module.exports.config = {
  name: "bird",
  aliases: []
}
