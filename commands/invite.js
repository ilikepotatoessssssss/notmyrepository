var Spark = require('sparkbots')
const Command = Spark.command('invite')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

Command.code = (client, message) => {
message.guild.channels.get(message.channel.id).createInvite().then(invite =>
    message.channel.send(invite.url)
)
                                                               }
                                                               