# marvin
A TADHack entry which allows SMS messages received from a Simwood number to be fed into Google Dialogflow intent recognition
and any responses sent back to the sender of the SMS.

## How to run
checkout this repo

npm install

Set some environment variables for the Simwood account/number you want to use:

```
export SIMWOOD_ACCOUNT=XXXXXX
export SIMWOOD_USERNAME=YYYYYYYY
export SIMWOOD_PASSWORD=ZZZZZZZZZZZZ
export NUMBER=447537149228
```

To receive inbound SMS notifications you will need to find a way to allow inbound hook callbacks from Simwood when an SMS is received.
Either host on a real IP/DNS name/URL, or use a tunnel like ngrok for dev purposes:

```
ngrok http 8080
```

By default the hack listens on 8080 locally, you'll need to change the hard coded (sorry) listen statement in server.js to fix this.

Then set the inbound URL to be either your real host or the ngrok endpoint, e.g.:

```
export INBOUND_HOOK=http://123456.ngrok.io
```

Lastly you need a Google credentials JSON file to access the Dialogflow API. The process for getting this file from your Dialogflow enabled project is [described here][316026c9].

  [316026c9]: https://cloud.google.com/docs/authentication/production "Google API docs"

Once you have this:

```
export GOOGLE_APPLICATION_CREDENTIALS=google_credentials.json
```

Start the server

```
node index.js
```
