const Discord = require('discord.js')

module.exports = (client, message, args) => {
    const xd = new Discord.MessageEmbed()
    .setDescription("Que chucha fue?")
    .setColor("RANDOM")

    message.channel.send(xd)
}