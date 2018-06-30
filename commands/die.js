var Spark = require('sparkbots')
const Command = Spark.command('die')
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('kills the boat ☠️👻')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send("oof.")
        .then(() => {
            process.exit()
        })
  client.user.setPresence({
          status: "online", 
          activity: {
            name: `☠️ Just restarted... 🎲Let me load`,
            type: 3,
          }
        })
}