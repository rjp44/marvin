require('dotenv').config();

const CREDENTIALS = {
	account:  process.env.SIMWOOD_ACCOUNT,
	username: process.env.SIMWOOD_USERNAME,
	password: process.env.SIMWOOD_PASSWORD
};

const simwood = require('simwood-api-node').init(CREDENTIALS);

async function doStuff(){
  await simwood.messagingSmsSend("442081254009", "447970939456", "hello Rob");
  return(true);
}

simwood.accountGetDetails()
.then((info) => console.log(`You have ${info.data.balance} left`))
.catch((err) => console.log(`ERROR: ${err}`));

doStuff()
.then(res => console.log("res", res))
.catch((err) => console.log(`ERROR: ${err}`));


console.log('done');
