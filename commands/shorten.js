var Spark = require('sparkbots') //help pls
const Command = Spark.command('shorten')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('shorten lInK')
module.exports = Command;
const shorten = require('isgd');
Command.code = (client, message) => { // why di you put ", args, tools" //sry, thought i was taking a shortcut
  
 const args = message.content.slice(2).trim().split(/ +/g); //ya see?
 const command = args.shift().toLowerCase();
  
  if(message.content.split(' ').slice(1).join(' ').search('pornhub.com') != -1) {
    let a = ['<:no_u:426915054278148140>','lol wot, not 2day'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  if(message.content.split(' ').slice(1).join(' ').search('https://pornhub.com') != -1) {
    let a = ['<:no_u:426915054278148140>','lol wot, not 2day'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  if(message.content.split(' ').slice(1).join(' ').search('https://www.pornhub.com') != -1) {
    let a = ['<:no_u:426915054278148140>','lol wot, not 2day'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  if(message.content.split(' ').slice(1).join(' ').search('www.pornhub.com') != -1) {
    let a = ['<:no_u:426915054278148140>','lol wot, not 2day'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  
  if (!args[0]) return message.channel.send('**<:oof:430767004195225600> Proper Usuage:** `.shorten <URL>`')
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
    if (res.startsWith('Error:')) return message.channel.send('**<:oof:430767004195225600> Please enter a vaild URL.**');
      
      message.channel.send({
        "embed": {
"title": "🔗 Shorten Link",
"description": `Shortened Link: <${res}>`,
"footer": {
"text": `👤 Requested by ${message.member.displayName}`
}
        }
      })
    }) 
  } else {
    shorten.custom(!args[0], !args[1], function(res) {
      
      if (res.startsWith('Error:')) return message.channel.send(`**<${res}>**`);
      
      message.channel.send(`**<${res}>**`);
      
    })

  }
}