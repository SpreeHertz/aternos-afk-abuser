const mineflayer = require('mineflayer')
require('dotenv').config();
const chalk = require('chalk');
const fs = require('fs');

console.log(chalk.blueBright.bold(`Logging into ${process.env.playername}...`));

// Create the bot
const bot = mineflayer.createBot({
    host: process.env.host || 'localhost',
    port: parseInt(process.env.port) || '25565',
    username: process.env.playername || 'aternos-afk',
})

module.exports = bot;

// Chat message
bot.once('spawn', () => {
    bot.chat(`Started the script.`)
})

// Command handler
const files = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
for (const file of files) {
	const eventName = file.split(".")[0];
	// eslint-disable-next-line no-unused-vars
	const event = require(`./src/functions/${file}`);
	console.log(chalk.cyanBright(`Function ${eventName}.js`) + chalk.greenBright(` has been loaded.`));
}

// Events folder
const eFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));

for (const file of eFiles) {
	const eventName = file.split(".")[0];
	// eslint-disable-next-line no-unused-vars
	const event = require(`./src/events/${file}`);
	console.log(chalk.magentaBright(`Event ${eventName}.js`) + chalk.blue(` has been loaded.`));
}

const utilFiles = fs.readdirSync("./src/utils").filter(file => file.endsWith(".js"));

// Utils
for (const file of utilFiles) {
	const eventName = file.split(".")[0];

	const event = require(`./src/utils/${file}`);
	console.log(chalk.yellowBright(`UtiltyFile ${eventName}.js`) + chalk.blue(` has been loaded.`));
}

// 0x26e