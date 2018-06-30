var Spark = require('sparkbots')
const Command = Spark.command('tts')
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('reeeeeeeeeeeeeee')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(`${message.content.split(' ').slice(1).join(' ')}`, {
 tts: true
})
}