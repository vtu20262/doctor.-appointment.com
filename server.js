const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Read the HTML file
  const filePath = path.join(__dirname, 'appointment.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle file read error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      // Serve the HTML file
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const port = 3000; // Specify the port you want to use
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
