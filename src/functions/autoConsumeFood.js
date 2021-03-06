const bot = require('../../index');
const autoeat = require('mineflayer-auto-eat');
const chalk = require('chalk');
const isFeatureEnabled = require('../../features.json');

if (isFeatureEnabled.autoConsumeFood === true) {
	bot.loadPlugin(autoeat);

	bot.once('spawn', () => {
		bot.autoEat.options = {
			priority: 'foodPoints',
			startAt: 14,
			bannedFood: [],
		};
	});

	bot.on('autoeat_started', () => {
		console.log(chalk.green('Started auto-eating.'));
	});

	bot.on('autoeat_stopped', () => {
		console.log(chalk.green('Stopped auto-eating.'));
	});

	bot.on('health', () => {
		if (bot.food === 20) bot.autoEat.disable();
		else bot.autoEat.enable();
	});
}
else {return;}
