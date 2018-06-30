var Spark = require('sparkbots')
const Command = Spark.command('help3')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('HAlP mE aGAiN oO0f') //i see u 
module.exports = Command;

Command.code = (client, message) => {

    message.channel.send({
      "content": "**Use `.help`/`.help2` for more commands.**",
  "embed": {
    "title": `**__${client.user.username} Help__**`,
    "color": '45013',
    "description": "The bot's prefix is `.`",
    "fields": [
      {
        "name": "🔗 Commands",
       "value": "- `car`: go on a crazy car ride!\n- `uptime`: see bot total uptime\n- `hug`: give a user a hug (`.hug @Will`) 🤗\n- `mhelp`: List of music cmds\n- `kk start`: go to the Krusty Krab\n- `emote`: Get server emoji's link\n- `shorten`: shortens the specified link\n- `vclock`: always updates specified voice channel ID to edt/est time (beta)\n- `randomnum`: gets a random number\n- `playjulio`: a cool sound effect\n- `haste`: converts given code to hastebin link\n- `clap`: Clapifies your given text\n- `webhook`: Gives info on how to send Discord webhook from site\n- `callmod`: Calls the mod -- REQUIRES #mod AND \"Mod\" role\n- `lmgtfy`: Let Me Google That For You\n- `event`: Start an event\n- `invite`: get an invite to the current channel you're in"
      }
  
      ]
    }
    })
}