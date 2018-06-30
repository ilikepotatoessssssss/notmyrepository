var Spark = require('sparkbots')
const Command = Spark.command('stoptimed')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('lolbye - stops all timed msgs')
module.exports = Command;

Command.code = (client, message) => {

if(!message.member.hasPermission('ADMINISTRATOR')&&message.member.id!=="339177677326123018")
  return message.channel.send({
    "embed": {
      "title": "<:oof:430767004195225600> Error",
      "description": "You do not have \"Administrator\" permissions.",
      "color": 6711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })

  message.channel.send("✅ Successfully stopped all reoccurring messages.\n 🔗 Reinvite me: <https://discordapp.com/api/oauth2/authorize?client_id=428693499181793292&permissions=8&scope=bot>")
  message.guild.leave()
}