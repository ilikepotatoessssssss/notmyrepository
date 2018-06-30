var Spark = require('sparkbots')
const Command = Spark.command('rob')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('SeE yOuR GuCcI mOnEy')
module.exports = Command;
const talkedRecently = new Set();
Command.code = (client, message) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**<:oof:430767004195225600> ${message.author}, There is a cooldown on this command.** Try again in two minutes. If the problem persists, contact WHASonYT#0735`);
    } else {
 message.channel.send(`**${message.author.username} just robbed some of ${message.content.split(' ').slice(1).join(' ')}'s money!**`)
// Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 120000);
    }
   if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
   }

}