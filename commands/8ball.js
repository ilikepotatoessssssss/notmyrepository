var Spark = require('sparkbots')
const Command = Spark.command('8ball')
Command.addAlias('69ball')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Ask the 8ball a question!')
module.exports = Command;


Command.code = (client, message) => {

    var myArray = [
        "https://i.imgur.com/pKeDLvR.jpg",
        "https://i.imgur.com/gO3AXSA.jpg",
        "https://i.imgur.com/zU30z44.jpg",
        "https://i.imgur.com/JVYm5KW.jpg",
        "https://i.imgur.com/rM9u05W.jpg",
        "https://i.imgur.com/X4ZEJfD.jpg",
        "https://i.imgur.com/8n4IP1W.jpg",
        "https://i.imgur.com/ZLqND9u.jpg",
        "https://i.imgur.com/ODYTGni.jpg"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  

      message.channel.send(`🎱 __**yea magic *woosh***__\n 🤔*Your Question:* ${message.content.split(' ').slice(1).join(' ')}\n ✨*My Answer:* ${randomItem}`)
  
}