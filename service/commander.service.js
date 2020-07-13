const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const greeting = chalk.green(
    figlet.textSync('pocket-knife', { horizontalLayout: 'full' })
  );

const {generateCommands, processCommands} = require('./command.service');
const {generateMainMenu} = require('./inquirer.service');
const notifier = require('../util/notifier');

notifier.on('inquirerEvent', (message) => {
    generateMainMenu();
})

beforeStart = () => {
    clear();
    console.log(greeting);
    
  }

doStart = () => {
    generateCommands();
    
}

afterStart = () => {
   
}

module.exports = {
    beforeStart,
    doStart,
    afterStart
};