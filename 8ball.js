const Discord = require('discord.js');

module.exports = (client, message, args) => {
    let msg = args.slice().join(" ")
    if(!msg) return message.channel.send("Necesito que me preguntes algo");//si no pregunta nada mandara este mensaje
    let rptas = ["Si","No","Tal Vez"]//Esto es un array el cual van todas las respuestas

    const ball = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("8ball", client.user.avatarURL())
    .setTitle(`A la pregunta **"${msg}"**, de ${message.author.username}`)//pregunta y autr del mensaje
    .setDescription(`${rptas[(Math.floor(Math.random() * rptas.length))]}.`)//esto es un math random para que elija aleatoriamente la respuesta 

    message.channel.send({embed : ball})

}

