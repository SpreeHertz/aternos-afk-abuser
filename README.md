![img](https://img.shields.io/github/downloads/SpreeHertz/aternos-afk-abuser/v2.0.0/total)
![img](https://img.shields.io/github/v/release/SpreeHertz/aternos-afk-abuser)
![img](https://img.shields.io/github/release-date/spreehertz/aternos-afk-abuser)
![img](https://img.shields.io/github/last-commit/spreehertz/aternos-afk-abuser)
![img](https://img.shields.io/github/languages/code-size/spreehertz/aternos-afk-abuser)

# aternos-afk-abuser

aternos-afk-abuser abuses the AFK system and makes random actions to seem like it's not a bot. With this, you can bypass the Aternos system where if the server is AFK, it automatically turns the server off.

## Before you use

I'm not responsible for any damage caused by this software. Use it at your own risk. This was made for educational purposes only.

Note that this works on all servers.

## Troubleshooting
1. Check out the [troubleshooting docs](https://aternos-afk-abuser.netlify.app/troubleshooting)
2. Make an [issue](https://github.com/SpreeHertz/aternos-afk-abuser/issues/). Please do specify necessary info. Don't expect a swift response
3. You can also check out the [core library issue page itself](https://github.com/PrismarineJS/mineflayer/issues/) and try troubleshooting by yourself if I don't respond. 

### Features

- Randomly travels destinations to bypass AFK system
- Kills aggressive mobs on the way
- Turn off/on features by changing values in [features.json]()
- Warns in the console if the bot gets crashed, kicked, or disconnected
- Radar (that can be viewed with your web browser) that shows the nearest entities


### Chat Commands

- `!botinfo`

Returns EXP points & level, food saturation and health.

### Known bugs
- Auto consuming food doesn't work

### Libraries

- mineflayer
- nodemon 
- mineflayer-auto-eat
- mineflayer-pathfinder
- mineflayer-radar
- mineflayer-pvp
