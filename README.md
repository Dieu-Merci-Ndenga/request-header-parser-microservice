# Request Header Parser Microservice

A lightweight API that parses request headers and returns information about the client making the request.

## Live Demo

Try the deployed API here:

**[https://request-header-parser-microservice-fcni.onrender.com](https://request-header-parser-microservice-fcni.onrender.com)**

To use the API directly, visit:

**[https://request-header-parser-microservice-fcni.onrender.com/api/whoami](https://request-header-parser-microservice-fcni.onrender.com/api/whoami)**

## Features

- Detects the client's IP address
- Identifies the preferred language from the `Accept-Language` header
- Identifies the client's browser and operating system from the `User-Agent` header
- Provides a simple JSON API response
- Can be run locally or accessed through the deployed demo

## API Reference

### `GET /api/whoami`

Returns information extracted from the request headers.

#### Example request

```bash
curl https://request-header-parser-microservice-fcni.onrender.com/api/whoami
```

#### Example response

```json
{
  "ipaddress": "127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 ..."
}
```

> The returned values depend on the headers sent by the client making the request.

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm, which is included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dieu-Merci-Ndenga/request-header-parser-microservice.git
   ```

2. Move into the project directory:

   ```bash
   cd request-header-parser-microservice
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the application in your browser:

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
| `ipaddress` | The client's IP address, based on the incoming request |
| `language` | The client's preferred language from the `Accept-Language` header |
| `software` | Browser and operating-system information from the `User-Agent` header |

## Project Structure

```text
.
├── README.md
├── package.json
└── src/
    └── ...
```

The exact source layout may vary depending on the project implementation.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- HTTP request headers

## License

This project is available for educational and personal use.
