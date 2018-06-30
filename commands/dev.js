var Spark = require('sparkbots')
const Command = Spark.command('dev')
Command.addAlias('developer')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Send a message to the devs')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(`✅ **Your application has been sent to the developer! \`(WHASonYT#0375)\`**\n         📧 Make sure you included a way to contact you besides your username. *(email, twitter, etc)*`)
  client.users.get('339177677326123018').send(message.content.split(' ').slice(1).join(' ')+' '+message.author.username)
}