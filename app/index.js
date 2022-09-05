const { Client, Intents } = require("discord.js");
const hog = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });

hog.on('ready', () => {
  console.log(`Logged in...`)
  .setTitle('bier is goed voor je')
});

hog.on('message', msg => {
  msg.reply('pong');
});

hog.login('token');