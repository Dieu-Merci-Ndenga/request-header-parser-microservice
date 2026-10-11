const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const indexPath = path.join(__dirname, 'public', 'index.html');

function getClientIp(request) {
  const forwardedFor = request.headers['x-forwarded-for'];
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.socket.remoteAddress;
}

function sendJson(response, statusCode, data) {
  const body = JSON.stringify(data);
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  response.end(body);
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/api/whoami') {
    return sendJson(response, 200, {
      ipaddress: getClientIp(request),
      language: request.headers['accept-language'],
      software: request.headers['user-agent']
    });
  }

  if (request.method === 'GET' && request.url === '/') {
    fs.readFile(indexPath, (error, content) => {
      if (error) {
        return sendJson(response, 500, { error: 'Unable to load the home page.' });
      }

      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(content);
    });
    return;
  }

  sendJson(response, 404, { error: 'Not found' });
});

server.listen(port, () => {
  console.log(`Request header parser listening on port ${port}`);
});