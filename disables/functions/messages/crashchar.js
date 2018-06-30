exports.name = "crashchar"
exports.type = ["all"];
exports.function = function(client, message, command) {

  // advaithbot server only
  if(message.guild.id!=='398998849026261003')
  return 
  
  if(message.content.includes('జ్ఞ') || message.content.includes(' ‌ా')){
    console.log(`${message.author.tag} (${message.author.id}) posted the crash character and was punished.`)
    client.guilds.get('398998849026261003').members.ban(message.author, `Posting iOS crashing char`)
   message.delete();
    if(message.member.bannable){
   message.member.ban('Auto ban for posting character to crash certain iOS versions')
   message.channel.send(`<@${message.author.id}> (${message.author.tag}) sent a character that crashes some iOS versions, I deleted it and banned them.`)
    }
    else{
      message.channel.send(`<@${message.author.id}> (${message.author.tag}) sent a character that crashes some iOS versions, I deleted it but I am unable to ban them.`)
    }
      
  
  }
}