var Spark = require('sparkbots')
const Command = Spark.command('profile')
Command.addAlias('p')
Command.setLevel(0)
Command.allowDms(true) //my stuf
Command.setDescription('ur stuf')
module.exports = Command;

Command.code = (client, message) => {

//edt time
  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

hours = hours - 4

    if (minutes < 10) {
     minutes = "0" + minutes;
  }

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
     hours = 12;
    }
// this one
  // Status
   if (message.author.presence.status=="online") {
         status = "<:online:431909244787359765>"
    } else if (message.author.presence.status=="idle") {
         status = "<:idle:431909245005332480>"
 
    } else if (message.author.presence.status=="dnd") {
         status = "<:dnd:431909244774907914>"
 
    } else if (message.author.presence.status=="offline") {
         status = "<:offline:431909245106126848>"
 
    } else {
        message.channel.send("STATUS ERROR: Please report to WHASonYT#0735: `Unrecognized Status`")
         status = message.author.presence.status
        }
  //Random Sentence
  
    var myArray = [
        "A monkey jumped on a pobdoinkaloink and pooped very slow.",
        "Billy found out that paper grows on Oak trees.",
        "Will jumped out of a window to get an apple.",
        "Advaith liked cheese so much that he turned into a cheese ball.",
        "Save 15% or more on car insurance when you switch to GEICO.",
        "Jellyfish have no brain, just like Will!"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)]; 
  
  message.channel.send({
  "content": `__**📁 @${message.author.username}'s Profile**__`,
  "embed": {
    "thumbnail": {
        "url": message.author.displayAvatarURL({format: 'png', size: 1024}) },
    "timestamp": message.author.createdAt, // here
    "footer": {
            "text": "📅 Account Created"
          },
    "fields": [ 
      {
        "name": "👤 Name",
        "value": `${message.member.displayName}`,
        "inline": true
      },
      {
        "name": "🔗 Mutual Servers",
        "value": `• ${client.guilds.filter(guild => guild.members.has(message.author.id)).map(guild => guild.name).toString().replace(/,/g, "\n• ")}`,
        "inline": true
      },
      {
        "name": "✴️ Badges",
        "value": "🌐 💫",
        "inline": true
      },
      {
        "name": "🛡️ Status",
        "value": `${status}`,
        "inline": true
      },
      {
        "name": "📝 Random Sentence",
        "value": randomItem,
        "inline": true
      }
      ]
    }
  })
  
}