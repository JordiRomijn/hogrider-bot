const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
  partials: ['CHANNEL', 'MESSAGE', 'REACTION'] });

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("bier")) {
    message.channel.send('bjiwefb');
}
});

client.login(process.env.token);