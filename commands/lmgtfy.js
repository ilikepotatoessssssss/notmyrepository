var Spark = require('sparkbots')
const Command = Spark.command('lmgtfy')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('aha')
module.exports = Command;

    
Command.code = (client, message) => {
 const args = message.content.split(' ').slice(1).join(' ')
      if (args.length < 1) {
        message.channel.send("<:oof:430767004195225600> boi u want me to search nothin?\n(`lmgtfy <search string>`)");
  
     } else {
     
message.channel.send({
"embed": {
"title": `<:google:425102122330357771> Let Me Google That For You: ${args}`,
"description": `http://lmgtfy.com/?q=${message.content.split(' ').slice(1).join('+')}`, //here
"color": 25087,
"image": {
"url": "http://lmgtfy.com/assets/logo-color-small-70dbef413f591a3fdfcfac7b273791039c8fd2a5329e97c4bfd8188f69f0da34.png"
}
}
})
     }
                                                      
}

                                               