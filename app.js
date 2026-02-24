const http = require("http");

http.createServer((req, res) => {
  res.write("Shukran Allah for helping us learn. Alhamdulillah");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
