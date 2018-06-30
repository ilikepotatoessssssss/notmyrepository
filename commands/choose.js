var Spark = require('sparkbots')
const Command = Spark.command('choose')
Command.addAlias('c')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('choose something')
module.exports = Command;

Command.code = (client, message) => {
  const args = message.content.slice(1.).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let z = args[0]; // Remember arrays are 0-based!.
  let o = args[2];
  
    var myArray = [
        args[0], //this is returning the whole part after .choose instead of just the first word
        args[2]
      ]; //thx
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

      message.channel.send({
        "content": "Use \"`or`\" to separate choices. ",
        "embed": {
          "title": "💫 Choose Random 🤔",
          "description": randomItem,
          "color": 2829099
        }
      }
      
                      )}