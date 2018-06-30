var Spark = require('sparkbots')
const Command = Spark.command('star')
Command.addAlias('starboard')
Command.addAlias('⭐️')
Command.addAlias('🌟')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('send something to the starb0ard')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.messages.fetch(message.content.split(' ').slice(1)[0])
    .then(message => message.guild.channels.find("name", "starboard").send({
    "content": `**🌟 New Star ⭐**`,
        "embed": {
          "title": message.author.tag,
          "description": (message.content),
          "color": 25087,
          "timestamp": message.createdAt
        }
        }) ) //thx xD
    .catch(error => message.channel.send(`There was an error: \`${error}\``))
  message.channel.send("🌠 Shooted the star to \`#starboard\`")
  //smh
 } //🤔🤔