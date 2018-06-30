var Spark = require('sparkbots')
const Command = Spark.command('emote')
Command.addAlias('emotelink') // You can add multiple or delete the line
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('')
module.exports = Command;

Command.code = async (client, message) => {
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
 let uh = args[0];
  if(message.mentions.members.size == 0) {
message.channel.send(`${uh} https://cdn.discordapp.com/emojis/${args[0].replace('<','').replace('>','').replace(':/g','').replace(/\D/g,'')}.png`)
         }
  args[0].replace('<','').replace('>','').replace(':/g','').replace(/\D/g,'')
  if(message.mentions.members.size == 1) {
 message.channel.send(`**<:oof:430767004195225600> ${message.member.displayName}, I'm afraid that ${uh} isn't an emoji.**`)
  }
}