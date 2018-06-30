 var Spark = require('sparkbots')
const Command = Spark.command('announce')
Command.setLevel(0)
Command.allowDms(false)
Command.setDescription('Send an announcement')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send("✅ Make sure you have a channel callled `#announcements` if this commamd did not work.")

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
  message.guild.channels.find("name", "announcements").send({
        "embed": {
          "description": message.content.split(' ').slice(1).join(' '),
          "color": 25087,
          "footer": {
          "text": `Sent by ${message.member.displayName}`
        }
        }
  }
                                                            )}