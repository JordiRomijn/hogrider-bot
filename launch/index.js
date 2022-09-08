const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ["CHANNEL", "MESSAGE", "REACTION"],
});

// const help = require("./help.js");
const { prefix } = require("./config.json");

client.on("ready", () => {
  client.user.setActivity("dikke", {
    type: "STREAMING",
    url: "https://www.twitch.tv/amouranth",
  });
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Hello") {
    msg.reply(`Hello ${msg.author.username}`);
  }

  if (msg.content.startsWith(prefix + "help")) {
    msg.channel.send({ embeds: [help] });
  }
});

client.login(process.env.token);
