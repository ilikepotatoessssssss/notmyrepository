var Spark = require('sparkbots')
const Command = Spark.command('help2')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('hAlP mE aGaIn') //xD
module.exports = Command;

Command.code = (client, message) => {

    message.channel.send({
      "content": "**Use `.help`/`.help3` for more commands.**",
  "embed": {
    "title": `**__${client.user.username} Help__**`,
    "color": '45013',
    "description": "The bot's prefix is `.`",
    "fields": [
      {
        "name": "🔗 Commands",
        "value": "- `choose`: Chooses one of your 2 choices\n- `announce`: Announce something in the server\n- `trbmb`: That really blanks my blank generator\n- `timed`: sends your message every 12 hours🕒\n- `reverse`: Reverse your text!\n- `slap`: Slap someone with something! (`.slap @Will with a foot`)\n- `hook`: send your meesage as a webhook\n- `fliptext`: Flips your text upsidedown 🙃\n - `gm`: Posts a good morning msg every 24hrs ⚠️ Must run cmd at the time you want it to post\n- `lucky`: Get your lucky number! 🍀\n- `tm`: adds ™️ to your message\n- `purge`: Deletes specific amount of messages\n- `region`: Tells what the server region is\n- `poll`: Lets user react to msg to answer a question 🍿\n- `quote`: Get msg from ID\n- `dicksize`: Shows dick size (requires NSFW channel)\n- `star`: add a msg to the starboard\n- `giveaway`: give something away • Usuage: `.giveaway xBox 5 🎉 Win a xBox`\n `endg`: Ends giveaway\n- `warn`: Warn user\n- `discrim` users with same requested discrim\n - `trump`: random donald trump quote"
      }
  
      ]
    }
    })
}