var Spark = require('sparkbots')
const Command = Spark.command('trivia2')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(`**Welcome to Trivia 2!**\n*Answer the question correctly to win. 🤔 You will have 10 seconds to answer it.*\n\n__**Question: What is Donald Duck's middle name?**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === 'Fauntleroy', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `Fauntleroy`.');
    })
      message.channel.awaitMessages(response => response.content === 'fauntleroy', {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `Fauntleroy`.');
    })
    .catch(() => {
      message.channel.send(`**🌐 Time either ran out, or you answered wrong.**\n\n__Correct Answer:__ \`Fauntleroy\``);
    });
});
}