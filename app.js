const http = require("http");

http.createServer((req, res) => {
  res.write("DevOps CI/CD is Working. Alhamdulillah");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
trigger2
