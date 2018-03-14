exports.homepage = function(request, response) {
    response.setHeader("Content-type", "text/html");
    response.end("<h1>Hello World</h1>");
}

exports.profile = function(request, response) {
    var profile =  {
        name: "Cody",
        age: 33
    };
    response.setHeader("Content-type", "application/json");
    response.end(JSON.stringify(profile));
}

exports.notFound = function(request, response) {
    response.statusCode = 404;
    response.setHeader("Content-type", "text/html");
    response.end("<h1>404 Not Found</h1>");
}

