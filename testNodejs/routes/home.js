/**
 * Created by kishanpatel on 11/19/16.
 */
var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

// GET home page.
router.get('/', function(req, res, next) {
    res.render('home', { title: 'whatup' });
});

// POST send Google Maps API Key
router.post('/home', function(req, res, next) {
    var key = "AIzaSyCM63S2j8da77lKI4FhcD7aJIPl6lA_nb0";
    res.send({key: key});
})

var twitterClient = new Twitter({
    consumer_key: 's0V6XvYaqFG0CbYaRNmManavg',
    consumer_secret: 'A9lDshmItkYy0MszJIxM5XuvOBQEBUTRPwEY1zjnreDMwjG12y',
    access_token_key: '1045563338-I16wvU8odbs7QqQ5xedXXNPcQRuzwYYyDULS0px',
    access_token_secret: 'M6HrTMcRdGSJUyN3tdXXKp9UPilE3XSIbyIQVdKlGhgxW'
});

var params = {query: 'boston'};
// twitterClient.get('geo/search', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });

twitterClient.get('statuses/user_timeline', {user_id: 'kishan8910'}, function(error, tweets, response) {
    console.log(tweets);
});

// var stream = twitterClient.stream('geo/search', {track: 'boston university'});
// stream.on('data', function(event) {
//     console.log(event && event.text);
// });


module.exports = router;
