var Spark = require('sparkbots')
const Command = Spark.command('trivia6') //soon
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(`**Welcome to Trivia 6!**\n*Answer the question correctly to win. 🤔 You will have 10 seconds to answer it.*\n\n__**Question: When was the WillHasAwesomeShoes YouTube channel started? (just the month)**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === 'October', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `October`.');
    })
      message.channel.awaitMessages(response => response.content === 'october', {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('🧠 Good job! You are correct!\nThe answer is `October`.');
    })
    .catch(() => {
      message.channel.send(`**🌐 Time either ran out, or you answered wrong.**\n\n__Correct Answer:__ \`October\``);
    });
});
}