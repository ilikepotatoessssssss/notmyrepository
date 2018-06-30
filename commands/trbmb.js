var Spark = require('sparkbots')
const Command = Spark.command('trbmb')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('im a goofy goober') // yes u r ok lol
module.exports = Command;

const snekfetch = require('snekfetch')
let trbmb

Command.code = (client, message) => {


  snekfetch.get('http://api.chew.pro/trbmb').then((result) => {trbmb = JSON.parse(result.text)[0]})
  
  if(!trbmb)
    return message.channel.send('<:oof:430767004195225600> **Try again later.**')
  
  message.channel.send({
  "embed": {
    "title": "🤔 That Really Blanks my Blank Generator 🌐",
    "description": trbmb,
    "url": "https://trbmb.chew.pw",
    "color": 11265722
  }
})
  
}