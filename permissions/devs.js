var Spark = require("sparkbots")
const Permission = Spark.permission("Dev")
Permission.setLevel(9)
module.exports = Permission;

Permission.code = (client, message) => {
    let devs = ['190916650143318016', '339177677326123018', '318882324597047308']
    if(!devs.includes(message.author.id)){
      return true
    } else {
    return false
    }
  console.log('Dev command ran')
}