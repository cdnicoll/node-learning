const express = require('express');
const favicon = require('serve-favicon');

const app = express();
// express.static needs a directory name that is absolute.
// __dirname always exists in nodeJS - diurectory name of the current file
const staticAsserts = __dirname + "/public";
const faviconPath = __dirname + "/public/favicon.ico"
app
    .set("views", __dirname + "/views")
    .set("view engine", "hjs")
    .use(express.static(staticAsserts)) // ex[ress static plugin, using as middleware
    .use(favicon(faviconPath))
    .get("/", (req, res) => {
        var viewData = {
            title: "Some other Title",
            tweets: [
                "tweet 1",
                "tweet 2",
                "tweet 3"
            ],
            showTweets: true,
            // reserved keyword to tell hjs about partials
            partials: {
                header: "header",
                tweets: "tweets"
            }
        }
        console.log(viewData);
        res.render("index", viewData);
    });

app.listen(3000);