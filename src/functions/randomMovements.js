// This script was made to seem like this player is not a bot.

const bot = require('../../index');
const chalk = require('chalk');
const { Movements, pathfinder, goals } = require('mineflayer-pathfinder');
const GoalFollow = goals.GoalFollow;
bot.loadPlugin(pathfinder);

bot.on('spawn', () => {
    const player = bot.nearestEntity();

    if (player) {
        bot.lookAt(player.position.offset(0, player.height, 0));
    }

    
})

bot.on('spawn', () => {
	bot.on('chat', (username, message) => {
		if (username === bot.username) return;
			const mcData = require('minecraft-data')(bot.version);
			const movements = new Movements(bot, mcData);
			const target = bot.nearestEntity();
			if (!target) return;
		
			bot.pathfinder.setMovements(movements);

			const goal = new GoalFollow(target, 3);
			bot.pathfinder.setGoal(goal, true);

		
		
	});
});