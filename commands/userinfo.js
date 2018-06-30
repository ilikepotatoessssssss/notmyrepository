var Spark = require('sparkbots')
const Command = Spark.command('userinfo')
Command.addAlias('user')
Command.addAlias('uinfo')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('user info')
module.exports = Command;

let format
let hoist
let rolecolor
let color
let activity
let bot

Command.code = (client, message) => {
  
let usera = undefined;
   if(message.content.search('<@') == -1) { 
    usera = message.author.id
  } else {
    usera = message.mentions.members.first().id;
  }
  
let member = undefined;
   if(message.content.search('<@') == -1) { 
     member = message.member;
   } else {
   member = message.mentions.members.first()
   }
let user = client.users.get(usera);
 var status = "<:online:431909244787359765>";
    // Status
   if (user.presence.status=="online") {
         status = "<:online:431909244787359765>"
    } else if (user.presence.status=="idle") {
         status = "<:idle:431909245005332480>"
    } else if (user.presence.status=="dnd") {
         status = "<:dnd:431909244774907914>"
    } else if (user.presence.status=="offline") {
         status = "<:offline:431909245106126848>"
    } else {
        message.channel.send("ERROR: Please report this to the bot developer at https://discord.gg/WxPH3Fc: `Unrecognized Status`")
         status = user.presence.status
        }
  
  if(!user.avatar){
   format = 'png'
  } else if(user.avatar.startsWith('a_')){
   format = 'gif'
  }  else {
   format = 'png' }
  
  if(member.roles.hoist) {
    hoist = `<@&${member.roles.hoist.id}> (${member.roles.hoist.name})`
    } else {
    hoist = 'None' }
  
  if(member.roles.color) {
    rolecolor = `<@&${member.roles.color.id}> (${member.roles.color.name})`
    } else {
    rolecolor = 'None' }
  
  if(member.displayColor) {
    color = member.displayColor
  } else {
    color = null }
  
  if(user.presence.activity) {
    activity = `<:blank:427598046038327306> ${user.presence.activity.type.toLowerCase()} **${user.presence.activity.name}**`
  } else {
    activity = '' }
  
  if(user.presence.activity) {
    if(user.presence.activity.type == 'STREAMING'){
       activity = `<:streaming:431909399372759051> Streaming **${user.presence.activity.name}**`;
    } else if(user.presence.activity.type == 'LISTENING'){
      activity = `<:blank:427598046038327306> Listening To **${user.presence.activity.name}**`
  } }
  
  if(user.bot) {
    bot = '<:bot:427301225029959680>'
  } else {
    bot = '' }
  
 message.channel.send({
  "embed": {
    "title": "User Info",
    "description": `${status} <@${user.id}> (\`${member.displayName}\`) ${bot}\n${activity}`,
    "color": color,
    "thumbnail": {
      "url": user.displayAvatarURL({format: format, size: 1024})
    },
    "author": {
      "name": user.tag,
      "icon_url": `${user.displayAvatarURL({format: format, size: 1024})}`
    },
    "fields": [
      {
        "name": "User ID",
        "value": `${user.id}`,
        "inline": true
      },
      {
        "name": "Highest Role",
        "value": `<@&${member.roles.highest.id}> (${member.roles.highest.name})`,
        "inline": true
      },
      {
        "name": "Hoist Role",
        "value": `${hoist}`,
        "inline": true
      },
      {
        "name": "Color Role",
        "value": `${rolecolor}`,
        "inline": true
      },
      {
        "name": "Roles",
        "value": member.roles.map(role => role.name).toString().replace(/,/g, ", "),
        "inline": true
      }
    ]
  }
 })

}