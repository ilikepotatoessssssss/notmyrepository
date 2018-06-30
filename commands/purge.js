var Spark = require('sparkbots')
const Command = Spark.command('purge')
Command.addAlias('clear')
Command.addAlias('prune')
Command.addAlias('delete')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('delete specified amount of msgs')
module.exports = Command;

Command.code = (client, message) => {


    // Checks for Manage Messages permission
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send({
      "embed": {
        "title": "<:oof:430767004195225600> Error",
        "description": "You do not have the \"Manage Messages\" permission.",
        "color": 16711680,
        "footer": {
          "text": "Please contact a server admin."
        }
      }
    })
    
  if(message.author.bot)
  return message.channel.send('Bots can\'t use mod commands.')
  
    // Gets number of messages to delete
    let deleteCount = parseInt(message.content.split(' ').slice(1).join(' '));
    deleteCount++

    // Checks if delete count is valid
    if(!deleteCount || deleteCount < 2)
      return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid amount of messages to delete",
          "color": 16711680,
          "footer": {
            "text": "Please provide a number higher than 0."
          }
        }
      })

    // Purges
    message.channel.bulkDelete(deleteCount)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

}
