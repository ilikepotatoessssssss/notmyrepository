var Spark = require('sparkbots')
const Command = Spark.command('leave') //goddamni
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('tootles - makes bot leave server')
module.exports = Command;

Command.code = (client, message) => {
if(!message.member.hasPermission('ADMINISTRATOR')&&message.member.id!=="339177677326123018")
  return message.channel.send({
    "embed": {
      "title": "<:oof:430767004195225600> Error",
      "description": "You do not have the \"Administrator\" permission.",
      "color": 6711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })

  message.channel.send("I'm sorry I had to leave! Hopefully we can meet again at a local coffee shop ☕")
  message.guild.leave()
}