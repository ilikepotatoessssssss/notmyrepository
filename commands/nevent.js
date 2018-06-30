var Spark = require('sparkbots')
const Command = Spark.command('event')
Command.addAlias('host')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  
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
  message.channel.send({
        "embed": {
"title": `🦄 **${message.member.displayName} (\`${message.author.tag}\`) Started an Event** 🤗`,
          "description":  `A new event has been started!\n        __More Info__\n${message.content.split(' ').slice(1).join(' ')}`,
          "color": 25087,
          "footer": {
          "text": ``
        }
        }
  }
                                                            )}
    