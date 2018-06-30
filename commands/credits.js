var Spark = require('sparkbots')
const Command = Spark.command('credits')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Bot credits')
module.exports = Command;

var owner

Command.code = async (client, message) => {

await client.fetchApplication().then (bot => owner = bot.owner.tag)
message.channel.send({
    "embed": {
      "image": { 
        "url": "https://luxuryactivist.com/wp-content/uploads/LuxuryActivist-Credits.jpg"
      }
    }
})
    
  message.channel.send({
        "embed": {
          "title": "<:photoblobs:435960158653513741> __Willinator 2000 Credits__",
          "description": `Thanks to everyone who is helping to build Willinator 2000! 👏\n\n ◎**${owner}** \`Bot Owner\` \`made 3 cmds and almost deleted the bot\`\n ◎**advaith#9121** \`Bot Manager\` \`the big cheese\`\n\n\n<:advaithbotcircle:402203366610042900>Huge thanks to the \`AdvaithBot\` project — most commands were taken *(with permission)* from there.\n\n Have a great day! 🌞`,
          "color": 148255,
          "thumbnail": {
          "url": 'https://cdn.discordapp.com/attachments/399069831820869632/435961146642792448/PicsArt_04-12-08.00.46.png'
  },
          }


        
        }) }