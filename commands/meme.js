var Spark = require('sparkbots')
const Command = Spark.command('meme')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('proof will is a meme??????????????????') //smh
module.exports = Command;

let format

Command.code = (client, message) => {


  if(!message.author.avatar){
   format = 'png'
  } else if(message.author.avatar.startsWith('a_')){
   format = 'gif'
  }  else {
   format = 'png' }
  
message.channel.send({
    "embed": {
      "title": "Meme",
      "description": "Here's a hilarious meme:",
      "image": {
      "url": message.author.displayAvatarURL({format: format, size: 1024})
    },
      "color": 148255,
      "footer": {
        "text": "lol wtf is this 🤔"
        }
    }
  })
  
}