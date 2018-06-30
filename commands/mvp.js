var Spark = require('sparkbots')
const Command = Spark.command('mvp')
Command.setLevel(0)
Command.allowDms(false)
Command.setDescription('make someone an mvp')
module.exports = Command;

Command.code = (client, message) => {

     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let user = args[0]; 
  let one = args[1];
  let two = args[2];
  message.channel.send("✅ Make sure you have a channel callled `#mvp` if this commamd did not work.")

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
  message.guild.channels.find("name", "mvp").send({
        "embed": {
          "title": "🌠 New MVP! 🌠",
          "description": "A new MVP has arrived!",
          "color": 25087,
          "footer": {
          "text": `👤 MVPed by: ${message.member.displayName}`
        },
          "fields": [ //yes daddy oWo thx
      {
        "name": "Most Valuable Player",
        "value": user,
        "inline": true
      },
            {
        "name": "Reason for MVP",
        "value": message.content.split(' ').slice(2).join(' '),
        "inline": true
      },
            ]
        
            }
  })
}