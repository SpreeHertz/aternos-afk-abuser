const mineflayer = require('mineflayer');
const radarPlugin = require('mineflayer-radar')(mineflayer);
const radarOptions = require('../../config.json');

const bot = require('../../index');

const options = {
  host: radarOptions.radar_host || 'localhost', 
  port: radarOptions.radar_port || '25565',         
}

radarPlugin(bot, options);

