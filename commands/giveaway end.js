var Spark = require('sparkbots')
const Command = Spark.command('gend')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('end a giveaway')
module.exports = Command;

let giveawaymessage

Command.code = async (client, message) => {

     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let name = args[0]; 
  let winner = args[1];

  if(!message.member.hasPermission('ADMINISTRATOR')&&message.member.id!=="339177677326123018")
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
   giveawaymessage = await message.channel.send({
        "embed": {
          "title": `💥 Giveaway:  ${name} Ended 🎱`,
          "color": 25087,
          "footer": {
          "text": `${message.member.displayName} has ended the giveaway.`
          },
  "fields": [ //yes daddy oWo thx
      {
        "name": "Winner",
        "value": `${winner} has won the giveaway for ${name}! 🎁`,
        "inline": true
      }
            ]
        
            }
                      
  })
  giveawaymessage.pin()
  }