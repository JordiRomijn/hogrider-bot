const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`Logged in...`)
  .setTitle('bier is goed voor je')
});

Client.on('message', msg => {
  msg.reply('pong');
});

Client.login(process.env.token);