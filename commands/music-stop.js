var Spark = require('sparkbots')
const Command = Spark.command('stop')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('stop sound in voice')
module.exports = Command;
Command.code = (client, message) => {
if (message.member.voiceChannel) {
     message.member.voiceChannel.leave();
             message.channel.send({
"embed": {
"title": "⏹️ Stopped Playing Music",
"description": "I have left the voice channel.\n If I didnt, make sure the `.play` command was ran first.",
"color": 25087,
"footer": {
"text": `Requested by ${message.author.tag}`
}
}
             }
)
     } else {
      message.channel.send({
"embed": {
"description": "Please join a voice channel to stop me."
}
      }
      )
  console.log('Finished playing! -- just left voice channel');
    }
}