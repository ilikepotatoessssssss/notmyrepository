var Spark = require('sparkbots')
const Command = Spark.command('slap')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('slap some dood')
module.exports = Command;

Command.code = (client, message) => {

  
   const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let zero = args[0]; 
  let three = args[3];
  
  message.channel.send(`👋💥 **${message.member.displayName} viciously slapped ${zero} with a ${three} across the face.**`);
}