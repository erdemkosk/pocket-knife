const ip = require("ip");
const {promisify} = require('util');
const getIP = promisify(require('external-ip')()); 
const chalk = require('chalk');

getLocalIp = () => {
  console.log('Your local ip is ' + chalk.green(
      ip.address()
    ));
}

getExternalIp = () => {
  getIP().then((ip)=> {
    console.log('Your external ip is ' + chalk.green(
      ip
    ));
}).catch((error) => {
    console.error(error);
});
 
}

  module.exports = {
    getLocalIp,
    getExternalIp
};