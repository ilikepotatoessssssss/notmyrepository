var Spark = require('sparkbots')
const Command = Spark.command('mhelp')
Command.addAlias('musichelp') // You can add multiple or delete the line
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send({
  "content": `__**Music Help**__`,
  "embed": {
    "footer": {
            "text": `Requested by ${message.author.tag}`
          },
    "fields": [ 
      {
        "name": "Play Music",
        "value": `Use \`.play <yt link>\` to play music. *You must be in voice channel*`,
        "inline": true
      },
      {
        "name": "Pause Music",
        "value": `Use \`.pause\` to pause the music. *You must be in voice channel*`,
        "inline": true
      },
            {
        "name": "Leave Voice Channel",
        "value": `Use \`.stop\` and the bot will leave the current voice channel. *You must be in voice channel*`,
        "inline": true
      },
      {
        "name": "<:blank:427598046038327306>",
        "value": `**Right now, the bot only accepts YouTube links or direct site.com/audio.mp3 links**`,
        "inline": true
      }
      ]
    }
  })
  
  //reee im using this as a cmd layout ehh go ahead tho xD
}