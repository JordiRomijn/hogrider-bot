const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`)
  .setTitle('bier is goed voor je')
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login(process.env.token);