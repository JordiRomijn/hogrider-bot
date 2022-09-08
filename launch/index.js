const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on("messageCreate", (msg) => {
  if (msg.content == 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.token);