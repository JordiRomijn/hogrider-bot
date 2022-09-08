const { Client, Intents, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in...`);
});

if(message.content == 'bier') {
  message.channel.sendMessage('lekker');
}

client.login(process.env.token);