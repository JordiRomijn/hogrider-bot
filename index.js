const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// const help = require("./help.js");
const { prefix } = require("./launch/config.json");
const { help } = require("./launch/help.js");

client.on("ready", () => {
  client.user.setActivity("dikke", {
    type: "STREAMING",
    url: "https://www.twitch.tv/amouranth",
  });
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Hello") {
    msg.channel.send('Hello');
  }

  if (msg.content.startsWith(prefix + "help")) {
    msg.channel.send({embeds: [help]})
  }
});

client.login(process.env.token);
