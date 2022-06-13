const bot = require('../../index');
const pvp = require('mineflayer-pvp').plugin;
bot.loadPlugin(pvp);

bot.on('spawn', async () => {

    // Give itself a sword
    bot.chat(`/give ${bot.username} iron_sword 1`)
	setInterval(() => {
		const mobFilter = e => e.type === 'mob' && e.mobType === "Zombie" || e.mobType === 'Skeleton';
		const mob = bot.nearestEntity(mobFilter);
		if (!mob) return;
		bot.pvp.attack(mob);
	}, 2000);
});