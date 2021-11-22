module.exports = (client, message, args) => {
   nombre: "ping";
   alias: [];
   description: "Te muestra el ping del bot y el tuyo"
   
   
   
   
   message.channel.send('🏓 Pong!').then((m) => {
    m.edit(
      `📨 Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`
  🛰️ Ping DiscordAPI: \`${client.ws.ping} ms\``
    );
  });
}