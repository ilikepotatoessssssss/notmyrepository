var Spark = require('sparkbots')
const Command = Spark.command('giveaway')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Start a giveaway')
module.exports = Command;

let giveawaymessage

Command.code = async (client, message) => {


     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let ga = args[0]; 
  let one = args[1];
  let emote = args[2];

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
          "title": `🌠 Giveaway:  ${ga} 🎉`,
          "description": `${message.member.displayName} — use \`!endg <giveaway name> <winner>\` to end this giveaway.`,
          "color": 25087,
          "footer": {
          "text": `👤 Giveaway by: ${message.member.displayName}`
        },
          "fields": [ //yes daddy oWo thx
      {
        "name": "More Info",
        "value": `${message.content.split(' ').slice(4).join(' ')}`,
        "inline": true
      },
            {
        "name": "Lasts For",
        "value": `⏰ ${one} minutes`,
        "inline": true
      }
            ]
        
            }
  })
    giveawaymessage.pin(); //oof
    giveawaymessage.react(emote); //smh i had something there
}