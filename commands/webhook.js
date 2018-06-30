var Spark = require('sparkbots')
const Command = Spark.command('webhook')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

    
Command.code = (client, message) => {
  
message.channel.send({
"embed": {
  "color": 25087,
  "fields": [ //yes daddy oWo thx
       {
        "name": "🔗 Online Webhook Sender",
        "value": "To use the Discord Webhook Sender, [click here](https://willm.ga/bot/hook.html)."
       },
    {
"name": "🧠 How to Use The Sender",
"value": "1: Go to the website stated above.\n2: Enter the webhook URL, your message and your username.\n3: Click \"Send\"!"
    }
]
}
})
  
}