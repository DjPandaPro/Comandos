const Discord = require('discord.js');
const config = ('./config.js');
let prefix = "!m";

    

module.exports = (client, message, args) => {
    const embedDatos = new Discord.MessageEmbed()
    .setTitle("Esta es mi lista de comandos")
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(`Ayuda solicitada por ${message.member.displayName}`)
    .setDescription(`${prefix}`)
    .setThumbnail(message.author.displayAvatarURL())//imagen a un lado 
    ;
    nombre: "help";
    alias: ['h'];
    message.channel.send({ embed: embedDatos});
}