var Spark = require('sparkbots')
const Command = Spark.command('react')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Adds requested e- screw this')
module.exports = Command;

Command.code = (client, message) => {

            const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let emote = args[0];
  message.channel.send(`${message.content.split(' ').slice(2).join(' ')}\n\n     👤*${message.author.username}*`)
  .then(function (message) {
              message.react(emote);
            message.channel.send(`✅ Reacted with ${emote}.`)
  }
)
        }