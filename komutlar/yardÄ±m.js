const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Shadonq Bot`)
.setDescription(`


:white_small_square: **=**  \`s!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`s!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`s!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`s!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`s!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`s!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`s!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`s!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`s!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`s!avatar\`:  **Avatarınızı Atar**

`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};