var Spark = require('sparkbots')
const Command = Spark.command('ghost')
Command.setLevel(10)
Command.allowDms(true)
Command.setDescription('👻')
module.exports = Command;

Command.code = (client, message) => {

  message.delete().catch(O_o=>{});
  
}