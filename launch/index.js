const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
  partials: ['CHANNEL', 'MESSAGE', 'REACTION'] });

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('messageCreate', msg => {
  // You can view the msg object here with console.log(msg)
   if (msg.content === 'Hello') {
     msg.reply(`Hello ${msg.author.username}`);
   }
  });

client.login(process.env.token);