const bot = require('../../index');


bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message === '!botinfo') {
        bot.chat(`
        Health: ${bot.health}\n
        EXP Level: ${bot.experience.level}\n
        EXP Points: ${bot.experience.points}\n
        Food Saturation: ${bot.foodSaturation}\n
        `)
    }
})