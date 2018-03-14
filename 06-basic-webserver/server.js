var handlers = require('./handlers.js');
var http = require("http");

var server = http.createServer(function(req, res) {
    var url = req.url;

    if (url === "/") {
        handlers.homepage(req, res);
    } else if (url === "/profile") {
        handlers.profile(req, res);    
    }
    else {
        handlers.notFound(req, res);
    }
});

// anything coming into the computer on port 3000 will fire the server method
server.listen(3000);