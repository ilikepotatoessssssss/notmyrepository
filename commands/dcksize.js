var Spark = require('sparkbots')
const Command = Spark.command('dicksize')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('dck size')
Command.addAlias('penis')
Command.addAlias('penissize')
Command.addAlias('penisize')
module.exports = Command;

Command.code = (client, message) => {
      var myArray = [
        "=D\n One inch!",
        "==D\n Two inches!",
        "===D\n Three inches!",
        "====D\n Four inches!",
        "=====D\n Five inches!",
        "======D\n Six inches!",
        "=======D\n Seven inches!",
        "========D\n Eight inches!",
        "=========D\n Nine inches!",
        "==========D\n Ten inches!",
        "===========D\n Eleven inches!",
        "============D\n Twelve inches!",
        "=============D\n Thirteen inches!",
        "==============D\n Fourteen inches!",
        "===============D\n Fifteen inches!",
        "================D\n Sixteen inches!",
        "=================D\n Seventeen inches!",
        "==================D\n Eighteen inches!",
        "===================D\n Nineteen inches!",
        "====================D\n Twenty inches!"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
    if (message.channel.nsfw === false) {
    return message.reply("**<:oof:430767004195225600> This command only works in NSFW channels.**");
  }
    if (message.channel.nsfw === true) {
return message.channel.send({
    "embed": {
      "title": "Dick Size",
      "description": `${message.member.displayName}, your dick size:\n\n 8${randomItem}`,
      "color": 25087
    } 
})
    
    }
}