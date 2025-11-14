// Hard-coded secret

const http = require("http");

const SECRET_API_KEY = "h4rdc0d3d_SUPER_SECRET";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello - Welcome to Node Secret Code.");
    return;
  }
  if (req.url === "/show-secret") {
    // Use the secret in a simple operation (return masked)
    const masked =
      SECRET_API_KEY.slice(0, 4) + "..." + SECRET_API_KEY.slice(-4);
    res.end(`Using hard-coded secret: ${masked}`);
    return;
  }
  res.statusCode = 404;
  res.end("Not found");
});

server.listen(3000, () =>
  console.log("App listening on http://localhost: 3000")
);
