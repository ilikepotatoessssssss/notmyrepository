var Spark = require("sparkbots")
const Permission = Spark.permission("Owners")
Permission.setLevel(10)
module.exports = Permission;

Permission.code = (client, message) => {
    if(message.author.id == '190916650143318016' || message.author.id == '339177677326123018'){return false}
    return true
}