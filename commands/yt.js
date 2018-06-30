var Spark = require('sparkbots')
const Command = Spark.command('yt')
Command.addAlias('youtube')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('search dat guucci yt')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(`<:yt:339413738102849537> ${message.author.username} - **Enjoy your YouTube videos!**\n\n https://www.youtube.com/results?search_query=${encodeURIComponent(message.content.split(' ').slice(1).join(' '))}\n<a:ree:432281542333825024> *i spent too long making this command*`)
  
}