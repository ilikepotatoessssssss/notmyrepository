var Spark = require('sparkbots')
const Command = Spark.command('trivia4')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(`**Welcome to Trivia 4!**\n*Answer the question correctly to win. 🤔 You will have 10 seconds to answer it.*\n\n__**Question: What is the capital city of the U.S. state of Hawaii?**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === 'Honolulu', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `Honolulu`.');
    })
      message.channel.awaitMessages(response => response.content === 'honolulu', {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `Honolulu`.');
    })
    .catch(() => {
      message.channel.send(`**🌐 Time either ran out, or you answered wrong.**\n\n__Correct Answer:__ \`Honolulu\``);
    });
});
}