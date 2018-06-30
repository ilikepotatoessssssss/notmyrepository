var Spark = require('sparkbots')
const Command = Spark.command('car')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('vroom vroom')
module.exports = Command;

Command.code = (client, message) => {
message.channel.send("...............🚗......").then(sentMessage => sentMessage.edit("............🚗.........")).then(sentMessage => sentMessage.edit("........🚗............")).then(sentMessage => sentMessage.edit(".....🚗...............")).then(sentMessage => sentMessage.edit("..🚗..................")).then(sentMessage => sentMessage.edit("🚗....................")).then(sentMessage => sentMessage.edit("😮....🚗..............")).then(sentMessage => sentMessage.edit(".😧..🚗......................")).then(sentMessage => sentMessage.edit("..:tired_face:.:red_car:......................")).then(sentMessage => sentMessage.edit("...:ghost::red_car:......................"));

}