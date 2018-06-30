var Spark = require('sparkbots')
const Command = Spark.command('trivia5') //soon
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(`**Welcome to Trivia 5!**\n*Answer the question correctly to win. 🤔 You will have 10 seconds to answer it.*\n\n__**Question: How many likcs to get to the center of a tootsie pop?**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '364', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `364 licks`.');
    })
      message.channel.awaitMessages(response => response.content === '364 licks', {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `364 licks`.');
    })
    .catch(() => {
      message.channel.send(`**🌐 Time either ran out, or you answered wrong.**\n\n__Correct Answer:__ \`364 licks\``);
    });
});
}