var Spark = require('sparkbots')
const Command = Spark.command('economy')
Command.addAlias('econ')
Command.addAlias('currency')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('SeE yOuR GuCcI mOnEy')
module.exports = Command;

Command.code = (client, message) => {
message.channel.send(`**${message.author} - Here's Willinator 2000's economy system info!**\n>> 1) Currency is WillBucks 💵\n>> 2) Economy commands are as follows:\n>>>>>\`balance\` - See your or another person's balance\n>>>>>\`gamble\` - Gamble specified amount of money\n>>>>>\`daily\` - Run every 12 hrs to earn a daily WillBucks bonus\n>>>>>\`rob\` - Rob some of another user's money\n>>>>>\`slots\` - Get 3 in a row to win WillBucks`)
} 