var Spark = require('sparkbots')
const Command = Spark.command('emoji')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('A random emoji')
module.exports = Command;

Command.code = (client, message) => {

     var myArray = [
        "😀",
        "😃",
        "😄",
        "😉",
        "😊",
        "😋",
        "😎",
        "😍",
        "🙂",
        "🤗",
        "🤔",
        "😐",
        "🙄",
        "😏",
        "😮",
        "🤐",
        "😴",
        "😌",
        "😪",
        "🙃",
        "🤑",
        "😲",
        "🙁",
        "😖",
        "😱",
        "😰",
        "🤒",
        "😬",
        "😷",
        "🤓",
        "🤕",
        "😤",
        "🙅",
        "🙆",
        "🙋",
        "🕵",
        "💃",
        "👼",
        "👵",
        "👮",
        "👦",
        "👸",
        "😵",
        "😇",
        "😑",
        "🦆",
        "💫 This emoji is extremely rare to find!\n Different from all the other faces, we put this in for a little treat! *(finding this gives you nothing irl)*"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      message.channel.send({
        "embed": {
          "title": "Random Emoji",
          "description": randomItem,
          "color": 16763981
        }
      })
}