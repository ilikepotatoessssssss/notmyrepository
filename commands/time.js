var Spark = require('sparkbots')
const Command = Spark.command('time')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('⏰ current edt-est time')
module.exports = Command;

Command.code = (client, message) => {

var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

hours = hours -4

    if (minutes < 10) {
     minutes = "0" + minutes;
  }

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
     hours = 12;
    }

message.channel.send(hours + ":" + minutes + " " + suffix + " EDT • EST\n*just subtract 3 hours for PST lol*")
}