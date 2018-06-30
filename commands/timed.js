var Spark = require('sparkbots')
const Command = Spark.command('timed')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Set up a timed message')
module.exports = Command;

Command.code = (client, message) => {


  message.channel.send(`✅ Ok, I'll send ${message.content.split(' ').slice(1).join(' ')} every 12 hours.\n 🛑 To disable this, type \`.stoptimed\`.\nYou will need to reinvite the bot once you stop the reoccurring message.\n`)
        var interval = setInterval (function () {
        message.channel.send(`${message.content.split(' ').slice(1).join(' ')}`)
      }, 1 * 43200000); 
    
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
  }
                              )}