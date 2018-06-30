var Spark = require('sparkbots')
const Command = Spark.command('slot')
Command.addAlias('slots')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('sLoT yOuR GuCcI mOnEy')
module.exports = Command;
//here help pls 

Command.code = (client, message) => {
    var myArray = [
"🎰",
"🍌",
"🍎",
"🦄",
"☂️"
      ];
      

      var one = myArray[Math.floor(Math.random()*myArray.length)];
      var tw = [
"🎰",
"🍌",
"🍎",
"🦄",
"☂️"
      ];
      

      var two = tw[Math.floor(Math.random()*tw.length)];
        var thre = [
"🎰",
"🍌",
"🍎",
"🦄",
"☂️"
      ];
      

      var three = thre[Math.floor(Math.random()*thre.length)];
  message.channel.send({
"embed": {
  "title": "🎰 Willinator 2000 Slots 🎰",
"description": `${one} | ${two} | ${three}\n Get 3 in a row and you win!`
}
  })
}