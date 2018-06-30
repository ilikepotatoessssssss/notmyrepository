var Spark = require("sparkbots")
const Permission = Spark.permission("Normal")
Permission.setLevel(0)
module.exports = Permission;

Permission.code = (client, message) => {
    if(message.author.bot&&message.guild.id=='264445053596991498') {return true} // ignore bots on dbl
    if(message.author.bot&&message.guild.id=='110373943822540800') {return true} // ignore bots on discord bots
    return false
  console.log('ran a command')
}