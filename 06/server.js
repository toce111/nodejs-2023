const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test server.");
  console.log(req.url);
  if (req.url == "/wiki/Main_Page") {
    res.end("go to wikipedia?");
  } else if (req.url == "/about") {
    res.end(
      "<html><head><title>About</title></head><body><h1>this is about page.</h1></body></html>"
    );
  } else {
    // res.end('Error 404. Webpage not found.');
    // res.writeHead(404, { "Content-Type": "text/plain" });
    // res.writeHead(301, { Location: "https://www.w3schools.com" });
    res.writeHead(404, "This page does not exist.");
    // res.writeHead(200, 'welcome.')
    res.writeHead(200, {Type: text/css});
    res.end("This page does not exist.");
    // res.write("Looked everywhere, but couldn't find that page at all!\n"); // <- content!
    res.end();
  }
});

console.log("Server is starting...");
server.listen(8080);
