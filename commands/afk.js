var Spark = require('sparkbots')
const Command = Spark.command('afk')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

    
Command.code = (client, message) => {
     const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
      if(message.content.split(' ').slice(1).join(' ').search('enable') != -1) {
message.member.setNickname(message.member.displayName + " [AFK]")
message.channel.send({
"embed": {
"description": `**⌨️ I have set your nickname status to AFK.**`,
"color": 65407,
"footer": {
"text": "Use \".afk disable\" to revert your nickname. | If your name wasn't changed, use \".afk help\" for info."
}

}
})
      }
        if(message.content.split(' ').slice(1).join(' ').search('disable') != -1) {
message.member.setNickname(message.author.username)
message.channel.send({
"embed": {
  "title": "🎉 Welcome Back!",
"description": `**⌨️ I have deleted "[AFK]" from the end of your username.**`,
"color": 65407,
"footer": {
"text": "Use \".afk enable\" to return to AFK status. | If your name wasn't changed, use \".afk help\" for info."
}

}
})
  }
          if(message.content.split(' ').slice(1).join(' ').search('help') != -1) {
message.member.setNickname(message.author.username)
message.channel.send({
"embed": {
  "title": "⌨️ Away From Keyboard Help",
"description": `Welcome to the AFK command help. Read this to make sure \`.afk\` works properly.`,
"color": 25087,
     "fields": [ //yes daddy oWo thx
       {
        "name": "<:blank:427598046038327306>",
        "value": "__**Permissions Info**__"
       },
      {
        "name": "Required Permissions",
        "value": "- Manage Nicknames\n- Role Above The Member Using the Command",
        "inline": true
      },
      {
        "name": "Recommended Permissions",
        "value": "- Administrator\nGive me this and you'll never have to worry about any commands failing!",
        "inline": true
      },
       {
        "name": "<:blank:427598046038327306>",
        "value": "__**AFK Commands**__"
       },
       {
        "name": "`afk help`",
        "value": "This is basically what you're looking at now.",
        "inline": true
       },
       {
        "name": "`afk enable`",
        "value": "Adds [AFK] to the end of your nickname and does other ✨magic✨",
        "inline": true
       },
       {
        "name": "`afk disable`",
        "value": "Removes [AFK] from your nickname, aswell as reseting your nickname",
        "inline": true
       },
       ],

}
})
  }
  
  if (args.length < 1) {
        message.channel.send("<:oof:430767004195225600> `.afk` is not its own command alone.\n    Use `.afk help` for a list of AFK commands.")
  
     }
}