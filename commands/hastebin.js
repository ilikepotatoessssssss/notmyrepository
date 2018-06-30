var Spark = require('sparkbots')
const Command = Spark.command('haste')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

const snekfetch = require('snekfetch');
const hastebin = require('hastebin-gen');

Command.code = (client, message) => {

let haste = message.cleanContent.split(' ').slice(1).join(' ')
    if (!haste) { return message.channel.send("<:oof:430767004195225600> Usuage: `.haste <code>`") }
        hastebin(haste).then(r => {
        message.channel.send({
"embed": {
"title": "🗄️ Hastebin Link 🎲",
"description": `Your Hastebin URL:\n__**🔗${r}**__`
}
          })
    }).catch(console.error);
}