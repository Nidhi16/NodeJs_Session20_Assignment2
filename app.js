var Twitter = require('twitter');
var randomstring = require("randomstring");
var assert = require('assert');

// Adding credentials of developer account
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// start testing
describe('Status Update', function() {

    it('should update status', function(done) {
        // generate random string
        var params = {status: randomstring.generate()};
        // tweeting randomly generated string
        client.post('statuses/update.json', params, function(error, tweet, response) {
            // testing tweet text came from response is same as randomly generated string
            assert.equal(tweet['text'], params['status'], 'Status text is the same');
            assert.ok(response, 'Got a valid response');
            assert.equal(error, null, 'No error occurred');

            if (error) {
                done(error);
            } else {
                done();
            }

        });

    });

});
