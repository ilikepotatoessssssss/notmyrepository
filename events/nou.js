const spark = require("sparkbots")
const event = spark.event("nou")
event.setEvent("message")
event.code = (client, message) => {
    
  if(message.guild.id==='398998849026261003') return

  if(message.content.toLowerCase()==='no u'){
    message.channel.send('<:no_u:426915054278148140>')  
  }
  
}

module.exports = event