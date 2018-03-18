const express = require('express');
const twig = require('twig');
const app = express();

app.set('view engine', 'twig');
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    var title = "Some Title";
    var tweets = [
        "tweet 1",
        "tweet 2",
        "tweet 3"
    ];
    var showTweets = true;

    var viewData = {
        title: title,
        tweets: tweets,
        showTweets: showTweets
    }

    res.render("index.html.twig", viewData);
});

app.listen(3000);