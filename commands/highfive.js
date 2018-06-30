var Spark = require('sparkbots')
const Command = Spark.command('hi5') //ree
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('i see a 5 up there')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send("https://cdn.discordapp.com/attachments/399069831820869632/439233891648405554/JPEG_20180426_211316.jpg") //is there anyway to show the number of commands like .reload does?
  
}