process.on('unhandledRejection', r => console.log(r))

const dialogflow = require('dialogflow');
const uuid = require('uuid');

const projectId = 'small-talk-enosxs';


async function handleMessage(data, simwood) {

  const sessionId = uuid.v4();

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: data.message,
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      simwood.messagingSmsSend(data.destination, data.originator, result.fulfillmentText);
      console.log('message sent');
    } else {
      console.log(`  No intent matched.`);
    }

}
exports = module.exports = handleMessage;
