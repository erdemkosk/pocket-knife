const inquirer = require("inquirer");
const {createCommand} = require('../data/command.factory');

generateMainMenu = () => {
    var questions = [{
        type: 'list',
        name: 'theList',
        message: "Welcome to the menu. Your choice?",
        choices: ['network']
      },
      {
        type: 'list',
        name: 'networkList',
        message: "Your choice from the network?",
        choices: ['local_ip', 'external_ip'],
        when: function( answers ) {
            // Only run if user set a name
            return (answers['theList']) === 'network';
          },
      },
    ]
    
      inquirer.prompt(questions).then(answers => {
      const mainSelect = (answers['theList']);
      const netWorkSelect = (answers['networkList']);

      if (netWorkSelect) {
        processCommands(createCommand(netWorkSelect));
      }
    
      })
  }

  module.exports = {
    generateMainMenu
};