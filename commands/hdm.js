var Spark = require('sparkbots')
const Command = Spark.command('hdm')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('dm command help')
module.exports = Command;

Command.code = (client, message) => {

message.channel.send({
        "embed": {
         "title": "📬 `.dm` Command Help 🌐",
          "description": " *`.dm content`*\n  This will send the content to you.\n\n*`.dm @user content`*\n  This will send the content to the mentioned user.\n\n*`.dm userID content`*\n This will send the content to the user using their ID.\n\n\n Using this command to spam another user is strictly forbidden.",// eh probably no cool down simce we're lazy af
          "color": 25087
        }
      })
  
}