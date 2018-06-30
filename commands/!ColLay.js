var Spark = require('sparkbots')
const Command = Spark.command('nonotnow')
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('cooldown cmd')
module.exports = Command;
//here help pls 
const talkedRecently = new Set();

Command.code = (client, message) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("You already received your quack" + message.member.displayName);
    } else {
      message.channel.send("hi")
// Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
}