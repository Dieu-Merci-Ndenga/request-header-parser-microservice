# Request Header Parser Microservice

A lightweight API built with Node.js and Express that extracts key client information from incoming HTTP request headers and returns it as JSON.

## Overview

This service is designed to parse and expose the following values from the request:

- `ipaddress`: the client's IP address
- `language`: the preferred language from the `Accept-Language` header
- `software`: browser and operating-system details from the `User-Agent` header

It is ideal for learning how to work with HTTP headers and build a small backend API.

## Live Demo

The application is deployed and available here:

- Demo URL: https://request-header-parser-microservice-fcni.onrender.com
- API endpoint: https://request-header-parser-microservice-fcni.onrender.com/api/whoami

## Features

- Reads client metadata directly from incoming HTTP headers
- Returns structured JSON responses
- Works locally with a simple Node.js setup
- Easy to test via browser or `curl`

## API Endpoint

### GET /api/whoami

Returns the client metadata extracted from the request headers.

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

## Local Development

### Prerequisites

- Node.js (v18 or later is recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dieu-Merci-Ndenga/request-header-parser-microservice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd request-header-parser-microservice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open the application in a browser at:

   ```text
   http://localhost:3000
   ```

   Or call the API directly:

   ```text
   http://localhost:3000/api/whoami
   ```

## Response Fields

| Field | Description |
| --- | --- |
| `ipaddress` | The client's IP address as seen in the request |
| `language` | The client's language preference from the `Accept-Language` header |
| `software` | The client browser and operating system details from the `User-Agent` header |

## Project Structure

```text
.
├── README.md
├── package.json
├── server.js
└── src/
    └── ...
```

## Technology Stack

- Node.js
- Express
- JavaScript
- HTTP request handling

## License

This project is intended for educational and personal use.
