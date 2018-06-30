var Spark = require('sparkbots')
const Command = Spark.command('urban')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('oof-ban dicktionary')
module.exports = Command;

let word
let worddefinition
let example
let failed

Command.code = async (client, message) => {


  const ud = require('urban-dictionary')
 
var definition = message.content.split(' ').slice(1).join(' ')

await ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {message.channel.send({
        "embed": {
          "title": "<:no:424361302069346304> Error",
          "description": `I was unable to get the definition for ${definition}, details: \`${error.message}\``,
          "color": 16711680
        }
        })
        failed = true
  } else {
    word = entries[0].word
    worddefinition = entries[0].definition
    example = entries[0].example
    failed = false
  }
})
  
  // message.channel.send('Debug: '+failed)
  
  let searchMessage = await message.channel.send('<a:loading:419021662525063169> Searching Urban...');
  setTimeout(() => {
      searchMessage.edit({
      "embed": {
        "title": `Urban Dictionary result for ${word}`,
        "url": `https://www.urbandictionary.com/define.php?term=${encodeURIComponent(definition)}`,
        "color": 1909817,
        "author": {
          "name": "Urban Dictionary",
          "url": "https://www.urbandictionary.com/",
          "icon_url": "https://cdn.discordapp.com/icons/199959864854839296/7e9cb172f23f4b78d3b026ef89c18294.png?size=1024"
        },
        "fields": [
          {
            "name": "Definition",
            "value": worddefinition
          },
          {
            "name": "Example",
            "value": example
          }
        ]
      }
    }).catch((err) => {
     searchMessage.edit({
        "embed": {
          "title": "<:no:424361302069346304> Error",
          "description": `I was unable to send the definition for ${definition}, details: \`\`\`js\n${err}\`\`\`\n:link: [Link](https://www.urbandictionary.com/define.php?term=${encodeURIComponent(definition)})`,
          "color": 16711680
        }
        });
        message.channel.send('Definition:```'+worddefinition+'```')
        message.channel.send('Example:```'+example+'```')
  })
    
  }, 300)
}