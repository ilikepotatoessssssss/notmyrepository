var Spark = require('sparkbots')
const Command = Spark.command('warn')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('warn a BaD bOi')
module.exports = Command;

Command.code = (client, message) => {
       const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let user = args[0]; 
  if(!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send({
    "embed": {
      "title": "<:oof:430767004195225600> Error",
      "description": "You do not have \"Administrator\" permissions.",
      "color": 16711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })
if (message.mentions.users.first()) {
    
  message.mentions.users.first().send({
        "embed": {
          "description": `**You have been warned.**\n🛑 Reason for Warn:\n\n${message.content.split(' ').slice(2).join(' ')}`,
          "color": 25087,
          "footer": {
          "text": `__Moderator: ${message.member.displayName} (${message.author.tag})__`
        }
  }
  }
                                                            )}
}