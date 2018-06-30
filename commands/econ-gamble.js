var Spark = require('sparkbots')
const Command = Spark.command('gamble')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('gAmBlE yOuR GuCcI mOnEy')
module.exports = Command;
//here help pls 

Command.code = (client, message) => {
  var LuckNumber = Math.floor((Math.random() * 100) + 5);
      var myArray = [
        `${LuckNumber}`,
                `${LuckNumber}`,
                `${LuckNumber}`,
                `${LuckNumber}`,
                `${LuckNumber}`,
        `0 	— you lost`
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  message.channel.send(`${message.member.displayName} gambled **${message.content.split(' ').slice(1).join(' ')}** and won 💵... __**$${randomItem}**__!`)
    }