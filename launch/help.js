const { MessageEmbed } = require("discord.js");

const help = new MessageEmbed()
.setDescription(`**Rice Beamer Beta ;**
\n**Create Channels ;**
${prefix}cc [amount] (text) i.e \`${prefix}cc 5 test\`\n
**Create Channels & Ping ;**
${prefix}trol [amount] (text), {message} i.e \`${prefix}trol 5 test, testing\`\n
**Create Roles ;**
${prefix}cr [amount] (text) i.e \`${prefix}cr 5 test\`\n
**delete channels ;**
${prefix}dc\n
**delete roles ;**
${prefix}dr\n
**delete emotes ;**
${prefix}de\n
**delete stickers ;**
${prefix}ds\n
**mass kick ;**
${prefix}mk\n
**mass ban ;**
${prefix}mb
`)
.setFooter(`© Rice Beamer Beta`, 'https://st2.depositphotos.com/1864495/7208/i/600/depositphotos_72082789-stock-photo-trollface-dark-spectacled-internet-troll.jpg', 'https://sullylovesmelons.xyz')
.setColor(0x00FFFF)
