export function homepage(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.end("hello world");
}

export function notFound(request, response) {
    response.setCode = 404
    response.setHeader("Content-Type", "text/html");
    response.end("404 Not Found");
}
