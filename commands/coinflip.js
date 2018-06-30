var Spark = require('sparkbots')
const Command = Spark.command('coinflip')
Command.addAlias('flip')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Flip a coin')
module.exports = Command

Command.code = (client, message) => {

    var myArray = [
        "http://pluspng.com/img-png/png-penny-file-2005-penny-rev-unc-d-png-746.png",
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/2005-Penny-Uncirculated-Obverse-cropped.png"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
   message.channel.send({ // forgot the message.channel.send
        embed: {
          "title": "📃 Coin Flip 🐖",
          "color": 5198940,
          "image": {
            "url": `${randomItem}`
        }
          
        } // u forgot this one -advaith
          
        })   //pls help advaith
  
} // forgot this too
//thx advaith -will