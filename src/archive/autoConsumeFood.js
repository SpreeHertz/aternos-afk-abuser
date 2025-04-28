const bot = require('../../index');
const autoEat = require('mineflayer-auto-eat');
const chalk = require('chalk');
const isFeatureEnabled = require('../../features.json');

if (isFeatureEnabled.autoConsumeFood === true) {
	bot.once('spawn', async () => {
		bot.loadPlugin(autoEat)
		bot.autoEat.enableAuto()
	
		bot.autoEat.on('eatStart', (opts) => {
			console.log(`Started eating ${opts.food.name} in ${opts.offhand ? 'offhand' : 'hand'}`)
		})
	
		bot.autoEat.on('eatFinish', (opts) => {
			console.log(`Finished eating ${opts.food.name}`)
		})
	
		bot.autoEat.on('eatFail', (error) => {
			console.error('Eating failed:', error)
		})
	})
}
else {return;}
