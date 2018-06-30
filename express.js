const http = require('http');
const express = require('express');
const discord = require("discord.js")
const app = express();
const client = new discord.Client();
let servercount
client.on("ready", () => { servercount = client.guilds.size })
client.login(process.env.TOKEN)

app.set('view engine', 'ejs');
app.get("/", (request, response) => {
  response.status(200);
  //response.setHeader('Content-Type', 'text/html')
  response.render('index',{servercount: servercount});
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);