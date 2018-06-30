const spark = require("sparkbots")
const event = spark.event("oof")
event.setEvent("message")
event.code = (client, message) => {
    const talkedRecently = new Set();
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Stop spamming the OOF command! Wait about 30 seconds to use this again.");
    } else {
        if(message.content.toLowerCase()==='oof'){
      message.channel.send("<:oof:430767004195225600>")
// Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    } 
  }
  
}

module.exports = event