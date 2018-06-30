var Spark = require('sparkbots')
const Command = Spark.command('dm')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('DM a user or yourself')
module.exports = Command;

Command.code = (client, message) => {
  // IMPORTANT - Args code ----------
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
  // Send to mentioned user ----------
  if (message.mentions.users.first()) {
    
  message.mentions.users.first().send(message.content.split(' ').slice(2).join(' '))
  message.channel.send({
  "embed": {
    "description": (message.mentions.users.first().tag+", Check your DMs! 📬")
    }
  })
    
    
    // Send to user ID ----------
  } else if(client.users.get(args[0])) {
    
  client.users.get(args[0]).send(message.content.split(' ').slice(2).join(' '))
  message.channel.send({
  "embed": {
    "description": (client.users.get(args[0]).tag+", Check your DMs! 📬")
    }
  })

    
    // Send to command user ----------
  } else {
    
  message.author.send(message.content.split(' ').slice(1).join(' '))
  message.channel.send({
  "embed": {
    "description": ("Check your DMs! 📬")
    }
  })
    
  }
  
  
}