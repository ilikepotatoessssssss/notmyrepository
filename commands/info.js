var Spark = require('sparkbots')
const Command = Spark.command('info')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('boat info i guess')
module.exports = Command;

Command.code = (client, message) => {


  message.channel.send({
  "embed": {
    "description": "Willinator 2000 is a fun bot with utility commands borrowed from AdvaithBot",
    "color": 45013,
    "thumbnail": {
      "url": client.user.displayAvatarURL({format: 'png', size: 1024}) // 👉👌
    }, // r u watching? there
    "fields": [ //yes daddy oWo thx
      {
        "name": "Prefix",
        "value": "`.`",
        "inline": true
      },
      {
        "name": "👥 Creators",
        "value": "<@190916650143318016> (`advaith#9121`) • <@339177677326123018> (`WHASonYT#0735`) <:dev:427313634474196993>",
        "inline": true
      },
      
      {
        "name": "🔗 Other Links",
        "value": "soon xD",
        "inline": true
      },
      {
        "name": "📓 Library",
        "value": "[discord.js](https://discord.js.org)",
        "inline": true
      },
      {
        "name": "🖼 Framework",
        "value": "[Spark](https://discordspark.com) v0.0.6",
        "inline": true
      },
      {
        "name": "🐖 Server Count",
        "value": `${client.guilds.size}`,
        "inline": true
      },
      {
        "name": "💫 Logo Artist",
        "value": "<@339177677326123018> (`WHASonYT#0735`)",
        "inline": true
      }
      ]
    }
  })
  
} //getting dinner brb - will