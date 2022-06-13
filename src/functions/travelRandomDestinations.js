const bot = require('../../index');
const { pathfinder, Movements } = require("mineflayer-pathfinder");
const { GoalBlock } = require("mineflayer-pathfinder").goals;

bot.loadPlugin(pathfinder);

// Generate random coords

const generateRandomCoords = (length) => {
    let result = ''
    let coordinateNumbers = '1234567890'
    const coordinateLength = coordinateNumbers.length;
    for (let i = 0; i < length; i++) {
        result += coordinateNumbers.charAt(Math.floor(Math.random() * coordinateLength))
    }
    return result;
}

const goToCoords = () => {
    const mcData = require("minecraft-data")(bot.version);
    const defaultMove = new Movements(bot, mcData);
    defaultMove.canDig = true;
    defaultMove.allowFreeMotion = true;
    defaultMove.scafoldingBlocks.push(mcData.itemsByName["dirt"].id);
    bot.pathfinder.setMovements(defaultMove);
    // GoalBlock: XAxis, YAxis, ZAxis
    bot.pathfinder.setGoal(new GoalBlock(generateRandomCoords(3), generateRandomCoords(3), generateRandomCoords(3)))
}

bot.on("goal_reached", () => {
// Once the bot has reached its goal, generate random coords again.
    goToCoords();
})

