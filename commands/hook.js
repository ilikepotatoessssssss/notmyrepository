var Spark = require('sparkbots')
const Command = Spark.command('hook')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('sends ur msg as a webh00k')
module.exports = Command;

var name
var format

Command.code = async (client, message) => {

  
  let text = message.content.split(' ').slice(1).join(' ')
  
  if(!text)
    return console.log('.hook cmd failed: No text')
  
  if(!message.member.nickname) {
   name = message.member.user.username
  } else {
   name = message.author.username}
  
    if(message.author.avatar.startsWith('a_')){
   format = 'gif'
    }  else {
   format = 'png' }
  
  let x = await message.channel.createWebhook(name, { avatar: message.author.displayAvatarURL({format: format, size: 1024}), reason: `${message.author.tag} used .hook`})
  await x.send(text)
  await x.delete()
  
  message.delete()
  
}