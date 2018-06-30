var Spark = require('sparkbots')
const Command = Spark.command('discirm')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Find users with a certain discrim')
module.exports = Command;

Command.code = (client, message) => {
    		let msg = message.content.substring(2).split(" ");

		let cmd = msg[0];
		let args = msg.slice(1);


	{
			// find users with specific discriminator

			let matches = [];

			let users = client.users.array() // online users in same server as client

			for (let user of users) {
				if (user.discriminator === args[0]) { // check for matching discrim
					matches.push(user.username+"#"+args[0]); // full tag
				}
			}

			console.log(matches);

			if (matches.length === 0) {
				message.channel.send("**<:oof:430767004195225600> No matches found.**");
			} else {
				let reply = "```" + matches.join("\n") + "```";

				reply += "🤖 Bot User Size: " + users.length; // number of users checked


				message.channel.send({
 "embed": {
          "title": `💫 Member Discrim for: #${message.content.split(' ').slice(1).join(' ')}`,
          "description": reply,
          "color": 25087,
   "footer": {
"text": "This command shows other members that use the bot that have the specified discriminator."
   }
        }
      }) // send user list 
			}
		}
} //hi advaith