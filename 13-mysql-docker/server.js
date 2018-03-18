const express = require("express");
const bodyParser = require("body-parser");
const knex = require('knex');

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "test"
  }
});

const app = express();

app.use(bodyParser.json());

app.get("/tweets", (req, res) => {
  // using async promise to connect and get content from the db
  db("tweets").then((tweets) => {
    res.send(tweets);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get("/users", (req, res) => {
  db("users").then((users) => {
    res.send(users);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.listen(3000);