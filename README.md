# Tweet map
This node.js + angular program allows users to search for terms in peoples tweets and add them to a map. Multiple terms may be entered that match words in tweets. Spaces between search terms are interpreted as logical AND, while commas are interpreted as logical OR. For example, "Cats and dogs" will match tweets that contain the three words "cat", "and", and "dog" only, while "cat,and,dog" will match tweets that match any of those words individually.

The app makes use of twitter's streaming API, thus terms are matched as the tweets are submitted by twitter users only, while past tweets are ignored. Because this application makes use of the streaming API, it is necessary to fill in the relevant consumer_key, consumer_secret, access_token, access_token_secret, which can be obtained from twitter. The easiest way to obtain these is from [Twitter apps](https://apps.twitter.com/) and fill them in directly to the server.js file.

Unfortunately, this API only allows one stream to be accessed per IP address, which prevents this app from running as a live site, as the streaming service has been implemented to be accessed server side, with socket.io being used to push tweets to the client.

####To run the app:
1. Install node.js
2. `cd` to the tweet-map route directory which has been cloned from github
3. Run `npm install` to install relevant dependancies
4. Register an app with [Twitter](https:apps.twitter.com/) and obtain the client and user keys and access tokens.
5. Update server.js with your access tokens and keys.
6. Run `node server.js` and navigate in your browser to 127.0.0.1:3000

Implementation by Taylor Denouden, 2015
