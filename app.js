const Spark = require("sparkbots")

Spark.start({
prefix: ['w!', '.'],
token: process.env.TOKEN
})

var ClientInjRe = require('./express.js')