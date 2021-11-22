const Discord = require('discord.js');

module.exports = (client, message, args) => {

let userm = message.mentions.users.first() || message.author;
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

const embed = new Discord.MessageEmbed()
  .setThumbnail(user.displayAvatarURL({ format: 'png', size: 1024, dynamic: true }))
  .setAuthor(user.tag, user.displayAvatarURL({ format: 'png', size: 1024, dynamic: true }))
  .addField(
    'Jugando a',
    message.guild.members.resolve(userm.id).presence.activities[0]
      ? message.guild.members.resolve(userm.id).presence.activities[0].name
      : 'Nada',
    true
  )
  .addField('ID', user.id, true)
  .addField('Estado', message.guild.members.resolve(userm.id).presence.status, true)
  .addField('Apodo', message.guild.members.resolve(userm.id).nickname, true)
  .addField('Cuenta Creada', user.createdAt.toDateString(), true)
  .addField('Fecha de Ingreso', message.guild.members.resolve(userm.id).joinedAt.toDateString())
  .addField(
    'Roles',
    message.guild.members
      .resolve(userm.id)
      .roles.cache.map((roles) => `\`${roles.name}\``)
      .join(', ')
  )
  .setColor("RANDOM");

    message.channel.send(embed);
}

/*CIERRA EL POTO*/ 