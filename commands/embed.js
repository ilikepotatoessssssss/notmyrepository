var Spark = require('sparkbots')
const Command = Spark.command('embed')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Embed a message')
module.exports = Command;

Command.code = (client, message) => {
   if(message.author.bot)
  return message.channel.send({
  "embed": {
"title": `${message.member.username}`,
    "description": message.content.split(' ').slice(1).join(' '),
    }
  })

  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send('<:no:424361302069346304> I don\'t have the `Embed Links` permission! I need this to run most commands, including embed.')
  
  message.channel.send({
  "embed": {
    "description": message.content.split(' ').slice(1).join(' ')
    }
  })
  message.delete().catch(O_o=>{});
  
}