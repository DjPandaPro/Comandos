const Discord = require('discord.js');
module.exports = (client, message, args) => {
    const oemrd = new Discord.MessageEmbed()
    .setTitle(`Con cariño para ${message.author.username}`)
    .setColor("RANDOM")
    .setDescription("OE MRD CORRE BAÑATE CARAJO, LEE UN LIBRO  Y HAZ ALGO POR LA VIDA SEA AHORITA USTEDES ESTAN FELICES EN !AEA! !AEA! !AEA! MOCOSOS DE MRD Y LA PTMR, NO SABEN QUE EL SUELDO MINIMO DEL PERU ES PARA MORIRSE DE HAMBRE. NO SABES QUE ESTAS JUGANDO LOL CARAJO PORQUE PORQUE, NO HAY NO HAY INSTITUTOS , NO HAY ACADEMIAS. MIENTRAS ACA ESTAN JUGANDO 8 HORAS LOL MRD , UUUN JAPONES UUUN CHINO ESTA ESTUDIANDO MATEMATICA TRIGONOMETRIA, CARAJO POR ESO LUEGO SOMOS ESCLAVOS DEL MUNDO Y SE QUEJAN AHI, !AEA! !AEA! LE VAMOS A PEDIR A NUESTRO JEFE QUE TE BORRE LA CUENTA !BORRENME LA PTMR.")

    message.channel.send(oemrd);

}