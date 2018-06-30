var Spark = require('sparkbots')
const Command = Spark.command('duck')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Get a random duck pic')
module.exports = Command;

const snekfetch = require('snekfetch')

Command.code = async (client, message) => {
      const msg = await message.channel.send('<a:dwalk:436236248970035201> **Hatching.. Please wait**');
      const { body } = await snekfetch.get("https://random-d.uk/api/v1/random?type=gif");
      await msg.edit({
        embed: {
          "title": "🐣 Wazam! 🐣",
          "url": body.url,
          "color": 5198940,
          "image": {
            "url": body.url
          },
          "footer": {
            "icon_url": message.author.displayAvatarURL({ size: 32 }),
            "text": `Requested by: ${message.member.displayName}`
          },
        }
      })
}