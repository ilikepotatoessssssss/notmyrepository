var Spark = require('sparkbots')
const Command = Spark.command('soon')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {

}