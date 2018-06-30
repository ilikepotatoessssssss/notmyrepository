var Spark = require('sparkbots')
const Command = Spark.command('ping')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('pong')
module.exports = Command;

Command.code = (client, message) => {

    var start = new Date().getTime()
    message.channel.send("📃 Pinging...").then((message) => {
        var end = new Date().getTime()
        message.edit(":ping_pong: Pong! Took **" + (end - start) + "**ms");
    })
  
  // Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS')){
          message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run most commands.')
 }
}