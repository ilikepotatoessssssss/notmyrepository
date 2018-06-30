var Spark = require('sparkbots')
const Command = Spark.command('type')
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('makes me type a novel')
module.exports = Command;

Command.code = (client, message) => {

    message.channel.startTyping()
}