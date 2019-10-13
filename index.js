require('dotenv').config();
const handleMessage = require('./message');

const CREDENTIALS = {
	account:  process.env.SIMWOOD_ACCOUNT,
	username: process.env.SIMWOOD_USERNAME,
	password: process.env.SIMWOOD_PASSWORD,
  uri: process.env.INBOUND_HOOK.replace(/\/$/,'')
};

const { NUMBER} = process.env;

const simwood = require('simwood-api-node').init(CREDENTIALS);
simwood.server((app, id, data) => handleMessage(data, simwood));


async function doStuff(){
  simwood.numberConfigureSmsReceive(NUMBER);
  return(true);
}

simwood.accountGetDetails()
.then((info) => console.log(`You have ${info.data.balance} left`))
.catch((err) => console.log(`ERROR: ${err}`));

doStuff()
.then(res => console.log("res", res))
.catch((err) => console.log(`ERROR: ${err}`));


console.log('done');
