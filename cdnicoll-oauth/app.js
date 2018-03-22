// https://scotch.io/tutorials/implement-oauth-into-your-express-koa-or-hapi-applications-using-grant
// https://apps.twitter.com/app/14954275/keys
// https://www.goodreads.com/api/keys

// - callback URL, or also known as the redirect URL. 
// This is where the user will be redirected back to our 
// server, after being granted access to our application.
//
// - oAuth1: we need to know our application's 
//          consumer_key and consumer_secret
//
// - oAuth2: we need to know our application's 
//           client_id and client_secret
//
// - In short, the minimum required information to 
//   configure OAuth properly is:
//      1. consumer_key and consumer_secret or client_id and client_secret
//      2. redirect or callback URL pointing back to our website
//
// - When authing we should hit: http://cdnicoll.com:3000/connect/[provider]
//   as the auth endpoint
const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const Grant = require('grant-express');
const grant = new Grant(require('./oauth_config.json'));

var app = express();

app.use(logger('dev'));

// REQUIRED:
app.use(session({secret: 'very secret'}));

// mount grant
app.use(grant);

app.get("/", function(req, res) {
  res.send("hello world");
})

app.get('/twitter_callback', function(req, res) {
  // req.query contains all of the data returned after the OAuth flow.
  console.log(req.query);
  res.end(JSON.stringify(req.query, null, 2))
});

// /connect/goodreads
app.get('/goodreads_callback', function(req, res) {
  console.log(req.query);
  res.end(JSON.stringify(req.query, null, 2))
});

app.listen(8000);
