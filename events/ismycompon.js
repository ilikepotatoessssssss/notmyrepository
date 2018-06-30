const spark = require("sparkbots")
const event = spark.event("ismycompon")
event.setEvent("message")
event.code = (client, message) => {
    
  let name

  if(message.member) {
   name =message.member.displayName
  } else {
    name = message.author.username}

let myArray =  [ "uh i think so", `c'mon now ${name}` ]; 
let randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  if(message.author.bot)
  return
  
  

 if(message.content.startsWith("is my computer on") || message.content.startsWith("is my phone on") || message.content.startsWith("is my tablet on")){
 message.channel.send(randomItem) } //upsy dubsy do the spider went up the water spout
  
}

module.exports = event