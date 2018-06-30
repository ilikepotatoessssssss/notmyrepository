var Spark = require('sparkbots')
const Command = Spark.command('help')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('hAlP mE') //lol
module.exports = Command;

Command.code = (client, message) => {

  
    message.channel.send({
      "content": "**Use `.help2`/`.help3` for more commands.**",
  "embed": {
    "title": `**__${client.user.username} Help__**`,
    "color": '45013',
    "description": "Some of Willinator 2000's commands are powered by [AdvaithBot](https://advaithbot.com).\nThe bot's prefix is `.`\n 📧 If you need support, DM WHASonYT#0735",
    "fields": [
      {
        "name": "🔗 Commands",
        "value": "- `help`: this\n- `ping`: :ping_pong: Checks how fast the bot is responding\n- `google`: Searches Google\n- `urban`: Searches Urban Dictionary\n- `cleverbot`: Talk to Cleverbot!\n- `info`: Bot information\n- `leave`: Makes the bot leave the server\n- `userinfo`: Information about a user\n- `yt`: Search for your favorite YouTube videos!\n- `madlibs`: Play a classic game of Mad Libs!\n- `meme`: See an awesome meme\n- `credits`: See those spicy people who helped create the bot!\n- `emoji`: Get a random emoji!\n- `duck`: Get a random duck!\n- `emoji`: Get a random emoji!\n- `fact`: Get a random Discord Email fact!\n- `8ball`: Predict the future <:mindblown:433744942754562050>\n- `lovecalc`: Calculate the love between two people!\n- `mutuals` List of servers you're in that share the bot\n- `dm`: Dm yourself, or someone else! 📬 Type `.hdm` for more help with this command."},
  
      {
        "name": "🛑 Limit Reached",
     "value": "Use `.help2` for more commands.",
      },
      {
         "name": "✨ Work with Us 📃",
        "value": "Can you use discord.js and know the Glitch.com interface? Submit an application using the `.dev [string]` command! 📝"
      }
    ]
  }
})
  
}