var Spark = require('sparkbots')
const Command = Spark.command('trump')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('build a wall m8')
module.exports = Command

const snek = require('snekfetch');
  
Command.code = (client, message) => {

  const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

    snek.get(api).then(r => {
    message.channel.send(`**Random Donald Trump Quote**\n __"${r.body.message}"__`)
})
}                  