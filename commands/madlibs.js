var Spark = require('sparkbots')
const Command = Spark.command('madlibs')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('how to use madlibs')
module.exports = Command;

Command.code = (client, message) => {


  message.channel.send(`<:madlibs:431931746045526029> ${message.author.username}, here's your mad lib layout. Once you're ready to see your creation, use the \`.ml (withargs)\` command. Have fun!\n -  **1st arg:** a friend (don't ping them)\n - **2nd arg:** a time of day (day/night)\n - **3rd arg:** a romantic action (kiss/marry, etc)\n Command Example: \`.ml Willinator day kiss\``)
  
 }