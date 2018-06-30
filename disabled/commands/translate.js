exports.name = "translate"
exports.level = 0; 

const translate = require('google-translate-api')
const ISO6391 = require('iso-639-1')

let to
let toflag
let fromflag

exports.command = async function(client, message) {

  message.channel.startTyping()
  
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
to = ISO6391.getCode(args[0])
 
 if (!to){
   to = args[0]
 }
  
 let toword = ISO6391.getName(to)
 if(!toword)
   return message.channel.send('Error - Invalid language')
  
  //title flag
 if (to === 'en') {
   toflag = 'https://cdn.discordapp.com/emojis/399011531729141762.png'
 } else if (to === 'de') {
   toflag = 'https://cdn.discordapp.com/attachments/383485448372092929/428673081670762507/emoji.png'   
 } else {
   toflag = `https://l10n.xwiki.org/xwiki/bin/download/L10N/Flags/${to}.png`
 }
  
  await translate(message.content.split(' ').slice(2).join(' '), {to: to}).then(res => {
    
    //footer flag
       if (res.from.language.iso === 'en') {
   fromflag = 'https://cdn.discordapp.com/emojis/399011531729141762.png'
    } else if (res.from.language.iso === 'de') {
   fromflag = 'https://cdn.discordapp.com/attachments/383485448372092929/428673081670762507/emoji.png'     
 } else {
   fromflag = `https://l10n.xwiki.org/xwiki/bin/download/L10N/Flags/${res.from.language.iso}.png`
 }
    //send message
    message.channel.send({
  "embed": {
    "title": `${message.content.split(' ').slice(2).join(' ')} translated to ${toword}`,
    "description": res.text,
    "url": `https://translate.google.com/#auto/${to}/${encodeURIComponent(message.content.split(' ').slice(2).join(' '))}`,
    "color": 5213173,
    "footer": {
      "icon_url": fromflag,
      "text": `Translated from ${ISO6391.getName(res.from.language.iso)}`
    },
    "thumbnail": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2000px-Google_Translate_logo.svg.png"
    },
    "author": {
      "name": "Translate",
      "url": "https://translate.google.com",
      "icon_url": toflag
    }
  }
    }).catch(err => {
    message.channel.send('Error: '+err) })
    
}).catch(err => {
    console.error(err);
})
  message.channel.stopTyping()
  
}