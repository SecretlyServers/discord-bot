const config = require("../config.json");
const Discord = require("discord.js");
const urban = require("urban");
const {
  stripIndents
} = require("common-tags");

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.channel.send("Please run this command in a NSFW channel!");
  if (args < 1 || !["search", "random"].includes(args[0])) return message.channel.send("``$urban <search|random> (query)``");
  let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
  try {
    search.first(res => {
      if (!res) return message.channel.send("No results found!")
      let {
        word,
        definition,
        example,
        thumbs_up,
        thumbs_down,
        permalink,
        author
      } = res
      let embed = new Discord.RichEmbed()
        .setColor("#c471ed")
        .setAuthor(`Urban Dictionary | ${word}`)
        .setDescription(stripIndents `Definition: ${definition || "No definition!"}
      Example: ${example || "No example!"}
      Upvotes: ${thumbs_up || 0}
      Downvotes: ${thumbs_down || 0}
      Link: [link to ${word}](${permalink || "https://urbandictionary.com/"})`);

      message.channel.send(embed)
    })
  } catch (e) {
    console.log(e)
    return message.channel.send("Error occurred")
  }
}

module.exports.config = {
  name: "urban",
  aliases: []
}
