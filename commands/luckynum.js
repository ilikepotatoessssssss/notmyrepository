var Spark = require('sparkbots')
const Command = Spark.command('lucky')
Command.addAlias('luckynumber')
Command.addAlias('lucknum')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('get a lucky number from Lucky\'s:tm:')
module.exports = Command;

Command.code = (client, message) => {


  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  message.reply(`Your lucky number is 🍀 __**${LuckNumber}**__! 🍀`)

}
  