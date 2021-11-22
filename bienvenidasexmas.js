const Discord = require('discord.js');





module.exports = (client, message, args) => {

    client.on('guildMemberAdd', member => {
  
        let channel = member.guild.channels.cache.get("733104898945581245");
        if (!channel){
            
            console.log('\n\n\n❌ID del canal de Bienvenidas no valido\n\n\n')
            
        }else{
        
          channel.send(`${member}, Bienvenido prrro, lavese la cola y disfrute :v`).then(m =>{
            m.react('❤')
          }).catch((err) =>{
             console.log(`Bienvenidas Error:     ${err}`)
          });
        }
      });

    
    


}