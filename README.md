# Request Header Parser Microservice

A lightweight REST API built with Node.js and Express that identifies key client details from incoming HTTP request headers and returns them in a structured JSON response.

## Live Demo

Try the deployed application:

- **Application:** [request-header-parser-microservice-fcni.onrender.com](https://request-header-parser-microservice-fcni.onrender.com)
- **API endpoint:** [GET /api/whoami](https://request-header-parser-microservice-fcni.onrender.com/api/whoami)

## About the Project

The Request Header Parser Microservice extracts useful client information from standard HTTP headers. It was created as a practical example of working with request metadata, building a simple Express API, and returning consistent JSON responses.

For each request to `/api/whoami`, the service returns:

- The client's IP address
- The preferred language from the `Accept-Language` header
- Browser and operating-system information from the `User-Agent` header

## Features

- Extracts client metadata directly from HTTP request headers
- Provides a simple JSON API response
- Includes a publicly accessible live deployment
- Can be tested from a browser, command line, or API client
- Uses a minimal and easy-to-understand Node.js and Express setup

## API Reference

### `GET /api/whoami`

Returns information about the client making the request.

#### Example request

```bash
curl https://request-header-parser-microservice-fcni.onrender.com/api/whoami
```

#### Example response

```json
{
  "ipaddress": "127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
}
```

> The values returned by the API depend on the headers sent by the client and the hosting environment processing the request.

## Response Fields

| Field | Description |
| --- | --- |
| `ipaddress` | The client's IP address as identified by the server or hosting platform. |
| `language` | The client's preferred language, taken from the `Accept-Language` request header. |
| `software` | Browser and operating-system information taken from the `User-Agent` request header. |

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or later
- npm, included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dieu-Merci-Ndenga/request-header-parser-microservice.git
   ```

2. Change into the project directory:

   ```bash
   cd request-header-parser-microservice
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the local API endpoint:

   ```text
   http://localhost:3000/api/whoami
   ```

You can also test the endpoint with `curl`:

```bash
curl http://localhost:3000/api/whoami
```

## Project Structure

```text
request-header-parser-microservice/
├── README.md
├── package.json
├── server.js
└── public/
    └── ...
```

## Technology Stack

- **Node.js** — JavaScript runtime
- **Express** — Web application framework
- **JavaScript** — Application language
- **HTTP headers** — Source of client metadata

## Use Cases

This project is useful for learning and demonstrating:

- How HTTP request headers work
- How to access request metadata in Express
- How to create a simple REST endpoint
- How to return structured JSON from a backend service
- How to deploy a Node.js application for public access

## License

This project is intended for educational and personal use.
