const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
    // Determine the file to serve
    let filePath = path.join(__dirname, 'index.html');

    // Read the HTML file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Handle file not found or other errors
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
            return;
        }

        // Serve the HTML content
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});