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

  const help = new MessageEmbed()
    .setDescription(
      `**Jordi's bot ;**
\n**Create Channels ;**
${prefix}cc [amount] (text) i.e \`${prefix}cc 5 test\`\n
**Create Channels & Ping ;**
More Coming Soon!
Made By: \`Jordi\`\n Discord: \`Jordi#5669\`\n
`
    )
    .setFooter(
      `© Rice Beamer Beta`,
      "https://st2.depositphotos.com/1864495/7208/i/600/depositphotos_72082789-stock-photo-trollface-dark-spectacled-internet-troll.jpg",
      "https://sullylovesmelons.xyz"
    )
    .setColor(0x00ffff)
    .setAuthor(
      "Riceblades11",
      "https://st2.depositphotos.com/1864495/7208/i/600/depositphotos_72082789-stock-photo-trollface-dark-spectacled-internet-troll.jpg",
      "https://sullylovesmelons.xyz"
    )
    .setThumbnail(
      "https://media.istockphoto.com/illustrations/trollface-internet-troll-3d-illustration-illustration-id499870283?k=20&m=499870283&s=612x612&w=0&h=_oy1OzNBqcJhYIQmJeGxO322DPlzhupXlSRgL6u9Pwg="
    )
    .setTimestamp(Date.now());

  if (msg.content.startsWith(prefix + "help")) {
    msg.channel.send({ embeds: [help] });
  }
});

client.login(process.env.token);
