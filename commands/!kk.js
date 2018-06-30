var Spark = require('sparkbots')
const Command = Spark.command('krusty')
Command.addAlias('krustykrab') // You can add multiple or delete the line
Command.addAlias('kk')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('hehe lol')
module.exports = Command;

Command.code = (client, message) => {
    if(message.content.split(' ').slice(1).join(' ').search('start') != -1) {
    let a = [`🍔 Welcome to the Krusty Krab, ${message.member.displayName}! What would you like to eat?\n\`.kk krabby patty\``];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }


    if(message.content.split(' ').slice(1).join(' ').search('krabby patty') != -1) {
    let a = ['👍 Nice choice, I love the krabby patties here.\n\`.kk c1\`','❓ Would you like kelp fries with that?\n\`.kk yeskf\` or `.kk c1`'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  if(message.content.split(' ').slice(1).join(' ').search('c1') != -1) {
    let a = ['🔔 *bell ring* One krabby patty please!\n\`.kk c2\`', '🔰 Order up!\n\`.kk c2\`'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
 if(message.content.split(' ').slice(1).join(' ').search('yeskf') != -1) {
    let a = ['🔔 *bell ring* One krabby patty and a side of kelp fries please!\n\`.kk c2\`','🔰 Order up!\n\`.kk c2\`'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
  if(message.content.split(' ').slice(1).join(' ').search('c2') != -1) {
    let a = ['*5 Minutes Later...*\n🍔🍟 Here\'s your meal, enjoy!\n*(`end of convo`)*','*5 Minutes Later*\n🍞 Oh no! We\'re all out of krabby patty buns!\n`.kk order more` or *(`end of convo`)*'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
    if(message.content.split(' ').slice(1).join(' ').search('order more') != -1) {
    let a = ['*1 Hour Later...*\n🍔🍟 Did anyone here order more krabby patty buns?\n `.kk accept buns`'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
    if(message.content.split(' ').slice(1).join(' ').search('accept buns') != -1) {
    let a = ['🍞 Here\'s your krabby patty buns, enjoy!\n `.kk c3`'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
    if(message.content.split(' ').slice(1).join(' ').search('c3') != -1) {
    let a = ['🍔 Enjoy your meal and have a great day!'];
    let b = Math.floor((Math.random() * a.length) + 0);
    let c = a[b];
    message.channel.send(c)
    return;
      }
}