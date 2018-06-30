var Spark = require('sparkbots')
const Command = Spark.command('mutuals')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('servers im in that ur in')
module.exports = Command;

Command.code = (client, message) => {


  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send('<:no:424361302069346304> I don\'t have the `Embed Links` permission! I need this to run the mutuals command.')
  
  message.channel.send({
  "embed": {
    "title": `🌐 ${client.user.username} Mutual Servers 🌐`,
    "color": '45013',
    "description": `**${client.guilds.filter(guild => guild.members.has(message.author.id)).size} total mutuals**\n\n• ${client.guilds.filter(guild => guild.members.has(message.author.id)).map(guild => guild.name).toString().replace(/,/g, "\n• ")}`,
    "footer": {
      "text": "This shows servers that you're in that Willinator 2000 is also in."
    }
  }
})
  
}