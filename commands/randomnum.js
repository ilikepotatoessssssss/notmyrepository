var Spark = require('sparkbots')
const Command = Spark.command('random')
Command.addAlias('randomnum')
Command.addAlias('randomnumber')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
    var rN = Math.floor((Math.random() * 1000000) + 0.120);
message.reply(`**Random Number**\n__${rN}__`)
}