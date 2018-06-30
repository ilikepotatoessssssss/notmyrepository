var Spark = require('sparkbots')
const Command = Spark.command('fact')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('A random discord email fact (or geico ad)')
module.exports = Command;

const facts = [
	"In New Zealand, it is a criminal offense to carry a copy of the game Manhunt.",
	"The bushes and clouds in the original Super Mario Bros are the same sprite recolored.",
	"When space invaders launched in Japan, its popularity caused a temporary shortage of 100 Yen coins.",
	"The Discord logo is named Clyde.",
	"In Overwatch, the tiny yellow bird that hangs out with Bastion is named Ganymede - a beautiful young boy from Greek mythology.",
	"When revealed in 2014, Overwatch was Blizzard's first new IP in 17 years.",
	"There is a scene in the original Metal Gear Solid where Campbell will poke fun at the player if they're using a TV with Mono audio.",
	"Prior to adding Blood Elves, Alliance outnumbered Horde on most World of Warcraft servers.",
	"The successful release of the SNES gained the attention of the infamous Japanese crime organization the Yakuza. Nintendo then began to ship the devices at night to avoid robbery.",
	"The cover art for Neil Young's album \"Silver and Gold\" is a photo taken with a Game Boy Camera.",
	"To choose your Eevee's evolution in Pokemon Go, rename it to Sparky (Jolteon), Rainer (Vaporeon), or Pyro (Flareon).",
	"In the original Fallout, a player character with less than 4 Intelligence can only communicate with grunts and other noises.",
	"In League of Legends, if you play Jax with the Jaximus skin, he'll occasionally say \"Here's to you, kid.\" This honors a Make-A-Wish patient whose favorite character was Jax.",
	"There are four skins in League of Legends named after internet browsers: Foxfire Ahri, Safari Caitlyn, Explorer Ezreal and Chrome Rammus.",
	"You can't see your own shadow in CS:GO.",
	"In Hearthstone, using the Hunter card Animal Companion against Kel'Thuzad will summon his cat Mr. Bigglesworth rather than the usual beasts.",
	"Starting with version 6.29 of the original Dota, each update ending in a \"9\" contained a secret quest, usually showing off an upcoming hero such as Invoker.",
	"Rocket League is a sequel to the 2009 physics based vehicle soccer game Supersonic Acrobatic Rocket-Powered Battle-Cars.",
	"Discord was almost named Wyvern. Dodged a bullet there, whew.",
	"The creator of the Kirby and Super Smash Bros. Series, Masahiro Sakurai, voiced King DeDeDe in all Smash games the character appears in.",
	"HAL Laboratory, the developer responsible for Kirby, Mother, and Super Smash Bros. series, was named HAL because each letter put them ahead of IBM.",
	"While trying to create a pig in Minecraft, Markus Persson accidentally switched the length and height in code and ended up with the monstrosity now known as a creeper.",
	"The avatar of Minecraft creator Markus Persson is the only character that drops an apple when it dies.",
	"Team Fortress, Day of Defeat, Counter-Strike, Ricochet, and Dota were all originally fan-made mods.",
	"Pachinko Machines (mechanical games used for gambling) make Sega more money in Japan than game sales worldwide.",
	"BETTY SAVED 15% ON CAR INSURANCE BY SWITCHING TO GEICO"
]

Command.code = (client, message) => {

  const factNumber = Math.floor(Math.random() * facts.length);
        return message.channel.send(`**Fun Fact #${factNumber + 1}**: ${facts[factNumber]}`);
  
}