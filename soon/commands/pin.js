var Spark = require('sparkbots')
const Command = Spark.command('pin')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('reeeeeeeeeeeeeee')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(`📌 **Pinned!**`)
  message.pin()
  
}