const Discord = require('discord.js');


module.exports = (client, message, args) => {
    name: "avatar";
    description: "muestra el avatar del usuario";
    
    //DEFINICION    
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    
    
    //COMANDO
    const avatar = new Discord.MessageEmbed()
    .setDescription(`Muestro el avatar de: [${user.tag}](${user.displayAvatarURL({ 
        format: 'png', dynamic: true
    })})`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024}))
    .setFooter(`Avatar solicitado por: ${message.member.displayName}`)
    ;

    message.channel.send(avatar)
}
