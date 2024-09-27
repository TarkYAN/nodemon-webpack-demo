const fs = require('fs'); 

// Read the client.html and style.css files into memory on server start
const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const clientJs = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

// A simple helper function for serving up static files
const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 
    'Content-Type': contentType,
    'Content-Length': Buffer.byteLength(file, 'utf8'),
  });
  response.write(file);
  response.end();
};

// Serve the client.html page
const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

// Serve the style.css page
const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

const getClientJs = (request, response) => {
  serveFile(response, clientJs, 'application/javascript');
};

module.exports = {
  getIndex,
  getCSS,
  getClientJs,
};