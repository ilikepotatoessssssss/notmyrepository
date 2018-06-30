var Spark = require('sparkbots')
const Command = Spark.command('fliptext')
Command.setLevel(0)
Command.setDescription('flips text')
module.exports = Command;

var flip = require("lunicode-flip")

Command.code = (client, message) => {
  
message.channel.send(flip.encode(message.cleanContent.split(' ').slice(1).join(' ')))
  
} //was going to add te quotations in a sec lol surrrrrrrrrrrrrre -_- boiii 👀 🐖 oink