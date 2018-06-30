var Spark = require('sparkbots')
const Command = Spark.command('brbertghtyn') //soon
Command.addAlias('loopplay')
Command.addAlias('loop')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('play sound in voice')
module.exports = Command;
const ytdl = require('ytdl-core');
Command.code = async (client, message) => {
    const dispatcher = connection.play;
   const connection = await message.member.voiceChannel.join();

     if (message.member.voiceChannel) {
     message.member.voiceChannel.join();
             message.channel.send({
"embed": {
"title": "▶️ Playing Looped Music",
"description": `I am currently playing: "${message.content.split(' ').slice(1).join(' ')}" for a billion times.`,
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
"description": "Please join a voice channel."
}
      }
      )
    }
    dispatcher.on('finish', () => {
connection.play(ytdl(
  `${message.content.split(' ').slice(1).join(' ')}`,
  { filter: 'audioonly' }));
    }
                  )
}
                  