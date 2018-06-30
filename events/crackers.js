const spark = require("sparkbots")
const event = spark.event("crackers")
event.setEvent("message")
event.code = (client, message) => {
    
  if(message.content.toLowerCase()==='i like crackers'){
    message.channel.send("save 15% or more on car insurance when you...")
    message.channel.send("__**sWiTcH tO gEiCo**__")
    message.channel.send("<:blank:427598046038327306>")
  }
  
}

module.exports = event