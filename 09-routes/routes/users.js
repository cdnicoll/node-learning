const express = require("express");
const router = express.Router();


// first route to be hit will be the first one sent to the browser
router
    // using query params
    // http://localhost:3000/users?id=1
    .get("/", (req, res) => {
        var id = req.query.id;
        console.log(id);
        res.send("ok");
    })
    // using ? will make a param optional
    // http://localhost:3000/users/1/cody
    .get("/:id/:name?", (req, res) => {
        var id = req.params.id;
        console.log(id);
       res.send("users"); 
    })
    // npm needs body-parser installed to parse body (npm i -S body-parser)
    .post("/post", (req, res) => {
        console.log(req.body);
        res.send("ok");
    })

module.exports = router;