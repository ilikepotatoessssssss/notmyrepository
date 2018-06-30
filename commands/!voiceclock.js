var Spark = require('sparkbots')
const Command = Spark.command('vclock')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;
let emoji
Command.code = (client, message) => {

  message.channel.send(`${message.member.displayName} - **I changed the name of the specified voice channel to the current time.**\n   If this didn't work, give me Admin permissions and make sure you have Administrator perms.`)
  if(!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send({
    "embed": {
      "title": "<:oof:430767004195225600> Error",
      "description": "You do not have \"Administrator\" permissions.",
      "color": 16711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })
  setInterval(() => {
  
  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

hours = hours - 4

    if (minutes < 10) {
     minutes = "0" + minutes;
  }

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
     hours = 12;
    }

 let time = hours + ":" + minutes + " " + suffix + " EDT/EST"
  
  if(hours===1) { emoji="🕐" }
  if(hours===2) { emoji="🕑" }
  if(hours===3) { emoji="🕒" }
  if(hours===4) { emoji="🕓" }
  if(hours===5) { emoji="🕔" }
  if(hours===6) { emoji="🕕" }
  if(hours===7) { emoji="🕖" }
  if(hours===8) { emoji="🕗" }
  if(hours===9) { emoji="🕘" }
  if(hours===10) { emoji="🕙" }
  if(hours===11) { emoji="🕚" }
  if(hours===12) { emoji="🕛" }
  
  client.channels.get(message.content.split(' ').slice(1).join(' ')).edit({ name: emoji + ' ' + time })
  
}, 30000)
}
  