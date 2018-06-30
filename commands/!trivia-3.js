var Spark = require('sparkbots')
const Command = Spark.command('trivia3')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(`**Welcome to Trivia 3!**\n*Answer the question correctly to win. 🤔 You will have 10 seconds to answer it.*\n\n__**Question: What percent of an egg’s weight is the shell?**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '12', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `12%`.');
    })
      message.channel.awaitMessages(response => response.content === '12%', {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `12%`.');
    })
    .catch(() => {
      message.channel.send(`**🌐 Time either ran out, or you answered wrong.**\n\n__Correct Answer:__ \`12%\``);
    });
});
}