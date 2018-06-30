var Spark = require('sparkbots')
const Command = Spark.command('ml')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('mAdLiBs')
module.exports = Command;

Command.code = (client, message) => {

   const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  let zero = args[0]; 
  let one = args[1];
  let two = args[2];
  
  message.reply(`When I saw ${zero}'s face, I got so happy. I knew that ${zero} was the one as soon as I saw them. Every single ${one} I think about ${zero} and ${message.member.displayName} together as a family. I have always wanted to ${two} ${zero}.`);
}