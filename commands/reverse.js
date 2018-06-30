var Spark = require('sparkbots')
const Command = Spark.command('reverse')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('reverses text')
module.exports = Command;

Command.code = (client, message) => {
//ADVAITH THIS CMD DOESNT WORK FOR SOME REASON, I TRIED IT YESTERDAY BUT IT DOOKED k rmind me l8erok
  
message.channel.send('__**💫 Reverse! 🌐**__\n'+message.content.split(' ').slice(1).join(' ').split("").reverse().join(""))
  
} //was going to add te quotations in a sec lol surrrrrrrrrrrrrre -_- boiii 👀 🐖 oink