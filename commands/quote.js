var Spark = require('sparkbots')
const Command = Spark.command('quote')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Quote a message from its ID')
module.exports = Command;

Command.code = (client, message) => {


  message.channel.messages.fetch(message.content.split(' ').slice(1)[0])
    .then(message => message.channel.send({
    "content": `**From ${message.author.tag}**`,
        "embed": {
          "title": "💫 Quote 🎳",
          "description": (message.content),
          "color": 25087,
          "timestamp": message.createdAt
        }
      }) ) //thx xD
    .catch(error => message.channel.send(`There was an error: \`${error}\``))
  //smh i kn 🤯
 } //🤔🤔