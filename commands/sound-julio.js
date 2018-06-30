var Spark = require('sparkbots')
const Command = Spark.command('playjulio')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('play sound in voice')
module.exports = Command;
const ytdl = require('ytdl-core');
Command.code = async (client, message) => {
   const connection = await message.member.voiceChannel.join();
  const dispatcher = connection.play;

     if (message.member.voiceChannel) {
     message.member.voiceChannel.join();
             message.channel.send({
"embed": {
"title": "▶️ Playing Music",
"description": `I am currently playing: "Making My Way Downtown with Julio"`,
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
"description": "Please join a voice channel to play music."
}
      }
      )
    }
  connection.play(ytdl(
  "https://www.youtube.com/watch?v=WmvMQulJeRA",
  { filter: 'audioonly' }));

  console.log('Just joined voice channel and/or a song started playing');

  //reee im using this as a cmd layout ehh go ahead tho xD
}