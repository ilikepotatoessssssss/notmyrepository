var failed //declare failed var

exports.name = "role"
exports.level = 0; 

exports.command = async function(client, message) {
  
  // Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS')){
          message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run the ban command properly.')
 }
  
  // check for manage roles perm
  if(!message.member.hasPermission('MANAGE_ROLES')&&message.member.id!=="190916650143318016")
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Manage Roles\" permission.",
      "color": 16711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })

 failed = false
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
  // Makes sure first argument is correct: either add or remove
  if(args[0]!=='add' && args[0]!=='remove')
  return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid option",
          "color": 16711680,
          "footer": {
            "text": "!!role <add|remove> <@user> <rolename>"
          }
        }
      }) 
  
  // Gets user to modify
  let member = message.mentions.members.first();
    if(!member)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid member",
          "color": 16711680,
          "footer": {
            "text": "Please mention a user in the server."
          }
        }
      })
  
  if(message.content.split(' ').slice(3).join(' ')==null)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid role name",
          "color": 16711680,
          "footer": {
            "text": "!!role <add|remove> <@user> <rolename>"
          }
        }
      }) 
  
  let role = message.guild.roles.find('name', message.content.split(' ').slice(3).join(' '))
  
  //Add role
  if(args[0]=='add'){
  await member.roles.add(role, `Role added by ${message.author.tag}`)
  .catch(error => { message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error changing the user's roles: \`${error}\``,
          "color": 16711680,
          "footer": {
            "text": "Need help? Join the AdvaithBot server."
          }
        }
      })
      failed = true})
  
  if(failed==false){
    message.channel.send({
        "embed": {
          "title": "Success",
          "description": `I have added the role ${message.content.split(' ').slice(3).join(' ')} to ${member}.`,
          "color": 589568
        }
      }) }
  }
  //Remove role
  else if(args[0]=='remove'){
  await member.roles.remove(role, `Role removed by ${message.author.tag}`)
  .catch(error => { message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error changing the user's roles: \`${error}\``,
          "color": 16711680,
          "footer": {
            "text": "Need help? Join the AdvaithBot server."
          }
        }
      })
      failed = true})
  
  if(failed==false){
  message.channel.send({
        "embed": {
          "title": "Success",
          "description": `I have removed the role ${message.content.split(' ').slice(3).join(' ')} from ${member}.`,
          "color": 589568
        }
      }) }
  }
    
}