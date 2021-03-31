const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  }
  if (req.url === "/about") {
    res.end("here is our history");
  }
  res.end(`
  <div><p>Oops!
  the page your looking for is not available
  </p>
  <a href='/'>Home</a>
  </div>
  `);
});

server.listen(5000);
