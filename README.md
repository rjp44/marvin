# Marvin
A TADHack entry which allows SMS messages received from a Simwood number to be fed into Google Dialogflow intent recognition and any responses sent back to the sender of the SMS.

## How to run
Checkout this repo.

```
npm install
```
Set some environment variables for the Simwood account/number you want to use:

```
export SIMWOOD_ACCOUNT=XXXXXX
export SIMWOOD_USERNAME=YYYYYYYY
export SIMWOOD_PASSWORD=ZZZZZZZZZZZZ
export NUMBER=447NNNNNNNNNNN
```

To receive inbound SMS notifications you will need to find a way to allow inbound hook callbacks from Simwood when an SMS is received.
Either host on a real IP/DNS name/URL, or use a tunnel like ngrok for dev purposes:

```
ngrok http 8080
```

By default the hack listens on 8080 locally, you'll need to change the hard coded (sorry) listen statement in server.js to fix this.

Then set the inbound URL to be either your real host or the ngrok endpoint, e.g.:

```
export INBOUND_HOOK=http://123456.ngrok.io/
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

Send a text message to your Simwood number. If the hack works, you will get some output like:

```
You have 19.16000 left
POST /sms 200 15 - 158.638 ms
Detected intent
  Query: Who are you?
  Response: I'm a virtual being, not a real person.
message sent
```

## Credits

@MarquisdeGeek for the Simwood wrapper starting point.

## ToDo

Throw it away and start again!

It was a super quick hack built because I didn't see why I couldn't have some fun whilst also running the TADHack London venue.

I've murdered Steve's code and insanely cut a bunch of corners to get something that works.

Happy to write some code to do the job properly if anyone needs it (especially if payment is involved).
