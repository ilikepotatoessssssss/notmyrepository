var Spark = require('sparkbots')
const Command = Spark.command('greeting')
Command.addAlias('g')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('greetings')
module.exports = Command;

Command.code = (client, message) => {

  
  message.channel.send({
  "embed": {
    "description": "__Willinator 2000 is a Discord bot with many fun commands!__",
    "color": 45013,
    "thumbnail": {
      "url": client.user.displayAvatarURL({format: 'png', size: 1024}) // 👉👌
    },
    "fields": [ 
      {
        "name": "Main Info",
        "value": `*Hi, ${message.member.displayName}. My name is Willinator 2000!* 🤖\n🔗 I have many cool commands and easter eggs! My prefix is \`.\``,
        "inline": true
      },
      {
        "name": "Commands",
        "value": "📜 Say \`.help\` for a command list.",
        "inline": true
      },
      
      {
        "name": "Creators",
        "value": "• <@339177677326123018> (`WHASonYT#0735`) <:dev:427313634474196993>\n• <@190916650143318016> (`advaith#9121`) <:dev:427313634474196993> ",
        "inline": true
      },
            {
        "name": "Need help?",
        "value": "📨 If you need support, contact one of the creators.",
        "inline": true
      },
      {
        "name": "Library",
        "value": "📓 [discord.js](https://discord.js.org)",
        "inline": true
      },
      {
        "name": "Framework",
        "value": "💥 [Spark](https://discordspark.com) v0.0.6",
        "inline": true
      },
      {
        "name": "Server Count",
        "value": `${client.guilds.size} 🐖`,
        "inline": true
      },
      {
        "name": "Logo Artist",
        "value": "<@339177677326123018> (`WHASonYT#0735`) 💫",
        "inline": true
      },
            {
        "name": "🌠 Bot Invite Link 🌠",
        "value": "https://discordapp.com/oauth2/authorize?client_id=428693499181793292&permissions=8&scope=bot",
        "inline": true
      }
      ]
    }
  })
}