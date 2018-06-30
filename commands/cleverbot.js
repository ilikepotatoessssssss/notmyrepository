var Spark = require('sparkbots')
const Command = Spark.command('cleverbot')
Command.addAlias('cb')
Command.setLevel(0) //:thinking: profusly
Command.allowDms(true)
Command.setDescription('Talk to Cleverbot')
module.exports = Command;

var cleverbot = require("cleverbot.io"),
bot = new cleverbot('glpVth2KLuTLLTdy',process.env.CLEVERBOT_API_KEY);
bot.setNick("willinator")

Command.code = (client, message) => {
  
  message.channel.startTyping()
    if(message.content.split(' ').slice(1).join(' ').search('who made you') != -1) {
    message.channel.stopTyping()
    let a = ['Will and Advaith!', 'My mom.', 'Will made me!'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  
  if(message.content.split(' ').slice(1).join(' ').search('my name') != -1) {
    message.channel.stopTyping()
    if(!!message.member.nickname) {
   name = message.member.nickname
  } else {
   name = message.author.username }
    message.reply(name)
    return;
  }
  
bot.create(async function (err, session) {
  bot.ask(message.content.split(' ').slice(1).join(' '), async function (err, response) {
  await message.reply(response)
    message.channel.stopTyping()
});
  
});
  
}