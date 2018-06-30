var Spark = require('sparkbots')
const Command = Spark.command('balance')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('SeE yOuR GuCcI mOnEy')
module.exports = Command;

Command.code = (client, message) => {
    var LuckNumber = Math.floor((Math.random() * 2500000) + 5);
  if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
           message.channel.send(`Balance\n**💵$${LuckNumber}**\n\nPeople are always stealing your cash (\`.rob @user\`)/giving you more so be careful!`)  
  }

         if(message.mentions.members.size == 0) {
        let member = message.mentions.members.first()
   message.channel.send(`**💵$${LuckNumber}**\n\nPeople are always stealing your cash (\`.rob @user\`)/giving you more so be careful!`) 
}
}