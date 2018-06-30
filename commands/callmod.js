var Spark = require('sparkbots')
const Command = Spark.command('callmod')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

    
Command.code = (client, message) => {
let role = message.guild.roles.find("name", "Mods");
  let args = message.content.split(' ').slice(1).join(' ')
  
       message.channel.send(`👨‍💼 ${message.member.displayName} has called the Mods`)
 message.guild.channels.find("name", "mods").send({
   "content": role,
        "embed": {
          "description": `**${message.member.displayName} \`${message.author.tag}\` called the Mods in ${message.channel}**`,
          "color": 25087,
          "fields": [
          {
"name": "📜 Reason For Call",
"value": `${args}`,
          }
          
          ],
          "footer": {
          "text": `Called by ${message.member.displayName}`
        }
        }
 })                                                       
}

                                               