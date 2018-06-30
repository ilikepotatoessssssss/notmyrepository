var Spark = require('sparkbots')
const Command = Spark.command('uptime')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('up dat time yeeboi')
module.exports = Command;

Command.code = (client, message) => {

  let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
  let uptime = `**Willinator 2000 Uptime**\n __${hours} hours, ${minutes} minutes and ${seconds} seconds__\n\n*devs - use \`.eval client.uptime\` to see total uptime in ms*`;
message.channel.send(uptime)
}