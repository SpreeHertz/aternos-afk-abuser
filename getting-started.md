# Prerequisites

- [Node.js](https://nodejs.org)
- [Visual Studio Code](https://https://code.visualstudio.com)

## Joining the server

Open `.env.example`. This is what you'll see: 

```
host=
port=
playername=
```

- `host`: Server address for the bot to connect to
- `port`: Port of the server
- `playername`: Bot username

After you specify all these parameters (after the `=`), rename `.env.example` to `.env`.

### Example `.env`

```
host=lancer.aternos.me
port=25565
playername=lancer
```
## Starting the bot locally


Open the terminal using `Ctrl` + `Shift` + `. Type:

```cmd
yarn install
```

then, type:

```cmd
yarn add --dev nodemon
```

finally, to start the bot, type:

```cmd
yarn dev
```

If you run into any issues while doing this, don't hesitate to make an [issue](https://github.com/spreehertz/aternos-afk-abuser/issues).


## Extra Config (optional)

For web viewing (to see what your bot is doing on your browser), follow these steps.

Open `config.json`. You'll see this:

```json
{
    "radar_port": 3000,
    "radar_host": "localhost",
    "webviewer_port": 5000,
    "webviewer_isFirstPerson": true
}

```

- `radar_port`: The default port for Minecraft radar.
- `radar_host`: The default host for Minecraft radar.
- `webviewer_port`: The default port to see what the bot is doing using your web browser.

