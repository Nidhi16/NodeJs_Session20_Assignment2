# keeping secrets key secret

1) You can set the environment variables like
        1) On Mac/Linux - export TWITTER_CONSUMER_KEY='your consumer key'
         export all the others credentials as shown above
        2) On windows - set TWITTER_CONSUMER_KEY='your consumer key'
2) Run app as npm test

Or,

You can run app as follow

TWITTER_CONSUMER_KEY='your consumer key' TWITTER_CONSUMER_SECRET='your consumer secret key'
TWITTER_ACCESS_TOKEN_KEY='your access token' TWITTER_ACCESS_TOKEN_SECRET='your secret access token' npm test`