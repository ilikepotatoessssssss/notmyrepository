var Spark = require('sparkbots')
const Command = Spark.command('poll')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('make a poll')
module.exports = Command;

Command.code = (client, message) => {

            
  
  message.channel.send(`🍿__**POLL TIME!**__ 🍿\n      React with either 👍 or 👎.\n\n ${message.content.split(' ').slice(1).join(' ')}\n\n     👤*Poll by ${message.member.displayName}*`)
  .then(function (message) {
              message.react('👍'),
                message.react('👎');
  }
)
        }