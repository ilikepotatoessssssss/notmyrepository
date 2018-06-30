var Spark = require('sparkbots')
const Command = Spark.command('tm')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('lol:tm:') //smh // u know nobody will see dis right yes. but for me
module.exports = Command;

Command.code = (client, message) => {


  // Dont reply at all if bot uses the command, in >terminal_ server
  if(message.author.bot&&message.guild.id==330777295952543744)
  return 
  
  if(message.author.bot)
  return message.channel.send('Nice try, but bots can\'t use this command.')
  
  // Permission
       if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')){
          message.channel.send('<:oof:430767004195225600> I don\'t have the `Manage Messages` permission! I need this to run the `.tm` command best.')
 }
  
  message.channel.send(`${message.content.split(' ').slice(1).join(' ')}™`)
  message.delete().catch(O_o=>{});
  
}