var Spark = require('sparkbots')
const Command = Spark.command('resume')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('resumes sound in voice')
module.exports = Command

Command.code = (client, message) => {

     if (!message.guild.me.voiceChannel) {
      message.channel.send({
          "embed": {
          "description": "I am not in a voice channel. You must play music using the `play` command."
          }
      }  )}
  
   message.guild.me.voiceChannel.connection.dispatcher.resume()
  
     message.channel.send({
        "embed": {
          "title": "🎶 ⏯ Resumed music",
          "description": 'Resumed the music playing in ' + message.guild.me.voiceChannel.name,
          "color": 25087
        }
    })
  
}