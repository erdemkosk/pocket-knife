const commanderService = require('./service/commander.service');

run = () => {
    commanderService.beforeStart();
    commanderService.doStart();
    commanderService.afterStart();
  }
  
  run();


