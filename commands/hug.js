var Spark = require('sparkbots')
const Command = Spark.command('hug')
Command.addAlias('h')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('owo huggie')
module.exports = Command;

Command.code = (client, message) => {

var myArray = [
      "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
      "https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif",
      "https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif",
      "https://media.giphy.com/media/diAhf8bYer76E/giphy.gif",
      "https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif"
      ];
            var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
   if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
         if(message.content.split(' ').slice(1).join(' ').search('<@428693499181793292>') != -1) {
    let a = [`**Thanks for the hug, ${message.member.displayName}. 🤗 Try another user besides me!**`];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }

        message.channel.send({
"content": `Hug GIF Link: ${randomItem}`,
        embed: {
          "title": "🤗 Hug 💞",
          "description": `**${message.member.displayName} just hugged ${member}!**`,
          "color": 25087,
          "image": {
            "url": randomItem
          }
          }
        })
        
    }
  if(message.mentions.members.size == 0) {
        let member = message.mentions.members.first()
         if(message.content.split(' ').slice(1).join(' ').search('<@428693499181793292>') != -1) {
    let a = [`**Thanks for the hug, ${message.member.displayName}. 🤗 Try another user besides me!**`];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }

        message.channel.send({
"content": `Hug GIF Link: https://media.giphy.com/media/diAhf8bYer76E/giphy.gif`,
        embed: {
          "title": "🤗 Hug 💞",
          "description": `**${message.member.displayName} just hugged absolutely no one!**`,
          "color": 25087,
          "image": {
            "url": "https://media.giphy.com/media/diAhf8bYer76E/giphy.gif"
          },
          
          "footer": {
            "text": `Use ".hug @user" to hug someone!`
        }
          }
        })
        
    }
}

  