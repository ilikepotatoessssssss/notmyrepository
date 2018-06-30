var Spark = require('sparkbots')
const Command = Spark.command('gm')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('good mornin')
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
  
message.channel.send(`✅ Ok, I'll send: **🐓 Good morning! 🌅**\n Have a great day and don't forget to brush your teeth! 😁 every 24 hours.\n 🛑 To disable this, type \`.stoptimed\`.\nYou will need to reinvite the bot once you stop the reoccurring message.`)
        var interval = setInterval (function () {
        message.channel.send(`**🐓 Good morning! 🌅**\n Have a great day and don't forget to brush your teeth! 😁`)
      }, 1 * 86400000); 

}

// FIXED BY TYPICAL
// REASON: PERMISISON CHECK WAS BYPASSED
// MISTAKE: MESSAGE.CHANNEL.SEND WAS ON TOP OF PERM CHECK
// COMMENTS: YOU SHOULD KNOW BETTER, WILL.