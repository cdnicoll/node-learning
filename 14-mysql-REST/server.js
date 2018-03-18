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

// Creating a Restful API
// GET    /users        get all users
// GET    /users/:id    get users by ID
// POST   /users        create user
// PUT    /users/:id    update user
// DELETE /users/:id    delete user
app
  .get("/users", (req, res, next) => {
    db("users").then((users) => {
      res.send(users);
    }, next);
  })
  .get("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .first()  // do so, so we only get a single entry back and an array is not returned
      .then((users) => {
        if (!users) {
          return res.send(400);
        }
        res.send(users)
      }, next)
  })
  .post("/users", (req, res, next) => {
    db("users")
    .insert(req.body) // possible to add some validation in here if you want
    .then((userIds) => {
      res.send(userIds);
    }, next);
  })
  .put("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .update(req.body)
      .then((result) => {
        if (result === 0) {
          return res.send(400);
        }
        res.send(200);
      }, next)
  })
  .delete("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .delete(req.body)
      .then((result) => {
        if (result === 0) {
          return res.send(400);
        }
        res.send(200);
      }, next)
  })

app.listen(3000);