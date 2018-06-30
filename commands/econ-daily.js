var Spark = require('sparkbots')
const Command = Spark.command('daily')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('cooldown cmd')
module.exports = Command;
//here help pls 
const talkedRecently = new Set();
let emoji
Command.code = (client, message) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**<:oof:430767004195225600> ${message.author}, You already received your daily WillBucks bonus today.**\n   Try again tomorrow, or in a few hours. If the problem persists, contact WHASonYT#0735`);
    } else {
message.channel.send("**💵 $1,000 WillBucks have been credited to your account.**")
// Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 4.32e+7);
    }
}