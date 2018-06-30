var Spark = require('sparkbots')
const Command = Spark.command('memify')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

    
Command.code = (client, message) => {
  
  const randomizeCase = word => word.split('').map(c => Math.random() > 0.3 ? c.toUpperCase() : c.toLowerCase()).join('');
     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
     if (args.length < 1) {
        throw '🤨 I need some text to memeify!';
  
     }
  message.channel.send(args.map(randomizeCase).join(' '))
}