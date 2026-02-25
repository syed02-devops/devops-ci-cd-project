const http = require("http");

http.createServer((req, res) => {
  res.write("Kubernetes Rolling Update and Testing prod deployment 🚀🔥");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
