const { program } = require('commander');
const networkService = require('./network.service');

const notifier = require('../util/notifier');
 
generateCommands = () => {
    program
    .option('-m, --menu', 'open cli menu')
    .option('-lip, --local_ip', 'get local ip')
    .option('-eip, --external_ip', 'get external ip')
  
    program.parse(process.argv);

    processCommands(program);

  }

  processCommands = (program) => {

    if (program.menu) {
        notifier.emit('inquirerEvent', {menu:true})
    }
    else if (program.local_ip) {
      networkService.getLocalIp();
    }
    else if (program.external_ip) {
       networkService.getExternalIp();
    }
  }

  module.exports = {
    generateCommands,
    processCommands
};