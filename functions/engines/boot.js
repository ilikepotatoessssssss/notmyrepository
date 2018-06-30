var Spark = require("sparkbots")
const Engine = Spark.engine("boot")
module.exports = Engine

Engine.code = (client, message) => {
      var myArray = [
        `TV 📺 | quack.ga | .help | ${client.guilds.size} 🐖`,
        `PH 🔞 | quack.ga | .help | ${client.guilds.size} 🐖`,
        `YouTube 🔴 | quack.ga | .help | ${client.guilds.size} 🐖`,
        `Reading Rainbow 🌈 | quack.ga | .help | ${client.guilds.size} 🐖`,
        `My Neighbors 👀 | quack.ga | .help | ${client.guilds.size} 🐖`,
        `tell advaith i said hi | quack.ga | .help`
        
      ];
      

    //runs every minute
setInterval(() => {
  
  // will put it here lol
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]; //so k now u can use ${randomItem} inside the playing status ok
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: "online", 
          activity: {
            name: randomItem, //you get no more credit lol u still be in everyones brain like "oh hey advaith made the bot and will stole half the cmds all hail advaith" but thats what happened tho //shush shush now //your welcome
            type: 3,
          }
        })
  
}, 60000)
  
  // Sets status on boot
    client.user.setPresence({
          status: "online",
          activity: {
            name: `TV 📺| .help | ${client.guilds.size} 🐖 | By Will & Advaith`,
            type: 3,
          }
        })

    console.log("ran boot function")
  
//    client.channels.get('424391556267769857').send('<:check:424361224675786752> Bot started up!')
  client.on("guildMemberAdd", member => {
    let mem = member.guild
    if(mem.id==='398998849026261003', '264445053596991498') return
    member.send({
    "embed": {
      "title": "Welcome!",
      "description": `👋 Hey, ${member.displayName}! Welcome to the server.\n I'm Willinator 2000 <:bot:427301225029959680>. I'm a bot on ${mem.name}!\n First, my prefix is **\`.\`** Let me show you around...`,
      "color": 25087,
        "fields": [
          {
"name": "🔗 Commands",
"value": "For a list of my commands, type `.help`, `.help2`, or `.help3`. I have a lot.",
          },
          {
"name": "🐛 Spot a bug?",
"value": "If you find a bug/spelling mistake in me, report it to WHASonYT#0735! <:dev:427313634474196993>",
          }
          
          ],
      "footer": {
        "text": `Thanks for joining the ${mem.name} server!`,
      } //quack
    }
      }) 
  });
}
