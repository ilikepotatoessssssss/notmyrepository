var Spark = require('sparkbots')
const Command = Spark.command('pause')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('pause sound in voice')
module.exports = Command

Command.code = (client, message) => {

     if (!message.guild.me.voiceChannel) {
      message.channel.send({
          "embed": {
          "description": "I am not in a voice channel. You must play music using the `play` command."
          }
      }  )}
  
   message.guild.me.voiceChannel.connection.dispatcher.pause()
  
     message.channel.send({
        "embed": {
          "title": "⏸ Paused music",
          "description": 'Paused the music playing in ' + message.guild.me.voiceChannel.name,
          "color": 25087
        }
    })
  
}