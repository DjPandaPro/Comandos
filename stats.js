const moment = require('moment');
require('moment-duration-format');
const Discord = require('discord.js');


module.exports = (client, message, args) => {
  const actividad = moment.duration(client.uptime).format(' D [dias], H [hrs], m [mins], s [secs]');
  
  const stats = new Discord.MessageEmbed()
  .setColor(0x66ff66)
  .setAuthor(`Información del bot`, client.user.displayAvatarURL({ format: 'png' }))
  .addField(`Dueño`, `》 DjPandaPro 》#9817`, true)
  .addField(`Version`, `1.0.0`, true)
  .addField(`Libreria`, Discord.version, true)
  .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`Uptime`, `${actividad}`, true)
  .addField(`Servidores`, `${client.guilds.cache.size}`, true)
  .addField(`Usuarios`, `${client.users.cache.size}`, true)
  .addField(`Canales`, `${client.channels.cache.size}`, true)

  message.channel.send(stats);
}