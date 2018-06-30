var Spark = require('sparkbots')
const Command = Spark.command('lovecalc')
Command.addAlias('calclive')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('oof')
module.exports = Command;

Command.code = (client, message) => {

      
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
 let name1 = args[0];
 let name2 = args[1];

var myArray = [
        "4% __Horrible__",
        "8% __Absolutely not!__",
        "12% __Don't even try it__",
        "16% __This relationship is going nowhere__",
        "20% __If you were the last two people on Earth, yes.__",
        "28% __This could work if you ignored each other__",
        "36% __You could choose a better person__",
        "44% __Getting there!__",
        "52% __I give you a week.__",
        "60% __This is ok, but kinda a bad relationship__",
        "68% __That's a commitment.__",
        "69% __`( ͡° ͜ʖ ͡°)`__",
        "77% __Yeah, you guys are good for a month or two.__",
        "84% __This is going to be a great relationship!__",
        "92% __🤔 Yep seems legit__",
        "93% __🤔 Yep seems legit__",
        "95% __🤔 Yep seems legit__",
        "97% __🤔 Yep seems legit__",
        "98% __YOU GUYS ARE GREAT!__",
        "100% __Great relationship on the way, buddy.__ 😉 😘"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

      message.channel.send({
        "embed": {
          "title": `__**💕 Love Calculator For ${name1} & ${name2}**__`,
          "description": `♥ ${randomItem} ♥`,
         "color": 25087,
          "footer": {
            "text": "This is only a fun feature that shouldn't be taken seriously!"
        } 
      }
      })
  
}