# aternos-afk-abuser

aternos-afk-abuser abuses the AFK system and makes random actions to seem like it's not a bot. With this, you can bypass the Aternos system where if the server is AFK, it automatically turns the server off.

## Before you use

I'm not responsible for any damage caused by this software. Use it at your own risk. This was made for educational purposes only.

Note that this works on all servers.

## Features

- Randomly travels destinations to bypass AFK system
- Kills aggressive mobs on the way
- Automatically consumes food if food saturation is low
- Turn off/on features by changing values in [features.json](https://github.com/SpreeHertz/aternos-afk-abuser/blob/master/features.json)
- Warns in the console if the bot gets crashed, kicked, or disconnected
- Radar (that can be viewed with your web browser) that shows the nearest entities
- View what your bot is doing in the browser

## Chat Commands

- `!botinfo`

Returns EXP points & level, food saturation and health.

## Libraries

- mineflayer
- nodemon 
- mineflayer-auto-eat
- mineflayer-pathfinder
- mineflayer-radar
- mineflayer-pvp