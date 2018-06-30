var Spark = require('sparkbots')
const Command = Spark.command('clap')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;
var name
var format
Command.code = async (client, message) => {
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
     if (args.length < 1) {
        throw 'Please provide some text to clapify';
  
     }
  message.channel.send(args.map(randomizeCase).join(':clap:'))
}